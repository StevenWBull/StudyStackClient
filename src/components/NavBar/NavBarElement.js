import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../Images/homeLogo.png';
import { useAuth } from '../../AuthContext';

const NavBarElement = () => {
    const { logout } = useAuth();
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-body-tertiary pe-3"
                >
                    <Container fluid>
                        <Navbar.Brand href="/home">
                            <img
                                alt="logo"
                                src={Logo}
                                width="40"
                                height="40x"
                                className="d-inline-block align-bottom"
                            />
                            {/* &nbsp; is a HTML space */}
                            &nbsp; StudyStack
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    StudyStack
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-2">
                                    <Form className="d-flex pe-3">
                                        <Form.Control
                                            type="search"
                                            placeholder="Study sets, questions"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">
                                            Search
                                        </Button>
                                    </Form>
                                    <NavDropdown
                                        title="Studies"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action1">
                                            study1
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action2">
                                            study2
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/create">
                                            Add study
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action4">Peer</Nav.Link>
                                    <NavDropdown
                                        title="Setting"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="/my-profile">
                                            My Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action6">
                                            Dark Mode
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logout}>
                                            Log Out
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/contact-us">
                                        Contact Us
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default NavBarElement;
