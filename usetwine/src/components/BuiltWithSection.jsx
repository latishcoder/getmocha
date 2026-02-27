import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BuiltWithSection() {
  const sectionRef = useRef(null);

  const upperLeftRef = useRef(null);
  const upperRightRef = useRef(null);
  const lowerLeftRef = useRef(null);
  const lowerRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const upperCards = [upperLeftRef.current, upperRightRef.current];
      const lowerCards = [lowerLeftRef.current, lowerRightRef.current];

      gsap.set([...upperCards, ...lowerCards], { opacity: 0, y: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
        },
      });

      tl.to(upperRightRef.current, { opacity: 1, y: 0, duration: 1 })
        .to(upperLeftRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
        .to(upperCards, { y: -500, opacity: 0, duration: 2 })

        .to(lowerRightRef.current, { opacity: 1, y: 0, duration: 1 })
        .to(lowerLeftRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
        .to(lowerCards, { y: -500, opacity: 0, duration: 2 })

        .to(".center-content", { y: -300, opacity: 0, duration: 1.5 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#e9e6df] flex items-center justify-center overflow-hidden"
    >

      {/* CENTER CONTENT */}
      <div className="center-content text-center z-10 px-4">
        <p className="text-sm md:text-lg mb-3 md:mb-4 text-black">
          Trusted by over 250,000 users.
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold leading-tight md:leading-[0.95] text-black">
          Built with <br /> Mocha.
        </h2>

        <button className="mt-6 md:mt-10 px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full text-sm md:text-lg">
          ✳ Start building
        </button>
      </div>

      {/* UPPER LEFT */}
      <div
        ref={upperLeftRef}
        className="absolute left-2 sm:left-6 md:left-10 top-16 md:top-20 w-[120px] sm:w-[200px] md:w-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
      >
        <img src="/images/ai-saas.png" className="w-full h-full object-cover" />
      </div>

      {/* UPPER RIGHT */}
      <div
        ref={upperRightRef}
        className="absolute right-2 sm:right-6 md:right-10 top-16 md:top-20 w-[120px] sm:w-[200px] md:w-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
      >
        <img src="/images/bluewave.png" className="w-full h-full object-cover" />
      </div>

      {/* LOWER LEFT */}
      <div
        ref={lowerLeftRef}
        className="absolute left-2 sm:left-6 md:left-10 bottom-16 md:bottom-20 w-[120px] sm:w-[200px] md:w-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
      >
        <img src="/images/murals.png" className="w-full h-full object-cover" />
      </div>

      {/* LOWER RIGHT */}
      <div
        ref={lowerRightRef}
        className="absolute right-2 sm:right-6 md:right-10 bottom-16 md:bottom-20 w-[120px] sm:w-[200px] md:w-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
      >
        <img src="/images/linktree.png" className="w-full h-full object-cover" />
      </div>

    </section>
  );
}