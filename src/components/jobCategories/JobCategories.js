import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const JobCategories = ({jobs}) => {
    const history = useHistory();
    const handleJobs = ()=> {
        history.push(`/registration`);
    };
    return (
        <div onClick={handleJobs} className="col-md-3" style={{cursor:'pointer'}}>
            <Card className="mb-3">
                <Card.Img variant="top" src={require(`../../images/${jobs.image}`)} alt="Image"/>
                <h4 className="text-center p-2">{jobs.title}</h4>
            </Card>
        </div>
    );
};

export default JobCategories;