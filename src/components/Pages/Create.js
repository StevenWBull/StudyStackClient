import React, { useState } from 'react';
import NavBarElement from '../NavBar/NavBarElement';
import {
    HeaderContainer,
    Container,
    StudyContainer,
} from '../Styles/Container/Container.style';
import { Form, Button } from 'react-bootstrap';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // Initialize an array for question and answer pairs
    const initialQuestionAnswers = Array.from({ length: 10 }, () => ({
        question: '',
        answer: '',
    }));
    const [questionAnswers, setQuestionAnswers] = useState(
        initialQuestionAnswers
    );

    const handleCreateStack = () => {
        // Use title, description, and questionAnswers state variables to create or update a study stack
        console.log('Created Study Stack:', {
            title,
            description,
            questionAnswers,
        });
        setTitle('');
        setDescription('');
        setQuestionAnswers(initialQuestionAnswers);
    };

    const handleQuestionAnswerChange = (index, field, value) => {
        // Update the questionAnswers array when a question or answer is changed
        const updatedQuestionAnswers = [...questionAnswers];
        updatedQuestionAnswers[index][field] = value;
        setQuestionAnswers(updatedQuestionAnswers);
    };

    return (
        <>
            <NavBarElement />
            <Container>
                <HeaderContainer />
                <StudyContainer>
                    <h4>Create a New Study Stack</h4>
                    <Form>
                        <Form.Group controlId="title">
                            {/* <Form.Label>Title</Form.Label> */}
                            <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            {/* <Form.Label>Description</Form.Label> */}
                            <Form.Control
                                className="mb-5"
                                as="textarea"
                                rows={3}
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="questionAnswers">
                            <Form.Label>
                                Question and Answer (One per line)
                            </Form.Label>
                            {questionAnswers.map((qa, index) => (
                                <div key={index}>
                                    <Form.Control
                                        type="text"
                                        placeholder={`Question 
                                            ${index + 1}`}
                                        value={qa.question}
                                        onChange={(e) =>
                                            handleQuestionAnswerChange(
                                                index,
                                                'question',
                                                e.target.value
                                            )
                                        }
                                        style={{
                                            flex: '1',
                                            marginRight: '5px',
                                        }}
                                    />
                                    <Form.Control
                                        className="mb-2"
                                        type="text"
                                        placeholder={`Answer ${index + 1}`}
                                        value={qa.answer}
                                        onChange={(e) =>
                                            handleQuestionAnswerChange(
                                                index,
                                                'answer',
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            ))}
                        </Form.Group>
                        <Button
                            className="col-md-12 text-center"
                            variant="warning"
                            onClick={handleCreateStack}
                        >
                            Create Stack
                        </Button>
                    </Form>
                </StudyContainer>
            </Container>
        </>
    );
};

export default Create;
