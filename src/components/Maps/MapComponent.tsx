import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import lion from '../../images/lion.png';
import buffalo from '../../images/buffalo.png';
import elephant from '../../images/elephant.png';
import leopard from '../../images/leopard.png'
import rhino from '../../images/rhinoceros.png'
import io from 'socket.io-client'; // Import socket.io-client
import { BASE_SOCKET_URL, BASE_URL } from '../../api/apiConfig';
import axios from 'axios';

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [pins, setPins] = useState<any[]>([]); // Use state to store pins

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXphYmF5bzciLCJhIjoiY2xreWdubDZuMGlyaDNzc2l0dW1tOGo4NCJ9.dMAnMhcPZJSTlZKniAu7ag';

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.70120671841402, -1.9294044343094023],
      zoom: 10,
    });

    const iconMappings: { [key: string]: string } = {
      type1: lion,
      type2: buffalo,
      type3: elephant,
      type4: leopard,
      type5: rhino
      // Add more type-to-icon mappings as needed
    };

    // Authentication headers
    const authToken = localStorage.getItem("token"); // Replace with your actual authentication token
    const authHeaders = {
      Authorization: `Bearer ${authToken}`,
    };

    // Initialize WebSocket connection with authentication headers
    const socket = io(`${BASE_SOCKET_URL}`, {
      extraHeaders: authHeaders,
    });

    // Listen for WebSocket errors
    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
    });

    // Listen for WebSocket updates
    socket.on('data', (data) => {
      // Process and update pins based on the received data
      const updatedPins = data.map((animal: any) => ({
        lat: animal.latitude,
        lng: animal.longitude,
        title: animal.animal,
        type: animal.animal == 'Lion' ? 'type1' : animal.animal == 'Buffalo' ? 'type2' : animal.animal == 'Elephant' ? 'type3' : animal.animal == 'Leopard' ? 'type4' : 'type5',
      }));
      setPins(updatedPins);
    
      // Clear existing markers on the map
      map.getSource('animal-locations').setData({
        type: 'FeatureCollection',
        features: [],
      });
    
      // Add markers to the map based on updatedPins
      updatedPins.forEach((pin : any, index : any) => {
        const marker = new mapboxgl.Marker({
          element: createCustomMarker(pin.type, iconMappings[pin.type], pin),
        })
          .setLngLat([pin.lng, pin.lat])
          .addTo(map);
      });
    });
    
    // Create a GeoJSON source for markers
    map.on('load', () => {
      map.addSource('animal-locations', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });
    
      // Add a layer to display markers
      map.addLayer({
        id: 'animal-locations',
        type: 'symbol',
        source: 'animal-locations',
        layout: {
          'icon-image': ['get', 'icon'],
          'icon-size': 0.5, // Adjust the size of the icons
          'icon-allow-overlap': true, // Allow icons to overlap
        },
      });

      // Your code to update markers should go here
    });

    // Cleanup on unmount
    return () => {
      map.remove(); // Remove the map instance to prevent memory leaks
      socket.disconnect(); // Disconnect WebSocket on unmount
    };
  }, []);

  const createCustomMarker = (type: string, iconUrl: string, pin: any) => {
    // ... (same as your previous code)
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
    titleElement.className = 'font-bold text-xs text-[#22543de5]'; // Adjust size here
    titleElement.textContent = 'Location';
  
    const coordinatesElement = document.createElement('p');
    coordinatesElement.className = 'text-xs text-black'; // Adjust size here
    coordinatesElement.textContent = `Lat : ${pin.lat} ,Long : ${pin.lng}`;
  
    textContainer.appendChild(titleElement);
    textContainer.appendChild(coordinatesElement);
  
    markerElement.appendChild(iconElement);
    markerElement.appendChild(textContainer);
  
    return markerElement;
  };

  return <div ref={mapContainer} className='w-full h-screen'></div>;
};

export default MapComponent;
