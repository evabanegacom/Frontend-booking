import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BikeInfo = ({ car }) => (
  <Link to={`/car/${car.id}`} key={car.id}>
    <div>
      <p>{car.name}</p>
      <img src={car.avatar.url} alt="" />
    </div>
  </Link>
);

BikeInfo.propTypes = {
  car: PropTypes.objectOf.isRequired,
};

export default BikeInfo;
