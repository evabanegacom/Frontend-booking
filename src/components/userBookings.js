import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userBookingDetail, getCars } from '../actions/actions';
/* eslint-disable */
class BookingDetail extends Component {
  componentDidMount() {
    const { getDetail, theCars } = this.props;
    theCars();
    getDetail();
  }

  render() {
    const { bookingDetail, cars, userReducer } = this.props;
    const checkDetail = this.props.match.params.id;
    const mappin = bookingDetail.filter(
      (booking) => booking.user_id === parseInt(checkDetail)
    );
    const checkForCar = mappin ? (
      mappin.map((mapps) => {
        const carCheck = cars.filter((car) => car.id === mapps.car_id);
        const checkingCar = carCheck ? (
          carCheck.map((checks) => (
            <div>
              <p>{checks.name}</p>
              <img src={checks.avatar.url} alt="" />
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
      mappin.map((mapp) => (
        <div>
          <p>{mapp.description}</p>
          <p>{mapp.city}</p>
          <p>{mapp.date}</p>
        </div>
      ))
    ) : (
      <p>{userReducer.user.name} you have no bookings yet</p>
    );

    const combine = () => (
      <div className="bookingDetails">
        <div>{checking}</div>
        <div>{checkForCar}</div>
      </div>
    );
    return (
      <div>
        booking details goes here
        {combine()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookingDetail: state.bookingDetailReducer.userBooking,
  cars: state.carReducer.cars,
  userReducer: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getDetail: () => {
    dispatch(userBookingDetail());
  },
  theCars: () => {
    dispatch(getCars());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
/* eslint-enable */
