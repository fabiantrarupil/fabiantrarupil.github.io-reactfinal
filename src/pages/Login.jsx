import React, { useState, useContext } from 'react'; // 1. Importa 'useContext'
import { useNavigate } from 'react-router-dom'; // 2. Importa 'useNavigate'
import { UserContext } from '../context/UserContext'; // 3. Importa el 'UserContext'
import '../components/Form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  
  const { login } = useContext(UserContext); // 4. Obtiene la función de login del contexto
  const navigate = useNavigate(); // 5. Inicializa el hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
      setMessageType('error');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      setMessageType('error');
      return;
    }

    if (email === 'test@example.com' && password === 'password123') { 
      setMessage('¡Inicio de sesión exitoso!');
      setMessageType('success');
      console.log('Inicio de sesión exitoso:', { email });
      login(); // Llama a la función de login para actualizar el estado global
      navigate('/profile'); // Redirige al perfil una vez que el login es exitoso
    } else {
      setMessage('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      setMessageType('error');
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
        <button type="submit" className="btn btn-primary mt-3">Iniciar Sesión</button>
      </form>
      {message && (
        <div className={`alert mt-3 ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;