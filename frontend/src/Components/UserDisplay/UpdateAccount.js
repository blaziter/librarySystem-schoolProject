import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const UpdateAccount = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

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

    }, []);

    return (
        <>
            <Card>
                <Card.Body>

                </Card.Body>
            </Card>
        </>
    );
}

export default UpdateAccount;