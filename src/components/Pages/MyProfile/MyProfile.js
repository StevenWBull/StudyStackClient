import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './MyProfile.css'; // Import the CSS file
import Footer from '../../Footer/Footer';
import studyStackLogo from '../../Images/Study_Stack_Black.png'; // Import the Study Stack logo
import gradCap from '../../Images/GraduationCap.jpg'; // Import the new image
import NavBarElement from '../../NavBar/NavBarElement';

const MyProfile = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <NavBarElement />
            <div className="main-container">
                {/* Logo Bar */}
                <div className="yellow-logo-bar text-center py-3">
                    {/* Make the logo clickable */}
                    <a href="#" onClick={goBack}>
                        <img
                            src={studyStackLogo}
                            alt="Study Stack Logo"
                            className="logo logo-size" // Apply a class for smaller size
                        />
                    </a>
                </div>

                {/* Content Containers */}
                <Container className="content-container">
                    <Row>
                        {/* First Container */}
                        <Col md={6}>
                            <Card className="content-container register-box height-100">
                                <Card.Body>
                                    <div className="text-center mb-3">
                                        {/* Circular container for pictures */}
                                        <div className="picture-container">
                                            <img
                                                src={gradCap}
                                                alt="Profile"
                                                className="profile-image"
                                            />
                                            <Button
                                                variant="primary"
                                                className="upload-button"
                                                style={{
                                                    position: 'absolute',
                                                    top: '30%',
                                                    left: '50%',
                                                    transform:
                                                        'translate(-50%, -50%)',
                                                    border: '2px solid black',
                                                }}
                                            >
                                                Upload Picture
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        {/* Fillable text box for "About Me" */}
                                        <label htmlFor="aboutMe">
                                            About Me:
                                        </label>
                                        <textarea
                                            id="aboutMe"
                                            name="aboutMe"
                                            rows="4"
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Container */}
                        <Col md={6}>
                            <Card className="second-container second-column-shadow height-100">
                                <Card.Body>
                                    <h1>Account Information</h1>
                                    <form className="center-form">
                                        <div className="form-group">
                                            <label htmlFor="firstName">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Quizzy"
                                                className="form-control"
                                                style={{ marginBottom: '10px' }} // Add margin-bottom for spacing
                                            />
                                            <label htmlFor="lastName">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Scholar"
                                                className="form-control"
                                                style={{ marginBottom: '10px' }} // Add margin-bottom for spacing
                                            />
                                            <label htmlFor="username">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                placeholder="MasterStacker"
                                                className="form-control"
                                                style={{ marginBottom: '10px' }} // Add margin-bottom for spacing
                                            />
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="quizzy.scholar@studystack.com"
                                                className="form-control"
                                                style={{ marginBottom: '10px' }} // Add margin-bottom for spacing
                                            />
                                        </div>
                                        {/* ... (Rest of the form fields) */}
                                        <div className="text-center">
                                            <Button
                                                variant="primary"
                                                className="btn btn-block"
                                                style={{
                                                    marginBottom: '25px',
                                                    marginTop: '5px',
                                                    border: '2px solid black',
                                                }}
                                            >
                                                Update Information
                                            </Button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer style={{ marginTop: '60px' }}></Footer>
            </div>
        </>
    );
};

export default MyProfile;
