import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AccDropdown = () => {
    const [loginState, setLoginState] = useState();

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <LinkContainer to="user">
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="">
                        <Dropdown.Item>Log out</Dropdown.Item>
                    </LinkContainer>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default AccDropdown;