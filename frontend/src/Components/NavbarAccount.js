import React, { useState, useEffect } from 'react';
import { Button, Nav } from 'react-bootstrap';

const NavbarAccount = () => {


    return (
        <>
            <Nav className="padding-left-05rem">
                <Button variant="outline-success">Log In</Button>
            </Nav>
            <Nav className="padding-left-05rem">
                <Button variant="outline-success">Sign In</Button>
            </Nav>
        </>
    );
}

export default NavbarAccount;