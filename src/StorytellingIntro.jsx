import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Globe2, ShieldCheck, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StorytellingIntro() {
  const containerRef = useRef(null);
  const logoSceneRef = useRef(null);
  const historySceneRef = useRef(null);
  const exportSceneRef = useRef(null);
  const safetySceneRef = useRef(null);
  const [logoError, setLogoError] = React.useState(false);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600%", // 6 screens of scrolling for the story
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // SCENE 1: Logo & Branding (0-15%)
      tl.to(logoSceneRef.current, { opacity: 1, duration: 2 })
        .to(logoSceneRef.current, { scale: 1.1, duration: 4 })
        .to(logoSceneRef.current, { opacity: 0, y: -50, filter: "blur(10px)", duration: 2 });

      // SCENE 2: History & About (15-45%)
      tl.fromTo(historySceneRef.current, 
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 3, ease: "power2.out" }
        )
        .to({}, { duration: 6 }) // sustain reading time
        .to(historySceneRef.current, { opacity: 0, y: -50, scale: 1.05, duration: 3, ease: "power2.in" });

      // SCENE 3: Export & Growth (45-70%)
      tl.fromTo(exportSceneRef.current,
          { opacity: 0, scale: 0.8, rotationX: 15 },
          { opacity: 1, scale: 1, rotationX: 0, duration: 3, ease: "power2.out" }
        )
        .to({}, { duration: 6 }) // sustain reading time
        .to(exportSceneRef.current, { opacity: 0, y: -50, filter: "blur(15px)", duration: 3, ease: "power2.in" });

      // SCENE 4: Safety Culture (70-100%)
      tl.fromTo(safetySceneRef.current,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 3, ease: "power2.out" }
        )
        .to({}, { duration: 6 }) // sustain
        .to(safetySceneRef.current, { opacity: 0, duration: 3 });

    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="storytelling-wrapper">
      <section 
        ref={containerRef} 
        className="relative h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center font-secondary font-medium z-[200]"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#861719]/40 via-black to-black"></div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* SCENE 1: Logo & Branding */}
        <div ref={logoSceneRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-20 px-6">
          <div className="w-32 h-32 md:w-48 md:h-48 mb-6 flex items-center justify-center">
            {!logoError ? (
              <img src="/logo.png" alt="Standard Gas Shield" className="w-full h-full object-contain" onError={() => setLogoError(true)} />
            ) : (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#E63630] to-[#861719] flex items-center justify-center shadow-[0_0_60px_rgba(230,54,48,0.4)] border border-[#E63630]/30">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary italic font-medium tracking-tight mb-4 text-center">
            STANDARD <span className="text-[#E63630]">GAS SHIELD</span>
          </h1>
          <p className="text-white/70 text-lg md:text-2xl tracking-[0.2em] font-medium text-center max-w-2xl">
            Engineered for Safety. Built for the World.
          </p>
        </div>

        {/* SCENE 2: History & Legacy */}
        <div ref={historySceneRef} className="absolute inset-0 flex items-center justify-center opacity-0 z-30 px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-[#E63630] font-bold tracking-widest uppercase text-sm md:text-base border-l-4 border-[#E63630] pl-4">Our Legacy</h2>
              <h3 className="text-3xl md:text-5xl font-primary italic font-medium leading-tight text-white">
                Service of the nation,<br />Since 1967.
              </h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
                Founded by <strong className="text-white font-semibold">Shri Indrajeet Bhutani</strong>, Standard Engineers pioneered in developing and manufacturing Valve Guards/Caps and other Cylinder handling equipment and accessories.
              </p>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
                Today, we stand as INDIA'S leading supplier under the visionary leadership of Mr. Rajan Bhutani and Mr. Devanshu Bhutani.
              </p>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative p-6 border-l-8 border-b-8 border-[#E63630] max-w-md w-full aspect-square md:aspect-auto md:h-[500px] flex flex-col justify-end overflow-hidden bg-black/50 backdrop-blur-sm rounded-tr-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 mix-blend-luminosity"></div>
                
                <div className="relative z-20 pb-4 pr-4">
                  <h4 className="text-3xl font-primary italic font-medium text-white mb-2 tracking-tight">SHRI I.G BHUTANI</h4>
                  <p className="text-white/80 font-medium tracking-wide">Pioneering standard engineering since 1967.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCENE 3: Export & Global Reach */}
        <div ref={exportSceneRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-40 px-6 text-center">
          <Globe2 className="w-24 h-24 md:w-32 md:h-32 text-white/90 mb-8 opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" strokeWidth={1} />
          <h2 className="text-[#E63630] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6">Global Presence</h2>
          <h3 className="text-4xl md:text-6xl font-primary italic font-medium leading-tight text-white mb-8 max-w-4xl">
            Exporting to the South Asian Region. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2E2E2] via-[#A0A0A0] to-[#E2E2E2]">Ready for the World.</span>
          </h3>
          <p className="text-white/70 text-xl md:text-2xl font-medium max-w-3xl leading-relaxed">
            Our experience has spanned decades, moving operations forward. We have established our footprint internationally and are continuously expanding our horizons.
          </p>
        </div>

        {/* SCENE 4: Safety & Connection */}
        <div ref={safetySceneRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-50 px-6 bg-[#861719]/10 backdrop-blur-sm">
          <ShieldCheck className="w-24 h-24 md:w-32 md:h-32 text-[#E63630] mb-8" strokeWidth={1.5} />
          <h3 className="text-5xl md:text-7xl font-primary italic font-medium text-white mb-8 text-center leading-tight">
            Safety is in our <span className="text-[#E63630]">Culture.</span>
          </h3>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-4xl text-center leading-relaxed mb-12">
            It's in everything we do. We strive to connect deeply with our customers, ensuring data and operations are accessible, secure, and transparent. We're just a call or a Google Meet away.
          </p>
          <button className="bg-[#E63630] hover:bg-[#861719] text-white px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all shadow-[0_0_30px_rgba(230,54,48,0.4)] hover:shadow-[0_0_50px_rgba(134,23,25,0.6)] hover:-translate-y-1 border border-[#E63630]/50 hover:border-[#861719]/50">
            Connect With Us
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-10 pointer-events-none">
          <span className="text-xs uppercase tracking-widest text-[#E2E2E2]">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#E2E2E2]" />
        </div>

      </section>
    </div>
  );
}
