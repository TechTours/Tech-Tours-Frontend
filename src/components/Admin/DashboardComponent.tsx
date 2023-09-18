import DataComponent from "./DataComponent";
import React , {useState} from "react";
import NotificationAdmin from "./NoticationAdmin";
import axios from "axios";
import { BASE_URL } from "../../api/apiConfig";
import { Toast } from "react-toastify/dist/components";
import Toastify from 'toastify-js';
import { BallTriangle } from "react-loader-spinner";
import "../../styles/animations.css"

type Props = {
  getCurrentPage : (page : number , user : any)=>void
}

const DashboardComponent = (Props : Props) => {
  const [isLoading , setIsLoading] = useState<boolean>(false)
  const [usersNumber , setUsersNumber] = useState<number>(0)
  const [activityNumber , setActivityNumber] = useState<number>(0)

    type dataType = {
        title : string,
        value : number,
        percentage : string,
        icon : string,
        color : string
        
    }

 const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0.5,
    },
  ],
};

const renderCreateUser = ()=>{
  Props.getCurrentPage(2.1 , null)
}

const getUsersNumber = async()=>{
  const token = localStorage.getItem("token")
  const headers = {
    Authorization : `Bearer ${token}`
  }

  console.log(headers);

  axios.get(`${BASE_URL}/users/all` , {headers : headers}).then((res)=>{
    const data = res.data;
    const number = data.length;
    setUsersNumber(number)
  }).catch((err)=>{
    console.log(err);
    setIsLoading(false)
    Toastify({
      text: "Error while fetching users",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
      className: "info",
    }).showToast()
  })
}
const getActivityNumber = async()=>{
  const headers = {
    Authorization : `Bearer ${localStorage.getItem("token")}`
  }

  axios.get(`${BASE_URL}/activity/all` , {headers : headers}).then((res)=>{
    const data = res.data;
    const number = data.length;
    setActivityNumber(number)
  }).catch((err)=>{
    console.log(err);
    setIsLoading(false)
    Toastify({
      text: "Error while fetching activity",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
      className: "info",
    }).showToast()
  })
}

const getDashBoardData = async()=>{
  setIsLoading(true)
  await getUsersNumber()
  await getActivityNumber()
  setIsLoading(false)
}

React.useEffect(() => {
  getDashBoardData()
}, [])

const dataComp : dataType[] = [
  { "title" : "Total number of accounts" , "value" : usersNumber , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
  { "title" : "Reported Sightings" , "value" : activityNumber , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowDown" , "color" : "#E29578" },
  { "title" : "Drones in Use" , "value" : 1 , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowDown" , "color" : "#E29578" },
  { "title" : "Animals in the Park" , "value" : activityNumber , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
]

if(isLoading){
  return (
    <div className="w-[100%] h-[100%] bg-[#F5F5F5] flex flex-col justify-center items-center">
      <BallTriangle
      color='#22543D'
      />
   <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
User Registration is in progress
</p>
      </div>
  )
}


    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
             {/* the first part start  */}
            <div className="w-[100%] h-[10%]  flex flex-row justify-center items-start ">
            <div className="w-[92%] flex flex-row justify-between items-center">
                <div className="p-2 font-bold text-xl text-[#22543D]">Dashboard</div>
                <div className="pt-1"> 
                <button className="text-black bg-white shadow-sm shadow-[#22543D]" onClick={renderCreateUser}>Create New User</button>
            </div>
            </div>
           </div>
           {/* the first part end */}

           {/* the second part start  */}
          <div className="w-[100%] h-[30%] flex flex-row justify-center items-start ">
          <div className="w-[92%] p-2 flex flex-row justify-between items-center mt-3">
            {dataComp.map( function mapData(item : dataType){
        return(
            <DataComponent title={item.title} value={item.value} percentage={item.percentage} icon={item.icon} color={item.color} />
        )
    })}
           </div>
          </div>
           {/* the second part end */}

           {/* the third part start */}
           <div className="w-[100%] h-[60%] flex flex-row justify-center items-start gap-4">
           <div className="w-[92%] flex flex-row ">
            
            {/* // the third - first part start  */}
           <div className="w-[60%] h-[100%] flex flex-col justify-center items-start p-2">
           <div className="w-[100%] h-[20%] flex flex-row justify-between items-center ">
            <div className=" text-[#22543D] text-xl font-bold">Recent Activity Logs</div>
            <div className="">
                <button className="bg-white text-black font-bold shadow-sm shadow-[#22543D]">Sort By: Today</button>
            </div>
            
           </div>
           <div className="bg-white w-[100%] h-[42vh] rounded-md mt-4 flex justify-center items-center pt-20 pb-20 shadow-md text-black">
           {/* <Doughnut data={data} /> */}
           This part will contain  a graph
           <img src="data:image/png;base64,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" alt="" />
           </div>
           </div>
              {/* // the third - first part end */}

              {/* // the third-second part start */}
              <div className="w-[40%] h-[100%] flex flex-col justify-center items-start pl-2 overflow-hidden">
              <div className="w-[100%] flex flex-row justify-start items-center">
            <div className=" text-[#22543D] flex  items-center  justify-start h-[11vh] text-xl font-bold">Recent Pending Requests</div>   
           </div>
               <div className="bg-white w-[100%] h-[42vh] rounded-md overflow-y-hidden scrollbar-hidden shadow-md">
                        <NotificationAdmin />
                        <NotificationAdmin />
                        <NotificationAdmin />
                        <NotificationAdmin />
                        <NotificationAdmin />
                        <NotificationAdmin />
                        <NotificationAdmin />
               </div>
              </div>
              {/* // the third-second part end  */}

            </div>
           </div>
           {/* the third part end */}
            </div>
     );
}
 
export default DashboardComponent;