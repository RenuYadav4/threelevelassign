import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
          <div className="flex items-center space-x-4">
            <Link to="/portfolio-form" className="hover:text-blue-600 font-medium">
              Create Portfolio
            </Link>
            <Link to="/preview" className="hover:text-blue-600 font-medium">
              Preview
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
