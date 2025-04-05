import React, { useContext, useState, } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { postData } from '../API/api';
import { UserContext } from '../context/context';


const Form = () => {
    const [addUser, setaddUser] = useState({
        email: "",
        password: "",

    })

    const [ message, setMessage ] = useState(""); 
    const [error, setError] = useState(null);

    // this is just handling what is being written inside input field
    const handleInputChange = (e) => {
        const name = e.target.name;   //name from name field in input
        const value = e.target.value;   //value from value field in input for both email and password
        setaddUser((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    }
    const navigate = useNavigate();

    const addPostData = async () => {
        try {
            const res = await postData(addUser);
            console.log("res", res);

            if (res.status == 200) {
                // console.log(res.data);
                const token = res.data.token;
                if (token) {
                    localStorage.setItem("authToken", token);
                    setMessage("Loged in Successfully!")
                    setaddUser({ name: "", value: "" });
                    setTimeout(() => {
                        navigate('/userslist');
                    }, 3000);
                }

            } else {
                setMessage("Login failed.Please try again.");
            }
        } catch (error) {
            setError(error);
            setMessage("Something went wrong. Please try again");
            console.log(error);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        addPostData();
        {
            !error &&
                setTimeout(() => {
                    setMessage("");
                    navigate('/userslist');
                }, 3000);
        }
    };

    return (
        <>
            {message && <p className='text-white ml-3 text-xl'>{message}</p>}
            <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                <div className='relative'>
                    <label className="absolute top-2/4 left-[10px] -translate-y-[160%] bg-[#253434] px-[5px] text-[#07988f]">Enter email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder=''
                        className="shadow-xs shadow-yellow-50 w-[93%] p-3 mx-2 my-5 lg:w-[90%] lg:mx-4 bg-transparent text-gray-400 placeholder-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white focus:ring-0 appearance-none"
                        required
                        value={addUser.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='relative'>
                    <label className="absolute top-1/2 left-[10px] -translate-y-[160%] bg-[#253434] px-[5px] text-[#07988f]">password</label>
                    <input
                        type="password"
                        placeholder=''
                        name='password'
                        className="shadow-xs shadow-yellow-50 w-[93%] p-3 mx-2 my-5 lg:w-[90%] lg:mx-4 bg-transparent text-gray-400 placeholder-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white focus:ring-0 appearance-none"
                        required
                        value={addUser.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit' className='flex justify-center mx-2 p-2 w-[120px]  cursor-pointer mt-6 text-gray-300 bg-transparent inset-shadow-sm inset-shadow-[#07988f] font-semibold  rounded-2xl' >
                    Login
                    <IoIosArrowRoundForward className='ml-1 text-2xl ' />
                </button>
            </form>
        </>
    )
}

export default Form