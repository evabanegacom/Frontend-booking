import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BikeInfo from './bikeInfo';
import { getCars } from '../actions/actions';

class BikeList extends Component {
  componentDidMount() {
    const { theCars } = this.props;
    theCars();
  }

  render() {
    const { cars } = this.props;
    const checkCars = cars.length ? (
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
    return (
      <div>
        {checkCars}
      </div>
    );
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

BikeList.propTypes = {
  cars: PropTypes.arrayOf.isRequired,
  theCars: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeList);
