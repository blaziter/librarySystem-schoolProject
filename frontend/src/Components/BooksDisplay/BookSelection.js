import React, { useState, useEffect } from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap'

const BookSelection = () => {
    
    return (
        <>
            <Card className="margin-1rem word-break">
                <Card.Body>
                    <Accordion defaultActiveKey={['0']} flush alwaysOpen>
                        <Accordion.Item className="accordion-item" eventKey="0">
                            <Accordion.Header>
                                Hello
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        Hi
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Beletrie
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookSelection;