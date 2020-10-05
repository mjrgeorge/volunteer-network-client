import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import user from '../../images/users.png';
import plus from '../../images/plus.png';

const AddEvent = () => {
    const [event, setEvent] = useState({
        title: '',
        date: '',
        description: '',
    });

    const handleChange = (e) => {
        const newUserInfo = {...event};
        newUserInfo[e.target.name] = e.target.value;
        setEvent(newUserInfo);
    };

    const handleSubmit =(e)=> {
        fetch('https://powerful-ravine-91496.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(event)
        })
        .then(response => response.json())
        .then(result =>{
            if(result){
                fieldReset();
            }
        })
        .catch(err => console.log(err));
        e.preventDefault();
    };

    const fieldReset = () => {
        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('description').value = '';
    }

    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-md-3">
                    <div className="m-4">
                    <Link to="/home">
                        <img style={{height: '70px'}} src={logo} alt="log"/>
                    </Link>
                    </div>
                    <div className="m-4">
                        <Link to="/volunteer" className="text-decoration-none"><img style={{height: '20px'}} src={user} alt="User"/> Volunteer register list </Link>
                    </div>
                    <Button className="ml-4" variant="light"><img style={{height: '20px'}} src={plus} alt="Plus"/> Add Event </Button>
                </div>
                <div className="col-md-9 pb-5">
                    <h3 className="m-5">Add Event</h3>
                    <Form onSubmit={handleSubmit} className="bg-white p-5 rounded">
                        <Row>
                            <Col>
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control id="title" onBlur={handleChange} type="text" name="title" placeholder="Enter Title" required/>
                            </Col>
                            <Col>
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control id="date" onBlur={handleChange} type="date" name="date" placeholder="Event date" required/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <label>Example textarea</label>
                                <textarea id="description" onBlur={handleChange} className="form-control" name="description" placeholder="Enter Description"  required></textarea>
                            </Col>
                            <Col>
                                <br/>
                                <Form.Label>Banner</Form.Label>
                                <Form.Control type="file"/>
                            </Col>
                        </Row>
                        <br/>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;