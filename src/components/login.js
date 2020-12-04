import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actions';
/* eslint-disable */
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
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { userReducer, history } = this.props
    if(userReducer.loggedIn === true){
    history.push('/bikes')
  }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Login</h5>
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
              Password
              <input
                id="password"
                required
                autoComplete="off"
                type="password"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
/* eslint-enable */
