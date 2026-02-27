import React from "react";
import { FiChevronDown, FiArrowUp } from "react-icons/fi";

export default function VideoHero() {
  return (
    <section className="px-5 md:px-12 lg:px-20 py-6 md:py-10 bg-[#e9e6df]">

      {/* Outer Rounded Container */}
      <div className="relative rounded-3xl md:rounded-[40px] overflow-hidden h-[300px] sm:h-[400px] md:h-[450px]">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/bloom-hero.1080.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Center Card */}
        <div className="relative z-10 flex items-center justify-center h-full px-3">
          <div className="w-full max-w-[700px] bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[30px] p-5 sm:p-8 md:p-10 shadow-xl">

            <p className="text-gray-500 text-sm sm:text-base md:text-lg">
              A recipe app with ingredient lists...
            </p>

            {/* Bottom Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 md:mt-10">

              {/* Left Controls */}
              <div className="flex items-center gap-3 sm:gap-4">

                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg md:text-xl">
                  +
                </button>

                <div className="flex items-center gap-2 bg-gray-200 px-4 md:px-5 py-2 md:py-3 rounded-full font-medium text-sm md:text-base">
                  🌸 Inspiration
                  <FiChevronDown className="text-lg md:text-xl text-black" />
                </div>

              </div>

              {/* Arrow Button */}
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition">
                <FiArrowUp className="text-xl md:text-2xl" />
              </button>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}