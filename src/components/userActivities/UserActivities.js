import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import UserActivitiesDetail from '../userActivitiesDetail/UserActivitiesDetail';

const UserActivities = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`https://powerful-ravine-91496.herokuapp.com/volunteerTasks?email=${loggedInUser.email}`)
        .then(response => response.json())
        .then(data=>setTasks(data))
    }, [])

    return (
        <div className="container bg-light">
            <div className="row pt-4 mb-5">
                <div className="col-md-5">
                    <Link to="/home">
                        <img style={{ height:"60px"}} src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="col-md-7">
                    <div className="d-flex justify-content-center">
                        <Link className="text-dark m-3" to="/home">Home</Link>
                        <Link className="text-dark m-3" to="/activities">Donation</Link>
                        <Link className="text-dark m-3" to="/event">Event</Link>
                        <Link className="text-dark m-3" to="#">Blog</Link>
                        <Link className="text-dark m-3 h5 text-decoration-none" to="#">{loggedInUser.name}</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    tasks.map(task =><UserActivitiesDetail task={task} key={task._id}></UserActivitiesDetail>)
                }
            </div>
        </div>
    );
};

export default UserActivities;