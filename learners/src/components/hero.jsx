import React from 'react';
import { assets } from '../assets/assets.js';

const Hero = ({ onApplyClick }) => {
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>
      <div className='relative z-10 flex flex-col items-center min-h-screen pt-40 md:pt-[20rem] lg:pt-72 text-center'>
        <h1 className="text-[1.625rem] md:text-[3.5rem] font-bold text-white max-w-6xl">
          Become a<span className="bg-gradient-to-b md:text-[3.5rem] from-[#7dd3fc] to-[#3b82f6] bg-clip-text text-transparent text-[1.375rem] italic font-normal leading-[120%]">Code Commander</span>
        </h1>
        <h2 className="text-[1.625rem] md:text-[3.5rem] font-bold max-w-6xl bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text tex-center">
          Shape India's Tech Future
        </h2>
        <p className="text-[#A8A8A8] text-center font-roboto text-[.75rem] md:text-[1.125rem] font-extralight leading-[1.5] max-w-[42rem] pt-3">
          Join India's most active coding community. Share knowledge, win prizes, and build your tech network - all for free!
        </p>
        <div
          onClick={onApplyClick}
          className='mt-8 px-12 py-4 bg-[#3b82f6] text-white text-xl rounded-[15px] hover:bg-blue-600 transition-colors cursor-pointer'
        >
          Apply Now
        </div>
        <div className='mt-10 md:mt-16 w-full max-w-[800px] h-[60vh] mx-auto px-4'>
          {/* <img
            src={assets.hero5}
            alt=""
            className='border-t-[4px] border-l-[4px] border-r-[8px] border-blue-900 rounded-t-3xl w-full h-auto shadow-lg shadow-gray-500'
          /> */}
          <video src={assets.video} loop autoPlay muted  className='border-t-[4px] border-l-[4px] border-r-[8px] border-blue-900 rounded-t-3xl w-full h-auto shadow-lg shadow-gray-500'></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
