import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { assets } from "../assets/assets.js"

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <span className="text-lg font-medium text-white">SkillSwap Educator</span>
        </Link>
        {user ? (
          <div className="flex items-center space-x-4">
            <img
              src={assets.profile}
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer transform hover:scale-110 transition duration-300"
              onClick={() => navigate('/profile')}
            />
            <button
              onClick={handleLogout}
              className="bg-neutral-800 text-white px-6 py-2 rounded-xl hover:bg-neutral-700 transition duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-[#3b82f6] text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
