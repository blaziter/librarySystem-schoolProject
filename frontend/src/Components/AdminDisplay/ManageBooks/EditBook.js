import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap';

const EditBook = () => {
    const [book, setBook] = useState({});
    const [editedBook, setEditedBook] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [success, setSuccess] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("role") == "Admin") navigate('/');
        axios.get(`http://127.0.0.1:9000/book/${id}`)
            .then(res => {
                const result = res.data;
                setBook(result);
                setEditedBook(book);
            })
            .catch(error => {
                navigate("/error");
            })
    }, []);

    const handlePatch = (e) => {
        e.preventDefault();
        if (!editedBook) return setShowToast(true);
        if (editedBook.name?.length > 3 && editedBook.name && editedBook.author && editedBook.description) {
            console.log(editedBook)
            setBook(editedBook);
            return axios.patch(`http://localhost:9000/book/${id}`, book)
                .then((res) => {
                    setSuccess(true);
                    setTimeout(() => navigate('/'), 3000)
                })
                .catch((err) => {
                });
        }
        setShowToast(true);
    }

    const handleDelete = (e) => {
        axios.delete(`http://localhost:9000/book/${id}`)
            .then((res) => {
                navigate("/admin/books");
            })
    }

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Editing book {book.name}
                        </Card.Title>
                        <Form onSubmit={handlePatch}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.name" onChange={e => setEditedBook({ ...editedBook, name: e.target.value })}>
                                        <Form.Label>Book's name: </Form.Label>
                                        <Form.Control placeholder={book.name} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.author" onChange={e => setEditedBook({ ...editedBook, author: e.target.value })}>
                                        <Form.Label>Author: </Form.Label>
                                        <Form.Control placeholder={book.author} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="book.price" onChange={e => setEditedBook({ ...editedBook, price: e.target.value })}>
                                        <Form.Label>Price: </Form.Label>
                                        <Form.Control placeholder={book.price} type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="book.desc" onChange={e => setEditedBook({ ...editedBook, description: e.target.value })}>
                                <Form.Label>Description: </Form.Label>
                                <Form.Control placeholder={book.description} as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="book.year" onChange={e => setEditedBook({ ...editedBook, year: e.target.value })}>
                                <Form.Label>Book's year of publication: </Form.Label>
                                <Form.Control placeholder={book.year} type="number" />
                            </Form.Group>
                            <Button variant="success" className="float-right" type="submit">Update {book.name}</Button>
                            <Button variant="danger" className="float-right margin-right-05rem" onClick={handleDelete}>Delete {book.name}</Button>
                        </Form>
                    </Card.Body>
                </Card>
                {
                    showToast
                    &&
                    <ToastContainer className="p-3" position="bottom-end">
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="me-auto">Error!</strong>
                            </Toast.Header>
                            <Toast.Body>Book's name should be longer than 3 characters and not enough sufficient data entered!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                }
                {
                    success
                    &&
                    <ToastContainer className="p-3" position="bottom-end">
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="me-auto">{book.name} updated!</strong>
                            </Toast.Header>
                            <Toast.Body>{book.name} was successfully updated!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                }
            </Container>
        </>
    );
}

export default EditBook;