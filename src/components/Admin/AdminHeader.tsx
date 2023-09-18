import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Toastify from 'toastify-js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "../../styles/customstyles.css"

const Header = () => {
    const [profile , setProfile] = useState(false)
    const [user , setUser] = useState({} as any)
    const navigate = useNavigate()
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
    }

    useEffect(()=>{
        getUser()
    } , [])

    return ( 
        <div className=" w-[100vw] h-[100%] flex item-center justify-center ">
            <div className="w-[92%] flex flex-row font-bold text-xl items-center border-b-2 border-gray-300 justify-between">
                <div className='text-[#22543D]'>Welcome Back, {user.fullname}</div>
                <div className="flex ">
                <div className='h-[100%] p-2 flex justify-center items-center text-2xl text-gray-400 font-light'><AiOutlineSearch /></div>
                    <div className='h-[100%] p-2 flex justify-center items-center text-2xl text-gray-400 font-extralight'><BiUserCircle className='cursor-pointer' onClick={showOrHideProfile}/></div>
                </div>
            </div>
            {profile ? <div className="bg-white w-[40vh] absolute right-[3%] top-[8%] shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold mb-3 text-black">User Details: {user.userName}</h3>
      <div className="mb-2">
        <span className=" font-semibold text-black">Email:</span> {user.email}
      </div>
      <div className="mb-2">
        <span className=" font-semibold text-black">Username:</span> {user.username}
      </div>
      <div className="mb-2">
        <span className=" font-semibold text-black">Active:</span> {user.isActive ? 'Yes' : 'No'}
      </div>
      <div className="mb-2">
        <span className=" font-semibold text-black">Admin:</span> {user.isAdmin ? 'Yes' : 'No'}
      </div>
      <div className="mb-4">
        <span className=" font-semibold text-black">Tel:</span> {user.tel}
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