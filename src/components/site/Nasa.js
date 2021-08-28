import React, { useState, useEffect } from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
const key = 'zDarXJV81X6UjpWC5iSMgQ1LgITXvWxEytbSpVCR';
const dim = '0.05';

const Nasa = (props) => {
  const [results, setResults] = useState([]);

  const current = new Date();

  const date = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;

  const url = `${baseURL}?lon=${props.lng}&lat=${props.lat}&date=${date}&dim=${dim}&api_key=${key}`;
  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.url);
  };

  useEffect(() => {
    fetchURL();
  }, [props.lat, props.lng]);

  return (
    <div className="main">
      <div className="mainDiv">
        <h2>Nasa API</h2>

        <h3>This is a satellite pictures of your location from space.</h3>
        <p>
          <img src={results} width="450px" alt="tat map" />
        </p>
      </div>
    </div>
  );
};
export default Nasa;
