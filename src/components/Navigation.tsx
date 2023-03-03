import {IoReorderThreeOutline} from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci';
import {GrLocation} from 'react-icons/gr'

const Navigation = () => {
    return ( 
        <div className="w-[100%] flex flex-col justify-center items-center">
          <div className='mt-2 mb-3'> 
            <button className="flex flex-row justify-center items-center shadow-md gap-3" >
                <IoReorderThreeOutline className="text-4xl text-[#22543D]" />
                <p>Sort By : All (20)</p>
            </button>
          </div>
        
          <div className='w-[82%] mt-4 mb-4'> 
            <div className='flex flex-row gap-2 text-xl font-bold text-[#22543D]'> 
               <GrLocation  className='text-2xl text-[#22543D] font-bold'/>
               <p>Elephant (2)</p>
            </div>
          </div>

          <div className='w-[82%] mt-4 mb-4'> 
            <div className='flex flex-row gap-2 text-xl font-bold text-[#22543D]'> 
               <GrLocation  className='text-2xl text-[#22543D] font-bold'/>
               <p>Leopards (2)</p>
            </div>
          </div>

          <div className='w-[82%] mt-4 mb-4'> 
            <div className='flex flex-row gap-2 text-xl font-bold text-[#22543D]'> 
               <GrLocation  className='text-2xl text-[#22543D] font-bold'/>
               <p>Buffalos (2)</p>
            </div>
          </div>

          <div className='w-[82%] mt-4 mb-4'> 
            <div className='flex flex-row gap-2 text-xl font-bold text-[#22543D]'> 
               <GrLocation  className='text-2xl text-[#22543D] font-bold'/>
               <p>Rhinos (2)</p>
            </div>
          </div>

          <div className='w-[82%] mt-4 mb-4'> 
            <div className='flex flex-row gap-2 text-xl font-bold text-[#22543D]'> 
               <GrLocation  className='text-2xl text-[#22543D] font-bold'/>
               <p>Lions (2)</p>
            </div>
          </div>
          
          <div className='mt-5 w-[80%]'>
            <button className='w-[100%] flex flex-row bg-[#22543D] mt-3  text-white justify-center items-center  gap-3' >View Activity</button>
            <button className=' w-[100%] flex flex-row bg-white  text-[#22543D] mt-3 mb-2 justify-center items-center shadow-md gap-3'>Report Sighting</button>
          </div>
        </div>
     );
}
 
export default Navigation;