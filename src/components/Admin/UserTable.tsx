
import { AiOutlineEye } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/apiConfig';
import { useNavigate } from 'react-router-dom';


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Change this number to adjust items per page
  const navigate = useNavigate();

  const getUsers = () => {
    setLoading(true);
    try {
      // use axios to fetch
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .get(`${BASE_URL}/users/all`, { headers: headers })
        .then((res) => {
          const allUsers = res.data;
          const filteredUsers = allUsers.filter((user: any) => user.isAdmin === false);
          setUsers(filteredUsers);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderUpdateUser = (user : {}) => {
    if(user === undefined) return;
    if(user === null) return;
    navigate("/admin/users/update", {state: {user: user}})
  };

  // Pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="w-[95%] pt-3">
      <table className="min-w-full">
      <thead className="shadow-md text-[#22543D]">
          <tr>
            <th className="py-2 px-4 text-center">Username</th>
            <th className="py-2 px-4 text-center">Email</th>
            <th className="py-2 px-4 text-center">Phone Number</th>
            <th className="py-2 px-4 text-center">Fullname</th>
            <th className="py-2 px-4 text-center">Status</th>
            <th className="py-2 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
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
                  Error Fetching Users
                  </td>
               </tr>
            
          ) : (
            // Displaying paginated users
            currentUsers.map((user: any, index: number) => (
              <tr key={index} className="text-black">
               <td className="py-2 px-4 text-center ">{user.username}</td>
                <td className="py-2 px-4 text-center">{user.email}</td>
                <td className="py-2 px-4 text-center">{user.tel}</td>
                <td className="py-2 px-4 text-center">{user.fullname}</td>
                <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center">
        {user.isActive ? (  <div className="appearance-none w-21 bg-[#8ebcac3f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
            Enabled
          </div>) : (
              <div className="appearance-none w-21 bg-[#ec55273f] border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[#22543D] font-bold focus:bg-[#8ebcac3f] focus:border-gray-500">
              Disabled
            </div>
          )}
        </div>
      </td>
      <td className="py-2 px-4 text-center">
      <a href="#" className="text-[#22543D] font-bold underline flex items-center justify-center gap-2" onClick={()=>{
        renderUpdateUser(user);
      }}>View <AiOutlineEye/> </a>
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
          className="bg-green-900 hover:cursor-pointer text-white font-bold py-1 px-4 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentUsers.length < itemsPerPage}
          className="bg-green-900 hover:cursor-pointer text-white font-bold py-1 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
