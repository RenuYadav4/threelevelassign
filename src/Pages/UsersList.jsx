import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../API/api';
import Search from '../Components/Search';
import { UserContext } from '../context/context';
import EditUser from '../Components/EditUser';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavBar';

const UsersList = () => {
  const { data, setData } = useContext(UserContext)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { showForm } = useContext(UserContext);

  const navigate = useNavigate();

  const getuserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getUser(page);
      // console.log(res);
      setData(res.data?.data || []);
      setTotalPages(res.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }

  }
  useEffect(() => {

    getuserData();
  }, [page]);



  if (loading)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Error:{error?.message || "Something went wrong"}</h1>
      </div>
    )

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[#0d222e]">
      <div className="mt-4 flex justify-end">
        <Navbar/>
          {/* <button
            onClick={() => navigate("/portfolio-form")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Generate Portfolio
          </button> */}
        </div>
      {/* render the form for edit */}
      {showForm && <EditUser />}
      <div className="p-3 md:p-10 bg-[#fff] shadow-2xl shadow-black rounded-2xl">
        <div className='flex flex-col gap-3'>
          <h2 className='text-sm md:text-xl font-serif font-bold text-gray-600'>Users</h2>
          <Search data={data} />
        </div>

        

        {/* Pagination Control */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`text-xs p-2 md:text-lg md:px-4 md:py-2 bg-gray-500 text-white rounded  ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
          >
            Previous
          </button>
          <span className='px-4'>Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
            className={`text-xs p-2  md:text-lg md:px-4 md:py-2 bg-gray-500 text-white rounded  ${page >= totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersList