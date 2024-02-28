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
      <div className='100-wh'>
      <Row>
      <Col  className='col-3 d-none d-md-flex justify-content-center  align-items-center'>
      <img className='animate__animated animate__slideInLeft' src={foto1} width={300 + "px"} />
      </Col>
      
      
      
        
          <Col className=' col-12 col-md-6'>
          <div className='text-center'>
              <img style={{border: "3px solid black"}} width={400} className='rounded text-center animate__animated animate__flipInX' src={head} alt="foto Personaggio" />
              </div>
        
          
            <p className='animate__animated animate__fadeInRight text-white bg-secondary p-2 m-3 rounded'>
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.

                Perchè lo utilizziamo?
            </p>

            <div className='text-center'>
              <img style={{border: "3px solid black"}} width={400} className='rounded text-center animate__animated animate__flipInX' src={head} alt="foto Personaggio" />
              </div>
            <p className='animate__animated animate__fadeInLeft text-white bg-secondary p-2 m-3 rounded'>
                È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).


                Da dove viene?
                Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.
            </p>
            </Col>

            <Col className='col-3 d-none d-md-flex justify-content-center align-items-center '>
      <img className='animate__animated animate__slideInRight' src={foto2} width={300 + "px"}/>
      </Col>
        
            </Row>
      </div>
    
  );
};

export default Storia;

