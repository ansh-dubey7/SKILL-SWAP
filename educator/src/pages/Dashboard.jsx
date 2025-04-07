import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import EventForm from "../components/EventForm";
import axios from "axios";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!user || user.role !== 'educator') {
      navigate('/login');
    }
    fetchEvents();
  }, [user, navigate]);

  const fetchEvents = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/events', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setEvents(res.data.filter(event => event.educatorId === user.id));
  };

  const handleEventCreated = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="max-w-6xl mx-auto pt-20 pb-10 px-4">
      <h1 className="text-3xl mb-6">Educator Dashboard</h1>
      <EventForm onEventCreated={handleEventCreated} />
      <div className="mt-10">
        <h2 className="text-2xl mb-4">Your Events</h2>
        {events.map((event) => (
          <div key={event._id} className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-xl">{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleString()}</p>
            <p>Type: {event.type}</p>
            {event.link && <a href={event.link} className="text-blue-400">Join Link</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;