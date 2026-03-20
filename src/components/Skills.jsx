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

const images = [js, java, react, node, mongo, sql, html, css, gsapimg];

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
            className="overflow-hidden relative rounded-2xl h-[150px] md:h-full w-[150px] md:w-[220px] mx-auto z-10"
            style={{ boxShadow: "0 0 25px 5px rgba(255, 215, 0, 0.4)" }}
          >
            <div ref={scrollRef} className="space-y-4 will-change-transform">
              <div className="image-set">
                {images.map((img, idx) => (
                  <img key={"img1-"+idx} className="h-[100px] w-[100px] mx-auto rounded-2xl" src={img} alt="" />
                ))}
              </div>
              <div className="image-set">
                {images.map((img, idx) => (
                  <img key={"img2-"+idx} className="h-[100px] w-[100px] mx-auto rounded-2xl" src={img} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full lg:w-[40%] mx-auto mt-10 lg:mt-0">
          <div className="relative p-1 rounded-lg overflow-hidden">
            <div className="absolute cursor-pointer inset-0 -left-[200px] -top-[220px] w-[500px] h-[500px] animate-spin bg-[conic-gradient(from_90deg,_#4285F4_0%,_#EA4335_25%,_#FBBC05_50%,_#34A853_75%,_#4285F4_100%)]"></div>

            <a href={`${import.meta.env.BASE_URL}/Abhishek_Resume.pdf`} download>
              <button
                useEffect(() => {
                  const container = scrollRef.current;
                  if (!container) return;

                  // Get the height of one set of images
                  const imageSet = container.querySelector('.image-set');
                  if (!imageSet) return;
                  const setHeight = imageSet.offsetHeight;

                  // Animate the container to scroll up by one set's height
                  const tween = gsap.to(container, {
                    y: -setHeight,
                    ease: "linear",
                    duration: 10,
                    repeat: -1,
                    modifiers: {
                      y: gsap.utils.unitize(y => parseFloat(y) % -setHeight)
                    }
                  });

                  // Pause on hover
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
