import logo from '../../images/logo.png'
import sight1 from '../../images/sight1.png'
import sight2 from '../../images/sight2.png'

const MapSideBar = () => {
    return ( 
        <div className="w-[100%] h-[100%] bg-[#F5F5F7] flex flex-col items-center justify-center ">
           <div className='w-[100%] flex justify-center items-center'>
              <img src={logo} alt="logo" className='w-[70%] h-[80px]' />
           </div>
        
        <div className='bg-gray-300 w-[80%] h-0.5'></div>

        <div className='w-[80%] flex flex-row justify-center items-center mt-4 space-x-2'>
        {/* // the is will contain the five animals */}
        <div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>1</div>
        <div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>2</div>
        <div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>3</div>
        <div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>4</div>
        <div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>5</div>
        </div>

        {/* // the sighting next  */}
        <div className='mt-4 clear-left w-[90%] flex flex-col justify-center items-start'>
        <h3 className=' font-bold text-black text-xl '>Sights</h3>
         <div className='w-[80%] flex flex-col justify-center items-center mt-4 space-x-2'>
         {/* // the is will contain the five animals */}
         <div>
            <img src={sight1} alt="" />
         </div>
         <div>
            <img src={sight2} alt="" />
         </div>
     </div>
        </div>
        </div>
     );
}
 
export default MapSideBar;