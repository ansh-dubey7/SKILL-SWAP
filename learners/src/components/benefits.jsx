import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from "react-router-dom";

const benefits = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center relative md:mt-0 mt-8 md:px-0 px-4'>
      <img src={assets.badge} alt="" className='my-8 z-20'/>
      <button className="inline-flex items-center text-sm rounded-full py-1 px-2 bg-slate-700 border-t border-blue-100">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-blue-200 to-blue-900 mr-2"></span>
          <span className="text-blue-400">Code Commander</span>
      </button>
      <h1 className="text-white md:text-5xl text-3xl my-4 text-center z-20">Become a Code Commander</h1>
      <p className="text-white font-light max-w-4xl text-center z-20 md:text-base text-xs">Connect with fellow coders, share insights, and participate in exciting challenges. Enjoy free classes and the chance to win amazing prizes while expanding your tech network!</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 justify-start items-start max-w-6xl z-10'>
        <div className='bg-[#0b0b0b] p-4 flex flex-col gap-4 items-start justify-start rounded-lg border-[2px] border-blue-400 hover:scale-105 transition-transform duration-200'>
            <div className='inline-flex justify-between items-center w-full'>
                <img src={assets.money} alt="" className='bg-[#1b1b1b] rounded-lg p-2'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-white font-medium text-lg">Earn Cash Prizes</h1>
            <p className="text-white text-sm font-light">Compete and win exciting cash rewards</p>
        </div>
        <div className='bg-[#0b0b0b] p-4 flex flex-col gap-4 items-start justify-start rounded-lg border-[2px] border-blue-400 hover:scale-105 transition-transform duration-200'>
            <div className='inline-flex justify-between items-center w-full'>
                <img src={assets.community} alt="" className='bg-[#1b1b1b] rounded-lg p-2'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-white font-medium text-lg">Build Community</h1>
            <p className="text-white text-sm font-light">Create a network around your favorite tech</p>
        </div>
        <div className='bg-[#0b0b0b] p-4 flex flex-col gap-4 items-start justify-start rounded-lg border-[2px] border-blue-400 hover:scale-105 transition-transform duration-200'>
            <div className='inline-flex justify-between items-center w-full'>
                <img src={assets.network} alt="" className='bg-[#1b1b1b] rounded-lg p-2'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-white font-medium text-lg">Network</h1>
            <p className="text-white text-sm font-light">Connect with fellow tech enthusiasts</p>
        </div>
        <div className='bg-[#0b0b0b] p-4 flex flex-col gap-4 items-start justify-start rounded-lg border-[2px] border-blue-400 hover:scale-105 transition-transform duration-200'>
            <div className='inline-flex justify-between items-center w-full'>
                <img src={assets.graph} alt="" className='bg-[#1b1b1b] rounded-lg p-2'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-white font-medium text-lg">Gain Reputation</h1>
            <p className="text-white text-sm font-light">Stand out as a community leader in tech</p>
        </div>
        <div className='bg-[#0b0b0b] p-4 flex flex-col gap-4 items-start justify-start rounded-lg border-[2px] border-blue-400 hover:scale-105 transition-transform duration-200'>
            <div className='inline-flex justify-between items-center w-full'>
                <img src={assets.code} alt="" className='bg-[#1b1b1b] rounded-lg p-2'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-white font-medium text-lg">True Tech Teaching</h1>
            <p className="text-white text-sm font-light">Share knowledge without sales pitches.</p>
        </div>
        <div className='bg-[#0b0b0b] p-4 flex flex-col gap-4 items-start justify-start rounded-lg border-[2px] border-blue-400 hover:scale-105 transition-transform duration-200'>
            <div className='inline-flex justify-between items-center w-full'>
                <img src={assets.badge1} alt="" className='bg-[#1b1b1b] rounded-lg p-2'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-white font-medium text-lg">Leadership</h1>
            <p className="text-white text-sm font-light">Develop your leadership skills</p>
        </div>
      </div>
      <Link to='/application'><div className=' px-8 py-2 bg-[#3b82f6] text-white text-md rounded-[8px] hover:bg-blue-600 transition-colors'>Apply Now</div></Link>
    </div>
  )
}

export default benefits
