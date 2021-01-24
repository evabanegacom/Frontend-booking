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
    const { theCars } = this.props;
    const { details } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    theCars();
    details(id);
  }

  componentDidUpdate(prevProps) {
    const { details } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    if (id !== prevProps.match.params.id) {
      details(id);
    }
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
            slidesToScroll={1}
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
            <div className="carIdentity">
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
            <div className="lifestyle">
              <p>Test Drive</p>
            </div>
            <div className="socialMedia">
              <div className="subMedia">
                <div>
                  <i className="fab fa-facebook-square" />
                </div>
                <div>
                  <i className="fab fa-twitter" />
                </div>
                <div>
                  <i className="fab fa-youtube" />
                </div>
                <div>
                  <i className="fab fa-instagram" />
                </div>
                <div>
                  <i className="fab fa-pinterest-p" />
                </div>
              </div>
              <div>
                <p>copyright &#169; 2020</p>
              </div>
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
            <div className="detailsDiv">
              <div>
                <p className="carId">{carDetails.name}</p>
                <p className="discount">10% discount on any purchase</p>
              </div>
              <div className="carSpeed">
                <p className="forSpeed">speed</p>
                <p className="speedDetail">{carDetails.speed}</p>
              </div>
              <div className="carModel">
                <p className="forModel">model</p>
                <p className="modelDetail">{carDetails.model}</p>
              </div>
              <div className="carType">
                <p className="forSpeed">Category</p>
                <p className="speedDetail">{carDetails.category}</p>
              </div>
              <div className="carModel">
                <p className="forModel">Category</p>
                <p className="modelDetail">{carDetails.category}</p>
              </div>
              <div className="carDiscounts">
                <p>5.9% APR representative</p>
              </div>
              <div className="moreDiscount">
                <p>Discover more discounts</p>
              </div>
              <div className="moreDiscount">
                <img src="https://lh3.googleusercontent.com/4PCI8Rg-r6ukE5OH8aZrlQfA3Kk1teOKzXwYynHwP4EgSuzkxHjagGtpooI4RGyG44aY3lB-xfShBAkLKrC0blubL098nWU3tnA5t8reei_JGtsfNnGZ5TtxXSzhrDexYZSngJw75x_MdmP2zmDCvBuFSuxl769RQImaR4wXZrx30UO6Kvywukgz5KfbqephY4-B_4JA5GaILbQx_f1kd0UETRZR_CBNX9tajwlT64rxDMnXrv_AiC40-HbX3ur_BlzYAR3QBqgAijhCsn3629C3xFbn8l-zAHQK29bO6oR1TzSyRoA9XaRryuBtS-9TWAMr3zTMtCdeRE6u4sG7Rmyvhklzb-UTHvP-sZyyHZK8SsXO_yZqjVKyBfbkqr9OdKf8f4BqDpLFt7jPngxkQMkf6YFSM1zrnj2JIg6qKdjoEsf_ouYAiJmaPOeX3HXnHbV-MPyk7dDLB3j0WotrGjJgqqkR9HFOCozKLo9hbNESBw3UMLuRH1cQ9HDS3YJIbVuEyn6Yv4kDaHZi4kzNaVlL1N-uuMZyTEJgTdlnn25kkSozR-CcUTB8qaVnL7IGC_7IC5sJui1Q22W3MSouWj_RIJ12-lcD8e9qFDCpftxi4U8OGl2bihy4L5u9iZ-Hs17WALlhrrq1qyinfDLv-jDQuHZiZ5gWzuFU1XqwYUnmJKSMclzf0vBC2hHj=w164-h193-no?authuser=0" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-con hide">
          <Booking carId={carDetails} />
        </div>
      </div>
    ) : (
      <p>wait for it</p>
    );

    return <div>{theCar}</div>;
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
  id: PropTypes.objectOf.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CarInfo));
