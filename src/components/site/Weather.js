import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [temp, setTemp] = useState("");
  const [cel, setCel] = useState("");
  const [results, setResults] = useState("");

  const fetchResults = async () => {
    let url = `https://api.openweathermap.org/data/2.5/find?lat=${props.lat}&lon=${props.lng}&cnt=5&appid=a3691ed1a5abc269ba8a795db3543b74`;
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
    if (props.lat && props.lng) {
      fetchResults();
    }
  }, [props.lat, props.lng]);

  return (
    <div className="main">
      <div className="mainDiv">
        <h2>Weather API</h2>
        The temperature is {results} degrees. <button onClick={handleClick}>Convert</button>
      </div>
    </div>
  );
};

export default Weather;
