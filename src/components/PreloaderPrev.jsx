import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PreloaderPrev = ({ onComplete }) => {
  const preloaderPrevRef = useRef(null);
  const loadingRef = useRef(null);
  const almostRef = useRef(null);
  const justcountRef = useRef(null);
  const overlayPrevRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out the preloader
        gsap.to(preloaderPrevRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      },
    });

    // Counter animation
    let counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          if (justcountRef.current) {
            justcountRef.current.textContent = Math.floor(counter.value);
          }
        },
      },
      0
    );

    // Text animations
    tl.fromTo(
      loadingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0.3
    );

    tl.fromTo(
      almostRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      0.8
    );

    // Scale animation for the entire container
    tl.fromTo(
      loadingRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      },
      2
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
  ref={preloaderPrevRef}
  className="fixed inset-0 z-[1000] flex items-center   max-w-screen justify-center backdrop-blur-xl text-white"
>
      {/* Background overlay */}
      <div
        ref={overlayPrevRef}
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"
      />
      <div className="relative z-10 text-center text-[#fffce1]    max-w-4xl mx-auto px-6">
        <div className="overflow-hidden mb-6  ">
          <h1
            ref={loadingRef}
            className="text-3xl md:text-4xl p-2 lg:text-7xl  tracking-tight leading-none transform"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Loading
          </h1>
        </div>
        <div className="overflow-hidden mb-8  ">
          <p
            ref={almostRef}
            className="text-xl md:text-2xl ml-2 font-light tracking-wide transform"
          >
            Almost there..
          </p>
        </div>

        <div className="text-6xl md:text-7xl ml-3 font-light  ">
          <span ref={justcountRef}>0</span>
          <span className="text-3xl md:text-4xl">%</span>
        </div>
      </div>

      
    </div>
  );
};

export default PreloaderPrev;
