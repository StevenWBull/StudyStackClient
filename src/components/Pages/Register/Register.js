import React from 'react';
import './Register.css'; // Import the CSS file
import studyStackLogo from '../../Images/Study_Stack_Full_Color.png';
import UserService from '../../../Services/UserService';
import { useAuth } from '../../../AuthContext';
import useSweetAlert from '../../../hooks/useSweetAlert';

const Register = () => {
    const { showAlert } = useSweetAlert();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, confirmPassword, firstName, lastName } =
            event.target;

        if (password.value !== confirmPassword.value) {
            const options = {
                icon: 'error',
                title: 'Error',
                text: 'Passwords Do Not Match!',
            };
            showAlert(options);
            return;
        }

        try {
            const { message, token } = await UserService.postRegister(
                email.value,
                password.value,
                firstName.value,
                lastName.value
            );
            login({ email, token });
        } catch (error) {
            const options = {
                icon: 'error',
                title: 'Error',
                text: error.message,
            };
            showAlert(options);
        }
    };

    return (
        <div className="register-container">
            <div className="center-content">
                <div className="logo">
                    <img src={studyStackLogo} alt="Study Stack Logo" />
                </div>
                <div className="register-box">
                    <h1>Registration</h1>
                    <form className="center-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                placeholder="First name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                placeholder="Last name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                                placeholder="Email address"
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                placeholder="Username"
                            />
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="New password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                placeholder="Confirm password"
                            />
                        </div>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
