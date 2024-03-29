import React from 'react';
const SignupForm : React.FC = () => {
    return (
       <div className='w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center'>
          <div className='w-[90%] mb-2'>
            <p className='text-3xl font-bold text-[#22543D] mb-2'>Signup</p>
            <p className='text-[#22543D]'>Welcome to TechTour. Please enter your details.</p>
          </div>
          <div className='w-[90%] mt-5 mb-2 flex flex-row '>
            <div className=' w-[50%] flex flex-col j    ustify-center items-center'>

                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Configuration ID</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white text-black pl-2 ' />
                </div> 
                
                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Username</label>
                    <input type="text" className='border-2xl border-2 border-gray-300 w-[90%] h-10 rounded-md bg-white text-black pl-2 ' />
                </div> 

                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Password</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md bg-white text-black pl-2 border-2 border-gray-300' />
                </div> 

                
            </div>
            <div className=' w-[50%] flex flex-col justify-center items-center'>
            <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Confirm Password</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white text-black pl-2' />
                </div> 
                
                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Email</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white text-black pl-2' />
                </div> 

                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black' htmlFor="Configuration ID">Contacts (Phone number)</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white text-black pl-2' />
                </div> 

            </div>
          </div>
          
          <div className='w-[90%] flex flex-col justify-center items-center mt-5'>
           <button className='bg-[#22543D] text-white w-[60%] text-center'>Sign Up</button>
           <div className='flex w-[60%] items-center justify-center mt-2 mb-2 border-xl'> 
             <div className='h-[1px] bg-gray-400 w-[40%]'></div>
            <div className='px-2 w-[20%] flex justify-center items-center text-[#22543D]'>OR</div>
            <div className='h-[1px] bg-gray-400 w-[40%]'></div>
             </div>
           <button className='bg-white shadow-xl text-center w-[60%] text-[#22543D] mb-2 '>Sign Up with Google</button>
           <p className='text-[#22543D]'>Already have an account? <span className='text-[#22543D] cursor-pointer'>Sign in </span></p>
          </div>
       </div>
      );
}
 
export default SignupForm;