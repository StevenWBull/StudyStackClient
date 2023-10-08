import React from 'react';
import NavBarElement from '../NavBar/NavBarElement';
import {
    HeaderContainer,
    Container,
} from '../Styles/Container/Container.style';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="App-footer">
            <nav>
                <a href = "/CopyrightsNotice">Copyrights Notice</a><br/>
                <a href = "/TermsOfServices">Terms of Services</a><br/>
                <a href = "/PrivacyPolicy">Privacy Policy</a>
                <p>© 2023 Study Stack App</p>
                <p>Created by Team StudyStack</p>
            </nav>
        </footer>
    );
};

export default Footer;
