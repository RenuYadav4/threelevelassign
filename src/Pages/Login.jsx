import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex justify-center items-center bg-gradient-to-l from-[#CFA27E] to-[#ebd3bf]">

      <div className="relative  bg-[#e1b998] h-4/5 w-[87%] md:p-[45px] lg:p-[55px] md:h-4/6 lg:h-6/7 lg:w-[80%] xl:[75%] shadow-2xl shadow-[#232222]  rounded-2xl ">

        {/* 🔥 Custom Circle Shadow Effects */}
        <div className="absolute -top-10 lg:-left-[-350px] xl:-left-[-400px] h-25 w-25 md:-left-[-250px] md:w-30 md:h-30 lg:w-40 lg:h-40 bg-[#bba08a] opacity-50  rounded-full "></div>
        <div className="absolute top-1/2 -right-6 md:-right-13 lg:-right-20 h-20 w-20 md:w-45 md:h-45 lg:w-50 lg:h-50 bg-[#bba08a] opacity-50  rounded-full "></div>
        <div className="absolute -bottom-12 right-60 w-42 h-42 bg-[#bba08a] opacity-50  rounded-full "></div>

        <div className='relative bg-[#51433d] rounded-2xl md:h-[95%] lg:h-[90%] md:w-[40%]  lg:w-3/6 xl:w-2/4 max-w-[400px] invisible sm:visible '>

        <h2 className='visible py-7 px-4 text-3xl font-bold bg-gradient-to-r from-[#e06d3c] to-[#07988f] bg-clip-text text-transparent'>EmployWise</h2>
          <form action="" className='visible flex flex-col'> 
            <div>
              <input 
              type="text"
               placeholder='enter email'
               className="shadow-xs shadow-yellow-50 w-[93%] p-3 mx-2 my-5 lg:w-[90%] lg:mx-4 bg-[#51433d] md:bg-transparent text-white placeholder-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white focus:ring-0 appearance-none"
/>
            </div>
            <div>
              <input 
              type="password" 
              placeholder='password'
              className="shadow-xs shadow-yellow-50 w-[93%] p-3 mx-2 my-5 lg:w-[90%] lg:mx-4 bg-[#51433d] md:bg-transparent text-white placeholder-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white focus:ring-0 appearance-none"
              />
            </div>
            <button className='flex justify-center mx-2 p-2 w-[120px] cursor-pointer my-20 text-gray-300 bg-transparent  md:bg-transparent md:inset-shadow-sm md:inset-shadow-[#07988f] font-semibold  rounded-2xl' onClick={() => navigate('/userslist')}>
              Login
              <IoIosArrowRoundForward className='ml-1 text-2xl'/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login