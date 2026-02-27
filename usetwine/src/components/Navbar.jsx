import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#e9e6df] px-5 md:px-10 py-4 flex items-center justify-between text-black relative">

      {/* Left - Logo */}
      <img
        className="h-6 md:h-7 w-auto"
        src="https://static.getmocha.com/logos/mocha_logo_black-full.png"
        alt="Mocha"
      />

      {/* Center - Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10 font-medium">

        {/* Learn */}
        <div className="relative group flex flex-col items-center">
          <a href="#" className="hover:opacity-70 transition">
            Learn
          </a>
          <BsStars className="absolute -bottom-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 text-sm" />
        </div>

        {/* Our Blog */}
        <div className="relative group flex flex-col items-center">
          <a href="#" className="hover:opacity-70 transition">
            Our Blog
          </a>
          <BsStars className="absolute -bottom-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 text-sm" />
        </div>

        {/* Pricing */}
        <div className="relative group flex flex-col items-center">
          <a href="#" className="hover:opacity-70 transition">
            Pricing
          </a>
          <BsStars className="absolute -bottom-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 text-sm" />
        </div>
      </div>

      {/* Right - Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-lime-400 hover:bg-lime-500 transition px-5 py-2 rounded-full font-medium">
          Sign in
        </button>

        <button className="bg-black text-white hover:bg-gray-800 transition px-6 py-2 rounded-full font-medium flex items-center gap-2">
          <BsStars />
          Join Mocha – It's free!
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#e9e6df] flex flex-col items-center gap-6 py-6 md:hidden shadow-md z-50">

          <a href="#" className="font-medium">Learn</a>
          <a href="#" className="font-medium">Our Blog</a>
          <a href="#" className="font-medium">Pricing</a>

          <button className="bg-lime-400 px-5 py-2 rounded-full font-medium">
            Sign in
          </button>

          <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
            <BsStars />
            Join Mocha – It's free!
          </button>

        </div>
      )}

    </nav>
  );
}