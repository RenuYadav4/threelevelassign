import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/context';
import { updateUser } from '../API/api';

const EditUser = () => {
  const { setData } = useContext(UserContext);
  const { updated } = useContext(UserContext);  //updated is the user(when a click on an user) that needs to be updated
  const [editUser, setEditUser] = useState({    //edit user is that is to be saved after updating ..it's inital value is prefilled using updated
    first_name: "",
    last_name: "",
    email: "",
  });
  const { showForm, setShowForm } = useContext(UserContext);
  const { message, setMessage } = useContext(UserContext);

  useEffect(() => {
    if (updated) {
      setEditUser({
        first_name: updated.first_name || "",
        last_name: updated.last_name || "",
        email: updated.email || ""
      });
      setShowForm(true);
    }

  }, [updated]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditUser((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // UPDATE
  const updatePostUser = async () => {
    try {
      setMessage("Please Wait...")
      const res = await updateUser(updated.id, editUser);
      setMessage("User Updated");
      setData((prev) => {
        return prev.map((user) =>
          user.id === updated.id ? { ...user, ...res } : user
        );
      });
    } catch (error) {
      console.error("API Error:", error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePostUser();

    setTimeout(() => {
      setShowForm(false);
      setMessage("");
    }, 500);
  };

  return (
    <>
      {message && (
        <p className="mt-[-580px] text-gray-900 ml-3 text-xl bg-green-200 p-2  absolute rounded">
          {message}
        </p>
      )}
        < form
          onSubmit={handleSubmit}
          className="mb-3 md:mt-[-150px] bg-white p-2 rounded-lg shadow-md flex flex-col gap-2  max-w-sm">
          <button
            type="submit"
            className="bg-gray-500 text-white rounded hover:bg-gray-700 p-1 "
          >
            Update
          </button>
          <input
            name='first_name'
            type="text"
            placeholder="firstname"
            className="border focus:outline-none border-gray-300 p-1 rounded text-sm"
            value={editUser.first_name}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, first_name: e.target.value }))
            }
          />
          <input
            name='last_name'
            type="text"
            placeholder="lastname"
            className="border border-gray-300 p-1 rounded text-sm"
            value={editUser.last_name}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, last_name: e.target.value }))
            }
          />
          <input
            name='email'
            type="email"
            placeholder="email"
            className="border border-gray-300 p-1 rounded text-sm"
            value={editUser.email}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </form >
    </>
  );
}
export default EditUser
