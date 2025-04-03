import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {

   const navigate = useNavigate();
  return (
    <div className='cursor-pointer hover:border-1 rounded-2xl border-gray-400 hover:shadow-xl'>
      <div className="flex gap-4 whitespace-nowrap p-5">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 lg:w-15 lg:h-15 rounded-full border-2 border-gray-300 shadow-md"
        />

        <div className='flex'>
          <div>
            <p className="mt-1 lg:mt-6 text-xs lg:text-sm font-semibold font-serif">{user.first_name} {user.last_name}</p>
            <p className='mt-1 lg:mt-6 text-xs md:text-sm  font-serif'>{user.email}</p>
          </div>
          <div className='flex gap-1 ml-[-33px]'>
            <CiEdit className='text-gray-600' onClick={() => navigate('/edituser')}/>
              <MdDeleteOutline className='text-gray-600' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default User