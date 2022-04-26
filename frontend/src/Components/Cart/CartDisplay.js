import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartDisplay = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cartId = localStorage.getItem("cartId");
        if (!cartId) return navigate('/error');
        axios.get(`http://localhost:9000/cart/${cartId}`)
            .then(res => {
                setItems(res.data.books);
                console.log(res.data.books)
            })
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
                                    items.map((item) => {
                                        axios.get(`http://localhost:9000/book/${item}`)
                                            .then(res => {
                                                return (
                                                    <Card key={res.name} className="margin-top-1rem">
                                                        <Card.Body>
                                                            <Card.Title>
                                                                {res.name}
                                                            </Card.Title>
                                                            <Card.Subtitle className="mb-2 text-muted">
                                                                {res.author}
                                                            </Card.Subtitle>
                                                            <Card.Text>
                                                                {res.description}
                                                            </Card.Text>
                                                            <Button variant="success" className="float-right">Remove</Button>
                                                        </Card.Body>
                                                    </Card>
                                                );
                                            })
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