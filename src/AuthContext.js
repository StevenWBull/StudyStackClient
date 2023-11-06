import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
        const jwtPayload = jwtDecode(userToken);
        return jwtPayload;
    });

    const login = (user) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
