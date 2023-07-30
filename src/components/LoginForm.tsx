import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api/apiConfig';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

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

    // Form is valid, proceed with form submission
    // Replace the console.log statement with your submission logic
    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Password:', password);

    axios.post(`${BASE_URL}/user/login`, { email, password }).then((res) => {
      Toastify({
        text: "SuccessFully Logged In",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green"
      }).showToast();
      //redirecting to dashboard

      localStorage.setItem("user", JSON.stringify(res.data.data));
      localStorage.setItem("isAdmin", res.data.data.isAdmin);
      localStorage.setItem("token", res.data.token);
      
      if(res.data.data.isAdmin === true){
        window.location.href = "/admin/dashboard";
      }else{
        window.location.href = "/";
      } 
      
    }
    ).catch((err) => {
      console.log(err);
      Toastify({
        text: err.response.data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red"
      }).showToast();
    }
    );


    // Reset the form state
    setEmail('');
    setPassword('');
    setErrors({});
  };

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
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="w-[100%] flex flex-col mb-5">
              <label className="text-black" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                  errors.password ? 'border-red-500' : ''
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
