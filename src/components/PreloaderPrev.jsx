import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef();
  const svgPathRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });
  
    // Initial setup
    gsap.set(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    });
  
    gsap.set(".preloader-heading span", { y: 0, opacity: 1 });
  
    tl.to(".preloader-heading span", {
      delay: 0.5,
      y: -100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    })
      .to(containerRef.current, {
        duration: 1.2,
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 75% 95%, 50% 90%, 25% 95%, 0 85%)",
        // clipPath: "rhombus(M 0 0 L 0 53% Q 52% 100%, 100% 54% L 100% 0 Z)",
        ease: "linear"
      })
      .to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "linear"
      });
  
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <>
      <div
        ref={containerRef}
        className="preloader fixed inset-0 bg-zinc-950 text-white z-50 flex items-center justify-center"
      >
        <div className="preloader-heading text-5xl font-bold flex gap-2">
          {"WELCOME".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Preloader;