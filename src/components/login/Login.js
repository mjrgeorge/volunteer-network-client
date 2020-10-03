import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import google from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: ""
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    };
    console.log(user, loggedInUser);
    return (
        <div className="container bg-light pt-5">
            <Link to="/home">
                <div style={{ height:'80px'}} className="d-flex justify-content-center">
                    <img className="w-25" src={logo} alt="log"/>
                </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center">
                <div className="m-5 p-5 text-center" style={{width: '50%', border: '5px solid lightGray', borderRadius: '5px'}}>
                    <h2>Login With</h2>
                    <Button onClick={handleSignIn} className="rounded-pill p-2 m-4" block>
                        <img className="pr-3" style={{width: '50px'}} src={google} alt="icon"/>
                        Continue with Google
                    </Button>
                    <p>Don't have an account? <Link>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;