import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Container, Col, Form, Row } from 'react-bootstrap';

const UpdateAccount = () => {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:9000/user/${id}`, user)
            .then((res) => {
                console.log(res)
                console.log(user)
            })
            .catch((err) => {
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:9000/user/${id}`)
            .then(res => {
                setUser(res.data);
            })
        if (!localStorage.getItem("token")) navigate("/")
    }, [localStorage.getItem("token")]);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Form onSubmit={handleUpdate}>
                            <Row className="mb-1">
                                <Form.Group as={Col} controlId="validateUsername" onChange={e => setUser(e.target.value != null ? { ...user, username: e.target.value } : { ...user })}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required type="text" placeholder="Username" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validateCity" onChange={e => setUser(e.target.value != null ? { ...user, city: e.target.value } : { ...user })}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required />
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validateState" onChange={e => setUser(e.target.value != null ? { ...user, state: e.target.value } : { ...user })}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required />
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validateZip" onChange={e => setUser(e.target.value != null ? { ...user, zip: e.target.value } : { ...user })}>
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" placeholder="Zip" required />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                />
                            </Form.Group>
                            <Button variant="success" type="submit" className="float-right">Edit account</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default UpdateAccount;