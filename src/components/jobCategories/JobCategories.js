import React from 'react';
import { Card } from 'react-bootstrap';

const JobCategories = ({job}) => {
    return (
        <div className="col-md-3">
            <Card className="mb-3">
                <Card.Img variant="top" src={require(`../../images/${job.image}`)} alt="Image"/>
                <h4 className="text-center p-2">{job.title}</h4>
            </Card>
        </div>
    );
};

export default JobCategories;