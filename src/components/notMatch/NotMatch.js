import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const NotMatch = () => {
    return (
        <Jumbotron style={{height:'100vh'}} className="bg-light" fluid>
            <Container className="text-center display-1 text-danger">
                <p>404 Error!</p>
                <p>Sorry, Your Page Is Not Found.</p>
            </Container>
        </Jumbotron>
    );
};

export default NotMatch;