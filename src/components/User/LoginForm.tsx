import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/apiConfig';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
import { BallTriangle } from 'react-loader-spinner';
import "../../styles/animations.css"
import { getUserDetails } from '../../utils/getUserDetails';
import {User} from "../../types/user"



const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword , setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors: { email?: string; password?: string } = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    axios.post(`${BASE_URL}/users/login`, { email, password }).then(async (res) => {
      const data = res.data;
      if(data.access_token === undefined || data.access_token === null || !data.access_token){
        setIsLoading(false);
        Toastify({
          text: data.message,
          duration: 4000,
          gravity: "top",
          position: "left",
          backgroundColor: "#ec55273f"
        }).showToast();
      }else{
      const user : User | null = await getUserDetails(email , data.access_token);
      if(user === null){
        setIsLoading(false);
        Toastify({
          text: "Invalid Email",
          duration: 4000,
          gravity: "top",
          position: "left",
          backgroundColor: "#ec55273f"
        }).showToast();
      }
      setIsLoading(false);
      Toastify({
        text: "SuccessFully Logged In",
        duration: 1000,
        gravity: "top",
        position: "left",
        backgroundColor: "#22543D",
        callback: function () {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isAdmin", JSON.stringify(user?.isAdmin));
          localStorage.setItem("token", data.access_token);
          
          if(user?.isAdmin === true){
            window.location.href = "/admin/dashboard";
          }else{
            window.location.href = "/user/dashboard";
          } 
        }
      }).showToast();
    }
      //redirecting to dashboard

    }
    ).catch((err) => {
      setIsLoading(false);
      Toastify({
        text: "Login Failed Please Try Again",
        duration: 4000,
        gravity: "top",
        position: "left",
        backgroundColor: "#ec55273f"
      }).showToast();
    }
    );

    // Reset the form state
    setEmail('');
    setPassword('');
    setErrors({});
  };

  if(isLoading){
    return (
      <div className="w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center">
        <BallTriangle
        color='#22543D'
        />
     <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
  Login is in progress
</p>
        </div>
    )
  }

  return (
    <div className="w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center">
      <div className="w-[70%] mb-2">
        <p className="text-3xl font-bold text-[#22543D] mb-2">Login</p>
        <p className="text-[#22543D]">Welcome to TechTour. Please enter your details.</p>
      </div>
      <div className="w-[70%] mt-5 mb-2 flex flex-row">
        <div className="w-[85%] flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="w-[100%] flex flex-col mb-5" >
            <div className="w-[100%] flex flex-col mb-5">
              <label className="text-black" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                  errors.email ? 'border-red-500' : ''
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="w-[100%] flex flex-col mb-5">
              <label className="text-black" htmlFor="password">
                Password
              </label>

              <div className="relative w-full">
  <input
    type={showPassword ? 'text' : 'password'}
    id="password"
    className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 pr-10 text-base overflow-hidden text-black ${
      errors.password ? 'border-red-500' : ''
    }`}
    style={{ textOverflow: 'ellipsis' }}
    value={password}
    placeholder='Enter your password'
    onChange={(e) => setPassword(e.target.value)}
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-[10%] top-0 flex justify-center items-center  w-10 h-10  cursor-pointer"
  >
    {showPassword ? (
      <AiOutlineEyeInvisible />
    ) : (
      <AiOutlineEye />
    )}
  </span>
</div>

              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>

            <div className="w-[78%] flex flex-row mb-5 justify-between">
          <div className="flex gap-1">
            <input className="bg-white" type="checkbox" name="" id="" />
            <p className="text-[#22543D]"> Remember me</p>
          </div>
          <a href="/forgot">
            <p className="text-[#22543D] cursor-pointer">Forgot Password?</p>
          </a>
        </div>

            <button className="bg-[#22543D] text-white w-[90%] text-center" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className="w-[70%] flex flex-col justify-center">
       

        <button className="bg-white shadow-xl text-center w-[78%] text-[#22543D] mb-2 ">
          Sign In with Google
        </button>
        <p className="text-center w-[78%] text-[#22543D]">
          Already have an account? <a href="/signup"><span className="text-[#22543D] cursor-pointer">Sign up</span></a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
