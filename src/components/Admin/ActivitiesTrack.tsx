import {AiOutlineBars} from 'react-icons/ai'
import ActivitiesTable from './ActivitiesTable';

const ActivitiesTrack = () => {
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
            {/* the first part start  */}
                  <div className="w-[100%] h-[10%]  flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-between items-center">
           <div className="p-2 font-bold text-xl text-[#22543D]">Manage Activities</div>
           <div className="pt-1"> 
           <button className="text-black shadow-sm shadow-[#22543D] bg-white flex items-center justify-center gap-1" > <AiOutlineBars /> Sort By Time</button>
       </div>
       </div>
      </div>
      {/* //the first part end */}

      
        {/* the second part start  */}
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start  mt-5">
        {/* the first part start  */}
       <div className="w-[100%] h-[100%] flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-center items-center bg-white rounded-lg">
        <ActivitiesTable />
        </div>
        </div>
        </div>
        {/* the second part end  */}

        </div>
     );
}
 
export default ActivitiesTrack;