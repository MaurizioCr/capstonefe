// Social.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Discord, Facebook, Tiktok } from 'react-bootstrap-icons';



// ... (importazioni rimaste invariate)

const Social = () => {
  return (
    <Container className='text-center blu' >
      <Row>
        <Col>
          <h1 className='blu mb-5'>Seguici anche sui nostri Social</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ZoczmdsYCMaaMogq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
        
        <Col>
          <Row className='absolute rounded bg-success w-50 py-2'>
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Twitter size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Instagram size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'> 
              <Youtube size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Discord size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Facebook size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Tiktok size={50} />
            </a>
          
          </Row>
          </Col>
      
    </Container>
  );
};

export default Social;
