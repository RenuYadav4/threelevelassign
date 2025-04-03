import React, { useState } from 'react'
import User from './User';

const Search = ({ data }) => {
    const [find, setFind] = useState("");

    // const filteredData = data.filter((user) => user.first_name.toLowerCase().includes(find.toLowerCase())
    const filteredData = data.filter((user) => 
        user.first_name?.toLowerCase().includes(find?.toLowerCase() || "")
    );
    
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder='Search...'
                    className='md:w-full max-w-[300px] px-1 py-1 md:px-2 md:py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-[#6bc4e2] focus:border-[#6a99b4] transition duration-300 shadow-sm hover:shadow-md rounded-sm' onChange={(e) => setFind(e.target.value)} />
            </div>
            <ul className="md:grid grid-cols-3 gap-5">
                {filteredData.length > 0 ? (
                    filteredData.map((user) => (
                        <User key={user.id} user={user} />
                    ))
                ) : (
                    <li className="text-gray-500 p-2">No User found</li>
                )}
            </ul>
        </>
    )
}

export default Search