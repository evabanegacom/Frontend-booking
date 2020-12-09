import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarDetails } from '../actions/actions';
import Booking from './booking';

class CarInfo extends Component {
  componentDidMount() {
    console.log('something');

    const { details } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    // const carId = this.props.match.params.id
    details(id);
  }

  render() {
    const { carDetails } = this.props;
    const theCar = !carDetails.length ? (
      <div>
        <p>{carDetails.manufacturer}</p>
        <p>{carDetails.name}</p>
        <p>{carDetails.country}</p>
        <p>{carDetails.speed}</p>
        <p>{carDetails.price}</p>
        <p>{carDetails.model}</p>
        <p>{carDetails.category}</p>
        <img src={carDetails.avatar.url} alt="" />
        <Booking carId={carDetails} />
      </div>
    ) : (
      <p>wait for it</p>
    );
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

const mapDispatchToProps = dispatch => ({
  details: id => dispatch(getCarDetails(id)),
});

CarInfo.propTypes = {
  details: PropTypes.func.isRequired,
  carDetails: PropTypes.arrayOf.isRequired,
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarInfo);
