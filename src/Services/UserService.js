/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const API_URL = `${process.env.API_ENDPOINT}/auth`;

const useAuth = () => {
    const { user, login, logout } = useContext(AuthContext);
    return { user, login, logout };
};

const login = async (email, password) => {
    const response = await axios.post(`${API_ENDPOINT}/login`, {
        email,
        password,
    });
    const { first_name, last_name, token } = response.data;
    const { login } = useAuth();
    login(email, token);
    return token;
};

const logout = () => {
    const { logout } = useAuth();
    logout();
};

const getCurrentUser = () => {
    const user = '';
    // const { user } = useAuth();
    return user;
};

export default {
    login,
    logout,
    getCurrentUser,
};
