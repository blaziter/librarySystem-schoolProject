import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Book = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:9000/book/${id}`)
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
                            {book.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {book.author}
                        </Card.Subtitle>
                        <Card.Text>{book.description}</Card.Text>
                        <Button variant="success" className="float-right">Add to cart</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Book;