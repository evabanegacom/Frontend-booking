import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUserUp } from '../actions/actions';
import '../cssFiles/registration.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { signUserUp, history } = this.props;
    signUserUp(this.state);
    history.push('/signIn');
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div className="reg">
        <form onSubmit={this.handleSubmit} className="white">
          <h3 className="reg-head">Register</h3>
          <div className="input-field">
            <label htmlFor="name">
              Name (5 characters min)
              <input
                id="name"
                autoComplete="off"
                required
                type="text"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="email">
              Email
              <input
                id="email"
                autoComplete="off"
                required
                type="email"
                onChange={this.handleChange}
              />
            </label>
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
          </div>
          <div className="button-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signUserUp: userInfo => dispatch(signUserUp(userInfo)),
});

SignUp.propTypes = {
  signUserUp: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
