"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 border-b bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 md:px-20 font-semibold">
        {/* Logo */}
        <h1 className="text-2xl font-bold">LOGO</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex xl:gap-10 md:gap-8 gap-4">
          <span className="hover:text-gray-600 transition"><Link href="/"> Home</Link></span>
          <span  className="hover:text-gray-600 transition"> <Link href="/about"> About</Link></span>
          <span  className="hover:text-gray-600 transition"><Link href="/service"> service</Link></span>
  
        </div>

        {/* Contact Button */}
        <button className="hidden md:block py-2 px-6 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
        <Link href ="/login">Login</Link>
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-7 -top-3 text-lg font-medium transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-6 py-12 px-5   " onClick={() => setIsOpen(false)}>
          <X size={32} className="text-black" />
        </button>
        <div className="flex flex-col -mt-52 gap-6">
        <span  className="hover:text-gray-600 transition " onClick={() => setIsOpen(false)}> <Link href="/"> Home</Link></span>
        <span className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}><Link href="/about"> About</Link></span>
        <span  className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}><Link href="/service"> service</Link></span>
        </div>
        <button className="py-3 px-8 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition" onClick={() => setIsOpen(false)}>
        <Link href ="/login">Login</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
