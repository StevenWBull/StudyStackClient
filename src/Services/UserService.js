import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const API_URL = `${process.env.API_ENDPOINT}/auth`;

const GetAuthFromContext = () => {
    const { user, login, logout } = useContext(AuthContext);
    return { user, login, logout };
};

const login = async (email, password) => {
    const response = await axios.post(`${API_ENDPOINT}/login`, {
        email,
        password,
    });
    const { first_name, last_name, token } = response.data;
    const { login } = GetAuthFromContext();
    login(email, token);
    return token;
};

const logout = () => {
    const { logout } = GetAuthFromContext();
    logout();
};

const getCurrentUser = () => {
    const { user } = GetAuthFromContext();
    return user;
};

export default {
    login,
    logout,
    getCurrentUser,
};
