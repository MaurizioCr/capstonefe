import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/products`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Errore durante la richiesta: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati dei prodotti', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className='text-center text-white'>
    <h1 className='blu'>Grazie per la fiducia!</h1>
        {Array.isArray(products) &&
          products.map(product => (
            <Row className='justify-content-center'>
            <Col className=' rounded col-10 col-md-3'>
            <Card  className="border border-black" key={product.id}>
              {product.immagine && (
                <img
                  src="https://www.codiciprodotto.it/wp-content/uploads/2022/02/god-of-war-pc-game-steam-cover-1.jpg"
                  alt="Product"
                />
              )}
              <Card.Body className=" text-light bg-black">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text style={{ overflow: 'hidden' }}>Description: {product.description}</Card.Text>
                <Card.Text>Price: {product.price}€</Card.Text>
                <Button>Acquista</Button>
              </Card.Body>
            </Card>
            </Col>
            </Row>
            
          ))}
      
    </Container>
  );
};

export default ProductList;
