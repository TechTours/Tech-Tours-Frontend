const CreateUserComponent = () => {
    return ( 
             <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
                <div className="w-[100%] h-[10%]  flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-between items-center">
           <div className="p-2 font-bold text-xl text-[#22543D]">Create New User</div>
       </div>
       </div>

          {/* the second part start  */}
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-start  mt-5">
        {/* the first part start  */}
       <div className="w-[100%] h-[100%] flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-center items-center  rounded-lg">
        <form className="w-[100%] h-[100%] flex flex-col justify-center items-start">

                    <div className='w-[100%] flex flex-col mb-5 space-y-2'>
                    <label className='text-black' htmlFor="Configuration ID">Configuration ID</label>
                    <input type="text" className='border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ' />
                    </div>

                    <div className='w-[100%] flex flex-col mb-5 space-y-2'>
                    <label className='text-black' htmlFor="Configuration ID">Username</label>
                    <input type="text" className='border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ' />
                    </div>
 
                    <div className='w-[100%] flex flex-col mb-5 space-y-2'>
                    <label className='text-black' htmlFor="Configuration ID">Password</label>
                    <input type="password" className='border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ' />
                    </div> 

                    <div className='w-[100%] flex flex-col mb-5 space-y-2'>
                    <label className='text-black' htmlFor="Configuration ID">Email</label>
                    <input type="email" className='border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ' />
                    </div> 

                   <div className='w-[100%] flex flex-col mb-5 space-y-2'>
                    <label className='text-black' htmlFor="Configuration ID">Phone Number</label>
                    <input type="text" className='border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ' />
                    </div> 

                    <div className='w-[40%] flex flex-row justify-between mb-5 gap-5'>
                    <button className='bg-[#fffff] text-[#22543D] w-[40%] text-center font-bold border-2 border-[#22543D]'>Back</button>
                    <button className='bg-[#22543D] text-white w-[40%] text-center'>Create</button>
                </div> 

            </form>
        </div>
        </div>
        </div>
        {/* the second part end  */}
             </div>
     );
}
 
export default CreateUserComponent;