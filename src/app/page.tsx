"use client"
import Image from "next/image";
import './globals.css'
import './utils/fontawesome'; // Import the Font Awesome configuration
import Nav from "./Navigation/nav";
import HomePage from "./Home/page";
import Second from "./Second/page";
import Third from "./Third/page";
export default function Home() {
  return (
    <>
    <Nav/>
    <HomePage/>
    <Second/>
    <Third/>
    </>
  );
}
