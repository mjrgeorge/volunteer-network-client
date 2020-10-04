import React from 'react';
import { Button, Card } from 'react-bootstrap';

const UserActivitiesDetail = (props) => {
    const {job, date} = props.tasks;
    return (
        <div className="col-md-6">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <Card.Img src='' alt="Image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5>{job}</h5>
                            <p>{new Date(date).toDateString('MM/dd/yy')}</p>
                            <Button variant="dark">Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserActivitiesDetail;