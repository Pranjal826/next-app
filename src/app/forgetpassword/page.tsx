'use client'
import React from 'react';
import Nav from '../Navigation/nav';
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
const forgetpassword = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row md:space-x-6 w-full h-screen p-5 md:p-10">
        {/* Left Section for Large Screens */}
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center w-full md:w-1/3 bg-blue-100	 rounded-lg items-center justify-evenly ml-[60px] p-10">
          <h1 className='text-xl text-center'>Your Phone number gives access to your account </h1>
          <Image width={500} height={500} src="/otp.png" className='w-2/3 h-auto' alt="" />
          <div className="help text-center">
            <h1 className='font-semibold'>Need Help?</h1>
            <p className='font-medium'>You can email us</p>
            <p className='text-sky-500'>Contact@dealacres.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 flex items-center justify-center ">
          <div className="w-full border-[6px] rounded-[22px] border-blue-200 p-6	 md:w-1/2 border-6 border-blue-200 rounded-lg p-6 space-y-6">
            <h1 className='text-xl font-semibold text-center'>Welcome Back,</h1>
            <p className='text-xl text-center'>Your number is registered with us.</p>
            <p className='text-xl text-center'>Please Login to continue</p>

            <div className="num flex items-center gap-[10px]">
              <p>+91 9302931857</p>
              <FontAwesomeIcon icon="pencil" size="1x" className='text-blue-500' />
            </div>

            <div className="otp-num space-y-2">
              <h1>Enter Your OTP</h1>
              <div className="input-boxes flex space-x-2">
                {/* Adjust the width and height based on your design */}
                <input type="tel" className="w-1/4 md:w-1/6 border border-gray-500 h-12 text-center" />
                <input type="tel" className="w-1/4 md:w-1/6 border border-gray-500 h-12 text-center" />
                <input type="tel" className="w-1/4 md:w-1/6 border border-gray-500 h-12 text-center" />
                <input type="tel" className="w-1/4 md:w-1/6 border border-gray-500 h-12 text-center" />
              </div>
              <p className='text-blue-400 text-center'>Resend OTP</p>
            </div>
            <div className="btns flex flex-col gap-4 mt-4 md:mt-8">
  <button className='p-4 bg-blue-700 border border-blue-700 rounded-md text-white hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out'>
    Verify & Login
  </button>
  <button className='p-4 bg-blue-700 border border-blue-700 rounded-md text-white hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out'>
    Login Via Email
  </button>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default forgetpassword;
