import React, { Component } from 'react';
import { connect } from 'react-redux';
import BikeInfo from './bikeInfo';
import { getCars } from '../actions/actions';

/* eslint-disable */
class BikeList extends Component {
  componentDidMount() {
    const { theCars } = this.props;
    theCars()
  }

  render() {
    const { cars } = this.props;
    const checkCars = cars.length ? (
      cars.map(car => {
        return (
          <div>
            <BikeInfo car={car} key={ car.id }/>
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
  theCars: () => {
    dispatch(getCars());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BikeList);
/* eslint-enable */
