import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home';
import MyProfile from '../Pages/MyProfile/MyProfile'; // Import the MyProfile component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
