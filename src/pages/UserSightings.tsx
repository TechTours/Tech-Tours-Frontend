import AdminHeader from "../components/Admin/AdminHeader";
import logo from "../images/logo.png"
import UserTable from "../components/Admin/UserTable";
import { useNavigate } from "react-router-dom";
import { number } from "prop-types";
import ActivitiesTable from "../components/Admin/ActivitiesTable";

const UserSightings = () => {
    const navigate = useNavigate();
    const linkStyle = "bg-[#22543de5]  text-white font-bold px-10 hover:bg-white border-2 border-[#22543de5] hover:text-[#22543de5]"
    return ( 
        <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
        <div className="w-[100%] h-[10%] flex flex-col justify-center items-center  ">
            <AdminHeader />
        </div>
        <div className="w-[100%] h-[90%] flex flex-col justify-start items-center my-4 ">
            <div className="flex flex-row w-[95%]  justify-between">
                <p className=" text-xl font-bold ">The List of Sightings</p>
                <button  className={linkStyle} onClick={()=>{navigate("/user/dashboard")}}> User Dashboard</button>
            </div>
           <ActivitiesTable/> 
        </div>
    </div>
     );
}
 
export default UserSightings;