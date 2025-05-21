import React from 'react'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className='md:px-8 px-4 w-full relative md:pb-0 pb-4'>
      <div className='mt-8 border-t-[2px] border-x-[1px] border-blue-500 w-full relative h-[70vh] rounded-t-3xl overflow-hidden contain-size'>
        <div className='flex md:flex-row flex-col md:justify-between items-left p-8 z-20 gap-8'>
            <div className='flex justify-start items-start flex-col'>
                <Link to='/'><div className='flex justify-center items-center space-x-2 w-fit flex-shrink-0'>
                    <img src={assets.logo} alt="" className='w-6 h-6 rounded mb-0.5'/>
                    <span className="text-lg font-medium text-white">SkillSwap</span>
                </div></Link>
                <p className="text-white my-2 text-lg">Unlock Your Coding Potential Anytime, Anywhere</p>
            </div>
            <div className='flex justify-start items-start gap-8 z-20'>
                <ul>
                    <div className='text-white text-sm my-2 block hover:underline z-20 cursor-pointer'>Privacy Policy</div>
                    <div className='text-white text-sm my-2 block hover:underline z-20 cursor-pointer'>Terms of Service</div>
                    <div className='text-white text-sm my-2 block hover:underline z-20 cursor-pointer'>Classes</div>
                    <div className='text-white text-sm my-2 block hover:underline z-20 cursor-pointer'>Pricings</div>
                </ul>
            </div>
        </div>
        <h1 className="font-[600] resize-x md:text-[13.8cqw] text-[13cqw] text-center bg-gradient-to-t from-black via-blue-700 to-blue-900 bg-clip-text text-transparent z-0">SKILLSWAP</h1>
      </div>
      <div className=''></div>
    </div>
  )
}

export default footer
