import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const countRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out the preloader
        gsap.to(preloaderRef.current, {
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
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(counter.value);
          }
        },
      },
      0
    );

    // Text animations
    tl.fromTo(
      nameRef.current,
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
      subtitleRef.current,
      {
        y: 50,
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
      nameRef.current,
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
      ref={preloaderRef}
      className="fixed inset-0 z-90 flex items-center backdrop-blur-2xl justify-center bg-background overflow-hidden"
    >
      {/* Background overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"
      />
      <div className="relative z-10 text-center text-[#fffce1] max-w-4xl mx-auto px-6">
        <div className="overflow-hidden mb-6">
          <h1
            ref={nameRef}
            className="text-2xl md:text-4xl lg:text-7xl  tracking-tight leading-none text-primary transform"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            AbhishekPaul
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl  text-muted-foreground font-light tracking-wide transform"
          >
            Computer Science Engineer • FullStack Developer
          </p>
        </div>

        <div className="text-6xl md:text-7xl font-light text-primary/60 tracking-wider">
          <span ref={countRef}>0</span>
          <span className="text-3xl md:text-4xl ml-1">%</span>
        </div>
      </div>

      
    </div>
  );
};

export default Preloader;
