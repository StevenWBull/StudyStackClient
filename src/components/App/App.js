import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home';
import Landing from '../Pages/Landing';
import MyProfile from '../Pages/MyProfile/MyProfile'; // Import the MyProfile component
import ContactUs from '../Pages/ContactUs';
import Create from '../Pages/Create';
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
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
