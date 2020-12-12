import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { getCarDetails, getCars } from '../actions/actions';
import Booking from './booking';
import BikeInfo from '../components/bikeInfo';
import '../cssFiles/carInfo.css';

class CarInfo extends Component {
  componentDidMount() {
    const { details, theCars } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    details(id);
    theCars();
  }

  componentDidUpdate() {
    const { details } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    details(id);
  }

  render() {
    const { carDetails, cars } = this.props;
    const slideCars = cars.length ? (
      cars.map(car => (
        <div key={car.id}>
          <BikeInfo car={car} key={car.id} />
        </div>
      ))
    ) : (
      <div>
        <p>wait for it</p>
      </div>
    );
    const revealForm = () => {
      document.querySelector('.form-con').classList.remove('hide');
      document.querySelector('.carDesign').classList.add('hide');
      document.querySelector('.carDesign').classList.remove('carDesign');
    };
    const carUrl = carDetails.avatar ? carDetails.avatar.url : '';
    const theCar = !carDetails.length ? (
      <div className="carInfos">
        <div className="carousel">
          <Slider
            className="slider"
            dots={false}
            slidesToShow={4}
            slidesToScroll={2}
            autoplay
            autoplaySpeed={3000}
          >
            {slideCars}
          </Slider>
          <Slider
            className="sliders"
            dots={false}
            slidesToShow={1}
            slidesToScroll={2}
            autoplay
            autoplaySpeed={3000}
          >
            {slideCars}
          </Slider>
          <Slider
            className="slider2"
            dots={false}
            slidesToShow={1}
            slidesToScroll={2}
            autoplay
            autoplaySpeed={3000}
          >
            {slideCars}
          </Slider>
        </div>
        <div className="carDesign showCar">
          <div className="theDetails">
            <div className="carNames">
              <p>{carDetails.name}</p>
            </div>
            <div className="manufacturer">
              <p>{carDetails.manufacturer}</p>
            </div>
            <div className="lifestyle">
              <p>{carDetails.price}</p>
            </div>
            <div className="lifestyle">
              <p>{carDetails.country}</p>
            </div>
            <div className="socialMedia">
              <p>socia media handles</p>
            </div>
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
        {theCar}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  carDetails: state.carDetailsReducer.car,
  cars: state.carReducer.cars,
});

const mapDispatchToProps = dispatch => ({
  details: id => dispatch(getCarDetails(id)),
  theCars: () => {
    dispatch(getCars());
  },
});

CarInfo.propTypes = {
  details: PropTypes.func.isRequired,
  carDetails: PropTypes.arrayOf.isRequired,
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  cars: PropTypes.arrayOf.isRequired,
  theCars: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CarInfo));
