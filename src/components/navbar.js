import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
        {!userReducer.loggedIn ? (
          <SignedOutLinks />
        ) : (
          <div className="navbar-div">
            <div className="small-nav">
              <div className="smallName">
                <h5 className="nameOfUser">{userReducer.user.name}</h5>
              </div>
              <div className="small-menu">
                <div className="dropdown">
                  <button className="small-but" type="button">
                    <i
                      className="fa fa-bars"
                      aria-label="button"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="dropdown-content">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/bikes">BOOK</NavLink>
                    <NavLink
                      to={`/user/${userReducer.user.id}/bookings`}
                      key={Math.random()}
                    >
                      <p>Bookings</p>
                    </NavLink>
                    <SignedInLInks />
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage">
              <Link to="/">Home</Link>
            </div>
            <div className="usersname">
              <NavLink to="/bikes">BOOK</NavLink>
              <NavLink
                to={`/user/${userReducer.user.id}/bookings`}
                key={Math.random()}
              >
                <p>Bookings</p>
              </NavLink>
              <h5 className="nameOfUser">{userReducer.user.name}</h5>
              <SignedInLInks />
            </div>
          </div>
        )}
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
