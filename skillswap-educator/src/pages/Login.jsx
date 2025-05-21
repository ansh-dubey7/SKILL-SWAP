import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Added name state
  const [errors, setErrors] = useState({});
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailPhoneRegex = /^(\S+@\S+\.\S+|\+\d{1,3}\d{9,})$/;
    if (!emailOrPhone || !emailPhoneRegex.test(emailOrPhone)) {
      newErrors.emailOrPhone = "Please enter a valid email or phone number";
    }
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!isLogin) {
      if (!name) {
        newErrors.name = "Name is required";
      }
      if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (isLogin) {
          await login(emailOrPhone, password);
        } else {
          await register(emailOrPhone, password, 'educator', name); // Pass name
        }
        navigate('/');
      } catch (error) {
        setErrors({ submit: error.response?.data?.message || 'An error occurred' });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative bg-black p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-md z-10">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded-xl font-semibold transition duration-300 transform hover:scale-105 ${isLogin ? 'bg-[#3b82f6] text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded-xl font-semibold transition duration-300 transform hover:scale-105 ${!isLogin ? 'bg-[#3b82f6] text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
            />
            {errors.emailOrPhone && <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          )}
          {errors.submit && <p className="text-red-500 text-sm mb-4">{errors.submit}</p>}
          <button
            type="submit"
            className="w-full bg-[#3b82f6] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold transform hover:scale-105"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
