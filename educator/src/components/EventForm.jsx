import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    link: "",
    type: "live",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/events', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onEventCreated(res.data);
      setFormData({
        title: "",
        description: "",
        date: "",
        link: "",
        type: "live",
      });
    } catch (error) {
      console.error(error);
      alert('Error creating event');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">Create New Event</h2>
      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Date</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Link</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 rounded"
        >
          <option value="live">Live</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;