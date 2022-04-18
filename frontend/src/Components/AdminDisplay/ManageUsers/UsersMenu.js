import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const UsersMenu = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/user`)
            .then(res => {
                const result = res.data.users;
                console.log(result)
                setUsers(result);
            })

    }, []);

    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Users
                        </Card.Title>
                        {
                            users.map((user) => {
                                return (
                                    <Card key={user._id}>
                                        <Card.Body>
                                            <Card.Title>
                                                {user.username}
                                            </Card.Title>
                                            <LinkContainer to={`/admin/user/${user._id}`}>
                                                <Button variant="success" className="float-right">Edit {user.username}</Button>
                                            </LinkContainer>
                                        </Card.Body>
                                    </Card>
                                );
                            })
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default UsersMenu;