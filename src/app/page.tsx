"use client"
import 'tailwindcss/tailwind.css';
import './globals.css'
import './utils/fontawesome'; // Import the Font Awesome configuration
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles (optional)

import Nav from "./Navigation/nav";
import HomePage from "./Home/page";
import Second from "./Second/page";
import Third from "./Third/page";
import Reads from "./reads/page";;

import Footer from "./footer/page";
export default function Home() {
  return (
    <>
    <Nav/>
    <HomePage/>
    <Second/>
    <Third/>
    <Reads/>
    <Footer/>
    </>
  );
}
