import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const BookShowcase = () => {
    return (
        <>
            <Card className="bookTable">
                <Card.Body>
                    <Card>
                        <Card.Img variant="left" src="logo192.png" />
                        <Card.Body>

                        </Card.Body>
                        <Button variant="success">Buy</Button>
                        <Button variant="success">Borrow</Button>
                    </Card>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookShowcase;