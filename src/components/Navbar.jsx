import React, { Fragment, useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";
import gsap from "gsap";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const name = "Portfolio";
  const projectRef = useRef(null);
  const [charArray, setCharArray] = useState(name.split(""));
  const [scrolled, setScrolled] = useState(false);
  const openMenuRef = useRef(null);
  const closeMenuRef = useRef(null);
  const openMenu = () => {
    if (openMenuRef.current) {
      openMenuRef.current.classList.remove("translate-x-full");
      openMenuRef.current.classList.add("translate-x-0");
    }
  };
  
  // Function to close the menu (translateX to full)
  const closeMenu = () => {
    if (openMenuRef.current) {
      openMenuRef.current.classList.remove("translate-x-0");
      openMenuRef.current.classList.add("translate-x-full");
    }
  };
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
        className={`sticky top-0 text-[#fffce1] z-45 backdrop-blur-xl w-full flex justify-between font-poppins transition-all duration-500 px-6 lg:px-20 items-center  ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-3xl flex gap-1 hover:text-[#ffb703] border-[#ffb703] font-extrabold px-2 py-1 font-sans"
        >
          <h2 className="font-poppins font-stretch-40% text-3xl">
            <Link to="/"><a href="#">Abhi</a></Link>
          </h2>
        </div>
        <div className=" lg:w-[30%] md:w-[60%] hidden md:block ">
          <ul className="flex lg:gap-20 md:gap-10 items-center text-[18px justify-between">
            <li className="relative px-0  hover:text-[#ffb703] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ffb703] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            <Link to="/about">About</Link>
            </li>

            <li
              ref={projectRef}
              className="relative font-bold  text-red-500 border-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-400 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              <a href="#projects">Projects</a>
            </li>

            <li className="relative px-0 hover:text-[#ffb703] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ffb703] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
              <a href="#contact">Contact</a>
            </li>

          </ul>
        </div>
        <div className="text-3xl lg:hidden">
          <IoMenu onClick={openMenu} />

          <div
            ref={openMenuRef}
            className="absolute inset-0 p-3 translate-x-full duration-500 ease-in-out left-[50%] h-screen w-[50vw] bg-black z-50"
          >
            <div onClick={closeMenu} className=" flex justify-end cursor-pointer">
              <IoCloseCircleOutline />
            </div>
            <div className="mt-10 border-t border-zinc-800">
              <p className="text-[20px] mt-2">About</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
