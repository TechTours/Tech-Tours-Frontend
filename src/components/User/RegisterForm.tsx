import { useState } from "react";
import axios from 'axios';
import { BASE_URL } from '../../api/apiConfig';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { BallTriangle } from 'react-loader-spinner';
import "../../styles/animations.css"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';


const RegisterForm: React.FC = () => {
  const [isLoading , SetIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender , setGender] = useState('');
  const [fullname, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<{
    adminId?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    email?: string;
    phoneNumber?: string;
    fullname?: string;
    gender ?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    SetIsLoading(true)
    e.preventDefault();

    // Validate the form fields
    const validationErrors: {
      adminId?: string;
      username?: string;
      password?: string;
      confirmPassword?: string;
      email?: string;
      phoneNumber?: string;
      fullname?: string;
      gender ?: string;
    } = {};

    if (!adminId) {
      validationErrors.adminId = 'Admin ID is required';
    }

    if (!username) {
      validationErrors.username = 'Username is required';
    }

    if(!gender){
      validationErrors.gender = 'Gender is required'
    }

    if(!fullname){
      validationErrors.fullname = 'Full name is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Phone number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with form submission
    // Replace the console.log statement with your submission logic
    const isAdmin = true;
    const fullName = fullname;

    const body = {
      username , 
      password,
      gender,
      email,
      fullName,
      tel : phoneNumber,
      adminKey : adminId,
      isAdmin
    }

    axios.post(`${BASE_URL}/users/admin/create`, body).then((res) => {
      console.log(res.data);
      if(res.data.status === 201){
        SetIsLoading(false)
        Toastify({
          text: "SuccessFully Registered Check Email for Verification",
          duration: 3000,
          gravity: "top",
          position: "left",
          backgroundColor: "#22543D"
          
        }).showToast();
      }

      if(res.data.status === 400){
        SetIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "left",
          backgroundColor: "#ec5527"
        }).showToast();
      }

      if(res.data.status === 500){
        SetIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "left",
          backgroundColor: "#ec5527"
        }).showToast();
      }

      if(res.data.status === 404){
        SetIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "left",
          backgroundColor: "#ec5527"
        }).showToast();
      }

    })
      .catch((err) => {
        console.log(err);
        Toastify({
          text: err.response.data.message,
          duration: 3000,
          gravity: "top",
          position: "left",
          backgroundColor: "#ec55273f"
        }).showToast();
      })

    // Reset the form state
    setAdminId('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setPhoneNumber('');
    setErrors({});
  };

  if(isLoading){
    return (
      <div className="w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center">
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
    <div className='w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-[90%] mb-2' >
        <div className='w-[90%] mb-2'>
          <p className='text-3xl font-bold text-[#22543D] mb-2'>Signup</p>
          <p className='text-[#22543D]'>Welcome to TechTour. Please enter your details.</p>
        </div>
        <div className='w-[90%] mt-5 mb-2 flex flex-row '>
          <div className=' w-[50%] flex flex-col justify-center items-center'>
            <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Admin ID</label>
              <input
                type="text"
                id="adminId"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.adminId ? 'border-red-500' : ''
                  }`}
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              />
              {errors.adminId && <p className="text-red-500">{errors.adminId}</p>}   </div>

            <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">FullName</label>
              <input
                type="text"
                id="fullname"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.fullname ? 'border-red-500' : ''
                  }`}
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}  </div>

              {/* The full name input start  */}
              
            <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Username</label>
              <input
                type="text"
                id="username"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.username ? 'border-red-500' : ''
                  }`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="text-red-500">{errors.username}</p>}  </div>

               {/* The full name inpiut end   */}

            <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Password</label>

              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 pr-10 text-base overflow-hidden text-black ${errors.password ? 'border-red-500' : ''
                    }`}
                  style={{ textOverflow: 'ellipsis' }}
                  value={password}
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
              {errors.password && <p className="text-red-500">{errors.password}</p>}  </div>

          </div>
          <div className=' w-[50%] flex flex-col justify-center items-center'>
          

            <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Email</label>
              <input
                type="text"
                id="email"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.email ? 'border-red-500' : ''
                  }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>} </div>

              {/* the gender input start  */}
              <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Gender</label>
              <select
                id="gender"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.gender ? 'border-red-500' : ''
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
             

            <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Contacts (Phone number)</label>
              <input
                type="text"
                id="phoneNumber"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.phoneNumber ? 'border-red-500' : ''
                  }`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}  </div>

              <div className='w-[100%] flex flex-col mb-5'>
              <label className='text-black' htmlFor="Configuration ID">Confirm Password</label>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ textOverflow: 'ellipsis' }}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[10%] top-0 flex justify-center items-center  w-10 h-10  cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>} </div>


          </div>
        </div>

        <div className='w-[90%] flex flex-col justify-center items-center mt-5'>
          <button className='bg-[#22543D] text-white w-[60%] text-center' type="submit">Sign Up</button>

          <div className='flex w-[60%] items-center justify-center mt-2 mb-2 border-xl'>
            <div className='h-[1px] bg-gray-400 w-[40%]'></div>
            <div className='px-2 w-[20%] flex justify-center items-center text-[#22543D]'>OR</div>
            <div className='h-[1px] bg-gray-400 w-[40%]'></div>
          </div>
          <button className='bg-white shadow-xl text-center w-[60%] text-[#22543D] mb-2 '>Sign Up with Google</button>
          <p className='text-[#22543D]'>Already have an account? <a href="/login"><span className='text-[#22543D] cursor-pointer'>Sign in </span></a></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;