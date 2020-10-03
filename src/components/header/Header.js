import React from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
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
                    <Nav className="justify-content-center" activeKey="/#">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Donation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/event">Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" href="/registration">
                                <Button className="bg-info">Register</Button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" href="/volunteer">
                                <Button className="bg-dark">Admin</Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
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