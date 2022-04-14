import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const AdminPage = () => {

    return (
        <Container>
            <Card className="margin-1rem-auto">
                <Card.Body>
                    <Card.Title>
                        Admin Page
                    </Card.Title>
                    <Button variant="success" className="float-right margin-left-05rem">Add a book</Button>
                    <Button variant="success" className="float-right margin-left-05rem">Manage books</Button>
                    <Button variant="success" className="float-right margin-left-05rem">Manage users</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AdminPage;