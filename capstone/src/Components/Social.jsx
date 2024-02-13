// Social.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Discord } from 'react-bootstrap-icons';



const Social = () => {
  return (
    <Container>
      <h1 className='text-light'>Social</h1>
      <Row>
        <Col>
          <Link to="/social/facebook" target="_blank" rel="noopener noreferrer">
            <Twitter size={50} />
          </Link>
        </Col>
        <Col>
          <Link to="/social/twitter" target="_blank" rel="noopener noreferrer">
            <Instagram size={50} />
          </Link>
        </Col>
        <Col>
          <Link to="/social/instagram" target="_blank" rel="noopener noreferrer">
            <Youtube size={50} />
          </Link>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ZoczmdsYCMaaMogq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        <Col>
          <Link to="/social/twitter" target="_blank" rel="noopener noreferrer">
            <Discord size={50} />
          </Link>
        </Col>
        {/* Aggiungi altri social con i relativi link */}
      </Row>
    </Container>
  );
};

export default Social;
