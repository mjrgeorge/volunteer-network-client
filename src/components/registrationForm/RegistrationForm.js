import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';

const RegistrationForm = () => {
    const {jobTitle} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        date: '',
        description: '',
        job: jobTitle

    });

    const handleChange = (e) => {
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }

    const history = useHistory();
    const handleSubmit =(e)=> {
        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result =>{
            if(result){
                history.push(`/activities`);
            }
        })
        .catch(err => console.log(err));
        e.preventDefault();
    };

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
                    <form onSubmit={handleSubmit}>
                        <input onBlur={handleChange} className="form-control" type="text" name="name" defaultValue={`${user.name}`} placeholder="Full Name" required/>
                        <br/>
                        <input onBlur={handleChange} className="form-control" type="email" name="email" defaultValue={`${user.email}`} placeholder="Email" required/>
                        <br/>
                        <input onBlur={handleChange} className="form-control" type="date" name="date" placeholder="Date" required/>
                        <br/>
                        <input onBlur={handleChange} className="form-control" type="text" name="description" placeholder="Description" required/>
                        <br/>
                        <input onBlur={handleChange} className="form-control" type="text" name="job" defaultValue={`${jobTitle}`} placeholder="Organization books at the library" required/>
                        <br/>
                        <Button type="submit" block>Registration</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;