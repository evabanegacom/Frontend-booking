import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userBookingDetail, getCars } from '../actions/actions';
import '../cssFiles/details.css';

class BookingDetail extends Component {
  componentDidMount() {
    const { getDetail, theCars } = this.props;
    theCars();
    getDetail();
  }

  render() {
    const {
      bookingDetail, cars, userReducer, match,
    } = this.props;
    const { params } = match;
    const { id } = params;
    const checkDetail = id;
    const mappin = bookingDetail.filter(
      booking => booking.user_id === parseInt(checkDetail, 10),
    );
    const checkForCar = mappin ? (
      mappin.map(mapps => {
        const carCheck = cars.filter(car => car.id === mapps.car_id);
        const checkingCar = carCheck ? (
          carCheck.map(checks => (
            <div className="carItself" key={checks.id}>
              <p>{checks.name}</p>
              <img src={checks.avatar.url} alt="" />
              <p>{checks.price}</p>
            </div>
          ))
        ) : (
          <p>no cars available</p>
        );
        return checkingCar;
      })
    ) : (
      <p>nothing here</p>
    );

    const checking = mappin.length ? (
      mappin.map(mapp => (
        <div className="carItems" key={mapp.id}>
          <div className="detailDesc">
            <p className="carDesc">Description: </p>
            <p className="city desc">{mapp.description}</p>
          </div>
          <div className="detailDesc">
            <p className="carDesc">City:</p>
            <p className="city">{mapp.city}</p>
          </div>
          <div className="detailDesc">
            <p className="carDesc">Date</p>
            <p className="city">{mapp.date}</p>
          </div>
          <div className="detailDesc">
            <p className="carDesc">User</p>
            <p className="city">{mapp.username}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="bookingStatus">
        {userReducer.user.name}
        {' '}
        you have no bookings yet
      </p>
    );

    const combine = () => (
      <div className="bookingDetails">
        <div className="child">{checking}</div>
        <div className="childCar">{checkForCar}</div>
      </div>
    );
    return (
      <div>
        {combine()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookingDetail: state.bookingDetailReducer.userBooking,
  cars: state.carReducer.cars,
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  getDetail: () => {
    dispatch(userBookingDetail());
  },
  theCars: () => {
    dispatch(getCars());
  },
});

BookingDetail.propTypes = {
  getDetail: PropTypes.func.isRequired,
  theCars: PropTypes.func.isRequired,
  bookingDetail: PropTypes.arrayOf.isRequired,
  cars: PropTypes.arrayOf.isRequired,
  userReducer: PropTypes.func.isRequired,
  match: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
