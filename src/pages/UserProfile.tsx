import React, { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import profilePic from '../images/profile.jpg'
import UserDashboardHeader from "../components/Admin/UserDashboardHeader";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/UI/Footer';



const UserProfile = () => {
    const navigate = useNavigate();
    const linkStyle = "bg-[#22543de5]  text-white font-bold px-10 hover:bg-white border-2 border-[#22543de5] hover:text-[#22543de5]"

    const [profile , setProfile] = useState(false)
    const [user , setUser] = useState({} as any)
    const getUser  = () => {
        const user = localStorage.getItem('user')
        if(user){
            setUser(JSON.parse(user))
        }
    }

    const showOrHideProfile = () => {
        setProfile(!profile)
    }

    const handleLogout = () => {
        Toastify({
          text: 'Click on this toast to Logout',
          duration: -1, // Set duration to infinite to keep the toast open
          gravity: 'bottom',
          position: 'right',
          close: true,
          backgroundColor: '#22543D',
          onClick: function () {
            // Handle user's decision
              setUser(null); // Clear user data from state or local storage
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                localStorage.removeItem('isAdmin');
              Toastify({
                text: 'Logged out successfully',
                duration: 3000,
                gravity: 'bottom',
                backgroundColor: '#22543D',
                callback : function(){
                    window.location.href = '/login'
                }
              }).showToast();
            }
          }).showToast();
      };

    useEffect(()=>{
        getUser()
    } , [])
    return ( 
        <div className="flex flex-col h-[100vh]  justify-start items-center bg-gray-100">
           
            <div className='flex h-[10%] flex-col justify-start items-start'>
                <UserDashboardHeader />
            </div>
            
            <div className=' w-[100%] p-4 flex flex-col h-[100%] justify-center items-center'>
            <h3 className="text-2xl font-semibold mb-3 text-[#22543de5]">User Profile</h3>
            {/* <h2 className='text-3xl text-black font-bold my-3'>Welcome to the user profile , {user.userName}</h2> */}
           <div className='bg-white  w-[45%] shadow-md rounded-md p-4 flex space-y-4 flex-col justify-center items-center  '>
            <div className='w-[50%] flex flex-col justify-center items-center'>
               {/* // the user profile image here */}
               <div className='w-[55%] h-[22vh] rounded-[50%] '>
               <img src={profilePic} alt="" className='h-[100%] w-[100%] rounded-full' />
               </div>
            </div>
            <div className='w-[50%]'>
                {/* // the user profile details Here  */}
            <div className="w-[40vh] ">
          
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Email:</span> {user.email}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Username:</span> {user.userName}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Active:</span> {user.isActive ? 'Yes' : 'No'}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Admin:</span> {user.isAdmin ? 'Yes' : 'No'}
          </div>
          <div className="mb-4 text-black">
            <span className="text-gray-800 font-semibold">Tel:</span> {user.tel}
          </div>
          <div className='flex space-x-10'>
          <button 
            onClick={handleLogout}
            className="bg-green-900 text-white px-7 py-2 rounded-md"
          >
            Logout
          </button>

          <button className="bg-green-900 text-white font-semi-bold " onClick={()=>{navigate("/user/dashboard")}}>
                    Dashboard
                    </button>
          </div>


        </div>
            </div>
           </div>
        
           </div>
           {/* <div className='bg-white w-[30%] p-4 flex flex-col justify-center items-center shadow-md  rounded-md'> 
            <p className='my-2 font-bold text-xl'>Return to the User Dashboard</p>
            <div>
                    
                </div>
           </div> */}
      </div>
     );
}
 
export default UserProfile;