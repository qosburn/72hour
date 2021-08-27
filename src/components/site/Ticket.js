import React, { useState, useEffect } from "react";

const Ticket = (props) => {
  // const [location, setLocation] = useState("");
  // const [events, setEvents] = useState("");
//   const [search, setSearch] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  // const fetchLocation = () => {
  //     fetch('http://localhost:3000/location', {
  //         method: 'GET',
  //         headers: new Headers ({
  //             'Content-Type': 'application/json',
  //             'Authorization' : props.token
  //         })
  //     }).then((res) => res.json())
  //     .then((logData) => {
  //         setLocation(logData)
  //     })
  // }

  useEffect(() => {
      getLocation();
  }, [])

  useEffect(() => {
    if (lat && lng) {
      fetchResults();
    }
  }, [lat, lng])

  useEffect(() => {
    fetchResults1();
  })

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
      `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=0gZLnqkxaBK4KxfowakikVZzUGIK3wpv&latlong=${lat},${lng}`
    )
    const data = await response.json();
    console.log(data)
    
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetchResults();
  // };

  // const fetchResults1 = async () => {
  //   const response = await fetch(
  //     `https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg?apikey=0gZLnqkxaBK4KxfowakikVZzUGIK3wpv`
  //   )
  //   const data = await response.json();
  //   console.log(data)
  // };



  

  

    // const fetchResults = async () => {
    //   const response = await fetch (
    //    `https://app.ticketmaster.com/discovery/v2/attractions?apikey=0gZLnqkxaBK4KxfowakikVZzUGIK3wpv`
    //   )
    //   const data = await response.json();
    //   console.log(data)
    // }


  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Ticket Master</h1>
            <h1>Coordinates</h1>
            <h2>Event</h2>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
          </div>
      </div>
  );
};

export default Ticket;
