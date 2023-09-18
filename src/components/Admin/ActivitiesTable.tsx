import { useState , useEffect } from "react";
import { BASE_URL } from "../../api/apiConfig";
import axios from "axios";
import {BsEmojiNeutral} from 'react-icons/bs'
import { BallTriangle } from "react-loader-spinner";

const ActivitiesTable = () => {
  const [activities, setActivities] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Change this number to adjust items per page
  const [isEmpty , setIsEmpty] = useState(false);


  
  // the time renderiing 
  const renderTime = (time : Date)=>{
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedTime
  }

  function isTimeBeforeCurrent(time : Date) {
    const futureTime = new Date(new Date(time).getTime() + 5 * 60000);
    return futureTime > new Date();
  }

  const getActivities = () => {
    setLoading(true);
    try {
      // use axios to fetch
      const token = localStorage.getItem('token');
      const headers = {
        Authorization : `Bearer ${token}`,
      };

      axios
        .get(`${BASE_URL}/activity/all`, { headers: headers })
        .then((res) => {
          console.log(res.data);
          const allActivities = res.data;
          const newActivities = allActivities.map((activity: any) => {
            const isValid = isTimeBeforeCurrent(new Date(activity.time));
            // Add the isValid property to the activity object
            activity.time = renderTime(new Date(activity.time));
            return {
              ...activity,
              isValid: isValid
            };
          });
          setActivities(newActivities);
          setLoading(false);
          if(newActivities.length === 0){
            setIsEmpty(true);
          }
        })
        .catch((err) => {

          console.log(err);
          setError(true);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  // Pagination
  const indexOfLastActivity = currentPage * itemsPerPage;
  const indexOfFirstActivity = indexOfLastActivity - itemsPerPage;
  const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // pagination end

  if(isEmpty){
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-center items-center w-[100%]  p-4">
      <BsEmojiNeutral  className="text-[5em]"/>
    <p className="text-2xl font-bold text-[#22543D] mt-4 ">No Activity Found</p>
 </div>
  )
  }


  if(error){
    return (
      <div className="bg-[#F5F5F5] flex flex-col justify-center items-center w-[100%]  p-4">
        <BsEmojiNeutral  className="text-[5em] text-[#c76f3c]"/>
      <p className="text-2xl font-bold text-[#c76f3c] mt-4 ">Error Fetching Activities </p>
   </div>
    )
    }

  if(loading){
    return (
      <div className="w-[100%] h-[100%] bg-[#F5F5F5] flex flex-col justify-center items-center">
        <BallTriangle
        color='#22543D'
        />
     <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
  Activity Fetching is in progress
</p>
        </div>
    )
  }

    return ( 
        <div className="w-[95%] pt-3">
           <table className="min-w-full">
  <thead className="shadow-md text-[#22543D]">
    <tr>
      <th className="py-2 px-4 text-center">Time</th>
      <th className="py-2 px-4 text-center">Animal</th>
      <th className="py-2 px-4 text-center">Location</th>
      <th className="py-2 px-4 text-center">Longitude</th>
      <th className="py-2 px-4 text-center">Latitude</th>
      <th className="py-2 px-4 text-center">Status</th>
    </tr>
  </thead>
  <tbody>
    {/* <!-- Table rows --> */}

   {/* Table rows */}
   {loading ? (
            // Loading row
            <tr>
                <td></td>
                <td></td>
                <td className="  w-[100%] h-[100%] flex flex-col justify-center items-center p-3 font-bold text-black text-xl ">
                  Loading...
                  </td>
               </tr>
          ) : error ? (
            // Error row
               <tr>
                <td></td>
                <td></td>
                <td className="  w-[100%] h-[100%] flex flex-col justify-center items-center p-3 font-bold text-[#ec55276c] text-xl ">
                  Error Fetching Activities
                  </td>
               </tr>
            
          ) : (
            // Displaying paginated users
            currentActivities.map((activity: any, index: number) => (
              <tr key={index} className="text-black">
               <td className="py-2 px-4 text-center">{activity.time}</td>
                <td className="py-2 px-4 text-center">{activity.animal}</td>
                <td className="py-2 px-4 text-center">{activity.location}</td>
                <td className="py-2 px-4 text-center">{activity.longitude}</td>
                <td className="py-2 px-4 text-center">{activity.latitude}</td>
                <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
         {
           !activity.isValid ?  (<div className="appearance-none w-21 bg-[#ec55273f]  py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#ff0000] font-semi-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
           Invalid
         </div>) :  (<div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-semi-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Valid
          </div>)
         }
        </div>
      </td>
              </tr>
            ))
          )}
  
  </tbody>
</table>
 {/* Pagination buttons */}
 <div className="flex justify-end mt-3 space-x-2 pb-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-green-900 hover:cursor-pointer text-white font-semi-bold py-1 px-4 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentActivities.length < itemsPerPage}
          className="bg-green-900 hover:cursor-pointer text-white font-semi-bold py-1 px-4 rounded"
        >
          Next
        </button>
      </div>
        </div>
     );
}
 
export default ActivitiesTable;