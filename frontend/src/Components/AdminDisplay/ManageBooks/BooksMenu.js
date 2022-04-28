import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Container, Pagination } from 'react-bootstrap';

const BooksMenu = () => {
    const [books, setBooks] = useState([]);
    const { page } = useParams();
    let i = 1;
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("role") !== "admin") navigate('/');
        if (page < 1 || !page || page > i) navigate('1');
        axios.get(`http://127.0.0.1:9000/book`)
            .then(res => {
                const result = res.data.books;
                setBooks(result);
            })

    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Books
                        </Card.Title>
                        {
                            books.slice(5 * (page - 1), 5 * page).map((book) => {
                                return (
                                    <Card key={book._id} className="margin-top-1rem">
                                        <Card.Body>
                                            <Card.Title>
                                                {book.name}
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                {book.author}
                                            </Card.Subtitle>
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
                        {
                            <Pagination className="float-right margin-top-1rem">
                                {
                                    page > 1
                                    &&
                                    <>
                                        <LinkContainer to={`/admin/books/1`}>
                                            <Pagination.First />
                                        </LinkContainer>
                                        <LinkContainer to={`/admin/books/${page - 1}`}>
                                            <Pagination.Prev />
                                        </LinkContainer>
                                    </>
                                }
                                {
                                    [...Array(Math.ceil(books.length / 5)).keys()].map((num) => {
                                        num++;
                                        i++;
                                        return (
                                            (page >= num - 2 && page <= num + 2)
                                            &&
                                            <LinkContainer to={`/admin/books/${num}`} key={i}>
                                                <Pagination.Item key={i} active={page == num}>
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
                                        <LinkContainer to={`/admin/books/${(parseInt(page) + 1)}`}>
                                            <Pagination.Next />
                                        </LinkContainer>
                                        <LinkContainer to={`/admin/books/${i - 1}`}>
                                            <Pagination.Last />
                                        </LinkContainer>
                                    </>
                                }
                            </Pagination>
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default BooksMenu;