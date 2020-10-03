import React, { useContext } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png';
import extra from '../../images/extraVolunteer.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const UserActivities = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                        <Link className="text-dark m-3" to="#">Donation</Link>
                        <Link className="text-dark m-3" to="/event">Event</Link>
                        <Link className="text-dark m-3" to="#">Blog</Link>
                        <Link className="text-dark m-3 h5 text-decoration-none" to="#">{loggedInUser.name}</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <Card.Img src={extra} alt="Logo"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5>Humanity More</h5>
                                    <p>29 Sep 2020</p>
                                    <Button variant="dark">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <Card.Img src={extra} alt="Logo"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4>Humanity More</h4>
                                    <p>29 Sep 2020</p>
                                    <Button variant="dark">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <Card.Img src={extra} alt="Logo"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4>Humanity More</h4>
                                    <p>29 Sep 2020</p>
                                    <Button variant="dark">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <Card.Img src={extra} alt="Logo"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4>Humanity More</h4>
                                    <p>29 Sep 2020</p>
                                    <Button variant="dark">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserActivities;