import React from 'react';
import { Card } from 'react-bootstrap';

const ErrorPage = () => {

    return (
        <>
            <Card className="error-page">
                <Card.Body>
                    <Card.Title>
                        Error
                    </Card.Title>
                    <Card.Text>
                        Whoops, how did you end up here?
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ErrorPage;