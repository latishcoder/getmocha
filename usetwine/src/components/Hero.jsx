import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#e9e6df] pt-16 md:pt-24 pb-12 flex items-center">

      <div className="max-w-6xl mx-auto px-5 md:px-6 w-full text-center md:text-left">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] leading-tight md:leading-[0.95] font-extrabold text-black tracking-tight">
          Bring your <br className="hidden md:block" />
          ideas to life.
        </h1>

        {/* Subtext */}
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto md:mx-0">
          Create beautiful websites with words, not code.
        </p>

      </div>

    </section>
  );
}