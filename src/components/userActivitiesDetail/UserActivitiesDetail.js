import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';

const UserActivitiesDetail = (props) => {
    const {job, date, _id} = props.task;
    const [loggedInUser, setLoggedInUser, usersInfo, setUsersInfo, jobDetails, setJobDetails] = useContext(UserContext);
    const selectedJob = jobDetails.find(jobDetail => jobDetail.title ===job);
    const handleDelete = (id) => {
        fetch(`https://powerful-ravine-91496.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result =>{
            if(result){
                document.getElementById(`${id}`).style.display="none";
            }
        })
    };

    return (
        <div id={`${_id}`} className="col-md-6">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <Card.Img src={selectedJob.image} alt="Image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5>{job}</h5>
                            <p>{new Date(date).toDateString('MM/dd/yy')}</p>
                            <Button onClick={()=>handleDelete(`${_id}`)} variant="dark">Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserActivitiesDetail;