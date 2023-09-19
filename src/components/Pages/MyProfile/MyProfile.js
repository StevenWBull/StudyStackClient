import React from 'react';
import studyStackLogo from '../../Images/Study_Stack_Full_Color.png';

const MyProfile = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="register-container">
            <div className="center-content">
                <div className="logo">
                    <img src={studyStackLogo} alt="Study Stack Logo" />
                </div>
                <div className="register-box">
                    <h1>Account Information</h1>
                    <form className="center-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                        </div>
                    </form>
                </div>
                <button className="return-button" onClick={goBack}>
                    Return Home
                </button>
            </div>
        </div>
    );
};

export default MyProfile;
