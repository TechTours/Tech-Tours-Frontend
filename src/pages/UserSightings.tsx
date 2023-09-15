import AdminHeader from "../components/Admin/AdminHeader";
import UserDashboardHeader from "../components/Admin/UserDashboardHeader";
import logo from "../images/logo.png"
import UserTable from "../components/Admin/UserTable";
import { useNavigate } from "react-router-dom";
import { number } from "prop-types";
import ActivitiesTable from "../components/Admin/ActivitiesTable";

const UserSightings = () => {
    const navigate = useNavigate();
    const linkStyle = "bg-[#22543de5]  text-white font-bold px-10 hover:bg-white border-2 border-[#22543de5] hover:text-[#22543de5]"
    return ( 
        <div className="bg-white w-[100%] h-[100vh] flex flex-col justify-center items-center">
        <div className="w-[100%] h-[10%] flex flex-col justify-center items-center  ">
            <UserDashboardHeader />
        </div>
        <div className="w-[100%] h-[90%] flex flex-col justify-start items-center my-4 ">
            <div className="flex flex-row w-[95%]  justify-center">
                <p className=" text-xl font-bold text-black text-center"> List of Sightings</p>
                {/* <button className="bg-green-900 text-white font-semi-bold " onClick={()=>{navigate("/user/dashboard")}}>
                    Dashboard
                    </button> */}
            </div>
           <ActivitiesTable/> 
        </div>
    </div>
     );
}
 
export default UserSightings;