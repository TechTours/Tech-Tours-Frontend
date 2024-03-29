import Footer from "../components/UI/Footer";
import UserDashboardHeader from "../components/Admin/UserDashboardHeader";
import SideNumbers from '../components/User/SideNumbers';
import ReportForm from '../components/User/ReportForm';
import { useState } from 'react';
import SuccessReport from "../components/User/SuccessReport";

type props = {
    header : React.FC,
    footer : React.FC
}

const Report: React.FC = (props) => {
    const [isPopUp, setIsPopUp] = useState(false);
    const [currentInput , setCurrentInput]  = useState(1);
    const setCurrentInputFunction = (currentInput : number) =>{
      setCurrentInput(currentInput);
    }

    const setCurrentIsPopValue = (isPopUp : boolean) => {
        setIsPopUp(!isPopUp);
    }
    return (  
        <div className="w-[100%] flex flex-col items-center overflow-hidden bg-white">
            {!isPopUp ? "" : <SuccessReport/>}
        <div>
            <UserDashboardHeader />
        </div>
        <div className='flex lg:flex-row w-[92%] mt-3 msm:flex-col'>
            <div className='flex w-[20%] justify-center items-center'>
            <SideNumbers currentInput={currentInput} />
            </div>
            <div className='w-[80%] '>
                <ReportForm setCurrentInputFunction={setCurrentInputFunction} setCurrentIsPopValue={setCurrentIsPopValue}/>
            </div>
        </div>
        <div>
            <Footer />
        </div>
     </div>
     
      );
}
 
export default Report;  