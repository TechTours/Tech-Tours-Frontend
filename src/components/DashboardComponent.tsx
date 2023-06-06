import DataComponent from "./DataComponent";
import React , {useState} from "react";

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

    
    return ( 
        <div className="w-[100%] flex flex-col justify-center items-start">
             {/* the first part start  */}
           <div className="w-[100%] flex flex-row justify-center items-start">
           <div className="w-[92%] flex flex-row justify-between items-center">
                <div className="p-2 font-bold text-xl text-[#22543D]">Dashboard</div>
                <div>
                <button className="text-black shadow-sm shadow-[#22543D]">Create New User</button>
            </div>
            </div>
           </div>
           {/* the first part end */}

           {/* the second part start  */}
          <div className="w-[100%] flex flex-row justify-center items-start">
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
           <div className="">
            Hello World
           </div>
           {/* the third part end */}
            </div>
     );
}
 
export default DashboardComponent;