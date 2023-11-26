import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext';
import './App.css';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home';
import Landing from '../Pages/Landing';
import MyProfile from '../Pages/MyProfile/MyProfile'; // Import the MyProfile component
import ContactUs from '../Pages/ContactUs';
import Create from '../Pages/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from '../Auth/RequireAuth';
import RedirectIfAuthenticated from '../Auth/RedirectIfAuthenticated';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <AuthProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/contact-us" element={<ContactUs />} />

                            <Route
                                path="/sign-in"
                                element={
                                    <RedirectIfAuthenticated>
                                        <SignIn />
                                    </RedirectIfAuthenticated>
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <RedirectIfAuthenticated>
                                        <Register />
                                    </RedirectIfAuthenticated>
                                }
                            />

                            <Route
                                path="/home"
                                element={
                                    <RequireAuth>
                                        <Home />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="/create"
                                element={
                                    <RequireAuth>
                                        <Create />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="/my-profile"
                                element={
                                    <RequireAuth>
                                        <MyProfile />
                                    </RequireAuth>
                                }
                            />
                        </Routes>
                    </Router>
                </AuthProvider>
                <div>
                    <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
