import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const BookShowcase = () => {
    const [books, setBooks] = useState([]);
    let i = 1;
    const { page } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (page < 1 || !page || page > i) navigate('/page/1');
        axios.get(`http://127.0.0.1:9000/book`)
            .then(res => {
                const result = res.data.books;
                setBooks(result);
            })
    }, []);

    return (
        <>
            <Card className="margin-1rem">
                <Card.Body>
                    <Row xs={1} md={4} className="g-4">
                        {
                            books.slice(20 * (page - 1), 20 * page).map((book) => {
                                return (
                                    <LinkContainer to={`/book/${book._id}`} key={book._id}>
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
                    {
                        <Pagination className="float-right margin-top-1rem">
                            {
                                page > 1
                                &&
                                <>
                                    <LinkContainer to={`/page/1`}>
                                        <Pagination.First />
                                    </LinkContainer>
                                    <LinkContainer to={`/page/${page - 1}`}>
                                        <Pagination.Prev />
                                    </LinkContainer>
                                </>
                            }
                            {
                                [...Array(Math.ceil(books.length / 20)).keys()].map((num) => {
                                    num++;
                                    i++;
                                    return (
                                        <LinkContainer to={`/page/${num}`} key={i}>
                                            <Pagination.Item key={i} active={page === num}>
                                                {num}
                                            </Pagination.Item>
                                        </LinkContainer>
                                    );
                                })
                            }
                            {
                                page < (i - 1)
                                &&
                                <>
                                    <LinkContainer to={`/page/${(parseInt(page) + 1)}`}>
                                        <Pagination.Next />
                                    </LinkContainer>
                                    <LinkContainer to={`/page/${i - 1}`}>
                                        <Pagination.Last />
                                    </LinkContainer>
                                </>
                            }
                        </Pagination>
                    }
                </Card.Body>
            </Card>
        </>
    );
}

export default BookShowcase;