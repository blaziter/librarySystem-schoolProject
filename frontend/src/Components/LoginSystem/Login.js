import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <Card className="loginSystem">
                <Card.Body>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Login;