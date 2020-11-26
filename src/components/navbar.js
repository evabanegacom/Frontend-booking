import React from 'react';
import SignedInLInks from '../container/signInLink';
import SignedOutLinks from '../container/signOutLInk';

const Navbar = () => (
  <div>
    <h5>Navbar goes here</h5>
    <SignedInLInks />
    <SignedOutLinks />
  </div>
);
export default Navbar;
