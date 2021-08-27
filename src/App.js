import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/site/sidebar';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Nasa from './components/site/Nasa';

function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [status, setStatus] = useState(' ');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Sidebar lat={location.latitude} lng={location.longitude} />
      </Router>
      <div className="App">
        <h1>Coordinates</h1>
        <p>{status}</p>
        {location.latitude && <p>Latitude: {location.latitude}</p>}
        {location.longitude && <p>Longitude: {location.longitude}</p>}
      </div>
      {/* <Nasa lat={location.latitude} lng={location.longitude} /> */}
      <Footer />
    </div>
  );
}

export default App;
