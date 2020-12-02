import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './components/registration';
import LogIn from './components/login';
import BikeList from './components/bikeList';
import BikeInfo from './components/bikeInfo';
import Bookings from './components/userBookings';
import Home from './components/home';
import Navbar from './components/navbar';
import { autoLogin, logUserOut } from './actions/actions';

/* eslint-disable */
class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin();
    console.log(this.props.userReducer)
  }
  
  
  handleClick = (e) => {
    e.preventDefault()
    this.props.logOut()
  }
  render() {
    return (
      <div className="App">
        {
              !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : (
                <h1>
                  Welcome,
                  {this.props.userReducer.user.name}
                </h1>
              )
            }
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signIn" component={LogIn} />
            <Route exact path="/bikes" component={BikeList} />
            <Route exact path="/bike/:id" component={BikeInfo} />
            <Route exact path="/user/:id/:bookings" component={Bookings} />
          </Switch>
          <button type='submit' onClick={ this.handleClick }>logout</button>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin()),
  logOut: () => dispatch(logUserOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* eslint-enable */
