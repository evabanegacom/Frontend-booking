import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Landing page goes here</h2>
    <Link to="/bikes">bikes</Link>
  </div>
);

export default Home;
