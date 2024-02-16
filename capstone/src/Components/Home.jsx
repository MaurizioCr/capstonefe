import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
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


const Home = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken");

  function logout() {
    localStorage.removeItem("authToken");
    // Aggiungo un reindirizzamento al login dopo il logout
    navigate("/");
  }

  return (
    <StyledHeader>
  
      {!isAuthenticated && (
        <LoginPrompt>
          <p>Accedi per vedere i contenuti</p>
        </LoginPrompt>
      )}
  
      {isAuthenticated && (
        <Container>
          <Row className='justify-content-center'>
            <Col className="col1 mx-3 p-4 border border-black b mt-5 text-center" md={{ span: 2, offset: 2 }}><p className='hover' onClick={() => navigate("/Update")}>Update</p></Col>
            <Col className="col1 mx-3 p-4 border border-black b mt-5 text-center" md="2"><p className='hover' onClick={()=> navigate("/Storia")}>Storia</p></Col>
            <Col className="col1 mx-3 p-4 border border-black b mt-5 text-center" md="2"><p className='hover' onClick={() => navigate("/feedback")}>Feedback</p></Col>
            <Col className="col1 mx-3 p-4 border border-black b mt-5 text-center" md="2"><p className='hover' onClick={()=> navigate("/Social")}>Social</p></Col>
          </Row>
        </Container>
      )}
    </StyledHeader>
  );
  
};

export default Home;

