import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ColorBlock = React.forwardRef(({ name, hex, bgClass, textClass, borderClass = "" }, ref) => {
  return (
    <div 
      ref={ref} 
      className={`group relative flex-1 p-6 md:p-8 rounded-2xl flex flex-col justify-end overflow-hidden ${bgClass} ${borderClass} opacity-0 will-change-transform shadow-xl`}
      style={{
        transformOrigin: "center"
      }}
    >
      <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-500 z-10 rounded-2xl"></div>
      <div className="relative z-20 pointer-events-none">
        <h3 className={`${textClass} text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1`}>{name}</h3>
        <p className={`${textClass} text-xs md:text-sm lg:text-base opacity-90 font-mono tracking-wider font-semibold`}>{hex}</p>
      </div>
    </div>
  );
});

export default function BrandColorsSection() {
  const containerRef = useRef(null);
  const introTextRef = useRef(null);
  const gridRef = useRef(null);
  const blocksRef = useRef([]);
  const bgOverlayRef = useRef(null);

  useEffect(() => {
    // Basic setup check
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%", // Longer scroll for cinematic feel
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // 1. Intro sequence
      tl.fromTo(introTextRef.current, 
        { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 },
        { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 10, ease: "power2.out" }
      )
      .to(containerRef.current, { backgroundColor: "#080808", duration: 10 }, "<")
      .to(introTextRef.current, { opacity: 0, y: -50, filter: "blur(10px)", scale: 1.05, duration: 10, ease: "power2.in" })
      
      // 2. Grid Reveal
      .to(gridRef.current, { opacity: 1, duration: 5 })
      
      const blocks = blocksRef.current;
      
      // Stagger block entrance
      tl.fromTo(blocks, 
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 8, stagger: 2, ease: "power3.out" },
        "-=5"
      );

      // 3. Focus storytelling sequence
      const colors = [
        { focusBg: "rgba(230, 54, 48, 0.12)", shadow: "0 20px 40px rgba(230, 54, 48, 0.3)" },
        { focusBg: "rgba(134, 23, 25, 0.2)", shadow: "0 20px 40px rgba(134, 23, 25, 0.5)" },
        { focusBg: "rgba(255, 255, 255, 0.08)", shadow: "0 20px 40px rgba(255, 255, 255, 0.2)" },
        { focusBg: "rgba(163, 163, 163, 0.12)", shadow: "0 20px 40px rgba(163, 163, 163, 0.3)" },
        { focusBg: "rgba(0, 0, 0, 0.9)", shadow: "0 20px 40px rgba(255, 255, 255, 0.15)" }
      ];

      blocks.forEach((block, i) => {
        const others = blocks.filter((_, idx) => idx !== i);
        
        // Block Highlight
        tl.to(block, { scale: 1.08, boxShadow: colors[i].shadow, zIndex: 20, duration: 6, ease: "power2.out" })
          .to(others, { opacity: 0.25, scale: 0.95, duration: 6, ease: "power2.out" }, "<")
          .to(bgOverlayRef.current, { backgroundColor: colors[i].focusBg, opacity: 1, duration: 6 }, "<")
          
          // Sustain
          .to({}, { duration: 4 })
          
          // Undo Highlight
          .to(block, { scale: 1, boxShadow: "none", zIndex: 1, duration: 5, ease: "power2.inOut" })
          .to(others, { opacity: 1, scale: 1, duration: 5, ease: "power2.inOut" }, "<")
          .to(bgOverlayRef.current, { opacity: 0, duration: 5 }, "<");
      });

      // 4. Exit Transport
      tl.to(bgOverlayRef.current, { opacity: 0, duration: 10 })
        .to(blocks, { opacity: 0, scale: 0.85, y: -40, stagger: 1, duration: 10, ease: "power2.in" }, "<")
        .to(containerRef.current, { backgroundColor: "#000000", duration: 10 }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Make sure refs array is fresh per render
  blocksRef.current = [];

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center font-sans z-[60]"
    >
      {/* Background overlay for color focus */}
      <div 
        ref={bgOverlayRef} 
        className="absolute inset-0 bg-transparent opacity-0 pointer-events-none transition-none mix-blend-screen"
      />
      
      {/* Subtle Grain Overlay for cinematic texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Intro Scene */}
      <div ref={introTextRef} className="absolute flex flex-col items-center justify-center z-20 pointer-events-none opacity-0">
        <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-4 text-center leading-tight">
          Brand Colors
        </h1>
        <p className="text-gray-400 text-sm md:text-xl tracking-[0.3em] uppercase font-semibold">
          Discover Our Identity
        </p>
      </div>

      {/* Grid Reveal Scene */}
      <div 
        ref={gridRef} 
        className="absolute w-full px-4 md:px-8 lg:px-16 z-30 opacity-0 pointer-events-auto max-w-7xl mx-auto h-[85vh] md:h-[80vh] flex flex-col justify-center"
      >
        <div className="flex flex-col h-full gap-4 md:gap-6">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1">
            <ColorBlock 
              ref={el => { if (el) blocksRef.current[0] = el; }}
              name="Primary Red" 
              hex="#E63630" 
              bgClass="bg-[#E63630]" 
              textClass="text-white" 
            />
            <ColorBlock 
              ref={el => { if (el) blocksRef.current[1] = el; }}
              name="Deep Maroon" 
              hex="#861719" 
              bgClass="bg-[#861719]" 
              textClass="text-white" 
            />
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1">
            <ColorBlock 
              ref={el => { if (el) blocksRef.current[2] = el; }}
              name="White" 
              hex="#FFFFFF" 
              bgClass="bg-white" 
              textClass="text-black" 
              borderClass="border border-gray-100"
            />
            <ColorBlock 
              ref={el => { if (el) blocksRef.current[3] = el; }}
              name="Silver" 
              hex="Gradient" 
              bgClass="bg-gradient-to-br from-[#E2E2E2] via-[#A0A0A0] to-[#E2E2E2]" 
              textClass="text-black" 
            />
            <ColorBlock 
              ref={el => { if (el) blocksRef.current[4] = el; }}
              name="Black" 
              hex="#000000" 
              bgClass="bg-black" 
              textClass="text-white" 
              borderClass="border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
