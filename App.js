import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bodega Pijao</h1>
      </header>
      <main>
        <Product addToCart={addToCart} />
        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      </main>
      <footer>
        <p>Accede a nuestras redes sociales haciendo clic:</p>
        <a
          href="https://m.facebook.com/people/Bodega-Pijao/100087403208667/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Bodega Pijao
        </a>
        <p> 
        <a
          href="https://instagram.com/bodegapijao?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Bodega Pijao
        </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
