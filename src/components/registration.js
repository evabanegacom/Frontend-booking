import React from 'react';

const SignUp = () => (
  <div className="container">
    <form className="white">
      <h5 className="grey-text text-darken-3">Register</h5>
      <div className="input-field">
        <label htmlFor="email">
          Email
          <input
            id="email"
            autoComplete="off"
            required
            type="email"
          />
        </label>
      </div>
      <div className="input-field">
        <label htmlFor="password">
          Password
          <input
            id="password"
            autoComplete="off"
            required
            type="password"
          />
        </label>
      </div>
      <div className="input-field">
        <label htmlFor="firstName">
          FirstName
          <input
            id="firstName"
            required
            type="text"
          />
        </label>
      </div>
      <div className="input-field">
        <label htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            required
            autoComplete="off"
            type="text"
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

export default SignUp;
