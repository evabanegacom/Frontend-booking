import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarDetails } from '../actions/actions';
import Booking from './booking';

/* eslint-disable */
class CarInfo extends Component {
  componentDidMount() {
    const { details } = this.props;
    const carId = this.props.match.params.id
    details(carId);
  }
  render() {
    const { carDetails } = this.props;
    const theCar = carDetails ? (
        <div>
          <p>{carDetails.manufacturer}</p>
          <p>{carDetails.name}</p>
          <Booking carId={carDetails.id}/>
        </div>
    ) : (
        <p>no cars here</p>
    )  
    return (
      <div>
        <p>car details here</p>
        {theCar}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  carDetails: state.carDetailsReducer.car,
});

const mapDispatchToProps = (dispatch) => ({
  details: (id) => dispatch(getCarDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarInfo);
/* eslint-enable */
