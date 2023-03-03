import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, IMapProps , Marker } from 'google-maps-react';
import lion from "../images/lion.jpg"

const locations = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 40.7128, lng: -74.0060 },
  { lat: 48.8566, lng: 2.3522  },
];

interface MapContainerProps extends IMapProps {
  google: any;
}

const Maps: React.FC<MapContainerProps> = ({google} : any) => {  

    const [initialPosition, setInitialPosition] = useState({ lat: 37.7749, lng: -122.4194 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setInitialPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error("Geolocation is not supported by this browser.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const containerStyle = {
    width : "73.5%",
    height: "83.5%",
    position : "absolute",
    top : "60px"
  }

    return ( 
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-start object-cover">
          <h1>The Maps Of The Animals</h1>
            <Map
              // containerElement={<div style={{ height: `100%` }} />}
              // mapElement={<div style={{ height: `100%` }} />}
              containerStyle={containerStyle}
              // styles={ [
              //   { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              //   { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              //   { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              //   {
              //     featureType: "administrative.locality",
              //     elementType: "labels.text.fill",
              //     stylers: [{ color: "#d59563" } ],
              //   },
              //   {}
              //   // ... more styles
              // ]}
      google={google}
      zoom={12}
      center={
        {

          lat:  -1.6333 ,

          lng: 30.7833

      }
      }
      // initialCenter={initialPosition}
      {...locations.map((location) => (
        <Marker key={location.lat} position={location} />
      ))}

      // style={{ width: "87%", height: "80%" }}
    >
            <Marker key="marker_1"

position={{

  lat:  -1.6333 ,

  lng: 30.7833

}}

icon={{

  url:lion ,

  anchor: new google.maps.Point(17, 46),

  scaledSize: new google.maps.Size(37, 37)

}}

/>

<Marker key="marker_1"

position={{

  lat:  -1.6333 ,

  lng: 30.833

}}

icon={{

  url:lion ,

  anchor: new google.maps.Point(17, 46),

  scaledSize: new google.maps.Size(37, 37)

}}

/>

<Marker key="marker_1"

position={{

  lat:  -1.7333 ,
  lng: 30.7833

}}

icon={{

  url:lion ,

  anchor: new google.maps.Point(17, 46),

  scaledSize: new google.maps.Size(37, 37)

}}

/>

      </Map>
        </div>
     );
}
 
export default  GoogleApiWrapper({
  apiKey: "AIzaSyCnUy9cQWMnU7ltobmM8yVqnvisYGUnbbg"
})(Maps)