import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';

const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const { id } = useParams();

    const getUser = () => {
        axios.get(`http://localhost:9000/user/${id}`)
        .then(res => {
            setUser(res.data);
        })
    }

    useEffect(() => {
        getUser()
        if(!localStorage.getItem("token")) navigate("/")
    }, [localStorage.getItem("token")])

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            {
                                localStorage.getItem("username")
                            }
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {
                                localStorage.getItem("role")
                            }
                        </Card.Subtitle>
                        <Card.Text>
                            {
                                user && `Address: ${user.country}, ${user.state}, ${user.city} ${user.zip}`
                            }
                        </Card.Text>
                        <LinkContainer to="update">
                            <Button variant="success" className="float-right">Edit account</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Account;