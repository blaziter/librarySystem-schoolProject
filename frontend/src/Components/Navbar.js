import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import NavbarAccount from './NavbarAccount';

const NavbarComponent = () => {
    const [content, setContent] = useState("");

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
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Books</Nav.Link>
                            <Nav.Link href="/">Pricing</Nav.Link>
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
                        <NavbarAccount />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;