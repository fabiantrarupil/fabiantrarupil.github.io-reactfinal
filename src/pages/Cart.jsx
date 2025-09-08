import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/UserContext';

function Cart() {
    
    const { cart, addToCart, removeFromCart, cartTotal } = useContext(CartContext);
    const { token } = useAuth();

    const [checkoutMessage, setCheckoutMessage] = useState(''); 
    
    const formattedTotal = cartTotal.toLocaleString('es-CL');

    const handleCheckout = async () => {
        if (cart.length === 0) {
            setCheckoutMessage('El carrito está vacío. ¡No hay nada que pagar!');
            return;
        }
        
        if (!token) {
            setCheckoutMessage('Debes iniciar sesión para finalizar la compra.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify({ cart: cart }), 
            });

            if (response.ok) {
                setCheckoutMessage('¡Compra realizada con éxito!');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al procesar la compra.');
            }
        } catch (error) {
            setCheckoutMessage(`Error: ${error.message}`);
        }
    };

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
                    onClick={handleCheckout}
                    disabled={!token || cart.length === 0}
                >
                    Pagar
                </button>
                {checkoutMessage && (
                    <div className={`alert mt-3 ${checkoutMessage.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                        {checkoutMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;