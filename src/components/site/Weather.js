import React, { useState, useEffect } from "react";

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState("");
  const [results, setResults] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  const fetchResults = async () => {
    let url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=5&unit=metric&appid=a3691ed1a5abc269ba8a795db3543b74`;
    const response = await fetch(url);
    const data = await response.json();
    let weatherKeys = Object.keys(data.list);
    let weatherValues = Array.prototype.values(data.list);
    for (const value of weatherValues) {
      console.log(weatherValues);
      // console.log(weatherValues);
      // setResults(weatherValues);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (lat && lng) {
      fetchResults();
    }
  }, [lat, lng]);

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Weather API</h1>
        <h1>Coordinates</h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        {results}
      </div>
    </div>
  );
};

export default Weather;