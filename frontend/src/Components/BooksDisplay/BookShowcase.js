import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const BookShowcase = () => {
    return (
        <>
            <Card className="margin-1rem float-right">
                <Card.Body>
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