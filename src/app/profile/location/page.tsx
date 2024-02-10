// pages/profile.js
'use client'
import React from 'react';
import '../../utils/fontawesome';
import Navigate from '../page'; // Import a separate CSS file for styling
import Image from 'next/image';

const Basic = () => {
  return (
    <>
      <div className="profile-checkout flex flex-col items-center gap-[20px]">
        <Navigate />
        <div className="flex flex-col md:flex-row md:space-x-6 md:w-[80%] h-[110vh] p-5 md:p-10">
          {/* Left Section for Large Screens */}
          <div className="hidden md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[30%] h-[85%] bg-blue-100 rounded-lg items-center justify-evenly mr-[60px] p-10">
            <h1 className='text-xl text-center'>An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant </h1>
            <Image width={500} height={500} src="/loc.png" className='w-2/3 h-auto' alt="" />
            <div className="help text-center">
              <h1 className='font-semibold'>Need Help?</h1>
              <p className='font-medium'>You can email us</p>
              <p className='text-sky-500'>Contact@dealacres.com</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[60%] flex items-center justify-center h-[70%] ">
            <div className="w-full h-full flex flex-col justify-around border-[6px] rounded-[22px] border-blue-200 p-6 md:w-1/2 border-6 border-blue-200 rounded-lg p-6 space-y-6">
              <h1 className='text-xl font-semibold text-center'>Your Preferred Location?</h1>

              <div className="num flex flex-col items-center gap-[10px]">
                <input type="text" placeholder='State' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200'/>
                <input type="text" placeholder='City' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200'/>
                <input type="text" placeholder='Name of Project/Property' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200'/>
                <input type="text" placeholder='Area/Sector' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200'/>
                <input type="text" placeholder='House no. (optional)' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200'/>
              </div>

              <div className="btns flex flex-col gap-4 mt-4 md:mt-8">
                <button
                  className='p-4 bg-blue-700 border border-blue-700 rounded-md text-white hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
