// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";


// const LoginPage = () => {

//   const [isLogin, setIsLogin] = useState(true);
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const { login, register } = useAuth();
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     const emailPhoneRegex = /^(\S+@\S+\.\S+|\+\d{1,3}\d{9,})$/;
//     if (!emailOrPhone || !emailPhoneRegex.test(emailOrPhone)) {
//       newErrors.emailOrPhone = "Please enter a valid email or phone number";
//     }
//     if (!password || password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters long";
//     }
//     if (!isLogin && password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         if (isLogin) {
//           await login(emailOrPhone, password);
//           navigate('/');
//         } else {
//           await register(emailOrPhone, password, 'learner');
//           navigate('/application');
//         }
//       } catch (error) {
//         setErrors({ submit: error.response?.data?.message || 'An error occurred' });
//       }
//     }
//   };

//   // const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
//   // const [emailOrPhone, setEmailOrPhone] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState(""); // For signup
//   // const [showPassword, setShowPassword] = useState(false);
//   // const [errors, setErrors] = useState({});

//   // const validateForm = () => {
//   //   const newErrors = {};
//   //   const emailPhoneRegex = /^(\S+@\S+\.\S+|\+\d{1,3}\d{9,})$/; // Basic email or phone regex
//   //   if (!emailOrPhone || !emailPhoneRegex.test(emailOrPhone)) {
//   //     newErrors.emailOrPhone = "Please enter a valid email or phone number";
//   //   }
//   //   if (!password || password.length < 6) {
//   //     newErrors.password = "Password must be at least 6 characters long";
//   //   }
//   //   if (!isLogin && password !== confirmPassword) {
//   //     newErrors.confirmPassword = "Passwords do not match";
//   //   }
//   //   setErrors(newErrors);
//   //   return Object.keys(newErrors).length === 0;
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (validateForm()) {
//   //     console.log(
//   //       isLogin ? "Logging in..." : "Signing up...",
//   //       "Email/Phone:",
//   //       emailOrPhone,
//   //       "Password:",
//   //       password
//   //     );
//   //     // Add your API call for login/signup here
//   //   }
//   // };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
//       // style={{
//       // background: "linear-gradient(135deg, #0d061f 0%, #1a0b2e 50%, #2e1a47 100%)",
//       // }}
//     >
//       {/* Animated Background Planet
//       <div
//         className="absolute w-[600px] h-[600px] rounded-full opacity-50 animate-pulse"
//         style={{
//           background: "radial-gradient(circle, #6b48ff 0%, #ff6b6b 50%, transparent 70%)",
//           top: "10%",
//           right: "-10%",
//           filter: "blur(50px)",
//         }}
//       ></div> */}

//       {/* Login/Signup Form */}
//       <div className="relative z-10 bg-black bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white border-opacity-10">
//         {/* Toggle between Login and Signup */}
//         <div className="flex justify-center mb-6">
//           <button
//             onClick={() => setIsLogin(true)}
//             className={`px-4 py-2 text-lg font-semibold rounded-l-xl transition-all duration-300 ${
//               isLogin
//                 ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
//                 : "text-gray-400 bg-gray-800 bg-opacity-50"
//             }`}
//           >
//             Sign In
//           </button>
//           <button
//             onClick={() => setIsLogin(false)}
//             className={`px-4 py-2 text-lg font-semibold rounded-r-xl transition-all duration-300 ${
//               !isLogin
//                 ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
//                 : "text-gray-400 bg-gray-800 bg-opacity-50"
//             }`}
//           >
//             Sign Up
//           </button>
//         </div>

//         <p className="text-gray-300 text-center mb-6 text-sm opacity-80">
//           {isLogin
//             ? "Keep it all together and you’ll be fine"
//             : "Join Atomz and explore the universe"}
//         </p>

//         <form onSubmit={handleSubmit}>
//           {/* Email or Phone Input */}
//           <div className="mb-5">
//             <input
//               type="text"
//               placeholder="Email or Phone"
//               value={emailOrPhone}
//               onChange={(e) => setEmailOrPhone(e.target.value)}
//               className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
//                 errors.emailOrPhone
//                   ? "border-red-500"
//                   : "border-gray-700 border-opacity-50"
//               }`}
//             />
//             {errors.emailOrPhone && (
//               <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone}</p>
//             )}
//           </div>

//           {/* Password Input */}
//           <div className="mb-5 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
//                 errors.password
//                   ? "border-red-500"
//                   : "border-gray-700 border-opacity-50"
//               }`}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
//             >
//               {showPassword ? "HIDE" : "SHOW"}
//             </button>
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//             )}
//           </div>

//           {/* Confirm Password (Signup Only) */}
//           {!isLogin && (
//             <div className="mb-5 relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
//                   errors.confirmPassword
//                     ? "border-red-500"
//                     : "border-gray-700 border-opacity-50"
//                 }`}
//               />
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>
//           )}

//           {/* Forget Password Link (Login Only)
//           {isLogin && (
//             <div className="text-right mb-6">
//               <a
//                 href="#"
//                 className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
//               >
//                 Forget Password
//               </a>
//             </div>
//           )} */}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg"
//           >
//             {isLogin ? "Sign In" : "Sign Up"}
//           </button>
//         </form>

//         {/* Divider
//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-600 opacity-50"></div>
//           <span className="mx-4 text-gray-400 text-sm opacity-80">or</span>
//           <div className="flex-grow h-px bg-gray-600 opacity-50"></div>
//         </div> */}

//         {/* Sign in with Apple Button */}
//         {/* <button
//           className="w-full bg-gray-800 bg-opacity-50 text-white p-4 rounded-xl flex items-center justify-center hover:bg-opacity-70 transition-all duration-300 border border-gray-700 border-opacity-50"
//         >
//           <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.48 1.28 0 2.35.85 3.27.85.89 0 1.92-.82 3.37-.82 1.42 0 2.84.93 3.88 2.53-.25.15-.54.3-.83.42-1.02.45-1.85 1.24-2.32 2.32-.47 1.08-.37 2.24.29 3.24.66 1 1.67 1.77 2.82 1.95.29-.09.57-.19.83-.3zM12.89 6.29c-.62.74-1.62 1.18-2.68 1.18-.15-1.02.32-2.04 1-2.77.68-.73 1.81-1.22 2.87-1.22.15 1.03-.33 2.06-1.19 2.81z" />
//           </svg>
//           Sign in with Apple
//         </button> */}

//         {/* Toggle Link */}
//         {/* <div className="text-center mt-6">
//           <span className="text-gray-300 text-sm opacity-80">
//             {isLogin ? "New to Atomz? " : "Already have an account? "}
//           </span>
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
//           >
//             {isLogin ? "Join Now" : "Sign In"}
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
    if (validateForm()) {
      try {
        if (isLogin) {
          await login(emailOrPhone, password);
          navigate('/');
        } else {
          await register(emailOrPhone, password, 'learner');
          navigate('/');
        }
      } catch (error) {
        setErrors({ submit: error.message || 'An error occurred during signup' });
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

        <p className="text-gray-300 text-center mb-6 text-sm opacity-80">
          {isLogin
            ? "Keep it all together and you’ll be fine"
            : "Join Atomz and explore the universe"}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className={`w-full p-4 bg-gray-900 bg-opacity-50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400 border ${
                errors.emailOrPhone
                  ? "border-red-500"
                  : "border-gray-700 border-opacity-50"
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
                errors.password
                  ? "border-red-500"
                  : "border-gray-700 border-opacity-50"
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
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-700 border-opacity-50"
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