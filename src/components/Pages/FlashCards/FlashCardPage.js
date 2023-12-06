// FlashCardPage.js
import React, { useState } from 'react';
import FlashCard from './FlashCard';
import NavBarElement from '../../NavBar/NavBarElement';
import {
    HeaderContainer,
    FlashCardContainer,
} from '../../Styles/Container/Container.style';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

const FlashCardPage = () => {
    const flashCardData = [
        {
            question: 'Complex means complicated',
            answer: 'False',
        },
        {
            question:
                'Which of the following is the role of the software engineer in a software project?',
            answer: 'Understand how the system-to-be interact with the user or the environment and design the software-to-be',
        },
        {
            question:
                'Software engineer is willing to learn the problem domain" is NOT a law of software engineer, according to Dr. Ivan Marsic',
            answer: 'False',
        },
        {
            question:
                'Which of the following method has most heavy customer involvement',
            answer: 'agile',
        },
        {
            question:
                'Which of the following is an use case in the UML representation of an ATM project?',
            answer: 'Withdraw Cash',
        },
        {
            question:
                'Which of the following is known as the law of diminishing returns',
            answer: 'Improving accuracy of estimation beyond a certain point requires huge cost and effort ',
        },
        {
            question: 'Grass is green" is a proposition.',
            answer: 'True',
        },
        {
            question:
                'Which of the following is a relation in Concept Map of "Home Access Control" case study?',
            answer: 'Enters',
        },
        {
            question:
                'A key problem of design is that we cannot know for sure if a design will work unless we implement it and try it.',
            answer: 'True',
        },
        {
            question:
                'Which of the following is a relation in case study "Personal Investment Assistant"?',
            answer: 'can be',
        },
        {
            question:
                'The set of methods along with the exact format for calling each method (known as the method “signature”) represents the object’s___________',
            answer: 'interface',
        },
        {
            question:
                'In object oriented programming, objects communicate each other by sending ____________',
            answer: 'messages',
        },
        {
            question:
                'Traditional approach to program development, known as procedural approach is process oriented in that the solution is represented as a sequence of steps to be followed when the program is executed.',
            answer: 'True',
        },
        {
            question:
                'A design is object-oriented when each activity of the system is performed by exactly one unit, and when inputs and outputs of each unit are well defined.',
            answer: 'False',
        },
        {
            question:
                'Which of the following is not a visibility in object-oriented programming?',
            answer: 'projected',
        },
        {
            question:
                'Which of the following will be the function body for getter method for attribute lightIntensity?',
            answer: 'return lightIntensity',
        },
        {
            question:
                'Which of the following characteristics is NOT local to object itself?',
            answer: 'responsibility',
        },
        {
            question: 'What is the relationship between a car and a wheel?',
            answer: 'has-a',
        },
        {
            question:
                'nheritance relation is dynamic, it is defined at running time.',
            answer: 'False',
        },
        {
            question:
                'Assume that LightController is a child class of HouseholdDeviceController, Then the LightController inherite all methods in HoursholdDeviceController class, except the contructors',
            answer: 'False',
        },
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextCard = () => {
        setCurrentCardIndex(
            (prevIndex) => (prevIndex + 1) % flashCardData.length
        );
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledFlashCardData = shuffleArray([...flashCardData]);

    return (
        <>
            <div>
                <NavBarElement />
                <HeaderContainer className="text-light d-flex justify-content-center">
                    <h1>CSCI 441 Quiz 1-2</h1>
                </HeaderContainer>

                <FlashCardContainer>
                    <FlashCard
                        question={
                            shuffledFlashCardData[currentCardIndex].question
                        }
                        answer={shuffledFlashCardData[currentCardIndex].answer}
                    />
                    <Button
                        className="sticky-top"
                        variant="warning"
                        onClick={handleNextCard}
                    >
                        <AiOutlineArrowRight />
                    </Button>
                </FlashCardContainer>
            </div>
        </>
    );
};

export default FlashCardPage;
