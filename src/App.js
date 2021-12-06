import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Wrapper } from "@googlemaps/react-wrapper";


function App() {

  return (
    // Key is restricted by request origin
    <Wrapper apiKey={"MYKEY"}>
      <Map/>
    </Wrapper>
  );
}

function Map() {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <div id="map">{map}</div>
  );

}

const render = (status) => {
  return <h1>{status}</h1>;
};

export default App;
