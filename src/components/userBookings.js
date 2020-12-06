import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userBookingDetail } from '../actions/actions';
/* eslint-disable */
class BookingDetail extends Component {
  componentDidMount() {
    const { getDetail } = this.props;
    getDetail();
  }

  render() {
    const { bookingDetail, cars } = this.props;
    const checkDetail = this.props.match.params.id;
    const mappin = bookingDetail.filter(
      (booking) => booking.user_id === parseInt(checkDetail)
    );
    const checkForCar = mappin ? (
      mappin.map((mapps) => {
        const carCheck = cars.filter((car) => car.id === mapps.car_id);
        const checkingCar = carCheck ? (
          carCheck.map((checks) => <p>{checks.name}</p>)
        ) : (
          <p>no cars available</p>
        );
        return checkingCar;
      })
    ) : (
      <p>nothing here</p>
    );

    const checking = mappin ? (
      mappin.map((mapp) => <p>{mapp.description}</p>)
    ) : (
      <p>nothing here</p>
    );

    const combine = () => (
      <div className="bookingDetails">
        <p>{checking}</p>
        <p>{checkForCar}</p>
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
});

const mapDispatchToProps = (dispatch) => ({
  getDetail: () => {
    dispatch(userBookingDetail());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
/* eslint-enable */
