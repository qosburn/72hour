import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [temp, setTemp] = useState("");
  const [cel, setCel] = useState("");
  const [results, setResults] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");
  const [conversion, setConversion] = useState("Fahrenheit");
  const [tempButton, setTempButton] = useState("Celsius");

  const fetchResults = async () => {
    let url = `https://api.openweathermap.org/data/2.5/find?lat=${props.lat}&lon=${props.lng}&cnt=5&appid=a3691ed1a5abc269ba8a795db3543b74`;
    const response = await fetch(url);
    const data = await response.json();
    setTemp(((data.list[0].main.temp - 273.15) * 9/5 + 32).toFixed(0));
    setCel((data.list[0].main.temp - 273.15).toFixed(0));
    setResults(((data.list[0].main.temp - 273.15) * 9/5 + 32).toFixed(0));
    setLocation(data.list[0].name);
    setWeather(data.list[0].rain);
    console.log(data);
    if (weather) {
      setWeather("raining");
    } else {
      setWeather("not raining");
    }
  };

  const handleClick = (e) => {
    if (results === temp) {
      setConversion("Celsius");
      setTempButton("Fahrenheit");
      setResults(cel);
    } else {
      setConversion("Fahrenheit");
      setTempButton("Celsius");
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
        You are currently in {location}, and it is currently {weather}.
        <br />
        The temperature is {results} degrees {conversion}.
        <br />
        <button onClick={handleClick}>Convert to {tempButton}</button>
      </div>
    </div>
  );
};

export default Weather;
