// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center mt-6 mb-12">
      <div className="bg-gray-800/70 backdrop-blur-md px-6 py-3 rounded-full flex space-x-6 text-sm md:text-base shadow-lg border border-cyan-400 items-center">
        <a href="#home" className="text-white hover:text-cyan-400 transition duration-200">Home</a>
        <a href="#pricing" className="text-white hover:text-cyan-400 transition duration-200">Pricing</a>
        <a href="#faq" className="text-white hover:text-cyan-400 transition duration-200">FAQ</a>
        <a href="#contact" className="text-white hover:text-cyan-400 transition duration-200">Contact</a>

        {/* Updated Download Button */}
        <button className="bg-white text-black font-semibold px-5 py-1.5 rounded-full hover:bg-cyan-200 transition duration-200">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

