import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Define the theme state and a function to toggle the theme
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide the theme and toggleTheme function to the children
    const contextValue = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
