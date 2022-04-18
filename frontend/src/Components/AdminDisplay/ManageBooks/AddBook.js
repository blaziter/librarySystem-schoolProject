import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap';
import axios from 'axios';

const AddBook = () => {
    const [book, setBook] = useState({
        name: '',
        author: '',
        description: '',
        price: 0,
        year: 0
    });

    const handlePost = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/book/', book)
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
                            Add a book
                        </Card.Title>
                        <Form onSubmit={handlePost}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.name" onChange={e => setBook({ ...book, name: e.target.value })}>
                                        <Form.Label>Book's name: </Form.Label>
                                        <Form.Control placeholder="Book's name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formFile" onChange={e => setBook({ ...book, picture: e.target.value })}>
                                        <Form.Label>Book cover</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.author" onChange={e => setBook({ ...book, author: e.target.value })}>
                                        <Form.Label>Author: </Form.Label>
                                        <Form.Control placeholder="Author" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.price" onChange={e => setBook({ ...book, price: e.target.value })}>
                                        <Form.Label>Price: </Form.Label>
                                        <Form.Control placeholder="Price" type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="book.desc" onChange={e => setBook({ ...book, description: e.target.value })}>
                                <Form.Label>Description: </Form.Label>
                                <Form.Control placeholder="Description" as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="book.year" onChange={e => setBook({ ...book, year: e.target.value })}>
                                <Form.Label>Book's year of publication: </Form.Label>
                                <Form.Control placeholder="Year of publication" type="number" />
                            </Form.Group>
                            <Button variant="success" className="float-right" type="submit">Publish</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <ToastContainer className="p-3" position="bottom-end">
                    <Toast delay={3000} autohide>
                        <Toast.Header>
                        <strong className="me-auto">Error!</strong>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>

        </>
    );
}

export default AddBook;