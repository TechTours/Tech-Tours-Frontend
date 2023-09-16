import Logo from '../../images/logo.png';
import "../../styles/animations.css"

const LoderComponent = () => {
    return ( 
        <div className="h-screen flex flex-col justify-center items-center loader-container">
        <img
          src={Logo}
          className="animate-spin-slow loader-logo"
          alt="logo"
        />
        <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">Loading...</p>
      </div>
     );
}
 
export default LoderComponent;