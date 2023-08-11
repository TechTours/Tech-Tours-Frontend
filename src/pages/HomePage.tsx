import React from 'react';
import HomeLayout from '../components/HomeLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Maps from '../components/Map';
import Navigation from '../components/Navigation';
import MapComponent from '../components/MapComponent';
import MapSideBar from '../components/MapSideBar';

const HomePage = () => {
  
    return (  
   <div className=' overflow-x-hidden flex w-[100%] h-[100vh]'>

     {/* <HomeLayout  /> */}
     <div className='w-[70%]'>
       {/* <h1>My Map</h1> */}
       <MapComponent />
      </div>
          <div className='w-[30%]'>
  <MapSideBar />
    </div>
   </div>
      );
}
 
export default HomePage;