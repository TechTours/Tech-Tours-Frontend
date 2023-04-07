import { useState } from 'react';
type propsValue  =  {
    currentInput : number;
}
const SideNumbers = (props : propsValue) => {

    return ( 
        <div>
            <div className={props.currentInput != 1 ? "mb-20 mt-20 bg-slate-200 h-[10vh] w-[10vh] flex justify-center items-center font-bold text-[#22543d] rounded-[100%] text-xl" : "mb-20 mt-20 bg-[#22543d] h-[10vh] w-[10vh] flex justify-center items-center font-bold text-[white] rounded-[100%] text-xl"}>1</div>
            <div className={props.currentInput != 2 ? "mb-20 mt-20 bg-slate-200 h-[10vh] w-[10vh] flex justify-center items-center font-bold text-[#22543d] rounded-[100%] text-xl" : "mb-20 mt-20 bg-[#22543d] h-[10vh] w-[10vh] flex justify-center items-center font-bold text-[white] rounded-[100%] text-xl"}>2</div>
            <div className={props.currentInput != 3 ? "mb-20 mt-20 bg-slate-200 h-[10vh] w-[10vh] flex justify-center items-center font-bold text-[#22543d] rounded-[100%] text-xl" : "mb-20 mt-20 bg-[#22543d] h-[10vh] w-[10vh] flex justify-center items-center font-bold text-[white] rounded-[100%] text-xl"}>3</div>
        </div>
     );
}
 
export default SideNumbers;