import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/UserContext';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const { cartTotal } = useContext(CartContext);
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logout();
        navigate('/'); 
    };

    const formattedTotal = cartTotal.toLocaleString('es-CL');

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="btn btn-dark" to="/">Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {isAuthenticated ? ( 
                            <>
                                <li className="nav-item">
                                    <Link className="btn btn-dark" to="/profile">
                                        {user}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-dark" 
                                        onClick={handleLogout} 
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="btn btn-dark" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-dark" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link className="btn btn-dark" to="/cart">
                                Total: ${formattedTotal}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;