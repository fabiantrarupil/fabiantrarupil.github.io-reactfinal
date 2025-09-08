import React from 'react';
import { useAuth } from '../context/UserContext'; 
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/'); 
    };

    return (
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-header">
                    <h2>Mi Perfil</h2>
                </div>
                <div className="card-body">
                    {user ? (
                        <>
                            <h4 className="card-title">Bienvenido, {user}</h4>
                            <p className="card-text">Has iniciado sesión con éxito.</p>
                            <button onClick={handleLogout} className="btn btn-danger mt-3">
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <p className="card-text">No hay un usuario autenticado. Por favor, inicia sesión.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;