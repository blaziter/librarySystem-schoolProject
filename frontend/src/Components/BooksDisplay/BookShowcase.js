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
                    <Row>
                        {
                            books.map((book) => {
                                console.log(book);
                                return (
                                    <LinkContainer to={`book/${book._id}`}>
                                        <Col>
                                            <Card className="book">
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
                            books.map(() => {
                                i++;
                                if (i == page) return (
                                    <Pagination.Item active>{i}</Pagination.Item>
                                );
                                return (
                                    <Pagination.Item>{i}</Pagination.Item>
                                );   
                            })
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