import React from 'react'

const Login = () => {
  return (
    <div className="relative h-screen flex justify-center items-center bg-gradient-to-l from-[#CFA27E] to-[#ebd3bf]">

      <div className="relative flex bg-[#e1b998] h-4/5 w-[87%] md:p-[45px] lg:p-[55px] md:h-4/6 lg:h-6/7 lg:w-[80%] xl:[75%] shadow-2xl shadow-[#232222]  rounded-2xl ">

        {/* 🔥 Custom Circle Shadow Effects */}
        <div className="absolute -top-10 lg:-left-[-350px] xl:-left-[-400px] h-25 w-25 md:-left-[-250px] md:w-30 md:h-30 lg:w-40 lg:h-40 bg-[#bba08a] opacity-50  rounded-full "></div>
        <div className="absolute top-1/2 -right-6 md:-right-13 lg:-right-20 h-20 w-20 md:w-45 md:h-45 lg:w-50 lg:h-50 bg-[#bba08a] opacity-50  rounded-full "></div>
        <div className="absolute -bottom-12 right-60 w-42 h-42 bg-[#bba08a] opacity-50  rounded-full "></div>

        <div className='relative bg-[#51433d] rounded-2xl md:h-[95%] lg:h-[90%] md:w-[40%]  lg:w-3/6 xl:w-2/4 max-w-[400px] invisible sm:visible '>
          <p className='visible'>a girl student</p>
        </div>
        {/* <img src="public\questionmark.png" alt="" className='h-50 w-50' /> */}
      </div>
    </div>
  )
}

export default Login