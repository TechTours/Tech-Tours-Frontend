import UserTable from "./UserTable";
import {AiOutlineBars} from "react-icons/ai"
import {AiOutlineUserAdd} from "react-icons/ai"

type Props = {
    getCurrentPage : (page : number , user : any)=>void
}

const UsersDash = (Props : Props) => {

  const renderCreateUser = ()=>{
    Props.getCurrentPage(2.1 , {})
  }

  const renderUpdateUser = (value : number , user : any)=>{
    Props.getCurrentPage(value , user)
  }
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
        {/* the first part start  */}
       <div className="w-[100%] h-[10%]  flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-between items-center">
           <div className="p-2 font-bold text-xl text-[#22543D]">Manage Users</div>
           <div className=" flex pt-1 space-x-3"> 
           <button className="text-black shadow-sm shadow-[#22543D] bg-white flex items-center justify-center gap-1" > <AiOutlineBars /> Sort By Date</button>
           <button className="text-white shadow-sm shadow-[#22543D] bg-[#22543D] flex items-center justify-center gap-1" onClick={renderCreateUser}> <AiOutlineUserAdd />  Create New User</button>
       </div>
       </div>
      </div>

        {/* the first part end */}

        {/* the second part start  */}
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start  mt-5">
        {/* the first part start  */}
       <div className="w-[100%] h-[100%] flex flex-row justify-center items-start ">
       <div className="w-[92%] flex flex-row justify-center items-center bg-white rounded-lg">
        <UserTable getCurrentPage={renderUpdateUser} />
        </div>
        </div>
        </div>
        {/* the second part end  */}
      </div>
     );
}
 
export default UsersDash;