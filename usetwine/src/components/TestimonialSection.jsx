import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function TestimonialSection() {
  return (
    <section className="bg-[#0f3f84] text-blue-200 px-5 md:px-10 py-16 md:py-28 relative">

      <div className="max-w-6xl mx-auto">

        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-16">

          <h4 className="text-base md:text-lg text-blue-300">
            What are users saying?
          </h4>

          <div className="flex gap-3">
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
              <FiArrowLeft className="text-lg md:text-2xl" />
            </button>

            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              <FiArrowRight className="text-lg md:text-2xl" />
            </button>
          </div>

        </div>

        {/* Quote Row */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">

          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="/images/testimonials_tom.jpeg"
              alt="User"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
            />
          </div>

          {/* Quote Content */}
          <div>

            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-relaxed text-blue-200">
              “As an active user of technology, but not a programmer,
              many solutions give promise of smooth sailing ahead, just
              on the other side of the premium pay wall. Enter Mocha,
              execution from the start, engagement for enabling performance,
              refreshed to perfection. Confidence to scale.”
            </p>

            <div className="mt-6 md:mt-10">
              <p className="font-semibold text-blue-100">
                Tom Donkers
              </p>
              <p className="text-blue-300">
                CEO
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}