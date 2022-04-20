import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AccDropdown = () => {
    const [loginState, setLoginState] = useState();
    const id = "";

    const handleLogout = () => {
        axios.get(`http://localhost:9000/user/logout`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <LinkContainer to={`user/${id}`}>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default AccDropdown;