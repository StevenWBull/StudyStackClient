import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}/auth`;
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

const postLogin = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        pword: password,
    });
    const { token, message } = response.data;
    return { token, message }; // Return results, let caller decide what to do.
};

const postRegister = async (email, password, firstName, lastName) => {
    const response = await axios.post(`${API_URL}/register`, {
        email,
        pword: password,
        first_name: firstName,
        last_name: lastName,
    });
    const { token, message } = response.data;
    return { token, message }; // Return results, let caller decide what to do.
};

const postLogout = async () => {
    // You might want an endpoint to invalidate tokens or perform other cleanup tasks.
    // If you add such logic, remember to handle it here.
};

export default {
    postLogin,
    postRegister,
    postLogout,
};
