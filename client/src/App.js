import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FetchUser from './components/FetchUser'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import NoMatch from './components/NoMatch'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Container} from 'semantic-ui-react'



function App() {
  return (
    <>
    <Navbar/>
    <FetchUser>
    <Container>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
      </Container> 
      </FetchUser>
    </>
  );
}

export default App;
