import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        return JSON.parse(localStorage.getItem('currentUser'));
    });

    const getUserData = () => {
        /* 
            This function will return the user data from the JWT token.
            The available data is:
            {
                "id": 1,
                "email": "no@email.com",
                "iat": 1626950000,
                "exp": 1626953600,
                "firstName": "John",
                "lastName": "Doe"
            }
        */
        const userToken = currentUser.token;
        const jwtPayload = jwtDecode(userToken);
        return jwtPayload;
    };

    const login = (user) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <AuthContext.Provider
            value={{ currentUser, getUserData, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
