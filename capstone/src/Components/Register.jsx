import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { EmojiAngryFill } from "react-bootstrap-icons";
import styled from "styled-components";

const StyledRegister = styled.div`
    background-color: #ffffffec;
    border: 2px solid #03999ec6;
    border-radius: 40px;
    margin: 1em;
    padding: 2em;
    min-width: 350px;
    width: 30%;
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
  .avatar-option.selected {
  border: 2px solid #03989e;
  
}
`;

export default function Register() {
  const defaultAvatars = [
    "https://wallpapers.com/images/hd/god-of-war-kratos-red-tattoos-is5vckclyv5nbivb.jpg",
    "https://images.everyeye.it/img-notizie/god-of-war-tre-curiositA-atreus-non-conoscete-v6-638848-1200x1200.webp",
    "https://www.backdoorbs.com/cdn/shop/files/84015.jpg?v=1687709871",
    "https://www.sportitalia.it/wp-content/uploads/2024/01/Kvicha-Kvaratskhelia-20240115-sportitalia.jpg",
    "https://upload.wikimedia.org/wikipedia/it/thumb/9/9e/Benvenuti_a_Magix%21_%28Bloom%29.png/1200px-Benvenuti_a_Magix%21_%28Bloom%29.png",
  ];
  const [selectedAvatar, setSelectedAvatar] = useState("");
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [role, setRole] = useState("USER");

  function registraUtente() {
    const selectedAvatarUrl = defaultAvatars[selectedAvatar];
  
    if (selectedAvatar >= 0 && selectedAvatar < defaultAvatars.length && selectedAvatarUrl) {
      console.log("Selected Avatar URL:", selectedAvatarUrl);
  
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
          avatar: selectedAvatarUrl,
        }),
      })
        .then((response) => {
          if (response.ok) {
          console.log("Selected Avatar URL:", selectedAvatarUrl);
          setUsername("");
          setEmail("");
          setPassword("");
          setNome("");
          setCognome("");
          setRole("USER");
          setSelectedAvatar(""); // Resetta anche l'avatar selezionato
          window.alert("Registrazione Effettuata con successo!");
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  } else {
    console.log("Avatar predefinito non valido");
  }
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
          <InputGroup className="d-flex flex-column pt-4 w-100">
  <Form.Label className="text-center fs-5">Seleziona un avatar:</Form.Label>
  <div className="avatar-options">
  <Row className="justify-content-center">
    {defaultAvatars.map((avatar, index) => (
      <Col
        key={index}
        className={`avatar-option ${selectedAvatar === index ? 'selected' : ''}`}
        onClick={() => setSelectedAvatar(index)}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundSize: 'cover',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '0 10px',
          cursor: 'pointer',
          backgroundPosition: 'center',
        }}
      ></Col>
    ))}
  </Row>
  </div>
</InputGroup>

        </form>
      </div>
    </StyledRegister>
  );
}