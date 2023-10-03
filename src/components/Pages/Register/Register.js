import React from 'react';
import './Register.css'; // Import the CSS file
import studyStackLogo from '../../Images/Study_Stack_Full_Color.png';

const Register = () => {
    return (
        <div className="register-container">
            <div className="center-content">
                <div className="logo">
                    <img src={studyStackLogo} alt="Study Stack Logo" />
                </div>
                <div className="register-box">
                    <h1>Registration</h1>
                    <form className="center-form">
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
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                required
                                placeholder="New password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                required
                                placeholder="Confirm password"
                            />
                        </div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
