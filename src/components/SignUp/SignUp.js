// SignUp.js

import React from 'react';
import './SignUp.css'; // Import the CSS file

import studyStackLogo from './Study_Stack_Full_Color.png'; // Import your logo image

const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="center-content">
                <div className="logo">
                    <img src={studyStackLogo} alt="Study Stack Logo" />
                </div>
                <div className="signup-box">
                    <h1>Sign Up</h1>
                    <form className="center-form">
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
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
