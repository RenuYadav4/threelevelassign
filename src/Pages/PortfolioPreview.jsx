import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';

const PortfolioPreview = () => {
    const data = JSON.parse(localStorage.getItem("portfolioData"));
    const navigate = useNavigate();

    if (!data) {
        return <p className="text-center text-white text-xl mt-20">No data found</p>;
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            }}
        >
            <div
                id="portfolio-content"
                className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-w-4xl w-full p-6 md:p-10 transition duration-500 hover:scale-[1.01] animate-fade-in"
            >
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <img
                            src={`https://api.dicebear.com/7.x/micah/svg?seed=${data.name}&backgroundColor=transparent&scale=110`}
                            alt="Profile Avatar"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-md"
                        />
                    </div>

                    {/* Name + Bio */}
                    <div className="text-center md:text-left w-full overflow-x-auto">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-600 mb-2 break-words">
                            {data.name}
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words">
                            {data.bio}
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <section className="mb-6 bg-white bg-opacity-60 p-5 rounded-xl shadow-inner hover:shadow-lg transition duration-300">
                    <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-2 border-b border-purple-300 pb-1">
                        Skills
                    </h2>
                    <ul className="list-disc list-inside text-gray-800 text-sm md:text-base grid grid-cols-1 sm:grid-cols-2 gap-x-4 break-words">
                        {data.skills.split(',').map((skill, idx) => (
                            <li key={idx}>{skill.trim()}</li>
                        ))}
                    </ul>
                </section>

                {/* Projects */}
                {data.projects && (
                    <section className="mb-6 bg-white bg-opacity-60 p-5 rounded-xl shadow-inner hover:shadow-lg transition duration-300">
                        <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2 border-b border-green-300 pb-1">
                            Projects
                        </h2>
                        <div className="text-gray-800 text-sm md:text-base whitespace-pre-wrap break-words">
                            <p className="font-medium mb-1">Description: {data.projects.description}</p>
                            <p>Link: <a href={data.projects.link} className="text-blue-600 underline">{data.projects.link}</a></p>
                        </div>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.company && (
                    <section className="mb-6 bg-white bg-opacity-60 p-5 rounded-xl shadow-inner hover:shadow-lg transition duration-300">
                        <h2 className="text-xl md:text-2xl font-semibold text-pink-700 mb-2 border-b border-pink-300 pb-1">
                            Experience
                        </h2>
                        <div className="text-gray-800 text-sm md:text-base whitespace-pre-wrap break-words">
                            <p className="font-medium mb-1">Company: {data.experience.company}</p>
                            <p className="mb-1">Role: {data.experience.role}</p>
                            <p>Duration: {data.experience.duration}</p>
                        </div>
                    </section>
                )}

                {/* Education */}
                {data.education && data.education.institute && (
                    <section className="mb-6 bg-white bg-opacity-60 p-5 rounded-xl shadow-inner hover:shadow-lg transition duration-300">
                        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-2 border-b border-indigo-300 pb-1">
                            Education
                        </h2>
                        <div className="text-gray-800 text-sm md:text-base whitespace-pre-wrap break-words">
                            <p className="font-medium mb-1">Institute: {data.education.institute}</p>
                            <p className="mb-1">Degree: {data.education.degree}</p>
                            <p>Year: {data.education.year}</p>
                        </div>
                    </section>
                )}

                {/* Go Back Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => navigate('/userslist')}
                        className="cursor-pointer bg-gradient-to-r from-blue-600 to-green-500 hover:from-indigo-700 hover:to-emerald-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPreview;
