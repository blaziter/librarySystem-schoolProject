import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/');
        axios.get(`http://localhost:9000/cart/${localStorage.getItem('cartId')}`)
        .then(res => {
            setBooks(res.data.books);
            if (books != null) axios.patch(`http://localhost:9000/cart/${localStorage.getItem('cartId')}`, { $set: { books: [] } })
            .then(res => {
                console.log(res)
            })
        })
    }, []);

    const showMessage = (books) => {
        if (books.length < 1) return (`You had no books in your cart.`)
        return (`Success, your books will be ready at store in 5 days!`)
    }

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Checkout
                        </Card.Title>
                        <Card.Text className="text-align-center">
                            {
                                showMessage(books)
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Checkout;
