import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './JobCategories.css';

const JobCategories = (props) => {
    const jobs = props.jobs;
    const history = useHistory();
    const handleJobs = ()=> {
        history.push(`/registration/${jobs.title}`);
    };

    return (
        <div onClick={handleJobs} className="col-md-3">
            <CardDeck>
                <Card className="card_style mb-4 bg-dark">
                    <Card.Img variant="top" src={jobs.image} alt="Image"/>
                    <Card.Footer className="text-center text-white h4">{jobs.title}</Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default JobCategories;