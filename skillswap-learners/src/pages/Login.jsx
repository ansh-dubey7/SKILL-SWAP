// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Add name state
  const [showPassword, setShowPassword] = useState(false);
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
    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!isLogin && !name) { // Validate name for signup
      newErrors.name = "Name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (validateForm()) {
      try {
        if (isLogin) {
          await login(emailOrPhone, password);
        } else {
          await register(emailOrPhone, password, 'learner', name); // Pass name to register
        }
        navigate('/'); // Redirect to home page after login/signup
      } catch (error) {
        setErrors({ submit: error.message || 'An error occurred' });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden">
      <div className="relative z-10 bg-black bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white border-opacity-10">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 text-lg font-semibold rounded-l-xl transition-all duration-300 ${
              isLogin
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-400 bg-gray-800 bg-opacity-50"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 text-lg font-semibold rounded-r-xl transition-all duration-300 ${
              !isLogin
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-400 bg-gray-800 bg-opacity-50"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && ( // Show name field only for signup, above email
            <div className="mb-5">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
                  errors.name ? "border-red-500" : "border-gray-700 border-opacity-50"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div className="mb-5">
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
                errors.emailOrPhone ? "border-red-500" : "border-gray-700 border-opacity-50"
              }`}
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone}</p>
            )}
          </div>

          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
                errors.password ? "border-red-500" : "border-gray-700 border-opacity-50"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div className="mb-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-700 border-opacity-50"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {errors.submit && (
            <p className="text-red-500 text-sm mb-4">{errors.submit}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
