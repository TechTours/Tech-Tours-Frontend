import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

interface MapComponentProps {
  google: any; // Add the appropriate type for the 'google' prop
}

interface MapComponentState {
  pins: { lat: number; lng: number; title: string }[];
}

class MapComponent extends React.Component<MapComponentProps, MapComponentState> {
  constructor(props: MapComponentProps) {
    super(props);

    this.state = {
      pins: [
        { lat: 37.7749, lng: -122.4194, title: 'San Francisco' },
        { lat: 34.0522, lng: -118.2437, title: 'Los Angeles' },
        { lat: 40.7128, lng: -74.0060, title: 'New York City' },
        // Add more pins as needed
      ],
    };
  }

  render() {
    const { google } = this.props;

    return (
      <Map
        google={google}
        zoom={12}
        initialCenter={{ lat:  -1.783833, lng:  30.491943 }}
        style={{ width: '100%', height: '100vh' }}
      >
        {this.state.pins.map((pin, index) => (
          <Marker
            key={index}
            position={pin}
            title={pin.title}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDmoxx67c0gJ4yQdhApl34daTcVvJ-iyEc',
})(MapComponent);
