import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}/auth`;

const postLogin = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        pword: password,
    });
    const { token, message } = response.data;
    return { token, message }; // Return results, let caller decide what to do.
};

const postLogout = async () => {
    // You might want an endpoint to invalidate tokens or perform other cleanup tasks.
    // If you add such logic, remember to handle it here.
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
};

export default {
    postLogin,
    postLogout,
    getCurrentUser,
};
