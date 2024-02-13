import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Stack } from 'react-bootstrap';

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
      setVotoFeedback(0); // Resetta il campo input del voto
    } else {
      console.error('Errore durante l\'aggiunta del feedback.');
    }
  } catch (error) {
    console.error('Errore durante la richiesta di aggiunta del feedback:', error);
  }
};


  return (
    <div>
      <h2>Feedback Page</h2>
      
      <Form>
        <Form.Group controlId="formFeedback">
          <Form.Label>Aggiungi Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Inserisci il tuo feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formVoto">
          <Form.Label>Voto</Form.Label>
          <Form.Control
            type="number"
            placeholder="Inserisci il voto"
            value={votoFeedback}
            onChange={(e) => setVotoFeedback(parseInt(e.target.value))}
            required
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddFeedback}>
          Aggiungi Feedback
        </Button>
      </Form>

      {Array.isArray(feedbacks) && feedbacks.map((feedback) => (
        <Stack className='bg-secondary' key={feedback.id} gap={3}>
   
            <div className='text-white'>
            <p>Contenuto: {feedback.feedback}</p>
            <p>Voto: {feedback.votoFeedback}</p>
            <p>Utente: {feedback.utente.username}</p>
            </div>
            <hr/>
            </Stack>
        
))}

    </div>
  );
};

export default Feedback;
