import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import user from '../../images/users.png';
import plus from '../../images/plus.png';
import trash from '../../images/trash.png';

const VolunteerList = () => {
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
                    <Button className="ml-4" variant="light"><img style={{height: '20px'}} src={plus} alt="Plus"/> Add Event</Button>
                </div>
                <div className="col-md-9">
                    <h3 className="m-5">Volunteer register list </h3>
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
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Jubayer Rahman</td>
                                <td>mjrgeorge@gmail.com</td>
                                <td>22-10-2020</td>
                                <td>Organize books at the library</td>
                                <td className="text-center">
                                    <img className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;