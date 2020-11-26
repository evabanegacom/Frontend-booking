import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/registration';
import LogIn from './components/login';
import BikeList from './components/bikeList';
import BikeInfo from './components/bikeInfo';
import Bookings from './components/userBookings';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signIn" component={LogIn} />
          <Route exact path="/bikes" component={BikeList} />
          <Route exact path="/bike/:id" component={BikeInfo} />
          <Route exact path="/user/:id/:bookings" component={Bookings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
