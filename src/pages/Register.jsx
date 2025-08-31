import React, { useState } from 'react';
import '../components/Form.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios.');
      setMessageType('error');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      setMessageType('error');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('La contraseña y la confirmación no coinciden.');
      setMessageType('error');
      return; 
    }

    
    setMessage('¡Registro exitoso!');
    setMessageType('success');
    
    console.log('Registro exitoso:', { email, password });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar</button>
      </form>
      {message && (
        <div className={`alert mt-3 ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default RegisterPage;