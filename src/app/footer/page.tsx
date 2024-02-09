import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Deal Acres</h2>
          <p className="mt-2">A brief description about your brand or website.</p>
        </div>

        <div className="flex space-x-4">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-4 pt-2 text-center">
        <p>&copy; 2024 Deal Acres. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
