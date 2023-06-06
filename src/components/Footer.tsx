import {CiInstagram} from 'react-icons/ci'
import{CiTwitter} from 'react-icons/ci'
import{CiLinkedin} from 'react-icons/ci'

const Footer = () => {
    return ( 
        <div className="bg-white w-[100vw] flex flex-col justify-center items-center mt-20">
         <div className="w-[92%] flex flex-row  border-b-2 border-gray-300 justify-between mb-2">
            
             <div className=" flex flex-col w-[30%] mb-10 ">
                   <div> <p className=' text-[#22543D] font-bold '>ABOUT US</p> </div>
                   <div className=' mt-3 w-[80%] text-[14px] text-black'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ultrices tellus. Mauris faucibus tristique ipsum, non faucibus quam sodales a. Nam nec interdum ante.</p> </div>
             </div>
             <div className=" w-[20%]">
                <div> <p className=' text-[#22543D] font-bold '>CONTACT US</p> </div>
                <div  className=' mt-3 w-[80%] text-[14px] text-black'> 
                    <p>TechTours@gmail.com</p>
                    <p>0788237233</p>
                    <p>Kayonza, Rwanda</p>
                </div>
             </div>
             <div className=" w-[25%]">
                <div> <p className=' text-[#22543D] font-bold '>LEGAL INFORMATION</p> </div>
                <div  className=' mt-3 w-[80%] text-[14px] text-black'>
                    <p>Terms and conditions</p>
                    <p>Privacy policy </p>
                    <p>Disclaimer</p>
                </div>
             </div>
             <div className=" w-[20%]">
                <div> <p className=' text-[#22543D] font-bold '>GET IN TOUCH</p> </div>
                <div className='flex flex-row mt-3 gap-5 text-xl items-center text-black'> 
                  <CiInstagram />
                    <CiTwitter />
                    <CiLinkedin />
                </div>
             </div>
             </div>
         <div className='mb-2'>&copy; Copyright. All rights reserved.</div>
        </div>
     );
}
 
export default Footer;