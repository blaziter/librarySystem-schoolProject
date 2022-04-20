import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Container, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState([]);
    const [editedUser, setEditedUser] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:9000/user/${id}`)
            .then(res => {
                const result = res.data;
                setUser(result);
            })

    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (editedUser) {
            if (editedUser.username && editedUser.username.length > 3 && editedUser.role) {
                return axios.patch(`http://localhost:9000/user/${id}`, editedUser)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        }
        setShowToast(true);
    }

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Editing user {user.username}
                        </Card.Title>
                        <Form onSubmit={handleUpdate}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="changeUserName" onChange={e => setEditedUser(e.target.value.trim() != "" ? { ...editedUser, username: e.target.value } : { ...editedUser })}>
                                        <Form.Label>New username: </Form.Label>
                                        <Form.Control placeholder="New username" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="changeRole" onChange={e => setEditedUser(e.target.value != "Open this select menu" ? { ...editedUser, role: e.target.value } : { ...editedUser })}>
                                        <Form.Label>
                                            Role:
                                        </Form.Label>
                                        <Form.Select>
                                            <option>Open this select menu</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Student">Student</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button className="float-right" variant="success" type="submit">Update {user.username}</Button>
                        </Form>
                    </Card.Body>
                </Card>
                {
                    showToast && <ToastContainer className="p-3" position="bottom-end">
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="me-auto">Error!</strong>
                            </Toast.Header>
                            <Toast.Body>User's username should be longer than 3 characters and not enough sufficient data entered!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                }
            </Container>
        </>
    );
}

export default EditUser;