import AdminHeader from "../components/Admin/AdminHeader";
import { useNavigate  } from "react-router-dom";
import logo from "../images/logo.png"
import Footer from "../components/UI/Footer";

const UserDashboard = () => {
    const navigate = useNavigate();
    const linkStyle = "bg-[#22543de5]  text-white font-bold px-10 hover:bg-white border-2 border-[#22543de5] hover:text-[#22543de5]"
    return ( 
        <div className="w-[100%] h-[120vh] flex flex-col justify-center items-center">
            <div className="w-[100%] h-[10%] flex flex-col justify-center items-center  ">
                <AdminHeader />
            </div>
            <div className="w-[100%] h-[90%] flex flex-col justify-center items-center">
                <div className="my-3  flex flex-col justify-center items-center">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <h1 className="font-bold">User Dashboard</h1>
                    <h2 className="text-xl font-bold text-center mb-10">User Important Links</h2>
                </div>
                <div className="flex flex-row space-x-5">
                <div>
                    <button className={linkStyle} onClick={()=>{navigate("/user/profile")}}>
                    Full Profile
                    </button>
                </div>
                <div>
                    <button className={linkStyle} onClick={()=>{navigate("/")}}>
                    Animal Tracking
                    </button>
                    </div>
                <div>
                    <button className={linkStyle} onClick={()=>{navigate("/report")}}>
                    Report Sighting
                    </button>
                    </div>
                <div>
                    <button className={linkStyle} onClick={()=>{navigate("/user/sightings")}}>
                    View Sightings
                    </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default UserDashboard;