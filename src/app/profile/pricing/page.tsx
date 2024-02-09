// pages/profile.js
'use client'
import React from 'react';
import '../../utils/fontawesome';
import Navigate from '../page'; // Import a separate CSS file for styling
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Basic = () => {
    const router = useRouter();

    const handlePostProperty = () => {
      // Redirect to the '/submit' page
      router.push('/submit');
    };
    const amenities = [
        'Aerobics Room',
        'Air Conditioning',
        'Amphitheatre',
        'Arts & Craft Studio',
        'ATM',
        'Badminton Courts',
        'Banquet Hall',
        'Bar & Lounge',
        'Barbeque Pit',
        'Cafeteria/Food Court',
        'Car Parking',
        'Car Wash Area',
        'Club House',
        'Coffee Lounge',
        'Concierge Service',
        'Conference Room',
        'Creche Facility',
        'Cricket Pitch',
        'Cycling Track',
        'Television',
        'Earthquake Resistant',
        'Escalators',
        'Fire Fighting Equipment',
        'Garden',
        'Guest Accommodation',
        'Gym'
    ];
    const amenitiesListTwo = [
        'Gym',
        'Indoor Games Room',
        'Intercom Facility',
        'Internet/WiFi',
        'Jogging Track',
        'Kids Play Area',
        'Laundry',
        'Lift',
        'Maintenance Staff',
        'Medical Centre',
        'Meditation Area',
        'Mini Theatre',
        'Multiplexes',
        'Park',
        'Piped gas',
        'Power Backup',
        'Reserved Parking',
        'Retail Shops',
        'RO Water System',
        'Sauna/Spa',
        'Security (CCTV)',
        'Swimming Pool',
        'Tennis Courts',
        'Vastu Friendly',
        'Visitor Parking',
        'Waste Disposal'
    ];
    return (
        <>
            <div className="profile-checkout w-full flex flex-col items-center gap-[10px]  h-[280vh]">
                <Navigate />
                <div className="flex flex-col md:flex-row-reverse md:space-x-6 md:w-[90%]  p-2 md:p-10">
                    {/* Left Section for Large Screens */}
                    <div className="hidden md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[50%] h-[55%] items-center justify-evenly mr-[60px] p-10 gap-[30px]">
                        <div className=" flex flex-col bg-blue-100 rounded-[25px]  md:flex md:flex-col md:justify-evenly md:items-center w-full md:w-[100%] h-[100%] items-center justify-evenly p-10">
                            <ul className='list-disc text-[22px]'>
                                <li>
                                    Mention attractive amenities and appealing details of your property.
                                </li>
                                <li>
                                    Add property proximity to transit Shopping, Market Areas, and more...
                                </li>
                            </ul>
                            <Image width={500} height={500} src="/house.png" className='w-2/3 h-auto' alt="" />
                            <div className="help text-center">
                                <h1 className='font-semibold'>Need Help?</h1>
                                <p className='font-medium'>You can email us</p>
                                <p className='text-sky-500'>Contact@dealacres.com</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-[70vw] flex  justify-center h-[210vh] ">
                        <div className="p-1 w-[80%] h-full flex flex-col justify-around border-[6px] rounded-[22px] border-blue-200  md:w-[60%] border-6 border-blue-200 rounded-lg space-y-6 md:p-3">
                            <div className="num flex flex-col  gap-[10px]">
                                <div className=" flex flex-col gap-[20px] ">
                                    <h1 className='text-3xl font-semibold'>Price Details</h1>
                                    <div className="inputs flex flex-col gap-[10px]">
                                    <input type="text" placeholder={` &#8377; Expected Price`} className='p-4 border-4 rounded-md border-indigo-200' />
<input type="text" placeholder={` &#8377; Price per Sq. Yd`} className='p-4 border-4 rounded-md border-indigo-200 w-[50%]' />

                                    </div>
                                    <div className="checkbox pt-3 flex flex-col gap-[16px]">
                                        <div className="check flex gap-[6px]">
                                            <input type="checkbox" /> All Inclusive Price
                                            <input type="checkbox" /> Price Negotiable

                                        </div>
                                        <div className="check">
                                            <input type="checkbox" /> Price Negotiable
                                        </div>
                                    </div>

                                    <h1 className='text-3xl font-semibold'>Add Amenties and Features </h1>
                                    <div className="inputs flex justify-evenly">
                                        <div>
                                            {amenities.map((amenity, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <input type="checkbox" />
                                                    <span>{amenity}</span>
                                                </div>
                                            ))}

                                            <h1 className='text-blue-600'>More</h1>
                                        </div>
                                        <div>
                                            {amenitiesListTwo.map((amenity, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <input type="checkbox" />
                                                    <span>{amenity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <h1 className='text-3xl font-semibold'>Property Facing</h1>
                                    <div className="btn flex gap-[10px]">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>North</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>South</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>East</button>

                                    </div>
                                    <div className="btn flex gap-[10px]">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>West</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>North - East</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>North - West</button>

                                    </div>
                                    <div className="btn flex gap-[10px]">
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>South - East</button>
                                        <button className='border-t-[3px] border-b-[4px] border-r-[2px] border-l-2	w-[130px] border-blue-800	 rounded-[12px] p-2 w-[auto]'>South - West</button>

                                    </div>
                                    <h1 className='text-3xl font-semibold'>Upload Floor Plan</h1>
                                    <div className="num flex flex-col items-center gap-[10px] bg-blue-50	rounded-[10px]	pt-4 pb-4">
                                        <Image width={500} height={500} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmofXDYIeXYic96_7o1SNyN85KgcM49v1K5tF-GOvVthm8gHMPeWxp4GXy4gP7fTuV_h4&usqp=CAU" className='w-[100px]' alt="" />
                                        <p className='font-bold'>Drag & Drop Image Image Here</p>
                                        <p >Uploaded photo is maximum of 2mb</p>
                                        <button className='bg-blue-700 rounded-[10px] text-white  p-2 w-[200px]'>Upload File</button>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    
                </div>
                <div className="flex flex-col w-[60%] justify-center gap-[10px] text-left">
                <h1 className='text-3xl font-semibold'>GDPR Agreement *</h1>
                <div className="input flex gap-[10px] items-center">
                    <input type="checkbox" className='w-[20px] h-[20px]' />
                    <p className='text-xl'>
                    I agree to this website "Deal Acres" storing my submitted information; see more details below.</p>
                </div>
                <p className='bg-stone-200 p-3 rounded-[10px]'>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
                </div>
<button
      className='w-[80%] bg-blue-700 p-3 text-white rounded-[10px]'
      onClick={handlePostProperty}
    >
      Post Property
    </button>
            </div>
        </>
    );
};

export default Basic;
