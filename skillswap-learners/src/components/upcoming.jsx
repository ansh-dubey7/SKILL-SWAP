import React, { useRef, useState, useEffect } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { API_URL } from '../config';

const Events = () => {
  const scrollRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/events`, {
          params: { type: "upcoming" },
        });
        setEvents(res.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
        setError("Failed to load upcoming events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full md:mt-20 relative px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:items-start items-center md:text-left text-center">
        <button className="inline-flex items-center text-sm rounded-full py-1 px-2 bg-slate-700 border-t border-blue-100">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-900 mr-2"></span>
          <span className="text-blue-400">Upcoming-Classes</span>
        </button>
        <h1 className="text-white md:text-5xl my-4 text-3xl">
          Upgrade with upcoming classes
        </h1>
        <p className="text-white font-light w-full md:text-base text-xs">
          Discover a variety of coding courses tailored for you.
        </p>
      </div>
      <div className="w-full overflow-x-hidden py-4 xl:px-48">
        {loading ? (
          <p className="text-white text-center">Loading events...</p>
        ) : error ? (
          <p className="text-red-400 text-center">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-white text-center">No upcoming events available.</p>
        ) : (
          <>
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hidden scroll-smooth"
            >
              {events.map((event) => (
                <div
                  key={event._id}
                  className="p-4 flex flex-col gap-4 bg-[#191919] flex-shrink-0 w-80 rounded-lg min-h-[400px] border-[1px] border-blue-400"
                >
                  <div className="flex flex-col gap-4 flex-grow">
                    <img
                      src={event.image || "https://via.placeholder.com/300"}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <h1 className="text-white text-lg font-semibold break-words whitespace-normal">
                      {event.title}
                    </h1>
                    <p className="text-white text-sm break-words whitespace-normal flex-grow">
                      {event.description}
                    </p>
                    <p className="text-gray-400 text-sm">
                      By: {event.educatorName}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Date: {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="w-full">
                    <button className="rounded-md text-sm font-medium bg-white text-black hover:bg-white/90 h-9 px-4 py-2 w-full">
                      Notify
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4 max-w-6xl mx-auto mt-4">
              <img
                src={assets.left}
                alt="Left Arrow"
                className="h-8 w-8 rounded-full cursor-pointer hover:opacity-80"
                onClick={scrollLeft}
              />
              <img
                src={assets.right}
                alt="Right Arrow"
                className="h-8 w-8 rounded-full cursor-pointer hover:opacity-80"
                onClick={scrollRight}
              />
            </div>
          </>
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500 via-blue-700 to-transparent blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default Events;




// import React, { useRef, useState, useEffect } from "react";
// import { assets } from "../assets/assets.js";
// import axios from "axios";

// const Events = () => {
//   const scrollRef = useRef(null);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get("http://localhost:5000/api/events", {
//           params: { type: "upcoming" },
//         });
//         setEvents(res.data);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching upcoming events:", error);
//         setError("Failed to load upcoming events. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full md:mt-20 relative px-4 md:px-0">
//       <div className="max-w-6xl mx-auto flex flex-col md:items-start items-center md:text-left text-center">
//         <button className="inline-flex items-center text-sm rounded-full py-1 px-2 bg-slate-700 border-t border-blue-100">
//           <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-900 mr-2"></span>
//           <span className="text-blue-400">Upcoming-Classes</span>
//         </button>
//         <h1 className="text-white md:text-5xl my-4 text-3xl">
//           Upgrade with upcoming classes
//         </h1>
//         <p className="text-white font-light w-full md:text-base text-xs">
//           Discover a variety of coding courses tailored for you.
//         </p>
//       </div>
//       <div className="w-full overflow-x-hidden py-4 xl:px-48">
//         {loading ? (
//           <p className="text-white text-center">Loading events...</p>
//         ) : error ? (
//           <p className="text-red-400 text-center">{error}</p>
//         ) : events.length === 0 ? (
//           <p className="text-white text-center">No upcoming events available.</p>
//         ) : (
//           <>
//             <div
//               ref={scrollRef}
//               className="flex gap-8 overflow-x-auto scrollbar-hidden scroll-smooth"
//             >
//               {events.map((event) => (
//                 <div
//                   key={event._id} // Use event._id for unique key
//                   className="p-4 flex flex-col gap-4 bg-[#191919] flex-shrink-0 w-80 rounded-lg min-h-[400px] border-[1px] border-blue-400"
//                 >
//                   <div className="flex flex-col gap-4 flex-grow">
//                     <img
//                       src={event.image || "https://via.placeholder.com/300"} // Fallback image
//                       alt={event.title}
//                       className="w-full h-48 object-cover rounded-md"
//                     />
//                     <h1 className="text-white text-lg font-semibold break-words whitespace-normal">
//                       {event.title}
//                     </h1>
//                     <p className="text-white text-sm break-words whitespace-normal flex-grow">
//                       {event.description}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       By: {event.educatorName}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Date: {new Date(event.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div className="w-full">
//                     <button className="rounded-md text-sm font-medium bg-white text-black hover:bg-white/90 h-9 px-4 py-2 w-full">
//                       Notify
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-end gap-4 max-w-6xl mx-auto mt-4">
//               <img
//                 src={assets.left}
//                 alt="Left Arrow"
//                 className="h-8 w-8 rounded-full cursor-pointer hover:opacity-80"
//                 onClick={scrollLeft}
//               />
//               <img
//                 src={assets.right}
//                 alt="Right Arrow"
//                 className="h-8 w-8 rounded-full cursor-pointer hover:opacity-80"
//                 onClick={scrollRight}
//               />
//             </div>
//           </>
//         )}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500 via-blue-700 to-transparent blur-3xl rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default Events;

