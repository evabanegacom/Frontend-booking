import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLInks from '../container/signInLink';
import SignedOutLinks from '../container/signOutLInk';

const Navbar = () => (
  <div>
    <h5>Navbar goes here</h5>
    <Link to="/bikes">Bikes</Link>
    <Link to="/user/:id/:bookings">Bookings</Link>
    <SignedInLInks />
    <SignedOutLinks />
  </div>
);
export default Navbar;
