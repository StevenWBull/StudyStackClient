// export default ListExample;
import Carousel from 'react-bootstrap/Carousel';
import './Landing.css'; // Import the CSS file
import Footer from '../../Footer/Footer';

const Landing = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <div className="slidercontent1">
                        <div className="wrapText">
                            <h1>StudyStack</h1>
                            <div className="d-none d-md-block">
                                <h2>Your bridge to brilliance</h2>
                            </div>
                            <a href="/home">
                                <button>More info</button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slidercontent2">
                        <div className="wrapText">
                            <h3>Make the most of your educational life</h3>
                            <div className="d-none d-md-block">
                                <h2>Good to see you again</h2>
                            </div>
                            <a href="/signin">
                                <button>Sign in</button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slidercontent3">
                        <div className="wrapText">
                            <h4>Get started with a free account!</h4>
                            <div className="d-none d-md-block">
                                <h2>Create your account</h2>
                            </div>
                            <a href="/register">
                                <button>Register now</button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Footer />
        </>
    );
};

export default Landing;
