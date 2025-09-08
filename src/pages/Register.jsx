import React, { useState } from 'react';
import { useAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import '../components/Form.css';

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        if (password !== confirmPassword) {
            setError('La contraseña y la confirmación no coinciden.');
            return;
        }

        try {
            await register(email, password);
            navigate('/profile'); 
        } catch (err) {
            setError(err.message || 'Ocurrió un error inesperado al registrar.');
        }
    };

    return (
        <div className="form-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                {error && (
                    <div className="alert mt-3 alert-danger">
                        {error}
                    </div>
                )}
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Registrar</button>
            </form>
        </div>
    );
};

export default Register;