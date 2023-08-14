import React from 'react';
import MapComponent from '../components/Maps/MapComponent';
import MapSideBar from '../components/Maps/MapSideBar';
import sight1 from '../images/sight1.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [popup , setPopup] = React.useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  }

  
    return (  
      <div className='w-[100%] flex flex-row bg-black h-[100vh]' >

        {
          popup == true ? <MapSideBar renderPopUp={togglePopup} /> : (<div onClick={togglePopup} className='absolute z-10 bottom-5 left-2 bg-white w-[10vw] h-[15vh] shadow-sm'>
          <img src={sight1} alt="" />
        </div>)
        }
      
        <div className='w-[100%] h-[100%] '>
          <MapComponent />
        </div>
      </div>
      );
}
 
export default HomePage;