import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

import PropTypes from 'prop-types';

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        // Retrieve from local storage on initial load
        return JSON.parse(localStorage.getItem('currentUser'));
        // return 'Steven';
    });

    const login = (user) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user)); // Store to local storage
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser'); // Remove from local storage
    };

    const getUser = () => {
        return currentUser;
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
