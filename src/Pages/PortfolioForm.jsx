import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const PortfolioForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    projects: ""
  });

  const navigate = useNavigate();

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioData", JSON.stringify(formData));
    navigate("/preview");
  };

  const renderInput = (label, name, type = "text", isTextarea = false) => (
    <div className='relative my-6'>
      <label className="absolute top-1/2 left-[10px] -translate-y-[160%] bg-[#0d222e] px-[5px] text-[#07988f] capitalize">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="shadow-xs shadow-yellow-50 w-full p-3 bg-transparent text-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white"
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="shadow-xs shadow-yellow-50 w-full p-3 bg-transparent text-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white"
          required
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d222e] pt-24 flex items-center justify-center p-4">
      <div className="bg-transparent shadow-lg shadow-amber-700 border border-gray-700 rounded-lg p-6 w-full max-w-lg">
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); next(); }} className='flex flex-col'>
            {renderInput("Your Name", "name")}
            <button type='submit' className='flex justify-center w-[130px] mt-6 text-gray-300 bg-transparent border border-[#07988f] p-2 rounded-2xl'>
              Next <IoIosArrowRoundForward className='ml-1 text-2xl' />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); next(); }} className='flex flex-col'>
            {renderInput("Short Bio", "bio", "text")}
            <div className='flex justify-between mt-6'>
              <button type='button' onClick={prev} className='text-gray-300 border border-gray-500 px-4 py-2 rounded-lg'>
                Back
              </button>
              <button type='submit' className='text-gray-300 border border-[#07988f] px-4 py-2 rounded-lg'>
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={(e) => { e.preventDefault(); next(); }} className='flex flex-col'>
            {renderInput("Skills", "skills")}
            <div className='flex justify-between mt-6'>
              <button type='button' onClick={prev} className='text-gray-300 border border-gray-500 px-4 py-2 rounded-lg'>
                Back
              </button>
              <button type='submit' className='text-gray-300 border border-[#07988f] px-4 py-2 rounded-lg'>
                Next
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            {renderInput("Projects", "projects", "text")}
            <div className='flex justify-between mt-6'>
              <button type='button' onClick={prev} className='text-gray-300 border border-gray-500 px-4 py-2 rounded-lg'>
                Back
              </button>
              <button type='submit' className='text-gray-300 border border-green-600 px-4 py-2 rounded-lg'>
                Preview
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PortfolioForm;
