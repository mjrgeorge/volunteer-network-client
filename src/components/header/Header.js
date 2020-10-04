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
                        <Link className="m-3 h5" to="/activities">Donation</Link>
                        <Link className="m-3 h5" to="/event">Event</Link>
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
            <div style={{ height:"200px"}} className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-dark mb-3">Best Food Waiting Your Belly</h1>
                    <div className="d-flex justify-content-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search...."/>
                            <Button type="submit" className="btn-info">Search</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;