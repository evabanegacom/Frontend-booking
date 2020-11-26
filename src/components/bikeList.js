import React from 'react';
import { Link } from 'react-router-dom';

const BikeList = () => (
  <div>
    <h1>Bike List goes here</h1>
    <Link to="/bike/:id">Bike Info</Link>
  </div>
);
export default BikeList;
