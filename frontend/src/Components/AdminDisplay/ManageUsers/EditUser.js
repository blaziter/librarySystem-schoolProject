import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Container, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState([]);
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
        console.log(user);
        axios.patch(`http://localhost:9000/user/${id}`, user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
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
                                    <Form.Group className="mb-3" controlId="changeUserName" onChange={e => setUser(e.target.value.trim() != "" ? { ...user, username: e.target.value } : { ...user })}>
                                    <Form.Label>New username: </Form.Label>
                                        <Form.Control placeholder="New username" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="changeRole" onChange={e => setUser(e.target.value != "Open this select menu" ? { ...user, role: e.target.value } : { ...user })}>
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
            </Container>
        </>
    );
}

export default EditUser;