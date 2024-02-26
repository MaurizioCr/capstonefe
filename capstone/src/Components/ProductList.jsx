import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    // Esempio di chiamata fetch per ottenere i dati dei prodotti dal backend
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
  }, []); // L'array vuoto assicura che questa chiamata venga eseguita solo al mount del componente

  

  

  return (
    <div className='bg-black text-white'>
      <div className='m-5 pt-3'>
        {Array.isArray(products) && products.map(product => (
          <div key={product.id}>
        
            {product.immagine && <img className='gioco' src="https://www.codiciprodotto.it/wp-content/uploads/2022/02/god-of-war-pc-game-steam-cover-1.jpg" width={150+ "em"} height={200 + "em"} alt="Product" />}
          
            <p className='pt-2'>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <Button>Acquista</Button>
          </div>
      ))}
      </div>
    </div>
  );}
  

export default ProductList;
