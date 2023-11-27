import React, { useEffect, useState } from 'react';
import '../../App/App.css';
import NavBarElement from '../../NavBar/NavBarElement';
import TapElement from '../../Tap/TapElement';
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
    const [loading, setLoading] = useState(true);
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

    if (loading) {
        // You can render a loading spinner or message here
        return <p>Loading...</p>;
    }

    return (
        <>
            <NavBarElement />
            <div className="full-height-container">
                <div className="header_container d-flex justify-content-center align-items-center">
                    <div>
                        {' '}
                        <img
                            src={Logo}
                            alt="Study Stack Logo"
                            className="logo-size"
                        />
                    </div>
                </div>
                {/* Category Tab */}
                <TapElement categories={categories} />
                {/* Post Cards */}
                <StudyCards />
            </div>
            <Footer />
        </>
    );
};

export default Home;
