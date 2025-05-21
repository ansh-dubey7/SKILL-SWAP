import React, { useState, useEffect } from "react";
import EventForm from "../components/EventForm.jsx";
import axios from "axios";
import { API_URL } from '../config';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found. Please log in.");
      }
      const res = await axios.get(`${API_URL}/api/events/my-events`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError(error.message || "Failed to load events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventCreated = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const now = new Date();
  const liveWindow = 60 * 60 * 1000;

  const liveEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const diff = Math.abs(eventDate - now);
    return diff <= liveWindow;
  });

  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate > now + liveWindow || event.type === 'upcoming';
  });

  const pastEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate < now - liveWindow;
  });

  const renderEventCard = (event) => (
    <div
      key={event._id}
      className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-800 transform hover:scale-105 transition duration-300"
    >
      {event.image && (
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      )}
      <h3 className="text-xl font-semibold text-white">{event.name}</h3>
      <p className="text-gray-400 mt-1 text-sm">{event.title}</p>
      <p className="text-gray-400 mt-2">{event.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Date: {new Date(event.date).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Created by: {event.educatorName}
      </p>
      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#3b82f6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
        >
          Join Meeting
        </a>
      )}
      <p className="text-sm text-gray-500 mt-2 capitalize">Type: {event.type}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-[#3b82f6] mb-8 text-center">Educator Dashboard</h1>
        <div className="mb-12">
          <EventForm onEventCreated={handleEventCreated} />
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">Live Events</h2>
          {loading ? (
            <p className="text-center">Loading events...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : liveEvents.length === 0 ? (
            <p className="text-center text-gray-400">No live events currently.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveEvents.map(renderEventCard)}
            </div>
          )}
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">Upcoming Events</h2>
          {loading ? (
            <p className="text-center">Loading events...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : upcomingEvents.length === 0 ? (
            <p className="text-center text-gray-400">No upcoming events yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(renderEventCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





// import React, { useState, useEffect } from "react";
// import EventForm from "../components/EventForm.jsx";
// import axios from "axios";

// const Dashboard = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchEvents = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error("No token found. Please log in.");
//       }
//       const res = await axios.get('http://localhost:5000/api/events/my-events', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEvents(res.data);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//       setError(error.message || "Failed to load events.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleEventCreated = (newEvent) => {
//     setEvents((prevEvents) => [...prevEvents, newEvent]);
//   };

//   const now = new Date();
//   const liveWindow = 60 * 60 * 1000; // 1 hour in milliseconds

//   const liveEvents = events.filter(event => {
//     const eventDate = new Date(event.date);
//     const diff = Math.abs(eventDate - now);
//     return diff <= liveWindow;
//   });

//   const upcomingEvents = events.filter(event => {
//     const eventDate = new Date(event.date);
//     return eventDate > now + liveWindow || event.type === 'upcoming';
//   });

//   const pastEvents = events.filter(event => {
//     const eventDate = new Date(event.date);
//     return eventDate < now - liveWindow;
//   });

//   const renderEventCard = (event) => (
//     <div
//       key={event._id}
//       className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-800 transform hover:scale-105 transition duration-300"
//     >
//       {event.image && (
//         <img
//           src={event.image}
//           alt={event.name}
//           className="w-full h-48 object-cover rounded-t-lg mb-4"
//         />
//       )}
//       <h3 className="text-xl font-semibold text-white">{event.name}</h3>
//       <p className="text-gray-400 mt-1 text-sm">{event.title}</p>
//       <p className="text-gray-400 mt-2">{event.description}</p>
//       <p className="text-sm text-gray-500 mt-2">
//         Date: {new Date(event.date).toLocaleString()}
//       </p>
//       <p className="text-sm text-gray-500 mt-2">
//         Created by: {event.educatorName}
//       </p>
//       {event.link && (
//         <a
//           href={event.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-4 inline-block bg-[#3b82f6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
//         >
//           Join Meeting
//         </a>
//       )}
//       <p className="text-sm text-gray-500 mt-2 capitalize">Type: {event.type}</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white pt-20 px-6 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black opacity-50"></div>
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-500 to-black rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <h1 className="text-4xl font-bold text-[#3b82f6] mb-8 text-center">Educator Dashboard</h1>

//         <div className="mb-12">
//           <EventForm onEventCreated={handleEventCreated} />
//         </div>

//         <div className="mb-12">
//           <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">Live Events</h2>
//           {loading ? (
//             <p className="text-center">Loading events...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : liveEvents.length === 0 ? (
//             <p className="text-center text-gray-400">No live events currently.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {liveEvents.map(renderEventCard)}
//             </div>
//           )}
//         </div>

//         <div className="mb-12">
//           <h2 className="text-2xl font-bold text-[#3b82f6] mb-6">Upcoming Events</h2>
//           {loading ? (
//             <p className="text-center">Loading events...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : upcomingEvents.length === 0 ? (
//             <p className="text-center text-gray-400">No upcoming events yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {upcomingEvents.map(renderEventCard)}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
