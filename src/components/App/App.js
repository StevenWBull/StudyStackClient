import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext';
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
import FlashCardPage from '../Pages/FlashCards/FlashCardPage';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/contact-us" element={<ContactUs />} />

                    {/* Redirect authenticated users away from these routes */}
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

                    {/* Require authentication for these routes */}
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
                    <Route
                        path="/flashcard"
                        element={
                            <RequireAuth>
                                <FlashCardPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
