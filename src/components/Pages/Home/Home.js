import React, { useEffect, useState } from 'react';
import '../../App/App.css';
import NavBarElement from '../../NavBar/NavBarElement';
import TapElement from '../../Tap/TapElement';
import Stacks from '../../Cards/Stacks';
import Footer from '../../Footer/Footer';
import StudyCards from '../../Cards/StudyCards'; // Import StudyCards component
import '../../Footer/Footer.css';
import {
    HeaderContainer,
    Container,
} from '../../Styles/Container/Container.style';
import CategoryService from '../../../Services/CategoryService';
import { useAuth } from '../../../AuthContext';
import Logo from '../../Images/Study_Stack_Black.png';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const { getUserData, currentUser } = useAuth();
    const token = currentUser.token;
    const userId = getUserData().id;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await CategoryService.GetCategoryList(
                    token,
                    userId
                );
                setCategories(categoryData?.categories);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                // Handle error appropriately, e.g., show a user-friendly message
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchCategories();
    }, [token, userId]);

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
                <TapElement
                    categories={categories}
                    onCategorySelect={setSelectedCategory}
                />
                {/* Post Cards */}
                <Stacks
                    categories={categories}
                    selectedCategory={selectedCategory || 'all'}
                />
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;
