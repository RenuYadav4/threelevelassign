import React from 'react'

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-l from-[#CFA27E] to-[#fffae5]">
      <div className="relative bg-[#e1b998] h-4/5 w-[93%] md:p-[45px] lg:p-[55px] md:h-4/6 lg:h-6/7 lg:w-[80%] xl:[75%] shadow-2xl shadow-gray-500  rounded-2xl">
      
      {/* 🔥 Custom Shadow Effect for This First Inner Div */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-52 h-12 bg-black opacity-25 blur-2xl rounded-full"></div>
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-52 h-12 bg-black opacity-25 blur-2xl rounded-full"></div>

        <div className='bg-[#51433d] rounded-2xl md:h-[95%] lg:h-[90%] md:w-[40%]  lg:w-3/6 xl:w-2/4 max-w-[400px] invisible sm:visible '>
           <p className='visible'>renu</p>
        </div>
        
      </div>
    </div>
  )
}

export default Login