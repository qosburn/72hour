// import React from 'react';
import React, { useState, useEffect } from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
const key = 'zDarXJV81X6UjpWC5iSMgQ1LgITXvWxEytbSpVCR';
// const lat = '39.86';
// const lng = '-86.14';
// const date = '2021-08-01';
const dim = '0.05';

const Nasa = (props) => {
  const [results, setResults] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = (props) => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      );
    }
  };

  const current = new Date();
  // const date = `${current.getFullYear()}-${
  //   current.getMonth() + 1
  // }-${current.getDate()}`;
  const date = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;

  const url = `${baseURL}?lon=${lng}&lat=${lat}&date=${date}&dim=${dim}&api_key=${key}`;
  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.url);
    console.log(data.id);
    console.log(`happy ${date} `);
    // console.log(`happy two ${dayz}`);
    setResults(data.url);
  };

  // const handleClick = () => {
  //   fetchURL();
  // };
  useEffect(() => {
    getLocation();
  }, []); // [] when page is complete runs 1

  useEffect(() => {
    if (lat && lng) {
      fetchURL();
    }
  }, [lat, lng]);

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>NASA API</h1>
        <p>
          <img src={results} width="450px" alt="tat map" />
        </p>
        {/* <button onClick={handleClick}>Click for satellite image</button> */}
      </div>
    </div>
  );
};
export default Nasa;
