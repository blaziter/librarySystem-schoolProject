import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Auth from './Auth';
import AccDropdown from './AccDropdown';

const NavbarDisplay = () => {
    const [content, setContent] = useState("");
    const [loginState, setLoginState] = useState(false);
    const [query, setQuery] = useSearchParams();
    const navigate = useNavigate();

    useEffect(async () => {
        await handleToken();
        await handleLoginState();
    }, [localStorage.getItem("token")]);

    const handleToken = async () => {
        let token = query.get("token")
        if (token) {
            axios.get(`http://localhost:9000/user/${token}`)
                .then(res => {
                    localStorage.setItem("token", token);
                    navigate("/")
                })
                .catch(err => {
                })
        }
    }

    const handleLoginState = async () => {
        let token = localStorage.getItem("token")
        if (token) {
            axios.get(`http://localhost:9000/user/${token}`)
                .then(res => {
                    localStorage.setItem("username", res.data.username)
                    localStorage.setItem("cartId", res.data.cartId)
                    localStorage.setItem("role", res.data.role)
                    localStorage.setItem("tac", res.data.tac)
                    return setLoginState(true);
                })
                .catch(err => {
                })
        }
        setLoginState(false);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Home
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={`/cart/${localStorage.getItem('cartId')}`}>
                                <Nav.Link>
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {loginState ? <AccDropdown /> : <Auth />}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDisplay;