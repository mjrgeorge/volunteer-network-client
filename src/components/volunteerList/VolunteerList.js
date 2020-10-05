import React, { useContext, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import user from '../../images/users.png';
import plus from '../../images/plus.png';
import trash from '../../images/trash.png';
import { UserContext } from '../../App';

const VolunteerList = () => {
    const [, , usersInfo, setUsersInfo] = useContext(UserContext);
    useEffect(()=>{
        fetch('https://powerful-ravine-91496.herokuapp.com/allVolunteers')
        .then(response =>response.json())
        .then(data =>setUsersInfo(data))
        .catch(err =>console.log(err))
    }, []);

    const handleDelete = (id) => {
        fetch(`https://powerful-ravine-91496.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result =>{
            if(result){
                document.getElementById(`${id}`).style.display="none";
            }
        })
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-md-2">
                    <div className="mt-5 mb-5">
                        <Link to="/home">
                            <img style={{height: '70px', width: '200px'}} src={logo} alt="log"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/volunteer"><img style={{height: '20px'}} src={user} alt="User"/> Volunteer register </Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/event">
                            <Button className="ml-1 text-info" variant="light"><img style={{height: '20px'}} src={plus} alt="Plus"/> Add Event</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-10">
                    <h3 className="m-5">Volunteer Registered List: {usersInfo.length} </h3>
                    <Table className="text-center" style={{border: '15px solid white', borderRadius:'10px'}} striped bordered hover size="sm">
                        <thead>
                            <tr className="h5">
                                <th>Name</th>
                                <th>First Email Id</th>
                                <th>Date</th>
                                <th>Volunteer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        usersInfo.map(user=>
                            <tr id={`${user._id}`} key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{new Date(user.date).toDateString('MM/dd/yy')}</td>
                                <td>{user.job}</td>
                                <td className="text-center">
                                    <img onClick={()=>handleDelete(`${user._id}`)} className="rounded bg-danger p-1" style={{height: '30px', cursor: 'pointer'}} src={trash} alt="User"/>
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