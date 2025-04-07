import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          await register(emailOrPhone, password, 'educator');
        }
        navigate('/');
      } catch (error) {
        setErrors({ submit: error.response?.data?.message || 'An error occurred' });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 ${isLogin ? 'bg-blue-500' : 'bg-gray-700'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 ${!isLogin ? 'bg-blue-500' : 'bg-gray-700'}`}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
            {errors.emailOrPhone && <p className="text-red-500">{errors.emailOrPhone}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded"
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
            </div>
          )}
          {errors.submit && <p className="text-red-500 mb-4">{errors.submit}</p>}
          <button type="submit" className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;