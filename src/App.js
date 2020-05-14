import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserLanding from './components/userlanding.component';


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ARM Solar Solution</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/user-home" component={UserLanding} />
      </Switch>
      <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div></Router>
  );
}

export default App;