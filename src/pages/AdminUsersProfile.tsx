import SideBarDash from "../components/User/SideBarDash";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminProfile from "../components/Admin/AdminProfile";

const AdminUsersProfile = () => {
    return ( 
        <div className=" w-[100%] flex h-[100vh] flex-row bg-[#F5F5F5] justify-center items-center">
        <div className="w-[20%] h-[100%] flex flex-col bg-white justify-center items-center">
            <SideBarDash isSelected={4} />
        </div>
        <div className="w-[80%] h-[100%] flex flex-col bg-[#F5F5F5] justify-center items-center">
            <div className="w-[100%] h-[10%]  flex flex-row justify-center items-center">
                <AdminHeader />
            </div>
            <div className="w-[100%] h-[90%] flex flex-row justify-center items-center ">
                
                    <AdminProfile />  
                
            </div>
        </div>
    </div>
     );
}
 
export default AdminUsersProfile;