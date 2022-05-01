import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Container, Pagination } from 'react-bootstrap';

const UsersMenu = () => {
    const [users, setUsers] = useState([]);
    const { page } = useParams();
    let i = 1;
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("role") == "Admin") navigate('/');
        if (page < 1 || !page || page > i) navigate('1');
        axios.get(`http://localhost:9000/user`)
            .then(res => {
                const result = res.data.users;
                setUsers(result);
            })

    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>
                            Users
                        </Card.Title>
                        {
                            users.slice(5 * (page - 1), 5 * page).map((user) => {
                                return (
                                    <Card key={user._id} className="margin-top-1rem">
                                        <Card.Body>
                                            <Card.Title>
                                                {user.username}
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                {user.role}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                {`Agreement to terms and conditions: ${user.tac}`}
                                            </Card.Text>
                                            <LinkContainer to={`/admin/user/${user._id}`}>
                                                <Button variant="success" className="float-right">Edit {user.username}</Button>
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
                                        <LinkContainer to={`/admin/users/1`}>
                                            <Pagination.First />
                                        </LinkContainer>
                                        <LinkContainer to={`/admin/users/${page - 1}`}>
                                            <Pagination.Prev />
                                        </LinkContainer>
                                    </>
                                }
                                {
                                    [...Array(Math.ceil(users.length / 5)).keys()].map((num) => {
                                        num++;
                                        i++;
                                        return (
                                            (page >= num - 2 && page <= num + 2)
                                            &&
                                            <LinkContainer to={`/admin/users/${num}`} key={i}>
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
                                        <LinkContainer to={`/admin/users/${(parseInt(page) + 1)}`}>
                                            <Pagination.Next />
                                        </LinkContainer>
                                        <LinkContainer to={`/admin/users/${i - 1}`}>
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

export default UsersMenu;