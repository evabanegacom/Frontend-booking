import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../cssFiles/registration.css';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { signUserUp } from '../actions/actions';

const initState = {
  email: '',
  name: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: '',
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = initState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate = () => {
    const { email, name, password } = this.state;
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!email.includes('@')) {
      emailError = 'invalid email or already exists';
    }

    if (name.length < 5) {
      nameError = 'characters must be at least five';
    }

    if (password.length < 6) {
      passwordError = 'characters must be at least 6';
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signUserUp } = this.props;
    const isValid = this.validate();
    if (isValid) {
      signUserUp(this.state);
      this.setState(initState);
      NotificationManager.success('Signed up successsfully', 'congrats', 4000);
    }
  };

  createNotification = type => () => {
    switch (type) {
      case 'info':
        NotificationManager.info('info message');
        break;
      case 'success':
        NotificationManager.success('Signed up successsfully', 'congrats');
        break;
      case 'warning':
        NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000,
        );
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;

      default:
        return null;
    }
    return null;
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { history, userReducer } = this.props;
    if (JSON.stringify(userReducer.user) !== '{}') {
      history.push(`/user/${userReducer.user.id}/bookings`);
    }
    const { nameError, emailError, passwordError } = this.state;
    return (
      <div className="reg">
        <form onSubmit={this.handleSubmit} className="white">
          <h3 className="reg-head">Register</h3>
          <div className="input-field">
            <label htmlFor="name">
              FullName (5 characters min)
              <input
                id="name"
                autoComplete="off"
                required
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <div style={{ color: 'red' }}>{nameError}</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">
              Email
              <input
                id="email"
                autoComplete="off"
                required
                placeholder="email"
                onChange={this.handleChange}
              />
            </label>
            <div style={{ color: 'red' }}>{emailError}</div>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              Password (6 characters min)
              <input
                id="password"
                required
                autoComplete="off"
                type="password"
                onChange={this.handleChange}
              />
            </label>
            <div style={{ color: 'red' }}>{passwordError}</div>
          </div>
          <div className="button-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Register
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signUserUp: userInfo => dispatch(signUserUp(userInfo)),
});

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

SignUp.propTypes = {
  signUserUp: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
  userReducer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
