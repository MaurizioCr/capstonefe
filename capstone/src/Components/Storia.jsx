// Storia.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import head from "./Assets/Scena-5_Arrabb.png";
import { Col, Container, Row } from 'react-bootstrap';
import 'animate.css';  // Import animate.css
import foto1 from "./Assets/zyro-image_4.png";
import foto2 from "./Assets/LUPIO_NOSFONDO.png";
import sfondo from "./Assets/Scena-7.png";
import styled from 'styled-components';

const Sfondo = styled.div`
  background-image: url(${sfondo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Storia = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 400;
      setShowText(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToText = () => {
    scroller.scrollTo('text-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Sfondo>
      <div className='sfondostoria'>
      <Row>
      <Col  className='col-3 d-none d-md-flex justify-content-center  align-items-center'>
      <img className='animate__animated animate__slideInLeft' src={foto1} width={300 + "px"} />
      </Col>
          <Col className=' col-12 col-md-6'>
          <div className='text-center'>
              <img style={{border: "3px solid black"}} width={350} className='rounded text-center animate__animated animate__flipInX' src={head} alt="foto Personaggio" />
              </div>
        
          
            <p className='animate__animated animate__fadeInRight text-white rosso p-2 m-3 rounded'>
            Preparati ad abbandonare la realtà, immergiti nell' avventura. Scopri il nostro primo progetto: The Last Worlds,
             una storia piena di sorprese e misteri. In questo strano pianeta troverai luoghi fantastici ancora inesplorati, 
             popolati da bizzarre creature che ti aspettano, alcune ti accoglieranno e aiuteranno nelle tue imprese, altre saranno 
             ostili e cercheranno vendetta. Scopri dove sono finiti tutti gli esseri umani, La tua presenza non è casuale: solo tu puoi 
             ristabilire l'equilibrio di una terra divisa tra bene e male. I tuoi poteri e le tue abilita ti permetteranno di vivere un esperienza surreale, 
             l'unico in grado di risollevare un pianeta in rovina sei tu. Pronto a cambiare il tuo destino e le sorti di nuovo mondo per sempre?
            </p>

            <div className='text-center'>
              <img style={{border: "3px solid black"}} width={350} className='animate__animated animate__bounceInUp rounded text-center' src={sfondo} alt="foto Personaggio" />
              </div>
            
            </Col>

            <Col className='col-3 d-none d-md-flex justify-content-center align-items-center '>
      <img className='animate__animated animate__slideInRight' src={foto2} width={300 + "px"}/>
      </Col>
        
            </Row>
      </div>
      </Sfondo>
  );
};

export default Storia;

