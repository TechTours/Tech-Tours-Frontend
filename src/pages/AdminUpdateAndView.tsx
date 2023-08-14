import SideBarDash from "../components/User/SideBarDash";
import AdminHeader from "../components/Admin/AdminHeader";
import UpdateAndViewUser from '../components/Admin/UpdateAndViewUser';
import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";

const AdminUpdateAndView = () => {
    const location = useLocation();
    const [user, setUser] = useState(null); // Initialize with null
  
    // Effect to update the user when location.state changes
    useEffect(() => {
      if (location.state && location.state.user) {
        setUser(location.state.user);
      }
    }, [location.state]);
     
    return ( 
        <div className=" w-[100%] flex h-[100vh] flex-row bg-[#F5F5F5] justify-center items-center">
        <div className="w-[20%] h-[100%] flex flex-col bg-white justify-center items-center">
            <SideBarDash isSelected={2} />
        </div>
        <div className="w-[80%] h-[100%] flex flex-col bg-[#F5F5F5] justify-center items-center">
            <div className="w-[100%] h-[10%]  flex flex-row justify-center items-center">
                <AdminHeader />
            </div>
            <div className="w-[100%] h-[90%] flex flex-row justify-center items-center ">
                {user && <UpdateAndViewUser user={user} />}
                {/* <UpdateAndViewUser user={user} /> */}
            </div>
        </div>
    </div>
     );
}
 
export default AdminUpdateAndView;