import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const UpdateAccount = () => {
    const [user, setUser] = useState({});

    /*const handleUpdate = () => {
        axios.patch(`http://localhost:9000/user/${_id}`, user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }*/

    /*useEffect(() => {
        axios.get(`http://localhost:9000/user/${_id}`)
            .then(res => {
                const result = res.data.user;
                setUser(result);
            })

    }, []);*/

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