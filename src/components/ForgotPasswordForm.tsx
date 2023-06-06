import React from 'react';
const ForgotPassword : React.FC = () => {
    return (
       <div className='w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center'>
          <div className='w-[70%] mb-2'>
            <p className='text-3xl font-bold text-[#22543D] mb-2'>Forgot Password?</p>
            <p className='text-[#22543D] '>Please enter your previous email and we’ll send an email 
                  with link, where you can change your password</p>
          </div>
          <div className='w-[70%] mt-5 mb-2 flex flex-row '>
            <div className=' w-[85%] flex flex-col justify-center items-center'>
                
                <div className='w-[100%] flex flex-col mb-5'>
                    <label className='text-black mb-2' htmlFor="Configuration ID">Email</label>
                    <input type="text" className='border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white text-black pl-2 ' />
                </div>
                
            </div>
          </div>
          
          <div className='w-[70%] flex flex-col justify-center'>
            
           <button className='bg-[#22543D] text-white w-[78%] text-center'>Send</button>
           <div className='flex w-[78%] items-center justify-center mt-2 mb-2 border-xl'> 
             </div>
           <p className='text-center w-[78%] text-[#22543D]'>Or you can <a href="/login"><span className='text-[#22543D] cursor-pointer underline'>Login </span></a></p>
          </div>
       </div>
      );
}
 
export default ForgotPassword;