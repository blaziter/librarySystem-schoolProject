import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';

const BookShowcase = () => {
    const [books, setBooks] = useState([]);
    let i = 0;
    const { page } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:9000/book`)
            .then(res => {
                const result = res.data.books;
                setBooks(result);
            })
    }, []);

    return (
        <>
            <Card className="margin-1rem float-right">
                <Card.Body>
                    <Row xs={1} md={4} className="g-4">
                        {
                            books.map((book) => {
                                return (
                                    <LinkContainer to={`book/${book._id}`} key={book._id}>
                                        <Col>
                                            <Card className="word-break" >
                                                <Card.Img src={book.picture} />
                                                <Card.Body>
                                                    <Card.Title>{book.name}</Card.Title>
                                                    <Card.Text>{book.description}</Card.Text>
                                                    <LinkContainer to="#">
                                                        <Button variant="success" className="float-right">Add to cart</Button>
                                                    </LinkContainer>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </LinkContainer>
                                );
                            })
                        }
                    </Row>
                    <Pagination className="float-right">
                        <Pagination.First />
                        <Pagination.Prev />
                        {   
                            <Pagination.Item>{books.length%20}</Pagination.Item>
                        }
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookShowcase;