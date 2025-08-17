import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import JustAbout from "./JustAbout";
import Contact from "./Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowUp } from "react-icons/io";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollSmoother);

const Home = () => {
  const scrambleRef1 = useRef(null);
  const scrambleRef2 = useRef(null);
  const letterRef = useRef(null);
  const pageRef = useRef(null);
  const [showScrollCircle, setShowScrollCircle] = useState(false);

  useEffect(() => {
    const progressCircle = document.querySelector(".progress-circle");

    const updateProgress = () => {
      const progressCircle = document.querySelector(".progress-circle"); // move this inside
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      const offset = 163.36 * (1 - scrollPercent);
      if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset.toString();
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && pageRef.current) {
      const smoother = ScrollSmoother.create({
        wrapper: pageRef.current,
        content: pageRef.current.querySelector(".smooth"),
        smooth: 1.2, 
        effects: true,
      });

      const links = document.querySelectorAll("a[href^='#']");
      const handleClick = (e, anchor) => {
        e.preventDefault();
        let target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          smoother.scrollTo(target, { duration: 1, offset: 0 });
        }
      };
      links.forEach(anchor => {
        anchor.addEventListener("click", (e) => handleClick(e, anchor));
      });

      return () => {
        smoother.kill();
        links.forEach(anchor => {
          anchor.replaceWith(anchor.cloneNode(true)); // remove listeners
        });
      };
    }
  }, []);

  useEffect(() => {
    const el = letterRef.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(el, {
      rotateY: 720,
      duration: 1.5,
      // ease: "power2.inOut",
    });

    gsap.to(scrambleRef1.current, {
      scrambleText: {
        text: "Full Stack Developer |",
        chars: "upperAndLowerCase",
        speed: 0.4,
      },
      duration: 2,
      repeat: -1,
      repeatDelay: 3,
    });

    gsap.to(scrambleRef2.current, {
      scrambleText: {
        text: "Software Developer",
        chars: "upperAndLowerCase",
        speed: 0.3,
      },
      duration: 2,
      repeat: -1,
      repeatDelay: 3,
    });
    gsap.from("#hello h1", {
      y: 20,
      // opacity: 0,
      duration: 2,
      ease: "power2.out",
      stagger: 0.5, // ✅ Apply here
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: 4,
      },
    });
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);
      setShowScrollCircle(window.scrollY > 100); // 👈 show circle after 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="overflow-x-hidden relative selection:bg-[#fffce1] selection:text-zinc-950">
      <div ref={pageRef} className="bg-zinc-950 min-h-[calc(100vh-40px)] text-[#fffce1] relative">
        <Navbar pageRef={pageRef} />
        <div className="smooth">
        <div className=" flex relative justify-center w-[80%] md:pt-40 pt-30 mx-auto items-center">
          <div className="flex hero justify-between items-center flex-col lg:flex-row gap-5">
            <div className=" text-center flex flex-col justify-center">
              <h1 className="md:text-4xl text-3xl  mb-2 ">Hello there!</h1>
              <h1 className="md:text-7xl text-4xl font-bold bg-clip-text  mb-2">
                I'm Abhishek{" "}
                <span
                  className="inline-block"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    backfaceVisibility: "hidden",
                    transformOrigin: "center",
                  }}
                  ref={letterRef}
                >
                  P
                </span>
                aul
              </h1>
              {/* <div className="flex">  */}
              <h1 className="lg:text-4xl lg:block hidden" ref={scrambleRef1}></h1>
              <h1 className="lg:text-4xl text-3xl w-fit mx-auto" ref={scrambleRef2}></h1>
              {/* </div> */}
            </div>
            <div className="  lg:w-[40%] w-[70%] md:w-[60%] rounded-2xl lg:rotate-6 rotate-0 border-4 hover:rotate-0 duration-500 overflow-hidden">
              <img
                className=""
                src="https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlJTIwZHVtbXl8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mb-16  ">
          <Skills />
        </div>
        <hr className="w-[90%] mx-auto border-zinc-700" />
        <div id="about" className="mb-16  ">
          <JustAbout />
        </div>
        {/* <About /> */}
        <hr className="w-[90%] mx-auto border-zinc-700" />
        <div id="projects" className="mb-16 panel ">
          <Projects />
        </div>
        <hr className="w-[90%] mx-auto border-zinc-700" />
        <div id="contact" className="py-20 panel ">
          <Contact />
        </div>
        <hr className="w-[90%] mx-auto border-zinc-700" />
        
        </div>
        {showScrollCircle && (
          <a
            href="#"
            className="fixed bottom-4 left-4 z-50 w-[60px] h-[60px] transition-opacity duration-300 opacity-100"
          >
            <svg className="rotate-[-90deg]" width="60" height="60">
              <circle cx="30" cy="30" r="26" stroke="#333" strokeWidth="1" fill="none" />
              <circle
                cx="30"
                cy="30"
                r="26"
                stroke="#fffce1"
                strokeWidth="2"
                fill="none"
                strokeDasharray="163.36"
                strokeDashoffset="163.36"
                strokeLinecap="round"
                className="progress-circle"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <IoIosArrowUp className="text-[#fffce1] text-xl" />
            </div>
          </a>
        )}
      </div>
      </main>
    </>
  );
};

export default Home;
