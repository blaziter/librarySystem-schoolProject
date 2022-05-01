import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Card, Container, ListGroup, Toast, ToastContainer } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Book = () => {
    const [book, setBook] = useState({});
    const [cart, setCart] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [cartToast, setCartToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [errorToast, setErrorToast] = useState(false);
    const { id } = useParams();

    const addItem = (id, title) => {
        const cartId = localStorage.getItem("cartId");
        if (cartId == null) return setErrorToast(true);
        if (cart.includes(id)) return setCartToast(true);
        setShowToast(true)
        setToastMessage(title)
        axios.patch(`http://localhost:9000/cart/${cartId}`, { $push: { books: id } })
            .then(res => {
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:9000/book/${id}`)
            .then(res => {
                const result = res.data;
                setBook(result);
            })
    }, []);

    useEffect(() => {
        const cartId = localStorage.getItem("cartId");
        if (cartId == null) return;
        axios.get(`http://localhost:9000/cart/${cartId}`)
            .then(res => {
                setCart(res.data.books)
            })
    }, [book])

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            {book.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {book.author}
                        </Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div className="fw-bold">Description:</div>
                                {book.description}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="fw-bold">Year of publication:</div>
                                {book.year}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="fw-bold">Price:</div>
                                {book.price}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="success" className="float-right" onClick={addItem.bind(this, book._id, book.name)}>Add to cart</Button>
                    </Card.Body>
                </Card>
            </Container>
            <ToastContainer className="p-3" position="bottom-end">
                {
                    showToast &&
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Added {toastMessage}</strong>
                        </Toast.Header>
                        <Toast.Body>
                            {toastMessage} successfully added into cart!
                        </Toast.Body>
                    </Toast>
                }
                {
                    errorToast &&
                    <Toast onClose={() => setErrorToast(false)} show={errorToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">You are unable to add a book!</strong>
                        </Toast.Header>
                        <Toast.Body>
                            You have to have an account to be able to interact!
                        </Toast.Body>
                    </Toast>
                }
                {
                    cartToast &&
                    <Toast onClose={() => setCartToast(false)} show={cartToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Book already in cart!</strong>
                        </Toast.Header>
                        <Toast.Body>
                            You already have this book in your cart!
                        </Toast.Body>
                    </Toast>
                }
            </ToastContainer>
        </>
    );
}

export default Book;