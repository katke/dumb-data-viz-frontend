import React, { useState, useRef, useEffect } from 'react';
import '../styles/Map.css';

const TestMap = (props) => {
    const mapRef = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(mapRef.current, {
        center: props.center,
        zoom: props.zoom,
      });
    });
  
    return <div ref={mapRef} id="map" />;
  }

  const OtherTestMap = (props) => {
    const mapRef = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(mapRef.current, {
        center: props.center,
        zoom: props.zoom,
      });
    });
  
    return <div ref={mapRef} id="map" />;
  }

  export {TestMap, OtherTestMap};