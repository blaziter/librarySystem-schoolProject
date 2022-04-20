import React from 'react';
import { Container } from 'react-bootstrap';

import BookShowcase from './BookShowcase';

const BookDisplay = () => {

    return (
        <>
            <Container>
                <BookShowcase />
            </Container>
        </>
    );
}

export default BookDisplay;