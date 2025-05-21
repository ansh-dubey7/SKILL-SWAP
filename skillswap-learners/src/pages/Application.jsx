import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../config';

const Application = () => {
  const { user } = useAuth();
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    techStack: "",
    experience: "",
    role: "",
    videoLink: "",
    textAnswer: "",
    github: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_URL}/api/applications`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Form submitted successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      toast.error("Error submitting application");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
      <div className="relative bg-black shadow-xl rounded-2xl p-10 w-full max-w-4xl z-10">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Code Commander Application</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            <h3 className="col-span-2 text-lg text-white mb-2">Basic Personal Information</h3>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Profile"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            <h3 className="col-span-2 text-lg text-white mb-2">Technical & Professional Background</h3>
            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack (e.g., MERN, Python)"
              value={formData.techStack}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="experience"
              placeholder="Any Experience (If none, put 'NA')"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2"
              required
            >
              <option value="">Select Your Current Role</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-span-2 p-4">
            <h3 className="text-lg text-white mb-2">Video Submission</h3>
            <p className="text-sm text-gray-400 mb-2">Provide a link to your video (YouTube, Instagram, etc.). Ensure it's accessible.</p>
            <input
              type="url"
              name="videoLink"
              placeholder="Enter video link"
              value={formData.videoLink}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-2 p-4">
            <h3 className="text-lg text-white mb-2">Why do you want to be a Code Commander?</h3>
            <textarea
              name="textAnswer"
              rows="4"
              value={formData.textAnswer}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            <h3 className="col-span-2 text-lg text-white mb-2">Portfolio & GitHub</h3>
            <input
              type="url"
              name="github"
              placeholder="GitHub / Portfolio Link"
              value={formData.github}
              onChange={handleChange}
              className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2"
              required
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg transform hover:scale-105 transition duration-300 shadow-lg shadow-blue-600/50"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Application;





// import React, { useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

// const Application = () => {
//   const { user } = useAuth();
//   const initialFormData = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     techStack: "",
//     experience: "",
//     role: "",
//     videoLink: "",
//     textAnswer: "",
//     github: "",
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/applications", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success("Form submitted successfully!"); // Show success toast
//       setFormData(initialFormData); // Clear the form
//     } catch (error) {
//       console.error(error);
//       toast.error("Error submitting application"); // Show error toast
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
//       {/* 3D Background Design */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       </div>
//       <div className="relative bg-black shadow-xl rounded-2xl p-10 w-full max-w-4xl z-10">
//         <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Code Commander Application</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
//           {/* Basic Personal Information */}
//           <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
//             <h3 className="col-span-2 text-lg text-white mb-2">Basic Personal Information</h3>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="url"
//               name="linkedin"
//               placeholder="LinkedIn Profile"
//               value={formData.linkedin}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Technical & Professional Background */}
//           <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
//             <h3 className="col-span-2 text-lg text-white mb-2">Technical & Professional Background</h3>
//             <input
//               type="text"
//               name="techStack"
//               placeholder="Tech Stack (e.g., MERN, Python)"
//               value={formData.techStack}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="experience"
//               placeholder="Any Experience (If none, put 'NA')"
//               value={formData.experience}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2"
//               required
//             >
//               <option value="">Select Your Current Role</option>
//               <option value="Student">Student</option>
//               <option value="Engineer">Engineer</option>
//               <option value="Freelancer">Freelancer</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Video Upload */}
//           <div className="col-span-2 p-4">
//             <h3 className="text-lg text-white mb-2">Video Submission</h3>
//             <p className="text-sm text-gray-400 mb-2">Provide a link to your video (YouTube, Instagram, etc.). Ensure it's accessible.</p>
//             <input
//               type="url"
//               name="videoLink"
//               placeholder="Enter video link"
//               value={formData.videoLink}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Text Answer */}
//           <div className="col-span-2 p-4">
//             <h3 className="text-lg text-white mb-2">Why do you want to be a Code Commander?</h3>
//             <textarea
//               name="textAnswer"
//               rows="4"
//               value={formData.textAnswer}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Portfolio/GitHub Links */}
//           <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
//             <h3 className="col-span-2 text-lg text-white mb-2">Portfolio & GitHub</h3>
//             <input
//               type="url"
//               name="github"
//               placeholder="GitHub / Portfolio Link"
//               value={formData.github}
//               onChange={handleChange}
//               className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="col-span-2 flex justify-center">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg transform hover:scale-105 transition duration-300 shadow-lg shadow-blue-600/50"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* Toast Container */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// };

// export default Application;

