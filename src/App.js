import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/registration';
import LogIn from './components/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>REACT FRONT END</h1>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/:signIn" component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
