// Social.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Discord, Facebook, Tiktok } from 'react-bootstrap-icons';



// ... (importazioni rimaste invariate)

const Social = () => {
  return (
    <Container className='text-center blu'>
      <Row>
        <Col>
          <h1 className='blu mb-5'>Seguici anche sui nostri Social</h1>
          <div>
            <iframe
              className='video-frame'
              width="560" height="315"
              src="https://www.youtube.com/embed/9q5YV-6ZXYQ?si=NITIu7J5pDGOSn3H"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <Col className=''>
        <Row className='absolute rounded bg-success w-50 py-2'>
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Twitter size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://www.instagram.com/lupiostudios?igsh=bGt6dHhsNnkxb3g3'>
              <Instagram size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://www.youtube.com/@LupioStudios'> 
              <Youtube size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://twitter.com/?lang=it'>
              <Discord size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://www.facebook.com/profile.php?id=61556916147532&mibextid=ZbWKwL'>
              <Facebook size={50} />
            </a>
          
          
            <a className='blu' target="_blank" href='https://vm.tiktok.com/ZGeDudGPJ/'>
              <Tiktok size={50} />
            </a>
          
          </Row>
          </Col>
      
    </Container>
  );
};

export default Social;
