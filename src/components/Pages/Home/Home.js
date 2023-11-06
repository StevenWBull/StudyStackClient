import React, { useEffect, useState } from 'react';
import NavBarElement from '../../NavBar/NavBarElement';
import StudyCards from '../../Cards/StudyCards';
import TapElement from '../../Tap/TapElement';
import Footer from '../../Footer/Footer';
import '../../Footer/Footer.css';
import {
    HeaderContainer,
    Container,
} from '../../Styles/Container/Container.style';
import CategoryService from '../../../Services/CategoryService';
import { useAuth } from '../../../AuthContext';

import Logo from '../../Images/Study_Stack_Black.png'; // Import the image

const Home = () => {
    const [categories, setCategories] = useState([]);
    const { getUserData, currentUser } = useAuth();
    const token = currentUser.token;
    const userId = getUserData().id;
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log('Fetching categories...');
                const categoryData = await CategoryService.GetCategoryList(
                    token,
                    userId
                ); // Make sure this function is async or handles the promise correctly
                setCategories(categoryData?.categories); // Update state with fetched categories
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                // Handle error appropriately
            }
        };
        fetchCategories();
    }, [token, userId]);

    console.log(categories);

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
