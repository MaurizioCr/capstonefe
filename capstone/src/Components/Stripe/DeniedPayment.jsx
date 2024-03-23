import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DeniedPage = () => {
  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Access Denied</h1>
          <p>You do not have permission to access this page.</p>
          {/* Puoi aggiungere qui ulteriori informazioni o link */}
        </Col>
      </Row>
    </Container>
  );
};

export default DeniedPage;
