import React, { useState } from 'react';
import NavBarElement from '../NavBar/NavBarElement';
import {
    HeaderContainer,
    Container,
    StudyContainer,
} from '../Styles/Container/Container.style';
import { Form, Button, InputGroup } from 'react-bootstrap';
import FlashCard from './FlashCards/FlashCard';
import { FaPlus, FaTrash } from 'react-icons/fa';

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

    const handleQuestionAnswerChange = (i, field, value) => {
        // Update the questionAnswers array when a question or answer is changed
        const updatedQuestionAnswers = [...questionAnswers];
        updatedQuestionAnswers[i][field] = value;
        setQuestionAnswers(updatedQuestionAnswers);
    };
    const handleDeleteQuestion = (i) => {
        // Delete the question and answer at the specified i
        const updatedQuestionAnswers = [...questionAnswers];
        updatedQuestionAnswers.splice(i, 1);
        setQuestionAnswers(updatedQuestionAnswers);
    };
    const handleAddQuestion = () => {
        const updatedQuestionAnswers = [...questionAnswers];
        updatedQuestionAnswers.push({ question: '', answer: '' });
        setQuestionAnswers(updatedQuestionAnswers);
    };

    return (
        <>
            <NavBarElement />
            <Container>
                <HeaderContainer></HeaderContainer>
                <StudyContainer>
                    <h4>Create a New Study Stack</h4>
                    <Form>
                        <Form.Group controlId="title">
                            {/* <Form.Label>Title</Form.Label> */}
                            <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Type your major category, for example, CS"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="title">
                            {/* <Form.Label>Title</Form.Label> */}
                            <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Type the name of stack, for example, Software Engineering"
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
                                placeholder="Enter description of your stack"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="questionAnswers">
                            <Form.Label>
                                Question and Answer (One per line)
                            </Form.Label>
                            {questionAnswers.map((qa, i) => (
                                <div key={i}>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder={`Question ${i + 1}`}
                                            value={qa.question}
                                            onChange={(e) =>
                                                handleQuestionAnswerChange(
                                                    i,
                                                    'question',
                                                    e.target.value
                                                )
                                            }
                                            style={{
                                                flex: '1',
                                                marginRight: '5px',
                                            }}
                                        />
                                        <Button
                                            variant="outline-warning"
                                            onClick={handleAddQuestion}
                                        >
                                            <FaPlus /> {/* add icon */}
                                        </Button>
                                        <Button
                                            variant="outline-warning"
                                            onClick={handleDeleteQuestion}
                                        >
                                            <FaTrash /> {/* Delete icon */}
                                        </Button>
                                    </InputGroup>
                                    <Form.Control
                                        className="mb-2"
                                        type="text"
                                        placeholder={`Answer ${i + 1}`}
                                        value={qa.answer}
                                        onChange={(e) =>
                                            handleQuestionAnswerChange(
                                                i,
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
