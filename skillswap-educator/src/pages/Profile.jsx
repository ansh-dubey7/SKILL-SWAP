import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { API_URL } from '../config';

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in localStorage");
        }
        const res = await axios.get(`${API_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Profile data:', res.data);
        setProfileData(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
      <div className="relative bg-black shadow-xl rounded-2xl p-10 w-full max-w-4xl z-10 border border-gray-800">
        <h2 className="text-3xl font-bold text-[#3b82f6] mb-6 text-center">Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-white transform hover:scale-110 transition duration-300">
              {profileData?.name?.charAt(0).toUpperCase() || profileData?.emailOrPhone.charAt(0).toUpperCase() || "U"}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <p className="text-lg font-medium">{profileData?.name || "Not provided"}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Email/Phone</label>
              <p className="text-lg font-medium">{profileData?.emailOrPhone}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Role</label>
              <p className="text-lg font-medium capitalize">{profileData?.role}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Joined</label>
              <p className="text-lg font-medium">
                {new Date(profileData?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;






// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";

// const Profile = () => {
//   const { user } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("No token found in localStorage");
//         }
//         const res = await axios.get("http://localhost:5000/api/users/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log('Profile data:', res.data); // Debug log to verify name
//         setProfileData(res.data);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setError(error.response?.data?.message || "Failed to load profile");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <p className="text-white">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       </div>
//       <div className="relative bg-black shadow-xl rounded-2xl p-10 w-full max-w-4xl z-10 border border-gray-800">
//         <h2 className="text-3xl font-bold text-[#3b82f6] mb-6 text-center">Your Profile</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex justify-center md:justify-start">
//             <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-white transform hover:scale-110 transition duration-300">
//               {profileData?.name?.charAt(0).toUpperCase() || profileData?.emailOrPhone.charAt(0).toUpperCase() || "U"}
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-400">Name</label>
//               <p className="text-lg font-medium">{profileData?.name || "Not provided"}</p>
//             </div>
//             <div>
//               <label className="text-sm text-gray-400">Email/Phone</label>
//               <p className="text-lg font-medium">{profileData?.emailOrPhone}</p>
//             </div>
//             <div>
//               <label className="text-sm text-gray-400">Role</label>
//               <p className="text-lg font-medium capitalize">{profileData?.role}</p>
//             </div>
//             <div>
//               <label className="text-sm text-gray-400">Joined</label>
//               <p className="text-lg font-medium">
//                 {new Date(profileData?.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

