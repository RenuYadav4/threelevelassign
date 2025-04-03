import React, { useState } from 'react'
import Form from '../Components/Form';

const Login = () => {
  
  return (
    <div className="relative flex bg-[#0d222e] overflow-hidden justify-center h-screen items-center">

        {/* 🔥 Custom Circle Shadow Effects */}
        <div className="absolute -top-10 lg:-left-[-350px] xl:-left-[-400px] h-25 w-25 md:-left-[-250px] md:w-30 md:h-30 lg:w-40 lg:h-40 bg-[#837e60] opacity-50  rounded-full"></div>
        <div className="absolute top-1/2  -right-6 md:-right-13 lg:-right-20 h-20 w-20 md:w-45 md:h-45 lg:w-50 lg:h-50 bg-[#bc7c5c] opacity-50  rounded-full "></div>
        <div className="absolute -bottom-12 right-60 w-42 h-42 bg-[#b75775] opacity-50  rounded-full "></div>

        <div className='relative bg-[#253434] rounded-2xl h-[500px] md:w-[40%]  lg:w-3/6 xl:w-2/4 max-w-[400px] '>
          <h2 className=' py-7 px-4 text-3xl font-bold bg-gradient-to-r from-[#e06d3c] to-[#07988f] bg-clip-text text-transparent'>EmployWise</h2>
          <Form/>
        </div>
    </div>
  )
}

export default Login