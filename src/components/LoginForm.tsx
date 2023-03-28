import React from 'react';
const LoginForm : React.FC = () => {
    return (
       <div className='w-[100%] h-[100%] bg-white flex flex-col justify-center items-center'>
          <div className='w-[70%] mb-2'>
            <p className='text-3xl font-bold text-[#22543D] mb-2'>Login</p>
            <p>Welcome to TechTour. Please enter your details.</p>
          </div>
          <div className='w-[70%] mt-5 mb-2 flex flex-row '>
            <div className=' w-[85%] flex flex-col justify-center items-center'>
                
                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Email</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 ' />
                </div> 

                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Password</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 ' />
                </div> 
                
            </div>
          </div>
          
          <div className='w-[70%] flex flex-col justify-center'>
            
          <div className='w-[78%] flex flex-row mb-5 justify-between'>
                    <div className='flex gap-1'> <input type="checkbox" name="" id="" /> <p> Remember me</p></div>
                    <a href="/forgot"><p className='text-[#22543D] cursor-pointer'>Forgot Password?</p></a>
                </div>


           <button className='bg-[#22543D] text-white w-[78%] text-center'>Sign In</button>
           <div className='flex w-[78%] items-center justify-center mt-2 mb-2 border-xl'> 
             <div className='h-[1px] bg-gray-400 w-[40%]'></div>
            <div className='px-2 w-[20%] flex justify-center items-center'>OR</div>
            <div className='h-[1px] bg-gray-400 w-[40%]'></div>
             </div>
           <button className='bg-white shadow-xl text-center w-[78%] text-[#22543D] mb-2 '>Sign In with Google</button>
           <p className='text-center w-[78%]'>Already have an account? <a href="/register"><span className='text-[#22543D] cursor-pointer'>Sign up </span></a></p>
          </div>
       </div>
      );
}
 
export default LoginForm;