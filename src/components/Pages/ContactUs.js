import React from 'react';
import NavBarElement from '../NavBar/NavBarElement';
import {
    HeaderContainer,
    Container,
} from '../Styles/Container/Container.style';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactUs = () => {
    return (
        <>
            <NavBarElement />
            <Container>
                <HeaderContainer className="text-light d-flex justify-content-center">
                    <h1>Contact Us</h1>
                </HeaderContainer>
                <Form className="w-50 mx-auto">
                    <Form.Select
                        className="mb-4 mt-4"
                        aria-label="Default select example"
                    >
                        <option>Search your issue</option>
                        <option value="1">Account</option>
                        <option value="2">Troubleshooting</option>
                        <option value="3">Community and Safety</option>
                        <option value="4">Other</option>
                    </Form.Select>
                    <Form.Control
                        className="mb-4"
                        type="username"
                        placeholder="Write your username."
                    />
                    <Form.Control
                        className="mb-4"
                        type="email"
                        placeholder="Please provide your email."
                    />
                    <FloatingLabel
                        controlId="floatingTextarea1"
                        label="Comments"
                        className="mb-4"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>
                            Please provide a screenshot of the issue.
                        </Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button className="col-md-12 text-center" variant="warning">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default ContactUs;
