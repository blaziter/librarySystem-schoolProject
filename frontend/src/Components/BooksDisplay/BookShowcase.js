import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const BookShowcase = () => {
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
            <Card className="margin-1rem float-right">
                <Card.Body>
                    <Row>
                        {
                            books.map(() => {
                                return (
                                    <Col>
                                        <Card className="book">
                                            <Card.Img src="logo192.png" fluid />
                                            <Card.Body>
                                                <Card.Title>Book</Card.Title>
                                                <Card.Text>Book Desc</Card.Text>
                                                <Button variant="success" className="float-right">Add to cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <Row>
                        <Col>
                            <Card className="book">
                                <Card.Img src="logo192.png" fluid />
                                <Card.Body>
                                    <Card.Title>Book</Card.Title>
                                    <Card.Text>Book Desc</Card.Text>
                                    <Button variant="success" className="float-right">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="book">
                                <Card.Img src="logo192.png" fluid />
                                <Card.Body>
                                    <Card.Title>Book</Card.Title>
                                    <Card.Text>Book Desc</Card.Text>
                                    <Button variant="success" className="float-right">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="book">
                                <Card.Img src="logo192.png" fluid />
                                <Card.Body>
                                    <Card.Title>Book</Card.Title>
                                    <Card.Text>Book Desc</Card.Text>
                                    <Button variant="success" className="float-right">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="book">
                                <Card.Img src="logo192.png" fluid />
                                <Card.Body>
                                    <Card.Title>Book</Card.Title>
                                    <Card.Text>Book Desc</Card.Text>
                                    <Button variant="success" className="float-right">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookShowcase;