import React from 'react';
import NavBarElement from '../../NavBar/NavBarElement';
import StudyCards from '../../Cards/StudyCards';
import TapElement from '../../Tap/TapElement';
import Footer from '../../Footer/Footer';
import '../../Footer/Footer.css';
import {
    HeaderContainer,
    Container,
} from '../../Styles/Container/Container.style';

import Logo from '../../Images/Study_Stack_Black.png'; // Import the image

const Home = () => {
    return (
        <>
            <NavBarElement />
            <Container>
                <HeaderContainer className="d-flex justify-content-center align-items-center">
                    <div>
                        {' '}
                        <img
                            src={Logo}
                            alt="Study Stack Logo"
                            className="logo-size" // Apply a class for smaller size
                        />
                    </div>
                </HeaderContainer>
                {/* Category Tab */}
                <TapElement />
                {/* Post Cards */}
                <StudyCards />
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;
