import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userBooking } from '../actions/actions';

/* eslint-disable */

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: '',
      car_id: '',
      date: '',
      description: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bookings, userReducer } = this.props;
    if( userReducer.loggedIn === true){
      bookings(this.state);
    }
  }

  handleChange = e => {
    const names = document.querySelector('.nameOnly')
    const cars = document.querySelector('.carOnly')
    this.setState({
      [e.target.id]: e.target.value,
      user_id: names.value,
      car_id: cars.value,
    });
  }

  render() {
    const { userReducer, carId} = this.props
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="user">
              User
              <input
                id="user_id"
                autoComplete="off"
                className='nameOnly'
                required
                type="text"
                readOnly
                value={userReducer.user.id}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="email">
              Car
              <input
                id="car_id"
                className='carOnly'
                autoComplete="off"
                required
                type="text"
                value={carId}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              Date
              <input
                id="date"
                required
                autoComplete="off"
                type="date"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              Description
              <textarea
                id="description"
                required
                autoComplete="off"
                type="text"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Book
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  bookings: booking => dispatch(userBooking(booking)),
});

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
 /* eslint-enable */
