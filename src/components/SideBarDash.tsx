import {RiHome4Line} from 'react-icons/ri'
import {HiOutlineUserCircle , HiOutlineTrendingUp} from 'react-icons/hi'
import { useState } from 'react';

type props = {
    getCurrentPage : (page : number)=>void
}
const SideBarDash : React.FC<props> = (props) => {
    const [selected , setSelected] = useState(1);

    const changeSelected = (sample : number)=>{
       setSelected(sample)
       props.getCurrentPage(sample)
    }

    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-start space-y-2.5">
            <div className="w-[100%] flex  justify-end items-end flex-col p-5 ">
                <div className="w-[100%] pb-5 flex justify-center items-center text-black font-bold ">Logo</div>
                <div className="w-[100%] h-[2px] bg-[#0000001f] align-bottom  "></div>
            </div>
            <div className={
                selected === 1 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{changeSelected(1)}}>
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><RiHome4Line /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >Dashboard</div>
            </div>

            <div className={
                selected === 2 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{changeSelected(2)}}>
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><HiOutlineUserCircle /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >Users</div>
            </div>

            <div className={
                selected === 3 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{changeSelected(3)}}> 
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><HiOutlineTrendingUp /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >Activity Log</div>
            </div>

        </div>
     );
}
 
export default SideBarDash;