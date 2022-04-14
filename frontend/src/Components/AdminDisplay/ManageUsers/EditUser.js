import React from 'react';
import { Card, Container } from 'react-bootstrap';

const EditUser = () => {

    const user = "user";

    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Editing user {user}
                        </Card.Title>
                    </Card.Body>
                    
                </Card>
            </Container>
        </>
    );
}

export default EditUser;