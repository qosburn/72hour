import React, { useState, useEffect } from "react";

const Ticket = (props) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
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
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=0gZLnqkxaBK4KxfowakikVZzUGIK3wpv&latlong=${props.lat},${props.lng}`
    );
    const data = await response.json();
    console.log(data);
    setResults(data._embedded.events[0].name);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (props.lat && props.lng) {
      fetchResults();
    }
  }, [props.lat, props.lng]);

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Ticket Master</h1>
        <h2>Event</h2>
        <h3>Coordinates</h3>
        <p>{status}</p>
        {props.lat && <p>Latitude: {props.lat}</p>}
        {props.lng && <p>Longitude: {props.lng}</p>}
        {results}
      </div>
    </div>
  );
};

export default Ticket;
