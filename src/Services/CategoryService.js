// categoryService.js

import axios from 'axios';
import { useAuth } from './AuthContext';

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}/categories`;

const getCategoryList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch category list:', error);
        throw error;
    }
};

const CreateCategory = async (categoryData) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        throw new Error('User is not authenticated. Cannot create a category.');
    }

    try {
        const response = await axios.post(API_URL, categoryData, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to create a category:', error);
        throw error;
    }
};

const UpdateCategory = async (categoryId, updatedData) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        throw new Error('User is not authenticated. Cannot update a category.');
    }

    try {
        const response = await axios.put(
            `${API_URL}/${categoryId}`,
            updatedData,
            {
                headers: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Failed to update a category:', error);
        throw error;
    }
};

const DeleteCategory = async (categoryId) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        throw new Error('User is not authenticated. Cannot delete a category.');
    }

    try {
        const response = await axios.delete(`${API_URL}/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to delete a category:', error);
        throw error;
    }
};

export default {
    getCategoryList,
    CreateCategory,
    UpdateCategory,
    DeleteCategory,
};
