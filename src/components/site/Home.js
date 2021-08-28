import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Our 72 hours project </h1>
        <p>Welcome to 72 hours of getting stuff done</p>
        <Ticket lat={props.lat} lng={props.lng} />
        <hr />
      </div>
    </div>
  );
};

export default Home;
