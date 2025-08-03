import React, { useEffect, useRef } from "react";
import { ImArrowRight2 } from "react-icons/im";
import { IoAirplane } from "react-icons/io5";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const JustAbout = () => {
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);
  const directionRef = useRef("+=");
  const countRef = useRef(null);
  const aboutRef = useRef(null)

  useEffect(() => {
    const scrollElement = scrollRef.current;


    tweenRef.current = gsap.to(scrollElement, {
      x: "+=50%",
      duration: 60,
      ease: "linear",
      repeat: -1,
    });

    const handleScroll = (e) => {
      directionRef.current = e.deltaY > 0 ? "+=50%" : "-=50%";
      const rotation = e.deltaY > 0 ? 0 : 180;

      tweenRef.current.kill();

      // Rotate icons
      gsap.to(scrollRef.current.querySelectorAll("svg"), {
        rotate: rotation,
        duration: 0.5,
        ease: "power2.out",
      });

      // Speed up temporarily
      tweenRef.current = gsap.to(scrollRef.current, {
        x: directionRef.current,
        duration: 54,
        ease: "power2.out",
        repeat: -1,
      });

      // Reset to normal speed with last direction
      clearTimeout(tweenRef.current.resetTimeout);
      tweenRef.current.resetTimeout = setTimeout(() => {
        tweenRef.current.kill();
        tweenRef.current = gsap.to(scrollRef.current, {
          x: directionRef.current.replace("50", "60"),
          duration: 60,
          ease: "linear",
          repeat: -1,
        });
      }, 2000);
    };

    window.addEventListener("wheel", handleScroll);
    // Animate counter on scroll into view (once)
    const counter = { value: 0 };
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top 10%",
      once: true,
      // markers: true,
      onEnter: () => {
        gsap.to(counter, {
          value: 12,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.textContent = Math.floor(counter.value) + "+";
            }
          },
        });
      },
    });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      tweenRef.current.kill();
    };
  }, []);

  return (
    <>
      <div ref={aboutRef} className="py-10  flex flex-col lg:gap-20">
      <h1 className="text-8xl text-[#fffce1] md:text-left text-center font-bold font-stretch-60% w-[80%] mx-auto mb-10">INTRO</h1>
        <div className="w-full overflow-hidden bg-zinc-950 flex items-center justify-center relative ">
          {/* Left gradient overlay */}
          <div className="absolute top-0 h-full w-[50%] z-10 pointer-events-none bg-gradient-to-r left-0 from-zinc-950 via-zinc-950/50 to-transparent  "></div>

          {/* Scrollable icons */}
          <div className="w-max flex gap-40" ref={scrollRef}>
            {[...Array(100)].map((_, i) => (
              <ImArrowRight2 key={i} className="text-4xl flex-shrink-0" />
            ))}
          </div>

          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 h-full w-[50%] z-10 pointer-events-none bg-gradient-to-l from-zinc-950 via-zinc-950/50 to-transparent"></div>
        </div>
        <div className=" flex flex-col lg:flex-row w-[90%] mx-auto font-bold font-stretch-80% py-8">
          <div className=" lg:text-3xl text-3xl lg:w-[20%] text-center ">About Me</div>
          <div className="lg:w-[80%] font-normal text-center mt-5 md:mt-0 tracking-tight font-stretch-80% px-10">
            <div className=" lg:text-3xl  ">
              I’m Abhishek Paul, a tech enthusiast and Computer Science Engineer passionate about
              implement interactive, scalable applications as a Software Development Engineer.. With
              a strong foundation in Frontend and backend development, I blend creativity and logic
              to craft impactful digital solutions that connect users and technology.
            </div>
            <div className=" w-fit mx-auto mt-3">
              <div className="  ">
                <h1 ref={countRef} className="lg:text-9xl text-7xl font-black font-stretch-50%">0</h1>
                <p className="text-center text-2xl">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JustAbout;
