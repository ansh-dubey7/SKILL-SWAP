import React, { useState } from "react";

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    linkedin: "",
    techStack: "",
    experience: "",
    role: "",
    mentorshipExperience: "",
    videoLink: "",
    textAnswer: "",
    github: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* 3D Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
      {/* Dots Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff10_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="relative bg-black shadow-xl rounded-2xl p-10 w-full max-w-4xl z-10">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Code Commander Application</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Basic Personal Information */}
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            <h3 className="col-span-2 text-lg text-white mb-2">Basic Personal Information</h3>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2" required />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* Technical & Professional Background */}
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            <h3 className="col-span-2 text-lg text-white mb-2">Technical & Professional Background</h3>
            <input type="text" name="techStack" placeholder="Tech Stack (e.g., MERN, Python)" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
            <input type="text" name="experience" placeholder="Any Experience (If none, put 'NA')" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
            <select name="role" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2" required>
              <option value="">Select Your Current Role</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Video Upload */}
          <div className="col-span-2 p-4">
            <h3 className="text-lg text-white mb-2">Video Submission</h3>
            <p className="text-sm text-gray-400 mb-2">Provide a link to your video (YouTube, Instagram, etc.). Ensure it's accessible.</p>
            <input type="url" name="videoLink" placeholder="Enter video link" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required />
          </div>

          {/* Text Answer */}
          <div className="col-span-2 p-4">
            <h3 className="text-lg text-white mb-2">Why do you want to be a Coding Hero?</h3>
            <textarea name="textAnswer" rows="4" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>

          {/* Portfolio/GitHub Links */}
          <div className="col-span-2 grid grid-cols-2 gap-4 p-4">
            <h3 className="col-span-2 text-lg text-white mb-2">Portfolio & GitHub</h3>
            <input type="url" name="github" placeholder="GitHub / Portfolio Link" onChange={handleChange} className="w-full p-2 bg-black text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-2" required />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg transform hover:scale-105 transition duration-300 shadow-lg shadow-blue-600/50">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;



