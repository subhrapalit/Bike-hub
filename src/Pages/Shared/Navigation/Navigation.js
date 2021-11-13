import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        //Navbar
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">House of<small className='text-danger fw-bolder'> Royal Enfield</small></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#reviews">Review</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#faq">FAQ</Nav.Link>


                        <Nav.Link as={HashLink} to="/explore">Explore!</Nav.Link>

                        {user?.email ?

                            <div className='d-flex'>

                                <Nav.Link as={Link} to="/dashboard">
                                    <Button variant="warning">Dashboard</Button>
                                </Nav.Link>
                                <Nav.Link as={Link}>
                                    <Button onClick={logOut} variant="warning">Log Out</Button>  </Nav.Link>

                            </div> :

                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                        <Navbar.Text className='ms-3'>
                            <small className='text-success fw-bolder'>Welcome: </small> <a href="#login">{user?.displayName} </a>
                        </Navbar.Text>


                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;