import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
    return ( 
        <div className="bg-white w-[100vw] flex item-center justify-center ">
            <div className="w-[92%] flex flex-row items-center border-b-2 border-gray-300 justify-between">
                <div>LOGO</div>
                <div className="flex ">
                <div className='h-[100%] p-2 flex justify-center items-center text-3xl text-gray-400 font-light'><AiOutlineSearch /></div>
                    <div className='h-[100%] p-2 flex justify-center items-center text-3xl text-gray-400 font-extralight'><BiUserCircle /></div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;