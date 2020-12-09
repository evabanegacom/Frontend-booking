import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actions';
import '../cssFiles/login.css';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { fetchUser } = this.props;
    fetchUser(this.state);
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
    return (
      <section>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="white">
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
            </div>
            <div className="control">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
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
});

LogIn.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
  userReducer: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
/* eslint-enable */
