import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='d-flex space-around'>
                <div>
                    <Navbar.Brand href="#home">Hotel-Rest</Navbar.Brand>

                </div>
                <div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav>
                            <Nav.Link><Link to='/home' variant='light'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/package' variant='light'>Package</Link></Nav.Link>
                            <Nav.Link><Link to='/login' variant='light'>Log in</Link></Nav.Link>
                            <Nav.Link><Link to='/register' variant='light'>Register</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Container>
        </Navbar>
    );
};

export default Header;