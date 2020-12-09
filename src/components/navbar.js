import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { autoLogin } from '../actions/actions';
import SignedInLInks from '../container/signInLink';
import SignedOutLinks from '../container/signOutLInk';
import '../cssFiles/navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    const { autoLogin } = this.props;
    autoLogin();
  }

  render() {
    const { userReducer } = this.props;
    return (
      <div className="navbar">
        {
              !userReducer.loggedIn ? <SignedOutLinks /> : (
                <div>
                  <h5>
                    Welcome,
                    { userReducer.user.name }
                  </h5>
                  <SignedInLInks />
                </div>
              )
            }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin()),
});

Navbar.propTypes = {
  autoLogin: PropTypes.func.isRequired,
  userReducer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
