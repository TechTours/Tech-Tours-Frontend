import { BallTriangle } from "react-loader-spinner";
import { useState , useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../api/apiConfig";
import {AiOutlineCheck} from "react-icons/ai";
import {FaTimes} from "react-icons/fa"



const EmailVerification = () => {
    const [isVerifed , setIsVerified] = useState(false);
    const [failed , setFailed] = useState(false);
    const [message , setMessage] = useState("")

    useEffect(()=>{
   // Get the current URL query string
   const queryString = window.location.search;

   // Split the query string by "&" to get individual key-value pairs
   const queryParams = queryString.slice(1).split('&');

   // Initialize variables to store email and token
   let email = '';
   let token = '';

   // Iterate through the key-value pairs and extract email and token
   queryParams.forEach((param) => {
     const [key, value] = param.split('=');

     if (key === 'email') {
       email = decodeURIComponent(value);
     } else if (key === 'token') {
       token = decodeURIComponent(value);
     }
   });

   // Now you have 'email' and 'token' variables with the extracted values
      
      const body = {
        email : email
      }
      const headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
      } = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }

        axios.post(`${BASE_URL}/users/verify/${token}` , body , {headers : headers}).then(res=>{
            const data = res.data;
          if(data.status == false){
           setFailed(true)
           setIsVerified(false)
           setMessage(data.message)
          }else{
            setFailed(false)
            setIsVerified(true)
            setMessage(data.message)
          }
        }).catch(err=>{
            setFailed(true)
            setIsVerified(false)
            setMessage("Email Verfication Failed")
        })
    } , [])

    if(failed){
        return(
            <div className="w-[100%] h-[100vh] bg-[#E5E5E5] flex flex-col justify-center items-center">
        <FaTimes className="text-[10em] text-[#b96138]" />
      <p className="mt-4 text-2xl font-bold text-[#b96138] ">
   {message}
 </p>
         </div>
        )
    }

    if(isVerifed){
    return (
        <div className="w-[100%] h-[100vh] bg-[#E5E5E5] flex flex-col justify-center items-center">
       <AiOutlineCheck className="text-[#22543D] text-[10em]" />
     <p className="mt-4 text-2xl font-bold text-[#22543D] ">
  {message}
</p>
 <a className="" href="/login">Click Here To Login</a>
        </div>
    )
    }
        return (
            <div className="w-[100%] h-[100vh] bg-[#E5E5E5] flex flex-col justify-center items-center">
              <BallTriangle
              color='#22543D'
              />
           <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
        Email Verification is in progress ....
      </p>
              </div>
          )
}
 
export default EmailVerification;