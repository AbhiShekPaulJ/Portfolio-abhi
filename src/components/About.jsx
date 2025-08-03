import React, { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

const About = () => {
  const skills = [
    "Node JS",
    "SQL",
    "Java",
    "JavaScript",
    "Tailwind",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
  ];
  const chipsRef = useRef([]);
  useEffect(() => {
    gsap.to(chipsRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1, // infinite
      ease: "linear", // smooth constant speed
    });
  }, []);
  return (
    <>
      <div className=" w-[100%] bg-zinc-950  text-[#fffce1]  mx-auto">
    <Navbar/>
        <h1 className="text-5xl text-[#ffb703] text-center font-bold">About me</h1>
        <div className="border mx-10 py-2 px-4 mt-3 text-center text-2xl leading-7 tracking-normal font-thin border-zinc-800 rounded-xl">
          I’m a Computer Science graduate with a passion for building creative and functional web
          applications. I enjoy working with modern technologies to turn ideas into clean,
          responsive websites. I’m constantly learning and improving my skills to become a better
          developer every day.
        </div>
        <div className="mx-10 text-left mt-3 border-zinc-800  flex gap-3">
          <div className="w-[40%] rounded-xl border-1 border-zinc-800">
            <h2 className="text-3xl p-2 text-[#ffb703]">Training :</h2>
            <p className="  p-2 text-2xl leading-7 tracking-normal text-center font-thin">
              I enrolled in JSpiders during my graduation to pursue a Java Full Stack Development
              course. Through this program, I’ve gained skills in SQL, HTML, CSS, JavaScript (ES6),
              ReactJS, Node.js, and MongoDB. I’m currently training in Java backend development,
              building hands-on projects.
            </p>
          </div>
          <div className="w-[20%] flex items-center justify-center rounded-xl border-1 border-zinc-800">
            <img
              className="max-w-full h-auto"
              src="https://anuragsinghbam.com/images/coder.svg"
              alt="Coder Illustration"
            />
          </div>
          <div className=" w-[40%] px-3">
            <div className=" rounded-xl border-1 h-[100%] pb-4 overflow-hidden border-zinc-800 text-center flex flex-wrap gap-2 justify-center items-center">
            <h1 className="text-3xl p-2 w-full text-[#ffb703]">Current skills :</h1>
              {skills.map((ele, i) => {
                return (
                  <Fragment key={i}>
                    <div className="relative inline-block overflow-hidden rounded-t-xl p-[1px]">
                      <div
                        ref={(el) => (chipsRef.current[i] = el)}
                        className="absolute inset-0 -left-15 -top-20  h-50 w-50 z-0"
                        style={{
                          background:
                            "conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4) ",
                        }}
                      ></div>
                      <div className="relative z-10 bg-zinc-950   w-30 h-8 rounded-t-xl flex justify-center items-center text-sm">
                        <p className="text-[18px]">{ele}</p>
                      </div>
                    </div>
                  </Fragment>
                //   <Fragment key={i}>
                //       <div className="z-10 bg-zinc-900 border-3 border-[#ffb703] w-30 h-8 rounded-t-2xl flex justify-center items-center">
                //         <p className="text-[18px]">{ele}</p>
                //     </div>
                //   </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex mx-10 gap-3 mt-3">
          <div className=" w-[60%] mx-auto rounded-xl border-1 border-zinc-800">
            <h2 className="text-3xl p-2 text-[#ffb703]">Education :</h2>
            <div className="flex items-center ">
              <img className="h-20 " src="/grad.png" alt="" />
              <div className=" w-full text-center">
                <h3 className="text-2xl">Malla Reddy College of Engineering</h3>
                <p className="text font-thin">B-tech in Computer Science and Engineering</p>
                <p className="text-[16px] text-[#ffb703] font-light">Graduated in 2024</p>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <img className="h-20 w-30 scale-80" src="/inter.png" alt="" />
              <div className=" w-full text-center">
                <h3 className="text-2xl">Sri Chaitanya Junior College</h3>
                <p className="text font-thin">MPC</p>
                <p className="text-[16px] text-[#ffb703] font-light">Graduated in 2020</p>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <img className="h-20 w-37" src="/sch.png" alt="" />
              <div className=" w-full text-center">
                <h3 className="text-2xl">St. Anthony's High School</h3>
                <p className="text-[16px] text-[#ffb703] font-light">Graduated in 2018</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About;
