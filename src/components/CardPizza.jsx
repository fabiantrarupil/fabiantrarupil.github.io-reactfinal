import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ pizza, addToCart }) => {
    const navigate = useNavigate();

    const { id, nombre, precio, ingredientes, imagen } = pizza;

    const formattedPrice = precio ? precio.toLocaleString('es-CL') : 'N/A';

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={imagen} className="card-img-top" alt={nombre} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">
                        <strong>Ingredientes:</strong>
                    </p>
                    <ul>
                        {ingredientes && Array.isArray(ingredientes) ? (
                            ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))
                        ) : (
                            <li>No hay ingredientes disponibles</li>
                        )}
                    </ul>
                    <h6 className="mt-auto">Precio: ${formattedPrice}</h6>
                    <div className="d-flex justify-content-between mt-3">
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => navigate(`/pizza/${id}`)}
                        >
                            Ver Más
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => addToCart(pizza)}
                        >
                            Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;