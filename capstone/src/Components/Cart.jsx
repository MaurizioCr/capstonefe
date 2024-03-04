import React, { useState, useEffect } from 'react';

const App = () => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/carts/${localStorage.getItem('userId')}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          });

        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }

        const data = await response.json();
        setCart(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCart();
  }, []);

  return (
    <div>
      {cart ? (
        <div>
          
          <p>ID Carrello: {cart.id}</p>
          
        </div>
      ) : (
        <p>Caricamento in corso...</p>
      )}

      {error && <p>Errore: {error}</p>}
    </div>
  );
};

export default App;
