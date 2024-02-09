// pages/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const HomePage = () => {
  return (
    <div className="flex md:flex-col	 items-center justify-center md:h-screen">
      <div className="w-full sm:w-[70%] flex flex-col-reverse sm:flex-row justify-between items-center md:h-full">
        <div className="w-full sm:w-[60%] h-[70%] border-s-indigo-500 border-[10px] rounded-lg border-b-2 border-t-[7px] border-r-0 p-7 mb-4 sm:mb-0">
          <h1 className='text-[30px] font-bold	'>POST YOUR PROPERTY FOR FREE</h1>
          <p>Add Basic Details</p>
          <p className='font-bold'>Looking For.......</p>
          <div className="btn w-[50%] flex  items-center gap-[10px]">
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[50%]'>Sell</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[50%]'>Rent</button>
          </div>
          <h1>Property Type</h1>
          <div className="btn mt-[4px] w-[50%] flex  items-center gap-[10px]">
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Residential</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Commercial</button>
          </div>
          <div className="btn mt-[7px] w-[50%] flex  items-center gap-[10px]">
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Flat/Apartment</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Villa</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Plot</button>

          </div>
          <div className="btn mt-[4px] w-[50%] flex  items-center gap-[10px]">
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Independent House</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[auto]'>Builder Floor</button>
          </div>
          <h1 className='mt-2'>Add Your Contact Detail</h1>
          <input className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 w-[50%]' type="tel" placeholder='Phone' />
          <p className='mt-3'>Are you a registered user?
            <Link href='/login' className='text-sky-500	'> Login</Link>
          </p>
          <button className='w-[60%] bg-blue-700	p-3 text-neutral-50	rounded-md'>
            Start Now
          </button>
        </div>
        <div className="w-full sm:w-[40%] h-[90%] p-[50px] bg-sky-100 rounded-xl flex flex-col items-center justify-between">

          <div className="flex flex-col ">
            <div className="para flex items-end">
              <p className='font-bold'>Post property Ad to <br />sell or rent online for</p>
              <br />
              <h1 className='text-5xl	italic'>  FREE</h1>
            </div>
            <div className="lists">
              <ul className='list-disc p-6 text-[18px]'>
                <li>Get more responses</li>
                <li>Get more visibility</li>
                <li>Get more visibility</li>
                <li>Get more visibility</li>
              </ul>
            </div>

          </div>
          <Image alt='' src="/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496223-removebg-preview.png" width='300' height='300'/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
