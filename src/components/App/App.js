import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn/SignIn';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home';
import Landing from '../Pages/Landing';
import MyProfile from '../Pages/MyProfile/MyProfile'; // Import the MyProfile component
import ContactUs from '../Pages/ContactUs';
import Create from '../Pages/Create';
import CopyrigthsNotice from '../Footer/CopyrigthsNotice/CopyrigthsNotice';
import TermsOfServices from '../Footer/TermsOfServices/TermsOfServices';
import PrivacyPolicy from '../Footer/PrivacyPolicy/PrivacyPolicy'; 

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/Copyrights-Notice" element={<CopyrigthsNotice />} />
                    <Route path="/Terms-Of-Services" element={<TermsOfServices />} />
                    <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
