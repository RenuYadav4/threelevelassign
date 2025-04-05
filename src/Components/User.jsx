import React, { useContext } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { UserContext } from '../context/context';
import { deleteUser } from '../API/api';

const User = ({ user }) => {

  const { showForm, setShowForm } = useContext(UserContext);
  const { setUpdated } = useContext(UserContext)
const {data,setData} = useContext(UserContext);

  // handleUpdate
  const handleUpdateUser = (user) => {
    setShowForm(!showForm);
    setUpdated(user);
  }

  // handleDelete
  const handleDeleteUser = async (user) => {
    // console.log("User to be deleted:", user); 

    try {
      const res = await deleteUser(user.id);
      console.log(res.status);   //200 hai iska matlab successflly deleted.
      if (res.status === 200 || res.status === 204) {
           const newupdatedUsers = data.filter((curUser)=>{
            return curUser.id !== user.id;   
           });
           setData(newupdatedUsers);
      }
    } catch (error) {
      console.log("Delete error:", error);
    }
  }


  return (
    <div className=' hover:border-1 rounded-2xl border-gray-400 hover:shadow-xl'>
      <div className="flex gap-4 whitespace-nowrap p-5">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 lg:w-15 lg:h-15 rounded-full border-2 border-gray-300 shadow-md"
        />

        <div className='relative flex'>
          <div>
            <p className="mt-1 lg:mt-6 text-xs lg:text-sm font-semibold font-serif">{user.first_name} {user.last_name}</p>
            <p className='mt-1 lg:mt-6 text-xs md:text-sm  font-serif'>{user.email}</p>
          </div>
          <div className='flex gap-1 absolute top-1 right-1'>
            <CiEdit
              className='text-gray-600'
              // onClick={() => setEditing(!editing)}
              onClick={() => handleUpdateUser(user)}
            />
            <MdDeleteOutline className='text-gray-600'
              onClick={() => handleDeleteUser(user)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User