import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api/apiConfig';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

type Props = {
    user : any
}

const CreateUserComponent = (props : Props) => {
  const [isActive, setIsActive] = useState(props.user.isActive);
  const [username, setUsername] = useState(props.user.userName);
  const [isAdmin, setIsAdmin] = useState(props.user.isAdmin);
  const [email, setEmail] = useState(props.user.email);
  const [phoneNumber, setPhoneNumber] = useState(props.user.tel);
  const [errors, setErrors] = useState<{ isActive?: string; username?: string; isAdmin?: string; email?: string; phoneNumber?: string }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors: {
      configurationId?: string;
      username?: string;
      password?: string;
      email?: string;
      phoneNumber?: string;
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

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Phone Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with form submission

    const token = localStorage.getItem("token");
    const headers = {
      token : token
  }

    axios.post(`${BASE_URL}/user/update`, { 
      userName:  username , 
      fullName : username ,
       email ,
        isActive , 
        tel : phoneNumber ,
         isAdmin ,
         code : 'techtours19'
     } , {headers : headers} ).then((res) => {
         console.log(res);
         Toastify({
           text: `SuccessFully Updated User ${username}`,
           duration: 3000,
           gravity: "top",
           position: "right",
           backgroundColor: "green"
         }).showToast();
      })
       .catch((err) => {
         console.log(err);
         Toastify({
           text: err.response.data.error,
           duration: 3000,
           gravity: "top",
           position: "right",
           backgroundColor: "red"
         }).showToast();
       })

  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-start">
      <div className="w-[100%] h-[10%] flex flex-row justify-center items-start">
        <div className="w-[92%] flex flex-row justify-between items-center">
          <div className="p-2 font-bold text-xl text-[#22543D]">Update Or View User {props.user.userName}</div>
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
                  readOnly
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
                  type="password"
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
