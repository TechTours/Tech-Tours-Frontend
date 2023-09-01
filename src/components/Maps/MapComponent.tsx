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
        { lat: -1.821117070534592, lng: 30.706783777721494, title: 'Akagera'  , type: 'type1'  },
        { lat: -1.8145539869623148, lng: 30.710066971782197, title: 'Akagera' , type : 'type2' },
        { lat: -1.9020597758447721, lng: 30.69583979751915, title: 'Akagera' , type : 'type3' },
        { lat: -1.9294044343094023, lng: 30.70120671841402, title: 'Akagera' , type : 'type1' },
        {lat: -1.7213614991712078 , lng : 30.696347817252708 , title: 'Akagera' , type : 'type2' },
        {lat: -1.7513136776170033 , lng : 30.708573964829238 , title: 'Akagera' , type : 'type3' },
        {lat: -1.825567686106359 , lng : 30.71863409622777 , title: 'Akagera' , type : 'type1' },
        {lat: -1.843656 , lng : 30.732354 , title: 'Akagera' , type : 'type2' },
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
        element: this.createCustomMarker(pin.type, iconMappings[pin.type], pin),
      })
        .setLngLat([pin.lng, pin.lat])
        .addTo(this.map!);
    });
  }

  createCustomMarker(type: string, iconUrl: string, pin: any): HTMLDivElement {
    const markerElement = document.createElement('div');
    markerElement.className = 'flex items-center gap-2 p-1 rounded-md w-fit text-sm bg-white/60'; // Adjust size here
  
    const iconElement = document.createElement('img');
    iconElement.src = iconUrl;
    iconElement.style.width = '30px'; // Adjust size here
    iconElement.style.height = '30px'; // Adjust size here
  
    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
  
    const titleElement = document.createElement('h1');
    titleElement.className = 'font-bold text-xs'; // Adjust size here
    titleElement.textContent = 'Location';
  
    const coordinatesElement = document.createElement('p');
    coordinatesElement.className = 'text-xs'; // Adjust size here
    coordinatesElement.textContent = `Lat : ${pin.lat} ,Long : ${pin.lng}`;
  
    textContainer.appendChild(titleElement);
    textContainer.appendChild(coordinatesElement);
  
    markerElement.appendChild(iconElement);
    markerElement.appendChild(textContainer);
  
    return markerElement;
  }
  
  render() {
    return (
      <div ref={this.mapContainer} className='w-full h-screen'></div>
    );
  }
}

export default MapComponent;
