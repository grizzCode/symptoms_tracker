import React from 'react';
import logo from './logo.svg';
import './App.css';

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
