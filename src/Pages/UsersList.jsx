import React, { useEffect, useState } from 'react'
import { getUser } from '../API/api';
import User from '../Components/User';
import Search from '../Components/Search';

const UsersList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getuserData = async () => {
    try {
      const res = await getUser(page);
      console.log(res);
      setData(res.data.data);
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
    <div className="relative h-screen flex justify-center items-center bg-[#0d222e]">
      <div className="p-3 w-[80%] md:p-10 bg-[#fff] shadow-2xl shadow-black rounded-2xl">
        <h2>user List</h2>
        <Search/>
        {data.length > 0 ? (
          <ul className="md:grid grid-cols-3 gap-5">
            {data.map((user) => (
              <User key={user.id} user={user}/>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No users found.</p>
        )}

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