import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLInks = () => (
  <ul className="right">
    <li><NavLink to="/">Logout</NavLink></li>
    <li><NavLink to="/" className="me">NN</NavLink></li>
  </ul>
);

export default SignedInLInks;
