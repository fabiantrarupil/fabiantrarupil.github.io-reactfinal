import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const pizzaIndex = cart.findIndex(item => item.id === pizza.id);

        if (pizzaIndex >= 0) {
            const newCart = [...cart];
            newCart[pizzaIndex].quantity += 1;
            setCart(newCart);
        } else {
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        const pizzaIndex = cart.findIndex(item => item.id === id);
        
        if (pizzaIndex >= 0) {
            const newCart = [...cart];
            if (newCart[pizzaIndex].quantity > 1) {
                newCart[pizzaIndex].quantity -= 1;
                setCart(newCart);
            } else {
                const filteredCart = cart.filter(item => item.id !== id);
                setCart(filteredCart);
            }
        }
    };
    
    const cartTotal = cart.reduce((total, item) => {
        const precioNumerico = parseFloat(item.precio);
        
        if (isNaN(precioNumerico)) {
            console.error('El precio de un ítem no es un número válido:', item.precio);
            return total;
        }

        return total + (precioNumerico * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};