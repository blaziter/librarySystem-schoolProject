import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import BookSelection from './BookSelection';
import BookShowcase from './BookShowcase';

const BookDisplay = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="auto">
                        <BookSelection />
                    </Col>
                    <Col xs="xl">
                        <BookShowcase />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BookDisplay;