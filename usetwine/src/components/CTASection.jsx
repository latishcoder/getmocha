import React from "react";

export default function CTASection() {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden flex items-center justify-center">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/bloom-hero.1080.mp4" type="video/mp4" />
      </video>

      {/* 🟦 COLOR TINT */}
      <div className="absolute inset-0 bg-[#63c7c7]/80"></div>

      {/* 🟡 BLOBS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#e9e6df] rounded-full top-6 md:top-10 left-4 md:left-10 opacity-70"></div>

        <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-[#e9e6df] rounded-full bottom-6 md:bottom-10 right-4 md:right-10 opacity-70"></div>

        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#e9e6df] rounded-full top-10 md:top-20 right-1/3 opacity-70"></div>

      </div>

      {/* ✨ CONTENT */}
      <div className="relative z-10 text-center text-black px-4 sm:px-6 max-w-xl md:max-w-3xl">

        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-8">
          Bring your app ideas to life
          <br />
          using AI — no coding.
        </h2>

        <button className="bg-black text-white px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold">
          ✳ Start building your app now
        </button>

      </div>

    </section>
  );
}