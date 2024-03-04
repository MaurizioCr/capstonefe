import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { EmojiAngryFill } from "react-bootstrap-icons";
import styled from "styled-components";

const StyledRegister = styled.div`
    background-color: #ffffffec;
    border: 2px solid #03999ec6;
    border-radius: 40px;
    margin: 1em;
    padding: 2em;
    min-width: 350px;
    width: 20%;
    margin: 0 auto;
    opacity: 0.8;
  h3 {
    text-align: center;
    margin: 1em 0;
    color: #02657b;
  }
  .save-button {
    margin: 1em 0;
    background-color: #03989e;
    border-color: #03989e;
  }
`;

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [role, setRole] = useState("USER");

  function registraUtente() {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        nome: nome,
        cognome: cognome,
        role: role,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setUsername("");
          setEmail("");
          setPassword("");
          setNome("");
          setCognome("");
          setRole("USER");
          window.alert("Registrazione Effettuata con successo!");
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  }

  return (
    <StyledRegister className="pb-4">
      <div className="inner">
        <h3>Registrati</h3>
        <form id="register-form">
          <InputGroup className="d-flex flex-column w-100">
            
          </InputGroup>
          <Form.Control
            placeholder="Username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column pt-4 w-100">
            
          </InputGroup>
          <Form.Control
          placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column pt-3 w-100">
            <Form.Label className="text-center fs-5"></Form.Label>
          </InputGroup>
          <Form.Control
            placeholder="Password"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column pt-4 w-100">
            
          </InputGroup>
          <Form.Control
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column pt-4 w-100">

          </InputGroup>
          <Form.Control
            placeholder="Cognome"
            required
            value={cognome}
            onChange={(e) => {
              setCognome(e.target.value);
            }}
          ></Form.Control>
          
          
          <div className="text-center mt-3">
            <Button
              className="save-button rounded-5 px-3"
              onClick={registraUtente}
            >
              Registrati
            </Button>
          </div>
        </form>
      </div>
    </StyledRegister>
  );
}