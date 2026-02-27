import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BigCard from "./BigCard";

gsap.registerPlugin(ScrollTrigger);

export default function JumpSection() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sliderRef.current;

      gsap.to(cards, {
        x: () => -(cards.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0f766e] text-teal-200 py-12 md:py-20 overflow-hidden"
    >

      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 md:mb-16 px-5 md:px-10">

        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold">
          Jump right in.
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">

          <p className="text-sm sm:text-base md:text-xl text-teal-300">
            See what you can build.
            <br className="hidden sm:block" />
            Pick an idea and go.
          </p>

          <button className="bg-teal-300 text-teal-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
            Guide for prompting
          </button>

        </div>
      </div>

      {/* Horizontal Cards */}
      <div
        ref={sliderRef}
        className="flex gap-6 md:gap-10 px-5 md:px-10"
      >
        <BigCard
          bgColor="#7E2A2A"
          blobColor="#FF7A7A"
          image="/images/calorie-img.png"
        />

        <BigCard
          bgColor="#7E2A2A"
          blobColor="#FF7A7A"
          image="/images/camera.png"
        />

        <BigCard
          bgColor="#7E2A2A"
          blobColor="#FF7A7A"
          image="/images/pig.png"
        />
      </div>

    </section>
  );
}