import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineEye} from 'react-icons/ai'

type Props = {
    getCurrentPage : (page : number)=>void
}

const UserTable = (props : Props) => {
  const renderUpdateUser = ()=>{
    props.getCurrentPage(2.2)
  }
    return ( 
        <div className="w-[95%] pt-3">
           <table className="min-w-full">
  <thead className="shadow-md text-[#22543D]">
    <tr>
      <th className="py-2 px-4 text-center">Username</th>
      <th className="py-2 px-4 text-center">Email</th>
      <th className="py-2 px-4 text-center">Phone Number</th>
      <th className="py-2 px-4 text-center">Config ID</th>
      <th className="py-2 px-4 text-center">Status</th>
      <th className="py-2 px-4 text-center">Action</th>
    </tr>
  </thead>
  <tbody>
    {/* <!-- Table rows --> */}
    <tr className='text-black'>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Enabled
          </div>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
      <a href="#" className="text-[#22543D] font-bold underline flex items-center justify-center gap-2" onClick={renderUpdateUser}>View <AiOutlineEye/> </a>
      </td>
    </tr>
    {/* <!-- Add more rows as needed --> */}

   

  </tbody>
</table>


        </div>
     );
}
 
export default UserTable;