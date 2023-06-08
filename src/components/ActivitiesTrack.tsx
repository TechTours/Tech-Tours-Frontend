import {CgChevronDownR} from 'react-icons/cg'

const ActivitiesTrack = () => {
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
            {/* the first part start  */}
                  <div className="w-[100%] h-[10%]  flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-between items-center">
           <div className="p-2 font-bold text-xl text-[#22543D]">Manage Users</div>
           <div className="pt-1"> 
           <button className="text-black shadow-sm shadow-[#22543D] bg-white">Create New User</button>
       </div>
       </div>
      </div>
      {/* //the first part end */}
        </div>
     );
}
 
export default ActivitiesTrack;