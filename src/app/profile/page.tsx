'use client'
import React from "react";
import Link from 'next/link';
import Nav from '../Navigation/nav';

const Navigate = () => {
    return (
      <>
        <Nav/>
        <div className="navigate flex items-center justify-center gap-[5px] w-full md:w-[60%] bg-sky-100 pt-2 pl-5 pr-5 pb-2 rounded-2xl">
            <Link href="/profile/basic" className="nav-link">
                Basic Details
            </Link>
            <div className="w-[100px] h-[2px] bg-stone-700	"></div>

            <Link href="/profile/location" className="nav-link">
                Location Details
            </Link>
           <div className="w-[100px] h-[2px] bg-stone-700	"></div>

            <Link href="/profile/property" className="nav-link">
                Property Profile
            </Link>
           <div className="w-[100px] h-[2px] bg-stone-700	"></div>

            <Link href="/profile/photos" className="nav-link">
                Photos
            </Link>
           <div className="w-[100px] h-[2px] bg-stone-700	"></div>

            <Link href="/profile/pricing" className="nav-link">
                Pricing & Others
            </Link>
        </div>
      </>
    );
}

export default Navigate;


