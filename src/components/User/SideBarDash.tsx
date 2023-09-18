import {RiHome4Line} from 'react-icons/ri'
import {HiOutlineUserCircle , HiOutlineTrendingUp , HiOutlineUsers} from 'react-icons/hi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'

type SideBarDashProps = {
    isSelected : number
}

const SideBarDash : React.FC<SideBarDashProps> = (props : SideBarDashProps) => {
    const navigate = useNavigate();

    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-start space-y-2.5">
            <div className="w-[100%] flex  justify-end items-end flex-col p-5 ">
                <div className="w-[100%]  flex justify-center items-center text-black font-bold ">
                    <img src={logo} alt="logo image" className='h-[70%] '/>
                </div>
                <div className="w-[100%] h-[2px] bg-[#0000001f] align-bottom  "></div>
            </div>
            <div className={
                props.isSelected === 1 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{navigate("/admin/dashboard")}}>
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><RiHome4Line /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >Dashboard</div>
            </div>

            <div className={
                 props.isSelected === 2 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{navigate("/admin/users")}}>
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><HiOutlineUsers /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >Users</div>
            </div>

            <div className={
                props.isSelected === 3 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{navigate("/admin/activities")}}> 
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><HiOutlineTrendingUp /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >Activity Log</div>
            </div>

            <div className={
                props.isSelected === 4 ? "w-[100%] flex justify-center items-center bg-[#22543d25] p-2 cursor-pointer" : "w-[100%] flex justify-center items-center p-2 cursor-pointer"
            } onClick={()=>{navigate("/admin/profile")}}> 
                <div className="w-[20%] flex flex-row justify-center items-center p-1 text-xl text-[#22543D] font-semibold"><HiOutlineUserCircle /></div>
                <div className="w-[80%] flex flex-row justify-start items-start p-1 text-[#22543D] font-bold" >User Profile</div>
            </div>

        </div>
     );
}
 
export default SideBarDash;