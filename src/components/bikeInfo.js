import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable */
const BikeInfo = ({ car }) => (
  <Link to={`/car/${car.id}`} key={car.id} >
    <div>
      <p>{car.name}</p>
      <img src={car.avatar.url} alt="" />
    </div>
  </Link>
);

export default BikeInfo;
/* eslint-enable */
