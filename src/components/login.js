import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { fetchUser } from '../actions/actions';
import '../cssFiles/login.css';

const initState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
};

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = initState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate = () => {
    const { email, password } = this.state;
    const { error } = this.props;
    let emailError = '';
    let passwordError = '';

    if (!email.includes('@')) {
      emailError = 'incorrect email';
    }

    if (error) {
      console.log(error);
      emailError = 'wrong email or password';
    }

    if (password.length < 6) {
      passwordError = 'wrong password';
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fetchUser } = this.props;
    const isValid = this.validate();
    if (isValid) {
      fetchUser(this.state);
      NotificationManager.success('login successful', 'success', 4000);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { userReducer, history } = this.props;
    if (userReducer.loggedIn === true) {
      history.push('/bikes');
    }
    const { emailError, passwordError } = this.state;
    return (
      <section>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="grey">Login</h1>
            <div className="control">
              <label htmlFor="email" className="email">
                Email
                <input
                  id="email"
                  autoComplete="off"
                  required
                  type="email"
                  onChange={this.handleChange}
                  className="login-input"
                  placeholder="Email"
                />
              </label>
              <div style={{ color: 'cyan', fontWeight: 'bolder', fontSize: '18px' }}>{emailError}</div>
            </div>
            <div className="control">
              <label htmlFor="password" className="email">
                Password
                <input
                  id="password"
                  required
                  autoComplete="off"
                  type="password"
                  onChange={this.handleChange}
                  className="login-input"
                  placeholder="password"
                />
              </label>
              <div style={{ color: 'red', fontWeight: 'bolder', fontSize: '18px' }}>{passwordError}</div>
            </div>
            <div className="control">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
          <NotificationContainer />
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userInfo => dispatch(fetchUser(userInfo)),
});

const mapStateToProps = state => ({
  userReducer: state.userReducer,
  error: state.userReducer.error,
});

LogIn.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
  userReducer: PropTypes.func.isRequired,
  error: PropTypes.objectOf.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
/* eslint-enable */
