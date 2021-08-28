import React, { useState } from "react";

const TicketMaster = (props) => {
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState("");
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

  // useEffect(() => {
  //     fetchLocation();
  // }, [])

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

  const fetchResults = () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=0gZLnqkxaBK4KxfowakikVZzUGIK3wpv&latlong=${lat},${lng}`
    )
      .then((res) => res.json())
    //   .then((data) => setSearch(data.response.docs))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Ticket Master</h1>
            <button onClick={getLocation} onSubmit={(e) => handleSubmit(e)}>
              Get Location
            </button>
            <h1>Coordinates</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
          </div>

          {/* <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} /> */}
      </div>
  );
};

export default TicketMaster;