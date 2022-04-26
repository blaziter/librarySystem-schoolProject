import React, { useState, useEffect } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AccDropdown = () => {
    const [username, setUsername] = useState();
    const [role, setRole] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("username")) setUsername(localStorage.getItem("username"))
        if (localStorage.getItem("token")) setId(localStorage.getItem("token"))
        if (localStorage.getItem("role")) setRole(localStorage.getItem("role"))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("cartId")
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        navigate("/")
    }

    return (
        <>
            <DropdownButton variant="outline-success" align={'end'} title={`Welcome ${username}!`}>
                {
                    role == 'Admin' && <LinkContainer to={`admin`}>
                        <Dropdown.Item>Admin Dashboard</Dropdown.Item>
                    </LinkContainer>
                }
                <LinkContainer to={`user/${id}`}>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                </LinkContainer>
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default AccDropdown;