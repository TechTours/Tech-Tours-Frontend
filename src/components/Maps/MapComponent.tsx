import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import lion from '../images/lion.png';
import buffalo from '../images/buffalo.png';
import elephant from '../images/elephant.png';

interface MapComponentProps {
  google: any; // Add the appropriate type for the 'google' prop
}

interface MapComponentState {
  pins: { lat: number; lng: number; title: string; type : string }[];
}

class MapComponent extends React.Component<MapComponentProps, MapComponentState> {
  constructor(props: MapComponentProps) {
    super(props);

   
    this.state = {
      pins: [
        { lat: -1.821117070534592, lng: 30.706783777721494, title: 'Akagera'  , type: 'type1'  },
        { lat: -1.8145539869623148, lng: 30.710066971782197, title: 'Akagera' , type : 'type2' },
        { lat: -1.9020597758447721, lng: 30.69583979751915, title: 'Akagera' , type : 'type3' },
        { lat: -1.9294044343094023, lng: 30.70120671841402, title: 'Akagera' , type : 'type1' },
        {lat: -1.7213614991712078 , lng : 30.696347817252708 , title: 'Akagera' , type : 'type2' },
        {lat: -1.7513136776170033 , lng : 30.708573964829238 , title: 'Akagera' , type : 'type3' },
        {lat: -1.825567686106359 , lng : 30.71863409622777 , title: 'Akagera' , type : 'type1' },
        // Add more pins as needed
      ],
    };
  }

  render() {
    const { google } = this.props;

    const iconMappings : any = {
      type1: lion,
      type2: buffalo,
      type3: elephant,
      // Add more type-to-icon mappings as needed
    };


    return (
      <div className='w-[100%] h-[100vh]'>
      <Map
        google={google}
        zoom={10}
        initialCenter={{ lat:  -1.9294044343094023, lng:  30.70120671841402 }}
        style={{ width: '70%', height: '100vh' }}
        styles={[
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ]}
      >
        {this.state.pins.map((pin, index) => (
          <Marker
            key={index}
            position={pin}
            title={pin.title}
            icon={{
              url: iconMappings[pin.type], // Use the icon based on the type
              scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
            }}
          />
        ))}
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDmoxx67c0gJ4yQdhApl34daTcVvJ-iyEc',
})(MapComponent);
