import logo from '../../logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/home" element={<h1>Home</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
