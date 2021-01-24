import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logUserOut } from '../actions/actions';

const SignedInLInks = ({ logOut }) => {
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    logOut();
    history.push('/');
  };

  return (
    <div>
      <p><NavLink onClick={handleClick} to="/">Logout</NavLink></p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logUserOut()),
});

SignedInLInks.propTypes = {
  logOut: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(SignedInLInks);
