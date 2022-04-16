import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Container } from 'react-bootstrap';

const BooksMenu = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:9000/book`)
            .then(res => {
                const result = res.data.books;
                setBooks(result);
            })

    }, []);

    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Books
                        </Card.Title>
                        {
                            books.map((book) => {
                                return (
                                    <Card key={book._id}>
                                        <Card.Body>
                                            <Card.Img>

                                            </Card.Img>
                                            <Card.Title>
                                                {book.name}
                                            </Card.Title>
                                            <Card.Text>
                                                {book.description}
                                            </Card.Text>
                                            <LinkContainer to={`/admin/book/${book._id}`}>
                                                <Button variant="success" className="float-right">Edit {book.name}</Button>
                                            </LinkContainer>
                                        </Card.Body>
                                    </Card>
                                );
                            })
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default BooksMenu;