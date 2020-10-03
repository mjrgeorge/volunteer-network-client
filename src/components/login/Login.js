import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Login = () => {
    return (
        <div>
            <div style={{ height:'80px'}} className="d-flex justify-content-center m-5">
                <img src={logo} alt="log"/>
            </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="m-5 p-5 text-center" style={{width: '50%', border: '3px solid lightGray', borderRadius: '10px'}}>
                        <h2>Login With</h2>
                        <Button className="rounded-pill p-3 m-3" block>
                            Continue with Google
                        </Button>
                        <p>Don't have an account? <Link>Create an account</Link></p>
                    </div>
                </div>
        </div>
    );
};

export default Login;