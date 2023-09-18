import React, { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import profilePic from '../images/profile.jpg'
import UserDashboardHeader from "../components/Admin/UserDashboardHeader";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../styles/customstyles.css"
import Footer from '../components/UI/Footer';
import Female from "../images/female.png"
import Male from "../images/male.png"



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
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure you want to logout ?',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        confirmButtonColor: '#b96138',
        cancelButtonColor: '#22543D',
        customClass: {
          confirmButton: 'custom-confirm-button-class',
          cancelButton: 'custom-cancel-button-class',
        }
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          setUser(null); // Clear user data from state or local storage
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('isAdmin');
          navigate('/login') 
        } else if (result.isDenied) {
          Swal.fire('Logout Canceled', '', 'info')
        }
      })
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
           <div className='bg-white  w-[45%] shadow-md rounded-md p-4 flex space-y-4 flex-row justify-center items-center  '>
            <div className='w-[50%] flex flex-col justify-center items-center'>
               {/* // the user profile image here */}
               <div className='w-[75%] h-[30vh] rounded-[50%] '>
               <img src={user.gender == 0 ? Male : Female} alt="" className='h-[100%] w-[100%] rounded-full' />
               </div>
            </div>
            <div className='w-[50%]'>
                {/* // the user profile details Here  */}
            <div className="w-[40vh] ">
          
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Email:</span> {user.email}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Fullname:</span> {user.fullname}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Username:</span> {user.username}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Active:</span> {user.isActive ? 'Yes' : 'No'}
          </div>
          <div className="mb-2 text-black">
            <span className="text-gray-800 font-semibold">Gender:</span> {user.gender == 0 ? 'Male' : 'Female'}
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