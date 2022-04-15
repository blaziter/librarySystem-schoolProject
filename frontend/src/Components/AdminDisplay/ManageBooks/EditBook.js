import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Card, Container, Col, Form, Row } from 'react-bootstrap';

const EditBook = () => {

    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:9000/book/${id}`)
            .then(res => {
                const result = res.data;
                setBook(result);
            })
    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Editing book {book.name}
                        </Card.Title>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.name">
                                        <Form.Label>Book's name: </Form.Label>
                                        <Form.Control placeholder="Book's name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formFile">
                                        <Form.Label>Book cover</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.author">
                                        <Form.Label>Author: </Form.Label>
                                        <Form.Control placeholder="Author" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.price">
                                        <Form.Label>Price: </Form.Label>
                                        <Form.Control placeholder="Price" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="book.desc">
                                <Form.Label>Description: </Form.Label>
                                <Form.Control placeholder="Description" as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="book.year">
                                <Form.Label>Book's year of publication: </Form.Label>
                                <Form.Control placeholder="Year of publication" />
                            </Form.Group>
                        </Form>
                        <Button variant="success" className="float-right">Update book</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default EditBook;