import photo from '../images/tick1.jpg'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const SuccessReport = () => {
    return ( 
        <div className="bg-[#e5e5e5b6] w-[100%] h-[100vh] flex justify-center items-center absolute">
           <div className="bg-white w-[40%] flex flex-col items-center justify-center p-6 rounded-md">
           <AiOutlineCheckCircle className="text-[#22543D] text-8xl"/>
              <p className="text-xl mb-5 mt-2">Successfully Reported A Sighting</p>
             <button className="text-white bg-[#22543D] mt-2 pl-5 pr-5 fnt">
                Back
             </button>
           </div>
        </div>
     );
}
 
export default SuccessReport ;