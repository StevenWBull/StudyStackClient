import React from 'react';
import '../../App/App.css';
import NavBarElement from '../../NavBar/NavBarElement';
import StudyCards from '../../Cards/StudyCards';
import TapElement from '../../Tap/TapElement';
import Footer from '../../Footer/Footer';
import '../../Footer/Footer.css';

import Logo from '../../Images/Study_Stack_Black.png'; // Import the image

const Home = () => {
    return (
        <>
            <NavBarElement />
            <div className="full-height-container">
                <div className="header_container d-flex justify-content-center align-items-center">
                    <div>
                        {' '}
                        <img
                            src={Logo}
                            alt="Study Stack Logo"
                            className="logo-size" // Apply a class for smaller size
                        />
                    </div>
                </div>
                {/* Category Tab */}
                <TapElement />
                {/* Post Cards */}
                <StudyCards />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
