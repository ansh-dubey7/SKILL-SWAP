import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../config';

const EventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    date: "",
    link: "",
    type: "live",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        toast.error("Only JPG or PNG files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB.");
        return;
      }
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) {
      data.append("image", image);
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_URL}/api/events`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Event created successfully!");
      onEventCreated(res.data);
      setFormData({
        name: "",
        title: "",
        description: "",
        date: "",
        link: "",
        type: "live",
      });
      setImage(null);
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error(error.response?.data?.message || "Failed to create event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
      <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Event Link (e.g., Zoom URL)"
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
        >
          <option value="live">Live</option>
          <option value="upcoming">Upcoming</option>
        </select>
        <div className="space-y-2">
          <label className="text-gray-400 text-sm">
            Add the thumbnail for the event (JPG/PNG, max 5MB)
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
          />
          {image && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(image)}
                alt="Event Thumbnail Preview"
                className="w-32 h-32 object-cover rounded-md border border-gray-600"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#3b82f6] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold transform hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
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

export default EventForm;



// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EventForm = ({ onEventCreated }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     description: "",
//     date: "",
//     link: "",
//     type: "live",
//   });
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Optional validation for file type and size
//       if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
//         toast.error("Only JPG or PNG files are allowed.");
//         return;
//       }
//       if (file.size > 5 * 1024 * 1024) { // 5MB limit
//         toast.error("Image size must be less than 5MB.");
//         return;
//       }
//       setImage(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }
//     if (image) {
//       data.append("image", image);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.post("http://localhost:5000/api/events", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       toast.success("Event created successfully!");
//       onEventCreated(res.data);
//       setFormData({
//         name: "",
//         title: "",
//         description: "",
//         date: "",
//         link: "",
//         type: "live",
//       });
//       setImage(null); // Reset image after submission
//     } catch (error) {
//       console.error("Error creating event:", error);
//       toast.error(error.response?.data?.message || "Failed to create event.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
//       <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">Create New Event</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Event Name"
//           className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//           required
//         />
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Event Title"
//           className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//           required
//         />
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Event Description"
//           className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//           required
//         />
//         <input
//           type="datetime-local"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//           required
//         />
//         <input
//           type="url"
//           name="link"
//           value={formData.link}
//           onChange={handleChange}
//           placeholder="Event Link (e.g., Zoom URL)"
//           className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//           required
//         />
//         <select
//           name="type"
//           value={formData.type}
//           onChange={handleChange}
//           className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//         >
//           <option value="live">Live</option>
//           <option value="upcoming">Upcoming</option>
//         </select>
//         <div className="space-y-2">
//           <label className="text-gray-400 text-sm">
//             Add the thumbnail for the event (JPG/PNG, max 5MB)
//           </label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-[#3b82f6]"
//           />
//           {image && (
//             <div className="mt-2">
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Event Thumbnail Preview"
//                 className="w-32 h-32 object-cover rounded-md border border-gray-600"
//               />
//             </div>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-[#3b82f6] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold transform hover:scale-105 disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Create Event"}
//         </button>
//       </form>
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

// export default EventForm;





