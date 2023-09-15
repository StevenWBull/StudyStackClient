import React from 'react';
import NavBarElement from '../NavBar/NavBarElement';
import StudyCards from '../Cards/StudyCards';
import TapElement from '../Tap/TapElement';
import {
    HeaderContainer,
    Container,
} from '../Styles/Container/Container.style';

const Home = () => {
    return (
        <>
            <NavBarElement />
            <Container>
                <HeaderContainer />
                {/* Category Tab */}
                <TapElement />
                {/* Post Cards */}
                <StudyCards />
            </Container>
        </>
    );
};
export default Home;
