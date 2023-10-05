// SignIn.js
import React, { useContext } from 'react';
import './SignIn.css'; // Import the CSS file
import studyStackLogo from '../../Images/Study_Stack_Full_Color.png';
import Alert from 'react-bootstrap/Alert';

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
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
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                    placeholder="Enter your username"
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
