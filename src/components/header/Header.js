import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token') !== null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faVideoSlash} /> CineFlix
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 custom-nav">
                        {/* Watch List removed */}
                    </Nav>

                    {!isLoggedIn ? (
                        <div>
                            <Button className="btn me-2" onClick={() => navigate('/login')}>Login</Button>
                            <Button className="btn" onClick={() => navigate('/register')}>Register</Button>
                        </div>
                    ) : (
                        <Button className="btn" onClick={handleLogout}>Logout</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
