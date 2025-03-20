import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = () => {
    return (
        <Navbar className='topp' expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">GetFit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='end' id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <div className="d-none d-md-flex flex-row">
                            <Nav.Link className='btn btn-outline-warning' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='btn btn-outline-warning' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='btn btn-outline-warning' as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className='btn btn-outline-warning' as={Link} to="/crud">SignIn</Nav.Link>
                        </div>
                        <div className="d-flex d-md-none">
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item className='btn btn-outline-warning' as={Link} to="/home">Home</NavDropdown.Item>
                                <NavDropdown.Item className='btn btn-outline-warning' as={Link} to="/about">About</NavDropdown.Item>
                                <NavDropdown.Item className='btn btn-outline-warning' as={Link} to="/services">Services</NavDropdown.Item>
                                <NavDropdown.Item className='btn btn-outline-warning' as={Link} to="/login">SignIn</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavbar;