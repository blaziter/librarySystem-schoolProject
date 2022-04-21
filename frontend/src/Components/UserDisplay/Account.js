import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Account = () => {
    const navigate = useNavigate();

    useEffect(() => {
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