import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Toastify from 'toastify-js';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
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

    const navigate = useNavigate()

    return ( 
        <div className=" w-[100vw] h-[100%] flex item-center justify-center ">
            <div className="w-[92%] flex flex-row font-bold text-xl items-center border-b-2 border-gray-300 justify-between">
                {/* <div className='text-[#22543D]'>Welcome Back, {user.userName}</div> */}
                <div> 
                        <img src={logo} className='h-20 cursor-pointer' alt="" onClick={()=>{
                          navigate(('user/dashboard'))
                        }} />
                  </div>
                <div className="flex ">
                <div className='h-[100%] p-2 flex justify-center items-center text-2xl text-gray-400 font-light'><AiOutlineSearch /></div>
                    <div className='h-[100%] p-2 flex justify-center items-center text-2xl text-gray-400 font-extralight'><BiUserCircle className='cursor-pointer' onClick={showOrHideProfile}/></div>
                </div> 
            </div>
            {profile ? <div className="bg-white w-[40vh] absolute right-[3%] top-[8%] shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold text-black mb-3">User Details: {user.userName}</h3>
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
      <button
        onClick={handleLogout}
        className="bg-green-900 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div> : null}
        </div>
     );
}
 
export default Header;