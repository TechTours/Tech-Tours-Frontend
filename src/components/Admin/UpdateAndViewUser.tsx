import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/apiConfig';
import Toastify from 'toastify-js';
import { BallTriangle } from 'react-loader-spinner';
import 'toastify-js/src/toastify.css';
import { useNavigate , useLocation } from 'react-router-dom';
import { useEffect } from 'react';

type props = {
  user : any
}

const UpdateUserAndView = (props : props) => {
  const navigate = useNavigate();
   const user = props.user;
  const [isActive, setIsActive] = useState(user.isActive);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [gender , setGender] = useState('')
  const [fullname , setFullName] = useState(user.fullname)
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.tel);
  const [errors, setErrors] = useState<{ isActive?: string; username?: string; isAdmin?: string; email?: string; phoneNumber?: string; fullname?: string; gender?: string }>(
    {}
  );


  const backToUsers = ()=>{
    navigate("/admin/users")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setIsLoading(true);


    // Validate the form fields
    const validationErrors: {
      configurationId?: string;
      username?: string;
      password?: string;
      email?: string;
      phoneNumber?: string;
      gender?: string;
      fullname?: string;
    } = {};

    if (!isActive && ( isActive === 'false' || isActive === 'true')) {
      validationErrors.configurationId = 'State ID is required and must be true or false';
    }

    if (!username) {
      validationErrors.username = 'Username is required';
    }

    if (!isAdmin && ( isAdmin === 'false' || isAdmin === 'true')) {
      validationErrors.password = 'IsAdmin is required and must be true or false';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if(!fullname){
      validationErrors.fullname = 'FullName is required';
    }

    if(!gender){
      validationErrors.gender = 'Gender is required'
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Phone Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Form is valid, proceed with form submission

    console.log("This is the money")

    const token = localStorage.getItem("token");
    const headers = {
      Authorization : `Bearer ${token}`
  }


  const body = {
    username,
    gender,
    email,
    fullName : fullname,
     tel : phoneNumber,
     isAdmin 
 }

 console.log(`${BASE_URL}/users/update/${user.id}`);
 
    axios.patch(`${BASE_URL}/users/update/${user.id}`, body , {headers : headers} ).then((res) => {
      console.log(res.data);
      if(res.data.status === 200){
        setIsLoading(false)
        Toastify({
          text: "SuccessFully Registered Check Email for Verification",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#22543D"
        }).showToast();
        navigate('/admin/users')
      }

      if(res.data.status === 400){
        setIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#ec5527"
        }).showToast();
        backToUsers()
      }

      if(res.data.status === 500){
        setIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#ec5527"
        }).showToast();
      }

      if(res.data.status === 404){
        setIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#ec5527"
        }).showToast();
      }
      
      })
       .catch((err) => {
         console.log(err);
         setIsLoading(false)
         Toastify({
           text: err.response.data.error,
           duration: 3000,
           gravity: "top",
           position: "right",
           backgroundColor: "red"
         }).showToast();
       })

  };


  if(isLoading){
    return (
      <div className="w-[100%] h-[100%] bg-[#F5F5F5] flex flex-col justify-center items-center">
        <BallTriangle
        color='#22543D'
        />
     <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
 The User is Updating ...
</p>
        </div>
    )
  }

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-start items-start">
      <div className="w-[100%] h-[10%] flex flex-row justify-center items-start">
        <div className="w-[92%] flex flex-row justify-between items-center">
          <div className="p-2 font-bold text-xl text-[#22543D]">Update Or View User {user.username}</div>
        </div>
      </div>

      {/* the second part start  */}
      <div className="w-[100%] h-[100%] flex flex-col justify-center items-start mt-5">
        {/* the first part start  */}
        <div className="w-[100%] h-[100%] flex flex-row justify-center items-start">
          <div className="w-[92%] flex flex-row justify-center items-center rounded-lg">
            <form className="w-[100%] h-[100%] flex flex-col justify-center items-start" onSubmit={handleSubmit}>
              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="configurationId">
                   isActive
                </label>
                <input
                  type="text"
                  id="configurationId"

                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.isActive ? 'border-red-500' : ''
                  }`}
                  value={isActive}
                  onChange={(e) => setIsActive(e.target.value)}
                />
                {errors.isActive && <p className="text-red-500">{errors.isActive}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="password">
                  isAdmin
                </label>
                <input
                  type="text"
                  id="password"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.isAdmin ? 'border-red-500' : ''
                  }`}
                  value={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.value)}
                />
                {errors.isAdmin && <p className="text-red-500">{errors.isAdmin}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="fullname">
                  FullName
                </label>
                <input
                  type="fullname"
                  id="fullname"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.fullname ? 'border-red-500' : ''
                  }`}
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
              </div>

                {/* the gender input start  */}
                <div className="w-[100%] flex flex-col mb-5 space-y-2">
              <label className='text-black' htmlFor="Configuration ID">Gender</label>
              <select
                id="gender"
                className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.gender ? 'border-red-500' : ''
                  }`}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
              <option>Select Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              </select>
              {errors.gender && <p className="text-red-500">{errors.gender}</p>} </div>
              {/* the gender input end  */}

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.phoneNumber ? 'border-red-500' : ''
                  }`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
              </div>

              <div className="w-[40%] flex flex-row justify-between mb-5 gap-5">
                <button className="bg-[#fffff] text-[#22543D] w-[40%] text-center font-bold border-2 border-[#22543D]" onClick={backToUsers}>
                  Back
                </button>
                <button className="bg-[#22543D] text-white w-[40%] text-center" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* the second part end  */}
    </div>
  );
};

export default UpdateUserAndView;
