import React from 'react'

const User = ({ user }) => {
  return (
    <div className='hover:border-1 rounded-2xl border-gray-400 hover:shadow-xl p-2 md:p-5'>
      <div className="flex gap-2 ">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 md:w-15 md:h-15 rounded-full border-2 border-gray-300 shadow-md"
        />
        <p className="mt-3 md:mt-6 text-xs md:text-sm font-semibold font-serif">{user.first_name} {user.last_name}</p>
      </div>
    </div>
  )
}

export default User