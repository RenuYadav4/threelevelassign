import React, { useState } from 'react'

const Search = () => {
    const [find ,setFind] = useState("");
    console.log(find);
  return (
    <div>
        <input 
        type="text" 
        placeholder='Search...'
         className='md:w-full max-w-[300px] px-1 py-1 md:px-2 md:py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-[#6bc4e2] focus:border-[#6a99b4] transition duration-300 shadow-sm hover:shadow-md rounded-sm' onChange={(e)=>setFind(e.target.value)}  />
    </div>
  )
}

export default Search