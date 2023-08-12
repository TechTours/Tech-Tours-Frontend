import React from 'react';
import HomeLayout from '../components/User/HomeLayout';
import Header from '../components/User/Header';
import Footer from '../components/UI/Footer';
import Maps from '../components/Maps/Map';
import Navigation from '../components/Maps/Navigation';
import MapComponent from '../components/Maps/MapComponent';
import MapSideBar from '../components/Maps/MapSideBar';

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