import logo from '../../logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<SignIn />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default App;
