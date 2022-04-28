import React, { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const name = localStorage.getItem("username")
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("role") == "Admin") navigate('/');
    }, []);

    return (
        <Container>
            <Card className="margin-1rem-auto">
                <Card.Body>
                    <Card.Title>
                        Admin Dashboard
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                            Welcome {name}!
                        </Card.Subtitle>
                    <LinkContainer to={`/admin/book/add`}>
                        <Button variant="success" className="float-right margin-left-05rem">Add a book</Button>
                    </LinkContainer>
                    <LinkContainer to={`/admin/books`}>
                        <Button variant="success" className="float-right margin-left-05rem">Manage books</Button>
                    </LinkContainer>
                    <LinkContainer to={`/admin/users`}>
                        <Button variant="success" className="float-right margin-left-05rem">Manage users</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AdminPage;