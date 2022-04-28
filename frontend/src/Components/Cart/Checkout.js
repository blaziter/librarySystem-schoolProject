import React, { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9000/cart/${localStorage.getItem('cartId')}`)
        .then(res => {
            setBooks(res.data.books);
            if (books != null) books.map(book => {
                console.log(book);
                axios.patch(`http://localhost:9000/cart/${localStorage.getItem('cartId')}`, { $pull: { books: book } })
            })
        })
    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Checkout
                        </Card.Title>
                        <Card.Text className="text-align-center">
                            Success, your books will be ready at store in 5 days!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Checkout;
