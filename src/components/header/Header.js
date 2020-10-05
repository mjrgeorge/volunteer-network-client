import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 pl-5">
                    <Link to="/home">
                        <img style={{ height:"60px"}} src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="d-flex justify-content-center">
                        <Link className="m-3 h5" to="/home">Home</Link>
                        <Link className="m-3 h5" to="/event">Donation</Link>
                        <Link className="m-3 h5" to="/activities">Event</Link>
                        <Link className="m-3 h5" to="/login">Login</Link>
                        <Link className="text-white m-3" to="/registration/jobTitle">
                            <Button className="bg-info">Register</Button>
                        </Link>
                        <Link className="text-white m-3" to="/volunteer">
                            <Button className="bg-dark">Admin</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{ height:"50vh"}} className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-dark m-4 display-4">I GROW BY HELPING PEOPLE IN NEED</h1>
                    <div className="d-flex justify-content-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search...."/>
                            <Button className="btn-info">Search</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;