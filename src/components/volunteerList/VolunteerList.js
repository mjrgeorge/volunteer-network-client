import React, { useContext, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import user from '../../images/users.png';
import plus from '../../images/plus.png';
import trash from '../../images/trash.png';
import { UserContext } from '../../App';

const VolunteerList = () => {
    const [loggedInUser, setLoggedInUser, usersInfo, setUsersInfo] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/allVolunteers')
        .then(response =>response.json())
        .then(data =>setUsersInfo(data))
        .catch(err =>console.log(err))
    }, [])

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
                        <Link to="/volunteer"><img style={{height: '20px'}} src={user} alt="User"/> Volunteer register list </Link>
                    </div>
                    <Link to="/event" className="text-decoration-none">
                        <Button className="ml-4" variant="light"><img style={{height: '20px'}} src={plus} alt="Plus"/> Add Event</Button>
                    </Link>
                </div>
                <div className="col-md-9">
                    <h3 className="m-5">Volunteer register list</h3>
                    <Table style={{border: '15px solid white', borderRadius:'10px'}} striped bordered hover size="sm">
                        <thead className="text-center">
                            <tr>
                                <th>Name</th>
                                <th>First Email Id</th>
                                <th>Registration Date</th>
                                <th>Volunteer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        usersInfo.map(user=>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{new Date(user.date).toDateString('MM/dd/yy')}</td>
                                <td>{user.job}</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            )
                    }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;