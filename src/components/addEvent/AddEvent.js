import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import user from '../../images/users.png';
import plus from '../../images/plus.png';

const AddEvent = () => {
    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-md-3">
                    <div className="m-4">
                        <img style={{height: '70px'}} src={logo} alt="log"/>
                    </div>
                    <div className="m-4">
                        <Link><img style={{height: '20px'}} src={user} alt="User"/> Volunteer register list </Link>
                    </div>
                    <Button className="ml-4" variant="light"><img style={{height: '20px'}} src={plus} alt="Plus"/> Add Event </Button>
                </div>
                <div className="col-md-9 pb-5">
                    <h3 className="m-5">Add Event</h3>
                    <Form className="bg-white p-5 rounded">
                        <Row>
                            <Col>
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter Title" />
                            </Col>
                            <Col>
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control type="date" name="eventDate" placeholder="Event date" />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" placeholder="Enter Description"></textarea>
                            </Col>
                            <Col>
                                <br/>
                                <Form.Label>Banner</Form.Label>
                                <Form.Control type="file" name="description" placeholder="Enter Description" />
                            </Col>
                        </Row>
                    </Form>
                    <br/>
                    <Button type="submit" className="ml-5">Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;