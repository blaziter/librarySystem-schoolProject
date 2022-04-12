import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Auth from './Auth';

const NavbarAccount = () => {

    return (
        <>
            <Nav className="padding-left-05rem">
                <Auth />
            </Nav>
        </>
    );
}

export default NavbarAccount;