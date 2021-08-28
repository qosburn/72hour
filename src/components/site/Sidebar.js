import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Nasa from './Nasa';
import Weather from './Weather';
import Ticket from './Ticket';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/ticket">Ticket</Link>
          </li>
          <li>
            <Link to="/nasa">NASA</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/">
            <Home lat={props.lat} lng={props.lng} />
          </Route>

          <Route exact path="/weather">
            <Weather lat={props.lat} lng={props.lng} />
          </Route>
          <Route exact path="/ticket">
            <Ticket lat={props.lat} lng={props.lng} />
          </Route>
          <Route exact path="/nasa">
            <Nasa lat={props.lat} lng={props.lng} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
