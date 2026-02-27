import React from "react";

export default function FeaturesSection() {
  return (
    <section className="bg-[#e9e6df] px-5 md:px-10 pt-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">

        {/* LEFT CARD */}
        <div className="relative bg-white/60 rounded-2xl md:rounded-[32px] p-6 sm:p-10 md:p-14 overflow-hidden flex flex-col items-center text-center">

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Not templates.
            <br />
            Your product.
          </h3>

          <p className="mt-4 md:mt-6 max-w-md text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            Your idea shouldn’t look like everyone else’s. Mocha creates custom
            designs for your use case. Not cookie-cutter layouts. Not locked-in templates.
          </p>

          {/* Decorative shape */}
          <div className="absolute bottom-[-40px] md:bottom-[-80px] left-1/2 -translate-x-1/2 w-[260px] sm:w-[400px] md:w-[520px] h-[150px] sm:h-[220px] md:h-[300px] bg-lime-400 rounded-[60%]"></div>

          {/* Image */}
          <img
            src="/images/why-mocha-2.png"
            alt="Laptop"
            className="relative z-10 mt-6 md:mt-10 w-[200px] sm:w-[260px] md:w-[340px] rotate-[-6deg] object-contain drop-shadow-2xl"
          />

        </div>


        {/* RIGHT CARD */}
        <div className="relative bg-white/60 rounded-2xl md:rounded-[32px] p-6 sm:p-10 md:p-14 overflow-hidden flex flex-col items-center text-center">

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Build with words,
            <br />
            not code.
          </h3>

          <p className="mt-4 md:mt-6 max-w-md text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            Describe what you want in your own words. Mocha’s AI agent
            turns your ideas into working apps—no technical knowledge required.
          </p>

          {/* Decorative shape */}
          <div className="absolute bottom-[-40px] md:bottom-[-80px] left-1/2 -translate-x-1/2 w-[260px] sm:w-[400px] md:w-[520px] h-[150px] sm:h-[220px] md:h-[300px] bg-teal-400 rounded-[60%]"></div>

          {/* Input Box */}
          <div className="relative z-10 mt-6 md:mt-10 bg-white rounded-full px-4 sm:px-6 py-3 md:py-4 shadow-lg flex items-center justify-between w-full sm:w-[80%] max-w-md">
            <span className="text-gray-600 text-sm sm:text-base">
              What do you want to build?
            </span>

            <div className="bg-black text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
              ↑
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}