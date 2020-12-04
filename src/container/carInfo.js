import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarDetails } from '../actions/actions';

/* eslint-disable */
class CarInfo extends Component {
  componentDidMount() {
    const { details } = this.props;
    const carId = this.props.match.params.id
    details(carId);
  }
  render() {
    const { carDetails } = this.props;
    // const carsId = this.props.match.params.id
    // const checkCar = carDetails === carsId
    const theCar = carDetails ? (
        <div>
          <p>{carDetails.manufacturer}</p>
          <p>{carDetails.name}</p>
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
