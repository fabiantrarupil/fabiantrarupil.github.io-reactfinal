import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false);

    const login = () => {
        setToken(true);
    };

    const logout = () => {
        setToken(false);
    };

    const value = {
        token,
        login, 
        logout
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};