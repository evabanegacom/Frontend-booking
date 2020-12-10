import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../cssFiles/cars.css';

const BikeInfo = ({ car }) => (
  <Link to={`/car/${car.id}`} key={car.id}>
    <div key={car.id} className="theCars">
      <p className="carName">{car.name}</p>
      <img src={car.avatar.url} alt="" />
      <p className="carPrice">{car.price}</p>
    </div>
  </Link>
);

BikeInfo.propTypes = {
  car: PropTypes.objectOf.isRequired,
};

export default BikeInfo;
