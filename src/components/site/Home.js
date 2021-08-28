import React from 'react';
import Nasa from './Nasa';
import Ticket from './Ticket';
import Weather from './Weather';

const Home = (props) => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Our 72 hours Project</h1>
        <Ticket lat={props.lat} lng={props.lng} />
        <hr />
        <Weather lat={props.lat} lng={props.lng} />
        <hr />
        <Nasa lat={props.lat} lng={props.lng} />
      </div>
    </div>
  );
};

export default Home;
