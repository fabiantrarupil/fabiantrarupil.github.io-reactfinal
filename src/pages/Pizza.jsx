import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 

const Pizza = () => {
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext); 
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una petición a la API
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener los datos de la pizza:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, [id]); 

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!pizza) {
    return <div>Pizza no encontrada.</div>;
  }

  const formattedPrice = parseFloat(pizza.precio).toLocaleString('es-CL');

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.imagen} alt={pizza.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.nombre}</h2>
          <p>Precio: ${formattedPrice}</p>
          <p>Ingredientes: {pizza.ingredientes.join(', ')}</p>
          <button 
            className="btn btn-primary"
            onClick={() => addToCart(pizza)} 
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;