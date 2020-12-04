import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getCars, autoLogin } from '../actions/actions';

/* eslint-disable */
class BikeList extends Component {
  componentDidMount() {
    const { theCars, autoLogin } = this.props;
    autoLogin()
    theCars()
  }

  render() {
    const { cars } = this.props;
    const checkCars = cars.length ? (
      cars.map(car => {
        return (
          <div>
            <p key={car.id}>{car.name}</p>
            <img src={car.avatar.url} alt=""/>
          </div>
        )
      })
    ) : (
      <div>
        <p>wait for it</p>
      </div>
    )
    return (
      <div>
        {checkCars}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cars: state.carReducer.cars,
});

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin()),
  theCars: () => {
    dispatch(getCars());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BikeList);
/* eslint-enable */
