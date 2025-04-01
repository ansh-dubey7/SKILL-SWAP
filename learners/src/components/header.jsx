import React from 'react'
import { assets } from '../assets/assets.js'

const header = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 md:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <div className='flex justify-center items-center space-x-2 w-fit flex-shrink-0'>
              <img src={assets.logo} alt="logo" className='h-7 rounded' />
              <span className="text-lg font-medium text-white">SkillSwap</span>
            </div>  
          </div>
          <div className='item-center space-x-4'>
            <img src={assets.profile} alt=""  className='h-8'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default header
