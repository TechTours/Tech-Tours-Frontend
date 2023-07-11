import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineEye} from 'react-icons/ai'
import ActivitiesTrack from './ActivitiesTrack';

const ActivitiesTable = () => {
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
    <tr className='text-black'>
      <td className="py-2 px-4 text-center">12:05</td>
      <td className="py-2 px-4 text-center">Buffalo</td>
      <td className="py-2 px-4 text-center">Georgia</td>
      <td className="py-2 px-4 text-center">40.7306° W</td>
      <td className="py-2 px-4 text-center">40.7306° N</td>

      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Valid
          </div>
        </div>
      </td>
    </tr>
    {/* <!-- Add more rows as needed --> */}

   
    <tr className='text-black'>
      <td className="py-2 px-4 text-center">12:05</td>
      <td className="py-2 px-4 text-center">Buffalo</td>
      <td className="py-2 px-4 text-center">Georgia</td>
      <td className="py-2 px-4 text-center">40.7306° W</td>
      <td className="py-2 px-4 text-center">40.7306° N</td>

      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Valid
          </div>
        </div>
      </td>
    </tr>


    <tr className='text-black'>
      <td className="py-2 px-4 text-center">12:05</td>
      <td className="py-2 px-4 text-center">Buffalo</td>
      <td className="py-2 px-4 text-center">Georgia</td>
      <td className="py-2 px-4 text-center">40.7306° W</td>
      <td className="py-2 px-4 text-center">40.7306° N</td>

      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Valid
          </div>
        </div>
      </td>
    </tr>


    <tr className='text-black'>
      <td className="py-2 px-4 text-center">12:05</td>
      <td className="py-2 px-4 text-center">Buffalo</td>
      <td className="py-2 px-4 text-center">Georgia</td>
      <td className="py-2 px-4 text-center">40.7306° W</td>
      <td className="py-2 px-4 text-center">40.7306° N</td>

      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Valid
          </div>
        </div>
      </td>
    </tr>
    
  </tbody>
</table>


        </div>
     );
}
 
export default ActivitiesTable;