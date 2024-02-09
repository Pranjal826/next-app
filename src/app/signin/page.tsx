// pages/signin.js
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

import '../utils/fontawesome';
import Nav from '../Navigation/nav';
const Signin = () => {
  const router = useRouter();

  const handleContinueClick = () => {
    // Redirect to /profile route
    router.push('/profile/basic');
  };
  return (
    <>
      <Nav />
      <div className="flex items-center flex-col md:flex-row-reverse md:space-x-6 md:w-[80%] h-screen p-5 md:p-10">
        {/* Left Section for Large Screens */}
        <div className="hidden md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[30%] h-[85%] bg-blue-100	 rounded-lg items-center justify-evenly mr-[60px] p-10">
          <h1 className='text-xl text-center'>This information creates a transparency and build trust with buyers/tenants  </h1>
          <img src="salehouse.png" className='w-2/3 h-auto' alt="" />
          <div className="help text-center">
            <h1 className='font-semibold'>Need Help?</h1>
            <p className='font-medium'>You can email us</p>
            <p className='text-sky-500'>Contact@dealacres.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[60%] flex items-center justify-center h-[60%] ">
          <div className="w-full h-full flex flex-col justify-around border-[6px] rounded-[22px] border-blue-200 p-6	 md:w-1/2 border-6 border-blue-200 rounded-lg p-6 space-y-6">
            <h1 className='text-xl font-semibold text-center'>To Continue Please let us what <br/> you are?</h1>

            <div className="num flex items-center gap-[10px]">
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	border-blue-800	 rounded-[12px] p-2 w-[auto]'>An Owner</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	border-blue-800	 rounded-[12px] p-2 w-[auto]'>A Agent</button>
            <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	border-blue-800	 rounded-[12px] p-2 w-[auto]'>A Builder</button>
            </div>

            <div className="otp-num space-y-2">
             <p>Please choose correctly, if you want to <br/> change in future, it done through <br/> profile section</p>
            </div>
            <div className="btns flex flex-col gap-4 mt-4 md:mt-8">
            <button
      className='p-4 bg-blue-700 border border-blue-700 rounded-md text-white hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out'
      onClick={handleContinueClick}
    >
      Continue
    </button>

</div>

          </div>
        </div>
      </div>
    </>
  );
};


export default Signin;
