import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


const StyledHeader = styled.div`
.grigio{
  background: rgba(128, 128, 128, 0.4) url(./Assets/foto1.jpg);
  }
  .contentend {
    justify-content: end !important;
  }
  a {
    color: white;
    font-weight: bold;
  }

  .hover{
    cursor:pointer;
  }
  
`;

const LoginPrompt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8); 
  margin-top: 20px; 
  
`;


const Prova = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken");

  function logout() {
    localStorage.removeItem("authToken");
    // Aggiungi un reindirizzamento al login dopo il logout
    navigate("/");
  }

  return (
    <StyledHeader>
      <Navbar className="justify-content-end grigio">
        <Container className='text-right'>
          <Link className={location.pathname === '/login' ? 'nav-link active' : 'nav-link'}
                    to="/"><h2 >LastWorld</h2></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end contentend">
            <Nav className="ml-auto">
              {isAuthenticated ? (
                <>
                  <Link className='nav-link' to="/profile">Vai al tuo profilo</Link>
                  <Link onClick={logout} className="nav-link" to="/">
                    Logout
                  </Link>
                  {children}
                </>
              ) : (
                <>
                  <Link
                    className={location.pathname === '/login' ? 'nav-link active' : 'nav-link'}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`nav-link${location.pathname === '/register' ? ' active' : ''}`}
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

export default Prova;
