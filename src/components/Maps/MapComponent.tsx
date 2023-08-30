import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import lion from '../../images/lion.png';
import buffalo from '../../images/buffalo.png';
import elephant from '../../images/elephant.png';

interface MapComponentState {
  pins: { lat: number; lng: number; title: string; type: string }[];
}

class MapComponent extends React.Component<{}, MapComponentState> {
  private mapContainer: React.RefObject<HTMLDivElement>;
  private map: mapboxgl.Map | undefined;

  constructor(props: {}) {
    super(props);

    this.mapContainer = React.createRef();

    this.state = {
      pins: [
        { lat: -1.821117070534592, lng: 30.706783777721494, title: 'Akagera', type: 'type1' },
        // Add more pins as needed
      ],
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXphYmF5bzciLCJhIjoiY2xreWdubDZuMGlyaDNzc2l0dW1tOGo4NCJ9.dMAnMhcPZJSTlZKniAu7ag';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.70120671841402, -1.9294044343094023],
      zoom: 10,
    });

    const iconMappings: { [key: string]: string } = {
      type1: lion,
      type2: buffalo,
      type3: elephant,
      // Add more type-to-icon mappings as needed
    };

    this.state.pins.forEach((pin, index) => {
      const marker = new mapboxgl.Marker({
        element: this.createCustomMarker(pin.type, iconMappings[pin.type]),
      })
        .setLngLat([pin.lng, pin.lat])
        .addTo(this.map!);
    });
  }

  createCustomMarker(type: string, iconUrl: string): HTMLDivElement {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.backgroundImage = `url(${iconUrl})`;
    markerElement.style.width = '40px';
    markerElement.style.height = '40px';

    return markerElement;
  }

  render() {
    return (
      <div ref={this.mapContainer} className='w-full h-screen'></div>
    );
  }
}

export default MapComponent;
