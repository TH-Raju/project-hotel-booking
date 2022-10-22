import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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
                            <Link to='/home' variant='light' className='text-white text-decoration-none p-3'>Home</Link>
                            <Link to='/package' variant='light' className='text-white text-decoration-none p-3'>Package</Link>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <Button onClick={handleLogOut} className='m-2' variant="primary" type="submit">
                                                Log out
                                            </Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' variant='light' className='text-white text-decoration-none p-3'>Log in</Link>
                                            <Link to='/register' variant='light' className='text-white text-decoration-none p-3'>Register</Link>
                                        </>
                                }
                            </>


                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Container>
        </Navbar>
    );
};

export default Header;

