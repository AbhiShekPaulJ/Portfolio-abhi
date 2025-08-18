import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import java from "/java.png";
import js from "/js.png";
import react from "/react.png";
import node from "/node.png";
import mongo from "/mongo.png";
import sql from "/sql.png";
import html from "/html.png";
import css from "/css.png";
import gsapimg from "/gsap.png";

const Skills = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const tween = gsap.to(container, {
      y: "-100%",
      ease: "linear",
      duration: 15,
      repeat: -1,
    });

    const pause = () => tween.pause();
    const play = () => tween.resume();

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);

    return () => {
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
      tween.kill();
    };
  }, []);

  return (
    <>
      <div className="flex h-50 mt-15 w-[70%] mx-auto flex-col md:flex-row justify-center items-center ">
        <div className="lg:w-[60%] h-full ">
          <div
            className="overflow-hidden relative  rounded-2xl h-[150px] md:h-full w-[150px] md:w-[220px] mx-auto  z-10"
            style={{ boxShadow: "0 0 25px 5px rgba(255, 215, 0, 0.4)" }}
          >
            
            <div ref={scrollRef} className="space-y-4">
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={js} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={java} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={react} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={node} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={mongo} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={sql} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={html} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={css} alt="" />
              <img className="h-[100px] w-[100px] mx-auto rounded-2xl " src={gsapimg} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center  items-center h-full lg:w-[40%] mx-auto mt-10 lg:mt-0">
          <div className="relative p-1 rounded-lg overflow-hidden">
          <div className="absolute cursor-pointer inset-0 -left-[200px] -top-[220px] w-[500px] h-[500px] animate-spin bg-[conic-gradient(from_90deg,_#4285F4_0%,_#EA4335_25%,_#FBBC05_50%,_#34A853_75%,_#4285F4_100%)]"></div>       <a href={`${import.meta.env.BASE_URL}/Abhishek_Resume.pdf`} download>
            <button className="relative cursor-pointer z-10 bg-zinc-900 h-10 w-30 rounded-lg flex items-center justify-center border-2 border-transparent">
              Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
