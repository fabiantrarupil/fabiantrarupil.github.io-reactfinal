import React, { useContext } from 'react'; 
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../pizzas'; 
import { CartContext } from '../context/CartContext'; 

const Home = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <CardPizza
                            key={pizza.id}
                            pizza={pizza} 
                            addToCart={addToCart} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;