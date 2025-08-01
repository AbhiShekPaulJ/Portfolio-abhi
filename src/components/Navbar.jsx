import React, { Fragment, useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";
import gsap from "gsap";

const Navbar = () => {
  const name = "Portfolio";
  const projectRef = useRef(null);
  const [charArray, setCharArray] = useState(name.split(""));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.to(projectRef.current, {
      x: 10,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    const index = Math.floor(Math.random() * name.length);
    const updatedChars = name.split("").map((char, i) => (i === index ? <FaCode key={i} /> : char));
    setCharArray(updatedChars);
  };

  const handleMouseLeave = () => {
    setCharArray(name.split(""));
  };

  return (
    <>
      <nav
        className={`sticky top-0 text-[#fffce1] z-50 backdrop-blur-xl w-full flex justify-between font-poppins transition-all duration-500 px-6 lg:px-20 items-center  ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-3xl flex gap-1 hover:text-[#ffb703] border-[#ffb703] font-extrabold px-2 py-1 font-sans"
        >
          {/* {charArray.map((ele, i) => (
            <Fragment key={i}>
              <p className="transition-all duration-300 ease-in-out">
                {typeof ele === "string" ? ele : <FaCode />}
              </p>
            </Fragment>
          ))} */}
          <h2 className="font-poppins font-stretch-40% text-3xl"><a href="#">PORTFOLIO</a></h2>
        </div>
        <div className=" lg:w-[30%] md:w-[60%] hidden md:block ">
          <ul className="flex lg:gap-20 md:gap-10 items-center text-[18px justify-between">
            <li className="relative px-0  hover:text-[#ffb703] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ffb703] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
              <a href="#about">About</a>
            </li>
{/* 
            <li className="relative px-0 hover:text-[#ffb703] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ffb703] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
              <a href="#skills">Skills</a>
            </li> */}

            <li
              ref={projectRef}
              className="relative font-bold  text-red-500 border-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-400 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              <a href="#projects">Projects</a>
            </li>

            <li className="relative px-0 hover:text-[#ffb703] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ffb703] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
              <a href="#contact">Contact</a>
            </li>
            {/* <li className="hover:border-b-3 border-[#ffb703] hover:text-[#ffb703]">Skills</li>
          <li className="hover:border-b-3 border-[#ffb703] hover:text-[#ffb703]">Projects</li>
          <li className="hover:border-b-3 border-[#ffb703] hover:text-[#ffb703]">Contact</li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
