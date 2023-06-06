import { useState } from 'react';
import SuccessReport from './SuccessReport';
type props = {
    setCurrentInputFunction : Function;
    setCurrentIsPopValue: Function;
}

const ReportForm = (props : props) => {


    return ( 
        <div>
            <div className="text-[#22543D] font-bold text-xl text-center w-[100%] "><h2>REPORT SIGHTING</h2></div>
            <div className="flex flex-col w-[100%] justify-center items-center">
                <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
                    <label className="text-md font-bold text-[#22543d]" htmlFor="Current Location:">CURRENT LOCATION:</label>
                    <input className=" bg-white text-black pl-2 text-sm p-2 rounded-md mt-2 shadow-md" type="text" name="" id="" placeholder="Current Location" value={"Akagera National Park"}  readOnly onFocus={()=> {
                        props
                        .setCurrentInputFunction(1)
                    }}/>
                    </div>

                    <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
                    <label className="text-md font-bold text-[#22543d]" htmlFor="Add Sighting:">ADD SIGHTING:</label>
                    <select name="" className="bg-white text-black pl-2 text-sm p-2 rounded-md mt-2 shadow-md" id="" onFocus={()=> {
                        props
                        .setCurrentInputFunction(2)
                    }}>
                    <option value="">Lion</option>
                    <option value="">Buffalo</option>
                    <option value="">Cheetah</option>
                    <option value="">Elephant</option>
                    <option value="">Lion</option>
                    </select>
                    </div>


                    <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
                    <label className="text-md font-bold text-[#22543d]" htmlFor="Time:">TIME:</label>
                    <select name="" className=" bg-white text-black pl-2 text-sm p-2 rounded-md mt-2 shadow-md" id="" onFocus={()=> {
                        props
                        .setCurrentInputFunction(3)
                    }}>
                        <option value="">1 minute ago</option>
                        <option value="">2 minute ago</option>
                        <option value="">3 minute ago</option>
                        <option value="">4 minute ago</option>
                        <option value="">5 minute ago</option>
                    </select>
                    </div>

                    <div className="flex flex-row justify-end items-end w-[85%] gap-3 mt-4">
                        <button className="bg-slate-200 text-[#22543d]">Cancel</button>
                        <button className="bg-[#22543d] text-white"onClick={
                            props.setCurrentIsPopValue(true)
                        }>Submit</button>
                    </div>
                  
    
            </div>
        </div>
     );
}
 
export default ReportForm;