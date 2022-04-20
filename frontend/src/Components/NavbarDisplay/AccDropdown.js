import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const AccDropdown = () => {
    const [loginState, setLoginState] = useState();
    const id = "";
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.get(`http://localhost:9000/user/logout`)
            .then(res => {
                //navigate("/");
            })
            .catch(err => {
                //navigate("/");
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