// SignIn.js
import React, { useContext } from 'react';
import './SignIn.css'; // Import the CSS file
import studyStackLogo from '../../Images/Study_Stack_Full_Color.png';
import Alert from 'react-bootstrap/Alert';
import UserService from '../../../Services/UserService';
import { useAuth } from '../../../AuthContext';
import useSweetAlert from '../../../hooks/useSweetAlert';

const SignIn = () => {
    const { showAlert } = useSweetAlert();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const { message, token } = await UserService.postLogin(
                email,
                password
            );
            login({ email, token });
            console.log(token, message);
        } catch (error) {
            const options = {
                icon: 'error',
                title: 'Error',
                text: error?.response
                    ? error.response.data.message
                    : error.message,
            };
            showAlert(options);
        }
    };

    return (
        <>
            <div className="signin-container">
                <div className="center-content">
                    <div className="logo">
                        <img src={studyStackLogo} alt="Study Stack Logo" />
                    </div>
                    <div className="signin-box">
                        <h1>Sign In</h1>
                        <form className="center-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button type="submit">Sign In</button>
                        </form>
                        {['alert-light'].map((variant) => (
                            <Alert key={variant} variant={variant}>
                                Need an account?{' '}
                                <Alert.Link href="/register">
                                    Register
                                </Alert.Link>
                            </Alert>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
