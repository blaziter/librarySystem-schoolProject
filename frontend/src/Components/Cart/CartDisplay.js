import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Container } from 'react-bootstrap';

const CartDisplay = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        <Card.Title>Cart</Card.Title>
                        <Card>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                        <LinkContainer to="checkout">
                            <Button variant="success" className="float-right margin-top-1rem">Checkout</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CartDisplay;