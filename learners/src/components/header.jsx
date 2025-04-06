import React from 'react'
import { Link } from "react-router-dom";
import { assets } from '../assets/assets.js'

const header = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 md:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
          <Link to="/">
            <div className='flex justify-center items-center space-x-2 w-fit flex-shrink-0'>
              <img src={assets.logo} alt="logo" className='h-7 rounded' />
              <span className="text-lg font-medium text-white">SkillSwap</span>
            </div>
          </Link>  
          </div> 
          <div className='item-center space-x-4'>
          <div className="hidden sm:flex items-center space-x-4">
            <Link to="/login"><div className="relative bg-neutral-800 text-white hover:bg-neutral-700 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium">Login</div></Link>
            <Link to="/login"><div className="relative bg-[#3b82f6] text-white hover:bg-blue-600 transition-all duration-300 rounded-xl px-8 sm:px-12 py-2.5 font-medium">Signup</div></Link>
          </div>
            {/* <img src={assets.profile} alt=""  className='h-8'/> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default header
