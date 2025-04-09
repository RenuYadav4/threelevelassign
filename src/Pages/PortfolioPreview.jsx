import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PortfolioPreview = () => {
  const data = JSON.parse(localStorage.getItem("portfolioData"));

  const handleDownload = async () => {
    const element = document.getElementById('portfolio-content');

    // Ensure fully in view (optional)
    window.scrollTo(0, 0);

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      ignoreElements: (el) => el.classList?.contains("ignore-download"),
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("portfolio.pdf");
  };

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
            <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2 break-words">
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
        <section className="mb-6 bg-white bg-opacity-60 p-5 rounded-xl shadow-inner hover:shadow-lg transition duration-300">
          <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2 border-b border-green-300 pb-1">
            Projects
          </h2>
          <p className="text-gray-800 text-sm md:text-base whitespace-pre-wrap break-words">
            {data.projects}
          </p>
        </section>

        {/* Experience */}
        {data.experience && data.experience.trim() !== "" && (
          <section className="mb-6 bg-white bg-opacity-60 p-5 rounded-xl shadow-inner hover:shadow-lg transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-pink-700 mb-2 border-b border-pink-300 pb-1">
              Experience
            </h2>
            <p className="text-gray-800 text-sm md:text-base whitespace-pre-wrap break-words">
              {data.experience}
            </p>
          </section>
        )}

        {/* Download Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleDownload}
            className="cursor-po bg-gradient-to-r from-blue-600 to-green-500 hover:from-indigo-700 hover:to-emerald-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            📄 Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;
