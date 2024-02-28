// Social.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Discord, Facebook, Tiktok } from 'react-bootstrap-icons';



const Social = () => {
  return (
    <Container className='text-center' >
      <h1 className='text-light'>I nostri Social</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ZoczmdsYCMaaMogq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Row className='mt-5 pt-5'>
        <Col className='col-2'>
          <a target="_blank" href='https://twitter.com/?lang=it'>
          
            <Twitter size={50} />
          </a>
        </Col>
        <Col className='col-2'>
          <a target="_blank" href='https://twitter.com/?lang=it'>
            <Instagram size={50} />
          </a>
        </Col>
        <Col className='col-2'>
          <a target="_blank" href='https://twitter.com/?lang=it'> 
            <Youtube size={50} />
          </a>
        </Col>
        <Col className='col-2'>
          <a target="_blank" href='https://twitter.com/?lang=it'>
            <Discord size={50} />
          </a>
        </Col>
        <Col className='col-2'>
          <a target="_blank" href='https://twitter.com/?lang=it'>
            <Facebook size={50} />
          </a>
        </Col>
        <Col className='col-2'>
          <a target="_blank" href='https://twitter.com/?lang=it'>
            <Tiktok size={50} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;