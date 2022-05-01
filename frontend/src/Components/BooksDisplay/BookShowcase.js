import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Toast, ToastContainer, Pagination, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const BookShowcase = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [errorToast, setErrorToast] = useState(false);
    const [cartToast, setCartToast] = useState(false);
    let i = 1;
    const { page } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (page < 1 || !page || page > i) navigate('/page/1');
        axios.get(`http://127.0.0.1:9000/book`)
            .then(res => {
                const result = res.data.books;
                setBooks(result);
            });
    }, []);

    useEffect(() => {
        const cartId = localStorage.getItem("cartId");
        if (cartId == null) return;
        axios.get(`http://localhost:9000/cart/${cartId}`)
            .then(res => {
                setCart(res.data.books)
            })
    }, [])

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

    return (
        <>
            <Card className="margin-1rem">
                <Card.Body>
                    <Row xs={1} md={4} className="g-4">
                        {
                            books.slice(20 * (page - 1), 20 * page).map((book) => {
                                return (
                                    <LinkContainer to={`/book/${book._id}`} key={book._id}>
                                        <Col>
                                            <Card className="word-break">
                                                <Card.Body>
                                                    <Card.Title>{book.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">
                                                        {book.author}
                                                    </Card.Subtitle>
                                                    <Card.Text >
                                                        <ListGroup variant="flush">
                                                            <ListGroup.Item>
                                                                <div className="fw-bold">Short description:</div>
                                                                {`${book.description.split('.')[0]}.`}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="fw-bold">Year of publication:</div>
                                                                {book.year}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className="fw-bold">Price:</div>
                                                                {book.price}
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </Card.Text>
                                                    <LinkContainer to="#">
                                                        <Button variant="success" className="float-right" onClick={addItem.bind(this, book._id, book.name)}>Add to cart</Button>
                                                    </LinkContainer>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </LinkContainer>
                                );
                            })
                        }
                    </Row>
                    {
                        <Pagination className="float-right margin-top-1rem">
                            {
                                page > 1
                                &&
                                <>
                                    <LinkContainer to={`/page/1`}>
                                        <Pagination.First />
                                    </LinkContainer>
                                    <LinkContainer to={`/page/${page - 1}`}>
                                        <Pagination.Prev />
                                    </LinkContainer>
                                </>
                            }
                            {
                                [...Array(Math.ceil(books.length / 20)).keys()].map((num) => {
                                    num++;
                                    i++;
                                    return (
                                        <LinkContainer to={`/page/${num}`} key={i}>
                                            <Pagination.Item key={i} active={page === num}>
                                                {num}
                                            </Pagination.Item>
                                        </LinkContainer>
                                    );
                                })
                            }
                            {
                                page < (i - 1)
                                &&
                                <>
                                    <LinkContainer to={`/page/${(parseInt(page) + 1)}`}>
                                        <Pagination.Next />
                                    </LinkContainer>
                                    <LinkContainer to={`/page/${i - 1}`}>
                                        <Pagination.Last />
                                    </LinkContainer>
                                </>
                            }
                        </Pagination>
                    }
                </Card.Body>
            </Card>
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

export default BookShowcase;