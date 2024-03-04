import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.div`
  background-color: #ffffffec;
  border: 2px solid #03999ec6;
  border-radius: 40px;
  margin: 1em;
  padding: 2em;
  min-width: 350px;
  width: 20%;
  margin: 0 auto;
  opacity:0.8;

  .save-button {
    background-color: #03989e;
    border-color: #03989e;
    margin-top: 1em;
  }
  h3 {
    text-align: center;
    margin: 1em 0;
    color: #02657b;
  }
`;
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function loginUtente() {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setPassword("");
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        const userId = data.id; 
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userId", userId);
        navigate("/");
      })
      
      .catch((err) => console.log("ERRORE!", err));
  }
  return (
    <StyledLogin>
      <form id="login-form">
        <h3>Accedi</h3>
        
        <Form.Control
          required
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Form.Control>
        <InputGroup className="d-flex flex-column pt-4 w-100">
        </InputGroup>
        <Form.Control
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Form.Control>
        <div className="text-center mt-3">
          <Button className="save-button rounded-5 px-3" onClick={loginUtente}>
            Login
          </Button>
        </div>
      </form>
    </StyledLogin>
  );
}