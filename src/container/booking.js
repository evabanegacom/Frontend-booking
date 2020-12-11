import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userBooking } from '../actions/actions';
import '../cssFiles/booking.css';

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: '',
      car_id: '',
      date: '',
      description: '',
      username: '',
      model: '',
      city: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bookings, userReducer, history } = this.props;
    if (userReducer.loggedIn === true) {
      bookings(this.state);
    }
    history.push(`/user/${userReducer.user.id}/bookings`);
  };

  handleChange = e => {
    const names = document.querySelector('.nameOnly');
    const cars = document.querySelector('.carOnly');
    const carmodel = document.querySelector('.carmodelOnly');
    const username = document.querySelector('.usernameOnly');
    this.setState({
      [e.target.id]: e.target.value,
      user_id: names.value,
      car_id: cars.value,
      username: username.value,
      model: carmodel.value,
    });
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    const { userReducer, carId } = this.props;
    const { city } = this.state;
    const revealCar = () => {
      const forms = document.querySelector('.showCar');
      console.log(forms);
      document.querySelector('.form-con').classList.add('hide');
      document.querySelector('.showCar').classList.remove('hide');
      document.querySelector('.showCar').classList.add('carDesign');
    };
    return (
      <div className="booking-container">
        <form onSubmit={this.handleSubmit} className="car-form forms">
          <h3 className="grey-text text-darken-3">BOOK YOUR CAR</h3>
          <div className="hide">
            <label htmlFor="user">
              User
              <input
                id="user_id"
                autoComplete="off"
                className="nameOnly"
                required
                type="text"
                readOnly
                value={userReducer.user.id}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="user">
              User Name
              <input
                id="username"
                autoComplete="off"
                className="usernameOnly"
                required
                type="text"
                readOnly
                value={userReducer.user.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="hide">
            <label htmlFor="car">
              Car
              <input
                id="car_id"
                className="carOnly"
                autoComplete="off"
                required
                type="text"
                value={carId.id}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="model">
              Car model
              <input
                id="model"
                required
                autoComplete="off"
                className="carmodelOnly"
                type="text"
                value={carId.name}
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
          <div className="input-field forDesc">
            <label htmlFor="password">
              Description
              <textarea
                id="description"
                required
                autoComplete="off"
                type="text"
                onChange={this.handleChange}
                className="description"
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              Pick your favorite City:&nbsp;&nbsp;&nbsp;
              <select className="favCity" value={city} onChange={this.handleChange}>
                {' '}
                <option value="CITY">Select</option>
                <option value="Denver">Denver</option>
                <option value="Lagos">Lagos</option>
                <option value="Okinawa">Okinawa</option>
                <option value="Normandy">Normandy</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Madrid">Madrid</option>
              </select>
            </label>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Book
            </button>
          </div>
          <div className="cancel">
            <button onClick={revealCar} type="button" className="btn pink lighten-1 z-depth-0">
              Cancel
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

Booking.propTypes = {
  bookings: PropTypes.func.isRequired,
  userReducer: PropTypes.func.isRequired,
  carId: PropTypes.objectOf.isRequired,
  history: PropTypes.objectOf.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Booking));
