import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Container, Form } from 'react-bootstrap';

const UpdateAccount = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdate = () => {
        axios.patch(`http://localhost:9000/user/${id}`, user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:9000/user/${id}`)
            .then(res => {
                const result = res.data.user;
                console.log(result);
                //setUser(result);
            })
            if (!localStorage.getItem("token")) navigate("/")
    }, [localStorage.getItem("token")]);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Button variant="success" className="float-right">Edit account</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default UpdateAccount;