import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { autoLogin } from '../actions/actions';
import SignedInLInks from '../container/signInLink';
import SignedOutLinks from '../container/signOutLInk';

class Navbar extends React.Component {
  componentDidMount() {
    const { autoLogin } = this.props;
    autoLogin();
  }

  render() {
    const { userReducer } = this.props;
    return (
      <div className="App">
        {
              !userReducer.loggedIn ? <SignedOutLinks /> : (
                <div>
                  <h1>
                    Welcome,
                    { userReducer.user.name }
                  </h1>
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
