import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [temp, setTemp] = useState("");
  const [cel, setCel] = useState("");
  const [status, setStatus] = useState(null);
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
    let url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=5&appid=a3691ed1a5abc269ba8a795db3543b74`;
    const response = await fetch(url);
    const data = await response.json();
    setTemp((data.list[1].main.temp - 273.15) * 9/5 + 32);
    setCel(data.list[1].main.temp - 273.15);
    setResults((data.list[1].main.temp - 273.15) * 9/5 + 32);
  };

  const handleClick = (e) => {
    if (results === temp) {
      setResults(cel);
    } else {
      setResults(temp);
    }
  }

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
        {status}
        {results} <button onClick={handleClick}>Convert</button>
      </div>
    </div>
  );
};

export default Weather;