import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Stack, Col, Row, Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

const FeedbackWrapper = styled.div`
 .gradient5 {
  background-image: linear-gradient(140deg, #9494f1, #0105da)
}
.cursore{
  cursor: default;
}
.background{
background: rgba(206 34 87 / 90%) !important;
}
`;

const tadaAnimation = keyframes`
  0% { transform: scale(1); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50% { transform: scale(1.1) rotate(3deg); }
  40% { transform: scale(1.1) rotate(-3deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const StyledCard = styled.div`
  color: white;
  height: 100%;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1) rotate(-3deg);
    animation: ${tadaAnimation} 1s;
    animation-fill-mode: forwards;
  }
`;

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [votoFeedback, setVotoFeedback] = useState(6);

    
  useEffect(() => {
    // Fetch per ottenere tutti i feedbacks
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/feedbacks`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFeedbacks(data);
        } else {
          console.error('Errore durante il recupero dei feedbacks.');
        }
      } catch (error) {
        console.error('Errore durante la richiesta dei feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []); //Solo avvio

  const handleAddFeedback = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/feedbacks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          feedback: feedback,
          votoFeedback: votoFeedback,
        }),
      });

      if (response.ok) {
        const updatedFeedbacks = await response.json();
        setFeedbacks(updatedFeedbacks);
        setFeedback(""); // Resetta il campo input del feedback
        setVotoFeedback(8); // Resetta il campo input del voto
      } else {
        console.error('Errore durante l\'aggiunta del feedback.');
      }
    } catch (error) {
      console.error('Errore durante la richiesta di aggiunta del feedback:', error);
    }
  };

  


return (
  <FeedbackWrapper>
    <div className="gradient5 pb-3">
      <Container className=''>
        <h2 className='text-white text-center pt-3 cursore'>Feedback </h2>
      
        <Form>
          <Form.Group controlId="formFeedback">
            <Form.Label className='text-white'>Aggiungi Feedback</Form.Label>
            <Form.Control
              className=''
              as="textarea"
              rows={3}
              placeholder="Inserisci il tuo feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='bb text-white' controlId="formVoto">
            <Form.Label>Voto</Form.Label>
            <Form.Control
              type="number"
              max={10}
              placeholder="Inserisci il voto"
              value={votoFeedback}
              onChange={(e) => setVotoFeedback(parseInt(e.target.value))}
              required
            />
          </Form.Group>

          <Button variant="primary mt-3" onClick={handleAddFeedback}>
            Aggiungi Feedback
          </Button>
        </Form>
      </Container>

      <Container className='mt-3 mb-5'>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {Array.isArray(feedbacks) && feedbacks.map((feedback) => (
            <Col className='' key={feedback.id}>
              <StyledCard className=' rounded'>
                <Card className="background text-white h-100">
                  <Card.Body>
                    {feedback.utente.username ? (
                      <Card.Title>{feedback.utente.username}</Card.Title>
                      ) : (
                        <Card.Title>deletedUser</Card.Title>
                      )}
                      <Card.Text style={{ overflow: 'hidden' }}>{feedback.feedback}</Card.Text>
                      <Card.Text>Voto: {feedback.votoFeedback}</Card.Text>
                  </Card.Body>
                </Card>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Container>


    </div>
  </FeedbackWrapper>
);
};

export default Feedback;

