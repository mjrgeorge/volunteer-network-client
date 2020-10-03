import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';

const RegistrationForm = () => {
    const {jobTitle} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container bg-light p-3">
            <Link to="/home">
                <div style={{ height:'80px'}} className="d-flex justify-content-center">
                    <img className="w-25" src={logo} alt="log"/>
                </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center m-4">
                <div className="p-5 text-center" style={{width: '50%', border: '3px solid lightGray', borderRadius: '10px'}}>
                    <h3 className="mb-3">Registration as a Volunteer</h3>
                    <form action="">
                        <input className="form-control" type="text" name="name" defaultValue={`${loggedInUser.name}`} placeholder="Full Name" required/>
                        <br/>
                        <input className="form-control" type="email" name="email" defaultValue={`${loggedInUser.email}`} placeholder="Email" required/>
                        <br/>
                        <input className="form-control" type="date" name="date" placeholder="Date" required/>
                        <br/>
                        <input className="form-control" type="text" name="description" placeholder="Description" required/>
                        <br/>
                        <input className="form-control" type="text" name="jobs" defaultValue={`${jobTitle}`} placeholder="Organization books at the library" required/>
                        <br/>
                    </form>
                    <Link to="/activities" className="text-decoration-none">
                        <Button type="submit" block>Registration</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;