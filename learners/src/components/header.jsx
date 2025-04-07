import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { assets } from '../assets/assets.js';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 md:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link to="/">
              <div className='flex justify-center items-center space-x-2 w-fit flex-shrink-0'>
                <img src={assets.logo} alt="logo" className='h-7 rounded' />
                <span className="text-lg font-medium text-white">SkillSwap</span>
              </div>
            </Link>
          </div>
          <div className='item-center space-x-4'>
            <div className="hidden sm:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <img
                    src={assets.profile} // Ensure this exists in assets.js
                    alt="Profile"
                    className='h-8 w-8 rounded-full cursor-pointer'
                    onClick={() => navigate('/profile')} // Optional: Navigate to profile page
                  />
                  <button
                    onClick={handleLogout}
                    className="relative bg-neutral-800 text-white hover:bg-neutral-700 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <div className="relative bg-neutral-800 text-white hover:bg-neutral-700 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium">
                      Login
                    </div>
                  </Link>
                  <Link to="/login">
                    <div className="relative bg-[#3b82f6] text-white hover:bg-blue-600 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium">
                      Signup
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { assets } from '../assets/assets.js';

// const Header = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [isProfileHovered, setIsProfileHovered] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className='fixed top-0 left-0 right-0 z-50'>
//       <div className='mx-auto max-w-7xl px-2 sm:px-4 md:px-8'>
//         <div className='flex justify-between items-center h-16'>
//           <div className='flex items-center'>
//             <Link to="/">
//               <div className='flex justify-center items-center space-x- personally2 w-fit flex-shrink-0'>
//                 <img src={assets.logo} alt="logo" className='h-7 rounded' />
//                 <span className="text-lg font-medium text-white">SkillSwap</span>
//               </div>
//             </Link>
//           </div>
//           <div className='item-center space-x-4'>
//             <div className="hidden sm:flex items-center space-x-4">
//               {user ? (
//                 <div className="relative">
//                   <img
//                     src={assets.profile} // Ensure this exists in assets.js
//                     alt="Profile"
//                     className='h-8 w-8 rounded-full cursor-pointer'
//                     onMouseEnter={() => setIsProfileHovered(true)}
//                     onMouseLeave={() => setIsProfileHovered(false)}
//                   />
//                   {isProfileHovered && (
//                     <div
//                       className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10"
//                       onMouseEnter={() => setIsProfileHovered(true)}
//                       onMouseLeave={() => setIsProfileHovered(false)}
//                     >
//                       <Link
//                         to="/profile" // Add a profile page route if needed
//                         className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
//                       >
//                         Profile
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <>
//                   <Link to="/login">
//                     <div className="relative bg-neutral-800 text-white hover:bg-neutral-700 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium">
//                       Login
//                     </div>
//                   </Link>
//                   <Link to="/login">
//                     <div className="relative bg-[#3b82f6ysk text-white hover:bg-blue-600 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium">
//                       Signup
//                     </div>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
