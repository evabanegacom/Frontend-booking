import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarDetails } from '../actions/actions';
import Booking from './booking';
import '../cssFiles/carInfo.css';

class CarInfo extends Component {
  componentDidMount() {
    const { details } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    details(id);
    // const carId = this.props.match.params.id
  }

  render() {
    const { carDetails } = this.props;
    const revealForm = () => {
      document.querySelector('.form-con').classList.remove('hide');
      document.querySelector('.carDesign').classList.add('hide');
      document.querySelector('.carDesign').classList.remove('carDesign');
    };
    const carUrl = carDetails.avatar ? carDetails.avatar.url : '';
    const theCar = !carDetails.length ? (
      <div className="carInfos">
        <div className="carousel">cars goes here carousel</div>
        <div className="carDesign showCar">
          <div className="theDetails">
            <p>{carDetails.manufacturer}</p>
            <p>{carDetails.price}</p>
            <p>{carDetails.country}</p>
          </div>
          <div className="mustang">
            <p>{carDetails.name}</p>
            <img src={carUrl} alt="mustang" />
            <button onClick={revealForm} className="bookButton" type="button">
              Book
            </button>
          </div>
          <div className="otherDetails">
            <p>{carDetails.speed}</p>
            <p>{carDetails.model}</p>
            <p>{carDetails.category}</p>
          </div>
        </div>
        <div className="form-con hide">
          <Booking carId={carDetails} />
        </div>
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
