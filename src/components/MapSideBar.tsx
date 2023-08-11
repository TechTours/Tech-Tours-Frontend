import logo from '../images/logo.png'

const MapSideBar = () => {
    return ( 
        <div className="w-[100%] h-[100%] bg-[#F5F5F7] flex flex-col items-center justify-center ">
           <div className='w-[100%] flex justify-center items-center'>
              <img src={logo} alt="logo" className='w-[80%] h-[80px]' />
           </div>
        
        <div className='bg-gray-300 w-[80%] h-0.5'>

        </div>
        </div>
     );
}
 
export default MapSideBar;