import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

import Auth from './Auth';
import AccDropdown from './AccDropdown';

const NavbarDisplay = () => {
    const [content, setContent] = useState("");
    const [loginState, setLoginState] = useState(false);

    const searchHandler = async (e) => {
        e.preventDefault();
        console.log(content);

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        }

        await fetch('/', options)
            .then(response => response.json())
            .then(data => setContent(content))
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
                            <LinkContainer to="/admin">
                                <Nav.Link>
                                    Admin Dashboard
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchHandler}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={e => setContent(e.target.value)}
                            />
                            <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                        <Nav className="margin-left-05rem">
                            { loginState ? <AccDropdown /> : <AccDropdown /> }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarDisplay;