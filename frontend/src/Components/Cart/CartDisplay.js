import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CartDisplay = () => {
    const [books, setBooks] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const getIds = async () => {
        axios.get(`http://localhost:9000/cart/${id}`)
            .then(res => {
                res.data.books.forEach(async item => {
                    const book = await axios.get(`http://localhost:9000/book/${item}`);
                    setBooks(books => [...books, book.data]);
                })
            })
            .catch(err => {
            })
    }

    const handleRemove = (removedItem) => {
        axios.patch(`http://localhost:9000/cart/${id}`, { $pull: { books: removedItem } })
            .then(res => {
                window.location.reload();
            })
    }

    useEffect(() => {
        if (id != localStorage.getItem("cartId")) return navigate('/error');
        getIds();
    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>Cart</Card.Title>
                        <Card>
                            <Card.Body>
                                {
                                    books.length < 1
                                    &&
                                    <Card.Text className="text-align-center">You have no books in your cart.</Card.Text>
                                }
                                {
                                    books.map(book => {
                                        return (
                                            <Card key={book._id} className="margin-top-1rem">
                                                <Card.Body>
                                                    <Card.Title>
                                                        {book.name}
                                                    </Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">
                                                        {book.author}
                                                    </Card.Subtitle>
                                                    <Card.Text>
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
                                                                {book.price}</ListGroup.Item>
                                                        </ListGroup>
                                                    </Card.Text>
                                                    <Button variant="success" className="float-right" onClick={handleRemove.bind(this, book._id)}>Remove</Button>
                                                </Card.Body>
                                            </Card>
                                        );
                                    })
                                }
                            </Card.Body>
                        </Card>
                        <LinkContainer to="checkout">
                            <Button variant="success" className="float-right margin-top-1rem">Checkout</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CartDisplay;
