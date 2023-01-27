import lower from '../images/lower.png'
import upper from '../images/upper.png'

const SideLayout = () => {
    return ( 
        <div className="w-[100%] h-[100%] bg-[#22543D] flex flex-col justify-between items-center text-white">
            <div className="flex w-[100%] justify-end h-[30%]">
            <img src={upper} alt="" />
            </div>

            <div>
                <p className="text-3xl text-center mb-2">TechTours</p>
                <p>"Find your way to the wild with cutting-edge technology"</p>
            </div>

            <div className="flex w-[100%] justify-start h-[30%]">
                <img src={lower} alt="" />
                </div>
        </div>
     );
}
 
export default SideLayout;