import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hero-section text-white d-flex align-items-center justify-content-center text-center">
      <div className="header-content-box">
        <h1 className="display-4">¡Pizzería Mamma Mia!</h1>
        <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;