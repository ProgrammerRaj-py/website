import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Styles/Default'

const NotFound = () => {
    return (
        <Container className="not-found">
            <h1>Not found</h1>
            <Link exact to="/" className="btnHire">Back to Home</Link>
        </Container>
    )
}
export default NotFound;