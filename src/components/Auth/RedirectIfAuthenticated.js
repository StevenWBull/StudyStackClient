import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import PropTypes from 'prop-types';

const RedirectIfAuthenticated = ({ children }) => {
    const { currentUser } = useAuth();

    // If the user is authenticated, navigate to /home.
    if (currentUser) {
        return <Navigate to="/home" />;
    }

    return children;
};

RedirectIfAuthenticated.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RedirectIfAuthenticated;
