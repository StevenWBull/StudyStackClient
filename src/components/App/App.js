import logo from '../../logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import SignUp from '../SignUp/SignUp';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<h1>Login</h1>} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default App;
