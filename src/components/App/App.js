import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<SignIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
