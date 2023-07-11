import React from 'react';
import HomeLayout from '../components/HomeLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Maps from '../components/Map';
import Navigation from '../components/Navigation';
import MapComponent from '../components/MapComponent';

const HomePage = () => {
  
    return (  
   <div className=' overflow-x-hidden'>
     {/* <HomeLayout  /> */}
     <div>
       <h1>My Map</h1>
       <MapComponent />
      </div>
   </div>
      );
}
 
export default HomePage;