import logo from '../../images/logo.png'
import sight1 from '../../images/sight1.png'
import sight2 from '../../images/sight2.png'
import { useNavigate } from 'react-router-dom'
import {AiOutlineLeftCircle} from 'react-icons/ai'

type props = {
   renderPopUp : () => void
}
const MapSideBar = (props : props) => {
   const navigate = useNavigate();

   const renderPopUp = () => {
       props.renderPopUp()
   }
    return ( 
      <div className='absolute z-10 top-0 left-0 bg-white w-[25vw] h-[100vh] flex flex-col justify-center items-center overflow-scroll'>
      <div className="w-[100%] flex flex-col justify-center items-center"> 
 {/* the div that will contain the logo  */}
  <div className='w-[100%] flex justify-start pl-2 items-center '>
    <div className='w-[70%] pt-20'>
    <img src={logo} alt="logo" className='w-[70%] h-[80px]' />
    </div>
    </div>
    <div className='w-[90%] h-[1px] bg-black'>

    </div>
</div>

{/* // the div containg the animals  */}
<div className='w-[100%] flex flex-col justify-center items-center mt-1'>
<div className='w-[90%] flex flex-row justify-center items-center mt-2 space-x-2'>
{/* // the is will contain the five animals */}
<div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>1</div>
<div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>2</div>
<div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>3</div>
<div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>4</div>
<div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>5</div>
<div className='w-[18%] bg-[#d9d9d9ea] p-2 flex justify-center items-center rounded-[50%] border-2 border-[#22543d48]'>5</div>
</div>
</div>

{/* // the container containing the codes for the sightings */}
<div className='w-[100%] flex flex-col justify-center items-center mt-5'>
  <div className='w-[90%]'>
    <h2 className='text-xl font-bold text-left'>Sights</h2>
  </div>
  <div className='w-[90%] space-y-2  flex flex-col justify-start items-center'>
    <div className='w-[100%] '>
      <img src={sight1} alt="" />
    </div>

    <div className='w-[100%] '>
      <img src={sight2} alt="" />
    </div>
  </div>
</div>

{/* // the links to other pages */}
<div className='w-[90%]  flex justify-start items-start space-x-3 mt-2 flex-col'>
<div className='w-[90%] my-2 h-[1px] bg-black'></div>
  <button className='bg-[#22543de5] w-[80%] text-white' onClick={()=>{navigate("/user/dashboard")}}>Dashboard</button>
  <button className='bg-[#22543de5] w-[80%] mt-2 text-white' onClick={()=>{navigate("/report")}}>Add Sighting</button>
</div>
{/* // the return back icon  */}
<div className='absolute right-0 top-0 h-[100vh] w-[2vw] flex items-center justify-center'>
   <AiOutlineLeftCircle className='text-xl text-black cursor-pointer' onClick={()=>{renderPopUp()}} />
</div>
</div>
     );

}
 
export default MapSideBar;