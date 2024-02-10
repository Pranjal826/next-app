// pages/profile.js
'use client'
import React from 'react';
import '../../utils/fontawesome';
import Navigate from '../page'; // Import a separate CSS file for styling
import Image from 'next/image';

const Basic = () => {
    return (
        <>
            <div className="profile-checkout flex flex-col items-center gap-[20px] h-[200vh]">
                <Navigate />
                <div className="flex flex-col md:flex-row-reverse md:space-x-6 md:w-[80%] h-[150vh] p-5 md:p-10">
                    {/* Left Section for Large Screens */}
                    <div className="hidden md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[40%] h-[85%] items-center justify-evenly mr-[60px] p-10 gap-[30px]">
                        <div className=" flex flex-col bg-blue-100 rounded-lg  md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[100%] h-[100%] items-center justify-evenly p-10">
                        <h1 className='text-xl text-center'>Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.   </h1>
                        <Image width={500} height={500} src="/salehouse.png" className='w-2/3 h-auto' alt="" />
                        <div className="help text-center">
                            <h1 className='font-semibold'>Need Help?</h1>
                            <p className='font-medium'>You can email us</p>
                            <p className='text-sky-500'>Contact@dealacres.com</p>
                        </div>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center bg-sky-100 md:w-[100%] p-5 rounded-[10px]" >
                            <Image width={500} height={500} src="/smiley.png" className='h-[100px] w-[100px]' alt="" />
                            <h1 className='text-xl'>Your Are Almost There</h1>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-[70%] flex items-center justify-center h-max ">
                        <div className="w-full h-full flex flex-col justify-around border-[6px] rounded-[22px] border-blue-200 p-6 md:w-1/2 border-6 border-blue-200 rounded-lg p-6 space-y-6">
                            <h1 className='text-xl font-semibold text-center'>Now let us tell about your property</h1>
                            <h1 className='text-xl font-semibold text-center'>Describe your property</h1>
                            <p>Write several things which can describe your property appropriately</p>

                            <div className="num flex flex-col  gap-[10px]">
                                <textarea cols={30} rows={10}
                                    name=""
                                    className="border border-sky-500 focus:border-sky-700 p-2"
                                ></textarea>

                                <div className="room-det flex flex-col">
                                    <h1>Add room details</h1>
                                    <div className="circles flex gap-[10px] ">
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            1
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            2
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            3
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            4
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            5
                                        </div>
                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Number of bath rooms</h1>
                                    <div className="circles flex gap-[10px] ">
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            1
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            2
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            3
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            4
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            5
                                        </div>
                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Number of balconies</h1>
                                    <div className="circles flex gap-[10px] ">
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            1
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            2
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            3
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            4
                                        </div>
                                        <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                            5
                                        </div>
                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Other Rooms</h1>
                                    <div className="circles mt-2 gap-[10px] ">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 '>Pooja Room</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2  ml-2'>Study Room</button>
                                        <br />
                                        <br />

                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 '>Servent Room</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2  ml-2'>Store Room</button>

                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Furnished</h1>
                                    <div className="circles mt-2 gap-[10px] ">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 '>Fully Furnished</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2  ml-2'>Unfurnished</button>
                                        <br />

                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Reserved Parking(Optional)</h1>
                                    <div className="circles mt-2 flex flex-col gap-[13px] ">
                                        <div className="flex gap-[15px] items-center">
                                            <h1>Covered Parking</h1>
                                            <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                                1
                                            </div>
                                            <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                                2
                                            </div>
                                        </div>
                                        <div className="flex gap-[25px] items-center">
                                            <h1>Open Parking</h1>
                                            <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                                1
                                            </div>
                                            <div className="circle1 h-10 w-10 flex items-center justify-center border-sky-500 border-2  rounded-full">
                                                2
                                            </div>
                                        </div>

                                        <br />

                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Flooring Details</h1>
                                    <p>Total no. of floors</p>
                                    <div className="circles mt-2 flex flex-col gap-[13px] ">
                                        <input type="text" placeholder='Total  floors' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200' />
                                        <input type="text" placeholder='Property floors' className='w-[80%] p-3 border-[2px] rounded-[22px] border-blue-200' />


                                        <br />

                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Availability Status</h1>
                                    <div className="circles mt-2 flex gap-[13px] ">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2 '>Ready to Move</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px] p-2  ml-2'>Under Construction</button>
                                        <br />

                                    </div>
                                </div>
                                <div className="room-det flex flex-col">
                                    <h1>Age of Property</h1>
                                    <div className="circles mt-2 flex gap-[12px] ">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px]  '>0-1 year</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px]   '>1-5 years</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px]   '>5-10 years</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	 rounded-[12px]   '>10+ years</button>

                                        <br />

                                    </div>
                                </div>
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
