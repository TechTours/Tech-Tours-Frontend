import React from 'react';
import HomeLayout from '../components/HomeLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (  
    <HomeLayout header={Header} footer={Footer} />
      );
}
 
export default HomePage;