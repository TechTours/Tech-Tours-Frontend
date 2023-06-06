import DataComponent from "./DataComponent";
import React , {useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import NotificationAdmin from "./NoticationAdmin";

const DashboardComponent = () => {

    type dataType = {
        title : string,
        value : string,
        percentage : string,
        icon : string,
        color : string
    }

    const dataComp : dataType[] = [
        { "title" : "Total number of accounts" , "value" : "27" , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
        { "title" : "Pending account requests" , "value" : "27" , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
        { "title" : "Disabled accounts" , "value" : "27" , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
        { "title" : "Deleted accounts" , "value" : "27" , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowDown" , "color" : "#E29578" },
    ]


    ChartJS.register(ArcElement, Tooltip, Legend);

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

    
    return ( 
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
             {/* the first part start  */}
            <div className="w-[100%] h-[10%]  flex flex-row justify-center items-start ">
            <div className="w-[92%] flex flex-row justify-between items-center">
                <div className="p-2 font-bold text-xl text-[#22543D]">Dashboard</div>
                <div className="pt-1"> 
                <button className="text-black shadow-sm shadow-[#22543D]">Create New User</button>
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
           <div className="bg-white w-[100%] h-[42vh] rounded-md mt-4 flex justify-center items-center pt-20 pb-20 shadow-md">
           {/* <Doughnut data={data} /> */}
           This part will contain  a graph
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