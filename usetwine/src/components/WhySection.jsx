import React from "react";

export default function WhySection() {
  return (
    <section className="bg-[#e9e6df] py-16 md:py-24 lg:py-32 px-5 md:px-10">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-16">

        {/* LEFT BIG TITLE */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] leading-tight lg:leading-[0.9] font-extrabold">
            Why <br /> Mocha?
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-6 md:gap-8 text-center lg:text-left">

          <p className="text-base sm:text-lg md:text-2xl text-gray-800 max-w-xl leading-relaxed">
            Turn ideas into real products—without hiring developers or
            touching code.
          </p>

          <button className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full text-sm md:text-lg hover:scale-105 transition-transform duration-300">
            Get started
          </button>

        </div>

      </div>

    </section>
  );
}