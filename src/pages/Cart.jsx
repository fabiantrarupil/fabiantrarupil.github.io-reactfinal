import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 

function Cart() {
    
    const { cart, addToCart, removeFromCart, cartTotal } = useContext(CartContext);
    
    const { token } = useContext(UserContext);

    const formattedTotal = cartTotal.toLocaleString('es-CL');

    return (
        <div className="container my-4">
            <h2 className="mb-4">Detalles del pedido:</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío. ¡Agrega algunas pizzas!</p>
            ) : (
                <ul className="list-group mb-4">
                    {cart.map((pizza) => (
                        <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={pizza.imagen} alt={pizza.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px', borderRadius: '5px' }} />
                                <h5>{pizza.nombre}</h5>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="me-3">${(parseFloat(pizza.precio) * pizza.quantity).toLocaleString('es-CL')}</span>
                                <button
                                    className="btn btn-outline-danger btn-sm me-2"
                                    onClick={() => removeFromCart(pizza.id)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{pizza.quantity}</span>
                                <button
                                    className="btn btn-outline-success btn-sm"
                                    onClick={() => addToCart(pizza)}
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="d-flex justify-content-end align-items-center mb-4">
                <h3>Total: ${formattedTotal}</h3>
            </div>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => alert('Función de pago aún no implementada')}
                    disabled={!token}
                >
                    Pagar
                </button>
            </div>
        </div>
    );
}

export default Cart;