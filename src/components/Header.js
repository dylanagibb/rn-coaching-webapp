import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../images/logo.svg';
import '../styles/header.scss';

function Header() {
    return (
        <header>
            <Navbar className="header" expand="lg">
                <Navbar.Brand href="Home">
                    <img
                        src={Logo}
                        className="d-inline-block align-top responsive-logo"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="Services">Services</Nav.Link>
                        <Nav.Link className="book-now-button" href="Book">Book Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;