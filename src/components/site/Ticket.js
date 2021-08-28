import React, { useState, useEffect } from "react";

const Ticket = (props) => {
  const [results, setResults] = useState("");

  const fetchResults = async () => {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=0gZLnqkxaBK4KxfowakikVZzUGIK3wpv&latlong=${props.lat},${props.lng}`
    );
    const data = await response.json();
    setResults(data._embedded.events[0].name);
  };

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
        {results}
      </div>
    </div>
  );
};

export default Ticket;
