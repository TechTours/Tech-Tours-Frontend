import React from 'react';
import HomeLayout from '../components/HomeLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Maps from '../components/Map';
import Navigation from '../components/Navigation';

const HomePage = () => {
  
    return (  
   <div className=' overflow-x-hidden'>
     <HomeLayout header={Header} footer={Footer}  navigation={Navigation} />
   </div>
      );
}
 
export default HomePage;