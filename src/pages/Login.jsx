import React, { useState } from 'react';
import { useAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import '../components/Form.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); 
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        try {
            await login(email, password);
            navigate('/profile'); 
        } catch (err) {
            setError(err.message || 'Ocurrió un error inesperado.');
        }
    };

    return (
        <div className="form-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Iniciar Sesión</button>
            </form>
            {error && (
                <div className={`alert mt-3 alert-danger`}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default LoginPage;