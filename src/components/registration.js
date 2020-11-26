import React, { Component } from 'react';
import axios from 'axios';

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
    const { name, email, password } = this.state;
    axios.post('http://localhost:3001/api/v1/users', {
      name,
      email,
      password,
    });
    e.preventDefault();
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="name">
              Name
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
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
