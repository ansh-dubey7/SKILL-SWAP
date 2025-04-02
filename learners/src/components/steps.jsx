import React from 'react'
import { assets } from "../assets/assets.js"

const steps = () => {
  return (
    <div className='w-full py-10 md:py-20 pb-32 md:pb-48 relative overflow-hidden bg-black'>
      <div className='absolute inset-0 flex items-center justify-center translate-y-1/2'>
        <div className='absolute w-[400px] h-[400px] md:w-[1200px] md:h-[1000px] bg-blue-500 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen opacity-90'></div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-[1]'></div>
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10'>
        <div className='text-center mb-8 md:mb-16'>
          <button className="inline-flex items-center text-sm rounded-full py-1 px-2 bg-slate-700 border-t border-blue-100">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-blue-200 to-blue-900 mr-2"></span>
            <span className="text-blue-400">Steps</span>
          </button>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 md:mb-6">Your Journey to Becoming a Expert</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg px-4">Follow these simple steps to become a Campus Hero and make a lasting impact in your college's tech community while earning exciting rewards</p>
        </div>
        <div className='relative'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 mx-auto relative my-20'>
            <div className='hidden md:block absolute w-full h-full'>
              <div className='absolute left-[12%] -bottom-[130px] w-[190px] z-[5]'>
                <img src={assets.arrow_up} alt="" className='w-full'/>
              </div>
              <div className='absolute left-[34%] -top-[130px] w-[190px] z-[5] rotate-180 scale-x-[-1]'>
                <img src={assets.arrow_down} alt="" className='w-full'/>
              </div>
              <div className='absolute left-[52%] -bottom-[130px] w-[190px] z-[5]'>
                <img src={assets.arrow_up} alt="" className='w-full'/>
              </div>
              <div className='absolute left-[72%] -top-[130px] w-[190px] z-[5] rotate-180 scale-x-[-1]'>
                <img src={assets.arrow_down} alt="" className='w-full'/>
              </div>
            </div>
            <div className='relative w-full md:w-auto'>
              <div className='relative sm:w-[235px] bg-[#092139] backdrop-blur-sm rounded-3xl px-4 py-[22px] transform hover:scale-105 transition-all duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] w-full md:w-64 md:-ml-2 first:ml-0 rotate-12 hover:z-50 overflow-hidden group z-[10]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#092139] via-[#2966A5] via-45% to-[#0D2846] opacity-95 mix-blend-normal group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='w-[30px] h-[30px] mb-2 mx-auto'>
                    <img src={assets.one} alt="" className='w-full h-full object-contain'/>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-[18px] mb-[18px] text-center md:px-4">Apply Anytime</h3>
                  <p className="text-sm text-gray-300 text-center">Open to all college students in India, regardless of coding experience. Stay tuned for application periods throughout the year.</p>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-auto'>
              <div className='relative sm:w-[235px] bg-[#081F35] backdrop-blur-sm rounded-3xl px-4 py-[22px] transform hover:scale-105 transition-all duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] w-full md:w-64 md:-ml-2 first:ml-0 -rotate-12 hover:z-50 overflow-hidden group z-[10]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#081F35] via-[#2966A5]/50 to-[#081F35] opacity-95 mix-blend-normal group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='w-[30px] h-[30px] mb-2 mx-auto'>
                    <img src={assets.two} alt="" className='w-full h-full object-contain'/>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-[18px] mb-[18px] text-center md:px-4">Showcase Yourself</h3>
                  <p className="text-sm text-gray-300 text-center">Submit a video explaining why you're the perfect fit and how you'll contribute to our community.</p>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-auto'>
              <div className='relative sm:w-[235px] bg-[#092139] backdrop-blur-sm rounded-3xl px-4 py-[22px] transform hover:scale-105 transition-all duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] w-full md:w-64 md:-ml-2 first:ml-0  hover:z-50 overflow-hidden group z-[10]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#092139] via-[#2966A5] via-45% to-[#0D2846] opacity-95 mix-blend-normal group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='w-[30px] h-[30px] mb-2 mx-auto'>
                    <img src={assets.three} alt="" className='w-full h-full object-contain'/>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-[18px] mb-[18px] text-center md:px-4">Organize and Engage</h3>
                  <p className="text-sm text-gray-300 text-center">Once accepted, start creating and hosting coding events. Invite participants and build your community.</p>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-auto'>
              <div className='relative sm:w-[235px] bg-[#081F35] backdrop-blur-sm rounded-3xl px-4 py-[22px] transform hover:scale-105 transition-all duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] w-full md:w-64 md:-ml-2 first:ml-0 rotate-12 hover:z-50 overflow-hidden group z-[10]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#081F35] via-[#2966A5]/50 to-[#081F35] opacity-95 mix-blend-normal group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='w-[30px] h-[30px] mb-2 mx-auto'>
                    <img src={assets.four} alt="" className='w-full h-full object-contain'/>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-[18px] mb-[18px] text-center md:px-4">Earn Votes</h3>
                  <p className="text-sm text-gray-300 text-center">Participants attend your events and vote for their favorites. The highest voted hosts get recognized.</p>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-auto'>
              <div className='relative sm:w-[235px] bg-[#092139] backdrop-blur-sm rounded-3xl px-4 py-[22px] transform hover:scale-105 transition-all duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] w-full md:w-64 md:-ml-2 first:ml-0 -rotate-12 hover:z-50 overflow-hidden group z-[10]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#092139] via-[#2966A5] via-45% to-[#0D2846] opacity-95 mix-blend-normal group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='w-[30px] h-[30px] mb-2 mx-auto'>
                    <img src={assets.five} alt="" className='w-full h-full object-contain'/>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-[18px] mb-[18px] text-center md:px-4">Win Monthly Rewards</h3>
                  <p className="text-sm text-gray-300 text-center">With a fresh competition every month, the top host wins exciting prizes. Each month is a new opportunity to shine!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-24 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-12 relative z-10 max-w-4xl mx-auto'>
            <div className='flex items-start space-x-3 text-gray-300 flex-1 max-w-xs'>
              <div className='flex-shrink-0 mt-1'>
                <img src={assets.tick} alt="" className='w-4 h-4'/>
              </div>
              <span className="text-sm leading-relaxed">Develop leadership &amp; event management skills</span>
            </div>
            <div className='flex items-start space-x-3 text-gray-300 flex-1 max-w-xs'>
              <div className='flex-shrink-0 mt-1'>
                <img src={assets.tick} alt="" className='w-4 h-4'/>
              </div>
              <span className="text-sm leading-relaxed">Connect with tech professionals & peers</span>
            </div>
            <div className='flex items-start space-x-3 text-gray-300 flex-1 max-w-xs'>
              <div className='flex-shrink-0 mt-1'>
                <img src={assets.tick} alt="" className='w-4 h-4'/>
              </div>
              <span className="text-sm leading-relaxed">Make an impact in your college</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default steps
