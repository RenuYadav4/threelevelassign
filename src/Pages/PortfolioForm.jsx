import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const PortfolioForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    projects: {
      description: "",
      link: ""
    },
    experience: {
      company: "",
      role: "",
      duration: ""
    },
    education: {
      institute: "",
      degree: "",
      year: ""
    }
  });

  const handleChange = (e, section, field) => {
    const { name, value } = e.target;
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioData", JSON.stringify(formData));
    navigate("/preview");
  };

  const StyledInput = ({ label, name, value, onChange, type = "text", isTextarea }) => (
    <div className="relative w-full md:w-[48%] my-3">
      <label className="absolute top-[-12px] left-[10px] text-sm sm:top-1/2 sm:-translate-y-[160%] sm:text-base bg-[#0d222e] px-[5px] text-[#07988f] capitalize z-10">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={3}
          className="shadow-xs shadow-yellow-50 w-full p-2 sm:p-3 bg-transparent text-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white resize-none"
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="shadow-xs shadow-yellow-50 w-full p-2 sm:p-3 bg-transparent text-gray-300 border border-gray-500 rounded-lg outline-none focus:border-white"
          required
        />
      )}
    </div>
  );
  
  

  return (
    <div className="min-h-screen bg-[#0d222e] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent shadow-lg shadow-amber-700 border border-gray-700 rounded-xl p-6 w-full max-w-6xl"
      >
        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-between">
          {StyledInput({ label: "Your Name", name: "name", value: formData.name, onChange: handleChange })}
          {StyledInput({ label: "Short Bio", name: "bio", value: formData.bio, onChange: handleChange })}
          {StyledInput({ label: "Skills (comma separated)", name: "skills", value: formData.skills, onChange: handleChange })}

          {/* Project Section */}
          <div className="w-full mt-4">
            <h3 className="text-[#07988f] text-lg font-semibold mb-2">Project</h3>
            <div className="flex flex-col md:flex-row md:gap-4">
              {StyledInput({
                label: "Project Description",
                name: "description",
                value: formData.projects.description,
                onChange: (e) => handleChange(e, "projects", "description"),
                
              })}
              {StyledInput({
                label: "Project Link (GitHub / Live URL)",
                name: "link",
                value: formData.projects.link,
                onChange: (e) => handleChange(e, "projects", "link")
              })}
            </div>
          </div>

          {/* Education Section */}
          <div className="w-full mt-4">
            <h3 className="text-[#07988f] text-lg font-semibold mb-2">Education</h3>
            <div className="flex flex-col md:flex-row md:gap-4">
              {StyledInput({
                label: "Institute Name",
                name: "institute",
                value: formData.education.institute,
                onChange: (e) => handleChange(e, "education", "institute")
              })}
              {StyledInput({
                label: "Degree / Program",
                name: "degree",
                value: formData.education.degree,
                onChange: (e) => handleChange(e, "education", "degree")
              })}
              {StyledInput({
                label: "Year",
                name: "year",
                value: formData.education.year,
                onChange: (e) => handleChange(e, "education", "year")
              })}
            </div>
          </div>

          {/* Experience Section */}
          <div className="w-full mt-4">
            <h3 className="text-[#07988f] text-lg font-semibold mb-2">Experience</h3>
            <div className="flex flex-col md:flex-row md:gap-4">
              {StyledInput({
                label: "Company Name",
                name: "company",
                value: formData.experience.company,
                onChange: (e) => handleChange(e, "experience", "company")
              })}
              {StyledInput({
                label: "Role",
                name: "role",
                value: formData.experience.role,
                onChange: (e) => handleChange(e, "experience", "role")
              })}
              {StyledInput({
                label: "Duration",
                name: "duration",
                value: formData.experience.duration,
                onChange: (e) => handleChange(e, "experience", "duration")
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button type="submit" className="flex items-center gap-1 text-gray-300 border border-[#07988f] px-6 py-2 rounded-2xl hover:bg-[#07988f]/20 transition-all duration-200">
            Preview <IoIosArrowRoundForward className='text-2xl' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
