import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <span className="text-lg font-medium">SkillSwap Educator</span>
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;