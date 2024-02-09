'use client'
import React from 'react';
import '../../utils/fontawesome';
import Navigate from '../page';
const Property = () => {
  return (
    <>
      <div className="profile-checkout flex flex-col items-center gap-[20px]">
        <Navigate />
        <div className="flex flex-col md:flex-row md:space-x-6 md:w-[80%] h-screen p-5 md:p-10">
          {/* Left Section for Large Screens */}
          <div className="hidden md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[30%] h-[85%] bg-blue-100 rounded-lg items-center justify-evenly mr-[60px] p-10">
            <h1 className='text-xl text-center'>Click Perfact picture of your property so the renter or buyer see the best image of your property. </h1>
            <img src="../camera.png" className='w-2/3 h-auto' alt="" />
            <div className="help text-center">
              <h1 className='font-semibold'>Need Help?</h1>
              <p className='font-medium'>You can email us</p>
              <p className='text-sky-500'>Contact@dealacres.com</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[70%] flex items-center justify-center h-[70%] ">
            <div className="w-full h-full flex flex-col justify-around border-[6px] rounded-[30px] border-blue-200 p-6 md:w-1/2 border-6 border-blue-200 rounded-lg p-6 space-y-6">
              <h1 className='text-xl font-semibold '>Add images</h1>

              <div className="num flex flex-col items-center gap-[10px] bg-blue-50	rounded-[10px]	pt-4 pb-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmofXDYIeXYic96_7o1SNyN85KgcM49v1K5tF-GOvVthm8gHMPeWxp4GXy4gP7fTuV_h4&usqp=CAU" className='w-[100px]' alt="" />
                <p className='font-bold'>Drag & Drop Image Image Here</p>
                <p >Uploaded photo is maximum of 2mb</p>
              <button className='bg-blue-700 rounded-[10px] text-white  p-2 w-[200px]'>Upload File</button>
              </div>
              <p>At least add 3 images of your property for good visibility and high response. </p>

              <div className="btns flex flex-col gap-4 mt-4 md:mt-8 ">
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

export default Property;
