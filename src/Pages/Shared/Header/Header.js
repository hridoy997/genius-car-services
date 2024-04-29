import React from 'react';
import './Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    
    const handelSignOut = () => {
        signOut();
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className="bg-primary">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ? 
                            <Nav.Link as={Link} onClick={handelSignOut}>SignOut</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;