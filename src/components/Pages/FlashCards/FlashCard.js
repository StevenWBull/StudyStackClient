// FlashCard.js

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const FlashCard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardSize = '24rem'; // Squre

    const handleFlipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flash-card-container col-xs-6 col-md-6 col-lg-6">
            <Card
                className={`m-3 shadow mx-auto flash-card ${
                    isFlipped ? 'flipped' : ''
                }`}
                style={{
                    width: cardSize,
                    height: cardSize,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.3s ease',
                }}
            >
                <Card.Body>
                    <Card.Text style={{ color: isFlipped ? 'red' : 'black' }}>
                        {isFlipped ? answer : question}
                    </Card.Text>
                    <Button
                        className="col-md-11"
                        variant="outline-warning"
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                        }}
                        onClick={handleFlipCard}
                    >
                        {isFlipped ? 'Show Question' : 'Show Answer'}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

FlashCard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

export default FlashCard;
