import React, { useRef, useState, useEffect } from "react";
import { assets, products } from "../assets/assets.js";
import axios from "axios";

const Events = () => {
  const scrollRef = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/api/events', {
        params: { type: 'upcoming' },
      });
      setEvents(res.data);
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
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-blue-200 to-blue-900 mr-2"></span>
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
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hidden scroll-smooth"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 flex flex-col gap-4 bg-[#191919] flex-shrink-0 w-80 rounded-lg min-h-[400px] border-[2px] border-blue-400"
            >
              <div className="flex flex-col gap-4 flex-grow">
                <img 
                  src={product.event} 
                  alt={product.title} 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <h1 className="text-white text-lg font-semibold break-words whitespace-normal">
                  {product.title}
                </h1>
                <p className="text-white text-sm break-words whitespace-normal flex-grow">
                  {product.description}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500 via-blue-700 to-transparent blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default Events;