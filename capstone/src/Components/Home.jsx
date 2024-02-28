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

const ZoomBox = styled.div`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.8); /* Aumenta la scala al 110% quando si passa sopra con il mouse */
  }
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
          <p> <a className='text-black' href="/login">Accedi</a> per vedere i contenuti</p>
        </LoginPrompt>
      )}
  
      {isAuthenticated && (
        <Container>
          <Row className='justify-content-center'>
            <Col className="col1 col-md-4 col-lg-2 mx-3 p-4 border border-black b mt-5 text-center update rounded" md={{ span: 2, offset: 2 }}><ZoomBox><p className='hover' onClick={() => navigate("/Update")}>Update</p></ZoomBox></Col>
            <Col className="col1 col-md-4 col-lg-2 mx-3 p-4 border border-black b mt-5 text-center storia rounded" md="2"><ZoomBox><p className='hover' onClick={()=> navigate("/Storia")}>Storia</p></ZoomBox></Col>
            <Col className="col1 col-md-4 col-lg-2 mx-3 p-4 border border-black b mt-5 text-center feedback rounded" md="2"><ZoomBox><p className='hover' onClick={() => navigate("/feedback")}>Feedback</p></ZoomBox></Col>
            <Col className="col1 col-md-4 col-lg-2 mx-3 p-4 border border-black b mt-5 text-center social rounded" md="2"><ZoomBox><p className='hover' onClick={()=> navigate("/Social")}>Social</p></ZoomBox></Col>
          </Row>
          <Row className='text-light justify-content-center mx-auto mt-5'>
          <Col className='col-12 col-md-9 bg-success  p-3 rounded'>
          <h4 >Quanta possibilità hanno 2 fratelli  di creare il videogioco dei loro sogni partendo da Zero competenze e Zero budget? Con grande piacere vi presentiamo The Last Worlds, dopo 4 anni di studio, lavoro e dedizione vogliamo lasciare
           un' impronta sul settore videoludico. I nostri progetti INDIE hanno come base l' originalità,  la ricerca della creatività e soprattutto la passione che trasforma i sogni in realtà. Uno dei nostri obiettivi è quello di rivoluzionare il
           mondo videoludico abbattendo le barriere tra player e sviluppatori. Vogliamo dare la possibilità a tutti di esprimersi e di lasciare la propria idea e cercare di svilupparla per quanto possibile. In un ambiente dove consumatore e produttore 
           sono sempre più distanti, noi cercheremo con ambizione di invertire la tendenza, la stessa ambizione che ci ha portato alla creazione di un gioco rpg open world con combattimenti in tempo reale partendo da zero. I nostri goals saranno sviluppare progetti innovativi e di creare una community per renderla partecipe il più possibile. Supportaci anche tu e lascia il TUO segno.
          </h4>
          </Col>
          </Row>
        </Container>
      )}
    </StyledHeader>
  );
  
};

export default Home;

