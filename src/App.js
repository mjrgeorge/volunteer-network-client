import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';
import NotMatch from './components/notMatch/NotMatch';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import UserActivities from './components/userActivities/UserActivities';
import VolunteerList from './components/volunteerList/VolunteerList';
import AddEvent from './components/addEvent/AddEvent';
import PrivateRoute from './components/privateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [usersInfo, setUsersInfo] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, usersInfo, setUsersInfo]}>
      <Router>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/registration/:jobTitle">
              <RegistrationForm/>
            </PrivateRoute>
            <PrivateRoute path="/activities">
              <UserActivities/>
            </PrivateRoute>
            <PrivateRoute path="/volunteer">
              <VolunteerList/>
            </PrivateRoute>
            <PrivateRoute path="/event">
              <AddEvent/>
            </PrivateRoute>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="*">
              <NotMatch/>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
