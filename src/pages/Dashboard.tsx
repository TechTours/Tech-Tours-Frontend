import SideBarDash from "../components/SideBarDash";

const Dashboard = () => {
    return ( 
        <div className=" w-[100%] flex h-[100vh] flex-row bg-[#F5F5F5] justify-center items-center">
            <div className="w-[20%] h-[100%] flex flex-col bg-white justify-center items-center">
                <SideBarDash />
            </div>
            <div className="w-[80%] h-[100%] flex flex-col bg-[#F5F5F5] justify-center items-center">Hello World</div>
        </div>
     );
}
 
export default Dashboard;