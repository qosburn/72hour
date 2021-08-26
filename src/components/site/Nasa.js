// import React from 'react';
import React, { useState, useEffect } from 'react';

const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 'zDarXJV81X6UjpWC5iSMgQ1LgITXvWxEytbSpVCR';
const testURLplusKey = `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=zDarXJV81X6UjpWC5iSMgQ1LgITXvWxEytbSpVCR`;
const testURLkeyLatLon = `https://api.nasa.gov/planetary/earth/imagery?lon=-86.1491462&lat=39.8669185&date=2014-02-01&api_key=zDarXJV81X6UjpWC5iSMgQ1LgITXvWxEytbSpVCR`;
const genTimeAndLocal = `https://api.nasa.gov/planetary/earth/assets?lon=-86.53&lat=39.53&date=2020-01-01&&dim=0.10&api_key=zDarXJV81X6UjpWC5iSMgQ1LgITXvWxEytbSpVCR`;

const Nasa = (props) => {
  const [results, setResults] = useState([]);
  const url = `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY`;
  // const url = `${baseURL}?api_key=${key}`;
  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.url);
    setResults(data.url);
  };

  const handleClick = () => {
    fetchURL();
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>NASA API</h1>
        <p>
          <img src={results} alt="tat map" />
        </p>
        <button onClick={handleClick}>Click for satellite image</button>
      </div>
    </div>
  );
};
export default Nasa;
