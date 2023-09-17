import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/apiConfig';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { BallTriangle } from 'react-loader-spinner';
import "../../styles/animations.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CreateUserComponent = () => {
  const [configurationId, setConfigurationId] = useState('techtours19');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [isLoading , setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullname, setFullname] = useState('');
  const [gender , setGender] = useState('');
  const [errors, setErrors] = useState<{ configurationId?: string; username?: string; password?: string; email?: string; phoneNumber?: string; fullname?:string; gender?:string }>(
    {}
  );

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault();

    // Validate the form fields
    const validationErrors: {
      configurationId?: string;
      username?: string;
      password?: string;
      email?: string;
      phoneNumber?: string;
      fullname?: string;
      gender ?: string;
    } = {};

    if (!configurationId) {
      validationErrors.configurationId = 'Configuration ID is required';
    }

    if (!username) {
      validationErrors.username = 'Username is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if(!gender){
      validationErrors.gender = 'Gender is required'
    }

    if(!fullname){
      validationErrors.fullname = 'Fullname is required'
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Phone Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const token = localStorage.getItem("token");

  const headers = {
    Authorization : `Bearer ${token}`
  }

  const body = {
     username,
     password,
     gender,
     email,
     fullName : fullname,
      tel : phoneNumber,
      isAdmin : false
  }

    axios.post(`${BASE_URL}/users/create`, body , {headers : headers} ).then((res) => {
      if(res.data.status === 201){
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
          setIsLoading(false)
         console.log(err);
         Toastify({
           text: err.response.data.message,
           duration: 3000,
           gravity: "top",
           position: "right",
           backgroundColor: "red"
         }).showToast();
       })

    // Reset the form state
    setConfigurationId('');
    setUsername('');
    setPassword('');
    setEmail('');
    setPhoneNumber('');
    setErrors({});
    setGender('')
    setFullname('')
  };

  if(isLoading){
    return (
      <div className="w-[100%] h-[100%] bg-[#F5F5F5] flex flex-col justify-center items-center">
        <BallTriangle
        color='#22543D'
        />
     <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
  User Registration is in progress
</p>
        </div>
    )
  }

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-start items-start">
      <div className="w-[100%] h-[10%] flex flex-row justify-center items-start">
        <div className="w-[92%] flex flex-row justify-between items-center">
          <div className="p-2 font-bold text-xl text-[#22543D]">Create New User</div>
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
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"

                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.fullname ? 'border-red-500' : ''
                  }`}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
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

              <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Password</label>

              <div className="relative w-[40%] ">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`border-2xl w-[100%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.password ? 'border-red-500' : ''
                    }`}
                  style={{ textOverflow: 'ellipsis' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0  top-0 flex justify-center items-center  w-10 h-10  cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>
              {errors.password && <p className="text-red-500">{errors.password}</p>}  </div>

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

              <div className="w-[40%] flex flex-row justify-between mb-5 gap-5">
                <button className="bg-[#fffff] text-[#22543D] w-[40%] text-center font-bold border-2 border-[#22543D]">
                  Back
                </button>
                <button className="bg-[#22543D] text-white w-[40%] text-center" type="submit">
                  Create
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

export default CreateUserComponent;
