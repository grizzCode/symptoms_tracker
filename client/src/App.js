import React from 'react';
import './App.css';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar'
import FetchUser from './components/FetchUser'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import Register from './components/Register'
import Symptoms from './components/Symptoms'
import TestingFacilities from './components/testing_facilities';


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
        <Route exact path='/symptoms' component={Symptoms} />
        <Route exact path="/testingFacilities" component={TestingFacilities} />
        <Route component={NoMatch} />
      </Switch>
      </Container> 
      </FetchUser>
    </>
  );
}

export default App;
