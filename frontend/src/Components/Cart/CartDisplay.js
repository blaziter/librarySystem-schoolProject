import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const CartDisplay = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {

    }, []);

    return (
        <>
            <Container>
                <Card className="margin-1rem-auto">
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CartDisplay;