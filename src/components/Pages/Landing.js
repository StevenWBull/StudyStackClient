import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import {
    CarouselElement,
    TextColor,
} from '../Styles/Container/Container.style';

const data = [
    {
        //1st slide
        bgimage: require('../Images/yellow.jpg'),
        caption: 'StudyStack',
        description: 'Your bridge to brilliant',
        page: '/home',
        buttonName: 'More info',
        textColor: '1',
    },
    {
        //2nd slide
        bgimage: require('../Images/yay.jpg'),
        caption: 'Make the most of your educational life',
        description: 'Good to see tou again',
        page: '/signup',
        buttonName: 'Sign in',
        textColor: '2',
    },
    {
        //3rd slide
        bgimage: require('../Images/stack.jpg'),
        caption: 'Get started with a free account',
        description: 'Create your account',
        page: '/register',
        buttonName: 'register now',
        textColor: '3',
    },
];

const Landing = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item>
                            <CarouselElement img={slide.bgimage}>
                                <div className="slide">
                                    <TextColor col={slide.textColor}>
                                        <h1>
                                            <b>{slide.caption}</b>
                                        </h1>
                                    </TextColor>
                                    <h4>{slide.description}</h4>
                                    <a href={slide.page}>
                                        <Button variant="warning">
                                            {slide.buttonName}
                                        </Button>{' '}
                                    </a>
                                </div>
                            </CarouselElement>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <Footer />
        </>
    );
}
export default Landing;
