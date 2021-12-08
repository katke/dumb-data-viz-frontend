import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Wrapper } from "@googlemaps/react-wrapper";

// const render = (status) => {
//   console.log(status);
  // statuses: LOADING
  // return <h1>{status}</h1>;
// };

const App = () => {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Map center={{lat: 51.501366, lng: -0.141890 }} zoom={5} />
    </Wrapper>
  );
}

const Map = (props) => {
  const mapRef = useRef();

  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: props.zoom,
    });
  });

  return <div ref={mapRef} id="map" />;
}

export default App;
