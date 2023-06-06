import React, { useState } from 'react';
import AdminHeader from "../components/AdminHeader";
import DashboardComponent from "../components/DashboardComponent";

import SideBarDash from "../components/SideBarDash";
import UsersDash from "../components/UsersDash";

const Dashboard = () => {
    const [currentPage , setCurrentPage] = useState(1);
    const getCurrentPage = (page : number)=>{
     setCurrentPage(page)
    }
    return ( 
        <div className=" w-[100%] flex h-[100vh] flex-row bg-[#F5F5F5] justify-center items-center">
            <div className="w-[20%] h-[100%] flex flex-col bg-white justify-center items-center">
                <SideBarDash getCurrentPage={getCurrentPage} />
            </div>
            <div className="w-[80%] h-[100%] flex flex-col bg-[#F5F5F5] justify-center items-center">
                <div className="w-[100%] h-[10%]  flex flex-row justify-center items-center">
                    <AdminHeader />
                </div>
                <div className="w-[100%] h-[90%] flex flex-row justify-center items-center ">
                    {
                        currentPage === 1 ? <DashboardComponent /> : <UsersDash />
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;