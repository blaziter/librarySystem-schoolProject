import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Container, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap';

const UpdateAccount = () => {
    const [user, setUser] = useState({});
    const [showToast, setShowToast] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:9000/user/${id}`, user)
            .then((res) => {
                setShowToast(true);
                setTimeout(() => navigate('/'), 3000)
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
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6" controlId="validateCountry" onChange={e => setUser(e.target.value != null ? { ...user, country: e.target.value } : { ...user })}>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" required />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validateCity" onChange={e => setUser(e.target.value != null ? { ...user, city: e.target.value } : { ...user })}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required />
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6" controlId="validateState" onChange={e => setUser(e.target.value != null ? { ...user, state: e.target.value } : { ...user })}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validateZip" onChange={e => setUser(e.target.value != null ? { ...user, zip: e.target.value } : { ...user })}>
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
            {
                showToast
                &&
                <ToastContainer className="p-3" position="bottom-end">
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Update successful!</strong>
                        </Toast.Header>
                        <Toast.Body>Successfully updated your info!</Toast.Body>
                    </Toast>
                </ToastContainer>
            }
        </>
    );
}

export default UpdateAccount;