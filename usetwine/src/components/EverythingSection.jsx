import React from "react";
import { BsStars } from "react-icons/bs";

export default function EverythingSection() {
  return (
    <section className="bg-[#e9e6df] px-5 md:px-10 py-16 md:py-24">
      
      <div className="relative max-w-7xl mx-auto bg-white/60 rounded-2xl md:rounded-[40px] 
      p-6 sm:p-10 md:p-20 overflow-hidden min-h-[450px] flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl text-left">
          
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-[40px] leading-tight tracking-tight">
            Everything included.
            <br />
            Zero setup.
          </h2>

          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
            Storage, login, and any custom feature are all supported,
            without the need to connect external services.
          </p>

          <div className="mt-6 md:mt-8">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full 
            text-sm md:text-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <BsStars />
              Try it now
            </button>
          </div>
        </div>

        {/* RIGHT DECORATIVE AREA */}
        <div className="relative w-full md:w-[400px] h-[300px] md:h-[400px]">

          {/* TEAL */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 
          w-20 h-20 sm:w-28 sm:h-28 md:w-[180px] md:h-[180px] 
          bg-teal-400 rounded-2xl md:rounded-[40px] flex items-center justify-center shadow-xl">
            <span className="text-xl sm:text-3xl md:text-5xl">🔒</span>
          </div>

          {/* BLUE */}
          <div className="absolute top-10 right-4 sm:right-10 
          w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] 
          bg-blue-400 rounded-2xl md:rounded-[40px] flex items-center justify-center shadow-xl">
            <span className="text-lg sm:text-2xl md:text-4xl">🧱</span>
          </div>

          {/* LIME */}
          <div className="absolute bottom-10 right-20 sm:right-28 
          w-20 h-20 sm:w-28 sm:h-28 md:w-[200px] md:h-[200px] 
          bg-lime-400 rounded-2xl md:rounded-[50px] flex items-center justify-center shadow-xl">
            <span className="text-xl sm:text-3xl md:text-5xl">✉️</span>
          </div>

          {/* PINK */}
          <div className="absolute bottom-0 right-0 
          w-14 h-14 sm:w-20 sm:h-20 md:w-[140px] md:h-[140px] 
          bg-pink-400 rounded-2xl md:rounded-[40px] flex items-center justify-center shadow-xl">
            <span className="text-sm sm:text-lg md:text-3xl">📱</span>
          </div>

        </div>

      </div>

    </section>
  );
}