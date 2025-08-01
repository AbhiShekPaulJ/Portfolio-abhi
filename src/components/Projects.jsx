import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className=" w-[90%] mx-auto py-20">
        <h1 className="lg:text-8xl text-8xl text-[#fffce1] text-left font-bold lg:w-[90%] mx-auto font-stretch-60% mb-10">
          {" "}
          PROJECTS
        </h1>
        <p className="text-center mt-3 text-2xl font-thin">
          Here are some of my recent work's that showcase my full stack development Skills
        </p>
        <div className="flex flex-col">
          {/* --------------> Project-1 */}

          <div className="flex  lg:mx-10 relative mt-10 md:h-80">
            <a href="https://url-shortener-frontend-csnq.onrender.com/" target="_blank">
              <div className="border w-5 h-5 hover:scale-120 transition-transform duration-150 ease-in-out bg-[#ffb703] z-10 absolute rounded-full inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </a>

            <div className="border-r-1 w-1/2 h-full absolute flex justify-end">
              <div className="border-1 absolute w-1/2 right-0 top-1/2"></div>
            </div>
            <div className="w-1/2 z-10 flex justify-center items-center relative">
              <img
                className="mx-auto lg:hover:scale-110 duration-300 ease-in-out border-none w-[50%]"
                src="/url.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center lg:pl-30 pl-10  pr-5">
              <h4 className="text-left lg:text-4xl md:text-3xl font-stretch-extra-condensed">
                Short URL
              </h4>
              <p className="font-light font-stretch-condensed lg:text-[18px] md:text-[16px] leading-6 mt-2">
                A full-stack URL shortener built with React, Node.js, Express, and MongoDB. Features
                include JWT-based authentication, session management, protected routes, and
                real-time link analytics for tracking usage and performance.
              </p>
              <div>
                <a href="https://github.com/AbhiShekPaulJ/url-shortener-backend">
                <button className="bg-[#fffce1] cursor-pointer text-zinc-950 mt-3 lg:px-4 md:px-2 font-stretch-condensed lg:text-2xl md:text-[18px] flex justify-center items-center gap-2 rounded group transition-transform duration-100 hover:scale-105 ">
                  GitHub{" "}
                  <FaArrowRight className="text-[18px] group-hover:rotate-45 transition-transform duration-100"></FaArrowRight>{" "}
                </button>
                </a>
                {/* https://github.com/AbhiShekPaulJ/url-shortener-backend */}
              </div>
            </div>
          </div>

          {/* ---------------> Project-2 */}

          <div className="flex flex-row-reverse lg:mx-10 relative md:h-80">
            <a href="https://url-shortener-frontend-csnq.onrender.com/" target="_blank">
              <div className="border w-5 h-5 hover:scale-120 transition-transform duration-150 ease-in-out bg-[#ffb703] z-10 absolute rounded-full inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </a>
            <div className="w-1/2 z-5 flex justify-center relative items-center">
              <div className="absolute border-1 w-1/2 left-0 "></div> {" "}
              <video
                className="mx-auto lg:hover:scale-140 scale-130 duration-300 z-10 ease-in-out border-none w-[50%]"
                src="/pooja_project.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="w-1/2 flex border-r-1 px-6 lg:pl-20 flex-col justify-center ">
              <h4 className="text-left lg:text-4xl md:text-3xl font-stretch-extra-condensed">
                Pooja Booking
              </h4>
              <p className="font-light font-stretch-condensed lg:text-[18px] md:text-[16px] leading-6 mt-2">
                A priest booking platform built with React, offering seamless scheduling,
                language-based priest selection, SMS notifications, and real-time availability for
                poojas, homams, and rituals.
              </p>
              <div>
                <button className="bg-[#fffce1] cursor-no-drop text-zinc-950 mt-3 lg:px-4 md:px-2 font-stretch-condensed lg:text-2xl md:text-[18px] flex justify-center items-center gap-2 rounded group transition-transform duration-100 hover:scale-105 ">
                  GitHub{" "}
                  <FaArrowRight className="text-[18px] group-hover:rotate-45 transition-transform duration-100"></FaArrowRight>{" "}
                </button>
                <p className=" w-fit">Currently private</p>
              </div>
            </div>
          </div>
        </div>

        {/*-------------> project-3 */}

        <div className="flex  lg:mx-10 relative lg:mt-0 md:h-80">
          <a href="https://url-shortener-frontend-csnq.onrender.com/" target="_blank">
            <div className="border w-5 h-5 hover:scale-120 transition-transform duration-150 ease-in-out bg-[#ffb703] z-10 absolute rounded-full inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </a>

          <div className="border-r-1 w-1/2 h-full absolute flex justify-end">
            <div className="border-1 absolute w-1/2 right-0 top-1/2"></div>
          </div>
          <div className="w-1/2 z-10 flex justify-center items-center relative">
            <video
              className="mx-auto lg:hover:scale-140 scale-130 duration-300 z-10 ease-in-out border-none w-[50%]"
              src="/ecommers_project.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center lg:pl-30 pl-10  pr-5">
            <h4 className="text-left lg:text-4xl md:text-3xl font-stretch-extra-condensed">
              Short URL
            </h4>
            <p className="font-light font-stretch-condensed lg:text-[18px] md:text-[16px] leading-6 mt-2">
              A dynamic sneaker e-commerce platform built with real-time search, interactive cart
              system, and a dedicated admin panel to manage products, inventory, and orders
              seamlessly.
            </p>
            <a href="https://github.com/AbhiShekPaulJ/Sneaker-Peak">
              <div>
                <button className="bg-[#fffce1] cursor-pointer text-zinc-950 mt-3 lg:px-4 md:px-2 font-stretch-condensed lg:text-2xl md:text-[18px] flex justify-center items-center gap-2 rounded group transition-transform duration-100 hover:scale-105 ">
                  GitHub{" "}
                  <FaArrowRight className="text-[18px] group-hover:rotate-45 transition-transform duration-100"></FaArrowRight>{" "}
                </button>
                
              </div>
            </a>
            {/* https://github.com/AbhiShekPaulJ/Sneaker-Peak */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
