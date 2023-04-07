import Footer from "../components/Footer";
import Header from "../components/Header";
import SideNumbers from '../components/SideNumbers';
import ReportForm from '../components/ReportForm';
import { useState } from 'react';

type props = {
    header : React.FC,
    footer : React.FC
}

const Report: React.FC = (props) => {
    const [currentInput , setCurrentInput]  = useState(1);
    const setCurrentInputFunction = (currentInput : number) =>{
      setCurrentInput(currentInput);
    }
    return (  
        <div className="w-[100%] flex flex-col items-center overflow-x-hidden">
        <div>
            <Header />
        </div>
        <div className='flex flex-row w-[92%] mt-3'>
            <div className='flex w-[20%] justify-center items-center'>
            <SideNumbers currentInput={currentInput} />
            </div>
            <div className='w-[80%] '>
                <ReportForm setCurrentInputFunction={setCurrentInputFunction} />
            </div>
        </div>
        <div> 
            <Footer />
        </div>
     </div>
      );
}
 
export default Report;  