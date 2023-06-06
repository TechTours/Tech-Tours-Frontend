import {IoIosArrowDown} from 'react-icons/io'

const UserTable = () => {
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
    <tr>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <select className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            <option value="enabled">Enabled <IoIosArrowDown className='text-xl' /> </option>
            <option value="disabled">Disabled <IoIosArrowDown className='text-xl' /> </option>
          </select>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <a href="#" className="text-[#22543D] font-bold underline">View</a>
      </td>
    </tr>
    {/* <!-- Add more rows as needed --> */}

    <tr>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <select className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            <option value="enabled">Enabled <IoIosArrowDown className='text-xl' /> </option>
            <option value="disabled">Disabled <IoIosArrowDown className='text-xl' /> </option>
          </select>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <a href="#" className="text-[#22543D] font-bold underline">View</a>
      </td>
    </tr>


    <tr>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <select className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            <option value="enabled">Enabled <IoIosArrowDown className='text-xl' /> </option>
            <option value="disabled">Disabled <IoIosArrowDown className='text-xl' /> </option>
          </select>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <a href="#" className="text-[#22543D] font-bold underline">View</a>
      </td>
    </tr>


    <tr>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <select className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            <option value="enabled">Enabled <IoIosArrowDown className='text-xl' /> </option>
            <option value="disabled">Disabled <IoIosArrowDown className='text-xl' /> </option>
          </select>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <a href="#" className="text-[#22543D] font-bold underline">View</a>
      </td>
    </tr>

    <tr>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <select className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            <option value="enabled">Enabled <IoIosArrowDown className='text-xl' /> </option>
            <option value="disabled">Disabled <IoIosArrowDown className='text-xl' /> </option>
          </select>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <a href="#" className="text-[#22543D] font-bold underline">View</a>
      </td>
    </tr>


    <tr>
      <td className="py-2 px-4 text-center">JohnDoe</td>
      <td className="py-2 px-4 text-center">johndoe@example.com</td>
      <td className="py-2 px-4 text-center">1234567890</td>
      <td className="py-2 px-4 text-center">C12345</td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
          <select className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            <option value="enabled">Enabled <IoIosArrowDown className='text-xl' /> </option>
            <option value="disabled">Disabled <IoIosArrowDown className='text-xl' /> </option>
          </select>
        </div>
      </td>
      <td className="py-2 px-4 text-center">
        <a href="#" className="text-[#22543D] font-bold underline">View</a>
      </td>
    </tr>
    
  </tbody>
</table>


        </div>
     );
}
 
export default UserTable;