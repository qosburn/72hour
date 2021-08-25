import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Nasa from './Nasa';
import Weather from './Weather';
import Ticket from './Ticket';

const Sidebar = () => {
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
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/ticket">
            <Ticket />
          </Route>
          <Route exact path="/nasa">
            <Nasa />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;