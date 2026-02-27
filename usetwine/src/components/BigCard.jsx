import React from "react";
import { BsStars } from "react-icons/bs";

export default function BigCard({ bgColor, blobColor, image }) {
  return (
    <div
      className="relative w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-[32px] flex-shrink-0 overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >

      {/* Blob */}
      <div
        className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] rounded-full opacity-80"
        style={{ backgroundColor: blobColor }}
      />

      {/* Image */}
      <img
        src={image}
        alt=""
        className="relative z-10 w-[160px] sm:w-[240px] md:w-[320px] object-contain drop-shadow-2xl"
      />

      {/* Bottom CTA */}
      <div className="absolute bottom-3 md:bottom-6 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full flex flex-col sm:flex-row items-center gap-2 sm:gap-4 shadow-xl text-center sm:text-left">

        <span className="text-gray-600 text-xs sm:text-sm">
          Build me a portfolio website...
        </span>

        <button className="bg-black text-white px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
          <BsStars className="text-sm sm:text-lg" />
          Try it now
        </button>

      </div>

    </div>
  );
}