import React from 'react';
import { Link } from 'react-router-dom';
import Nasa from './Nasa';
import Ticket from './Ticket';
import Weather from './Weather';

const Home = (props) => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Our 72 hours PROJECT </h1>
        <p>Welcome to 72 hours of getting stuff done</p>
        <Ticket lat={props.lat} lng={props.lng} />
        <Weather lat={props.lat} lng={props.lng} />
        <hr />
        <Nasa lat={props.lat} lng={props.lng} />
      </div>
    </div>
  );
};

export default Home;
