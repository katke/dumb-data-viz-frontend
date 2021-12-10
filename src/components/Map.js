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
    const [map, setMap] = useState();

    var markerLatlng = {lng: -73.9217496,lat: 40.7649456};
    var marker = Marker({
        position: markerLatlng,
        title:"Hello World!"
    });

    useEffect(() => {
        new window.google.maps.Map(mapRef.current, {
          center: props.center,
          zoom: props.zoom,
        });
      });
    
    useEffect(() => {
        if (mapRef.current && !map) {
          setMap(new window.google.maps.Map(mapRef.current, {}));
        }
      }, [mapRef, map]);
    
    // marker.setMap(mapRef.current);
  
    return <div ref={mapRef} id="map" />;
  }

  const Marker = (options) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
      if (!marker) {
        setMarker(new window.google.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
  
    useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
  
  }

  export {TestMap, OtherTestMap};