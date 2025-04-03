import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const User = ({ user }) => {
  return (
    <div className='cursor-pointer hover:border-1 rounded-2xl border-gray-400 hover:shadow-xl p-2 md:p-5'>
      <div className="flex gap-2 whitespace-nowrap">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 md:w-15 md:h-15 rounded-full border-2 border-gray-300 shadow-md"
        />
        <p className="mt-3 md:mt-6 text-xs md:text-sm font-semibold font-serif">{user.first_name} {user.last_name}</p>

        <div className='flex gap-2'>
          <CiEdit />
          <MdDeleteOutline />
        </div>
      </div>
    </div>
  )
}

export default User