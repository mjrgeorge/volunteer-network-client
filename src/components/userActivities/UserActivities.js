import React from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png';
import extra from '../../images/extraVolunteer.png';

const UserActivities = () => {
    return (
        <div className="container bg-light">
            <div className="row mt-4 mb-5">
                <div className="col-md-7">
                    <img style={{ height:"60px"}} src={logo} alt="Logo"/>
                </div>
                <div className="col-md-5">
                    <Nav className="justify-content-center" activeKey="/#">
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="/#">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Donation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark"><h5>Sufi Ahmed</h5></Nav.Link>
                        </Nav.Item>
                    </Nav>
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