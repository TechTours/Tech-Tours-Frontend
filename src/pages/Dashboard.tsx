import React, { useState } from 'react';
import AdminHeader from "../components/AdminHeader";
import DashboardComponent from "../components/DashboardComponent";
import UpdateAndViewUser from '../components/UpdateAndViewUser';
import SideBarDash from "../components/SideBarDash";
import UsersDash from "../components/UsersDash";
import ActivitiesTrack from '../components/ActivitiesTrack';
import CreateUserComponent from '../components/CreateUserComponent';


const Dashboard = () => {

    const [currentPage , setCurrentPage] = useState(1);
    const [user , setUser] = useState({} as any)
    const getCurrentPage = (page : number , user : any )=>{
     setCurrentPage(page)
     setUser(user)
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
                        currentPage === 1 ? <DashboardComponent getCurrentPage={getCurrentPage} /> :  currentPage === 2 ?  <UsersDash getCurrentPage={getCurrentPage} /> : currentPage === 2.1 ? <CreateUserComponent /> : currentPage == 2.2 ? <UpdateAndViewUser user={user} /> : <ActivitiesTrack /> 
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;