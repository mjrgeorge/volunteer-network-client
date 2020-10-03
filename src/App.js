import React from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registration">
            <RegistrationForm/>
          </Route>
          <Route path="/activities">
            <UserActivities/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
