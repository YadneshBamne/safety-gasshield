import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { generateNarration, createAudioURL, revokeAudioURL } from "@/utils/elevenlabsService";
import { Volume2, VolumeX, AlertCircle } from "lucide-react";

const NARRATION_TEXT = "Welcome to Standard Gas Shield. For over five decades, we have been engineering safety solutions that protect lives and power industries across the nation and beyond. Our story began in 1967, when Shri Indrajeet Bhutani founded Standard Engineers with a singular vision — to set the benchmark for cylinder safety equipment in India. Today, under the leadership of Mr. Rajan Bhutani and Mr. Devanshu Bhutani, we have grown into India's leading supplier, with over fifty-seven years of excellence and ten million units supplied. Our reach now extends far beyond India's borders. We export to the South Asian region and are rapidly expanding our footprint across the Middle East, Africa, and Southeast Asia. Safety is not just what we make — it is who we are. It is woven into every product, every process, and every partnership.";

const NARRATION_WORDS = NARRATION_TEXT.split(/\s+/);

const BACKGROUND_SETS = [
  [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',

  ],
  [
    'https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=2048x2048&w=is&k=20&c=Sf2cklcBi57MrDwgdj3p7Knd7inRede2qAAvzx3Q2qM=',

  ],
  [
    'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
];

const StorytellingIntro = () => {
  const [displayedWords, setDisplayedWords] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const [started, setStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [translateY, setTranslateY] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  
  const audioRef = useRef(null);
  const audioURLsRef = useRef({});
  const canvasRef = useRef(null);
  const layersRef = useRef([]);
  const textContainerRef = useRef(null);

  // --- Halide Parallax Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  // --- Audio & Transcription Logic ---
  const [wordTimings, setWordTimings] = useState([]);

  const handleNarration = useCallback(async () => {
    if (muted) return;
    setLoading(true);
    setAudioError(null);
    setDisplayedWords(0);
    
    try {
      const { audioBlob, alignment } = await generateNarration(NARRATION_TEXT, 'storytelling');
      const audioURL = createAudioURL(audioBlob);
      audioURLsRef.current['storytelling'] = audioURL;
      
      // Parse character alignments into precise word timestamps
      const words = [];
      let currentWord = "";
      let currentStart = null;
      let wordIndex = 0;
      
      if (alignment?.characters) {
        for (let i = 0; i < alignment.characters.length; i++) {
          const char = alignment.characters[i];
          if (char !== " " && currentStart === null) {
            currentStart = alignment.character_start_times_seconds[i];
          }
          if (char !== " ") {
            currentWord += char;
          }
          if ((char === " " || i === alignment.characters.length - 1) && currentStart !== null) {
            // Re-align with strictly matching NARRATION_WORDS index logic just in case API tokenization split differently
            words.push({
              index: wordIndex++,
              word: currentWord,
              start: currentStart,
              end: alignment.character_end_times_seconds[char === ' ' ? i - 1 : i] || currentStart + 0.1
            });
            currentWord = "";
            currentStart = null;
          }
        }
        setWordTimings(words);
      }

      const audio = new Audio(audioURL);
      audioRef.current = audio;
      
      setShowIntro(false); // Trigger fade out of intro and fade in of transcription
      
      audio.onplay = () => setSpeaking(true);
      
      audio.ontimeupdate = () => {
        if (words.length > 0) {
          const currentTime = audio.currentTime;
          // Find the active word based on exact timestamp
          // Using findLastIndex approach to keep word highlighted until next word starts
          let activeIdx = -1;
          for (let i = 0; i < words.length; i++) {
            if (currentTime >= words[i].start) {
              activeIdx = words[i].index;
            } else {
              break; // Optimization: since chronologically ordered, we can stop
            }
          }
          if (activeIdx !== -1) {
            setDisplayedWords(activeIdx);
          }
        } else if (audio.duration && !isNaN(audio.duration)) {
          // Fallback if alignment is missing
          const fallbackIdx = Math.floor((audio.currentTime / audio.duration) * NARRATION_WORDS.length);
          setDisplayedWords(Math.min(fallbackIdx, NARRATION_WORDS.length - 1));
        }
      };
      
      audio.onended = () => {
        setSpeaking(false);
        setTimeout(() => {
          setShowIntro(true); // Fade back to intro screen
          setTimeout(() => {
            setStarted(false);
            setDisplayedWords(0);
          }, 1000);
        }, 1000);
      };
      
      audio.onerror = () => {
        setSpeaking(false);
        setShowIntro(true);
        setStarted(false);
        setAudioError('Failed to play narration');
        setDisplayedWords(0);
      };
      
      // Delay play slightly so transition smoothly happens before speech
      setTimeout(async () => {
        try {
          await audio.play();
        } catch (e) {
          console.error('Audio play error', e);
        }
        setLoading(false);
      }, 1200);
    } catch (error) {
      console.error('Narration error:', error);
      setShowIntro(true);
      setStarted(false);
      setAudioError('Failed to generate narration');
      setLoading(false);
      setDisplayedWords(0);
    }
  }, [muted]);

  const toggleMute = useCallback((e) => {
    if (e) e.stopPropagation();
    
    if (audioRef.current) {
      if (speaking) {
        // Just pause it where it is
        audioRef.current.pause();
        setSpeaking(false);
      } else {
        // Resume from where it paused
        audioRef.current.play().then(() => {
          setSpeaking(true);
        }).catch(err => {
          console.error('Resume error:', err);
        });
      }
    } else {
      // First time
      if (!started) {
        setStarted(true);
        handleNarration();
      }
    }
  }, [speaking, started, handleNarration]);

  useEffect(() => {
    const handleGlobalToggle = () => toggleMute();
    window.addEventListener('toggle-audio', handleGlobalToggle);
    return () => window.removeEventListener('toggle-audio', handleGlobalToggle);
  }, [toggleMute]);

  useEffect(() => {
    // Dispatch state change so navbar knows
    window.dispatchEvent(new CustomEvent('audio-state-change', { detail: { isPlaying: speaking } }));
  }, [speaking]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      Object.values(audioURLsRef.current).forEach(url => {
        if (url) revokeAudioURL(url);
      });
    };
  }, []);

  useEffect(() => {
    if (speaking && displayedWords > 0) {
      const activeWordEl = document.getElementById(`word-${displayedWords}`);
      if (activeWordEl && textContainerRef.current) {
        const yOffset = activeWordEl.offsetTop + (activeWordEl.offsetHeight / 2);
        setTranslateY(yOffset);
      }
    } else {
      setTranslateY(0);
    }
  }, [displayedWords, speaking]);

  // --- Auto Carousel Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => prev + 1);
    }, 6000); // Smooth sliding carousel every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #060608;
          --silver: #e0e0e0;
          --accent: #E63630;
          --grain-opacity: 0.15;
        }

        .halide-body {
          background-color: var(--bg);
          color: var(--silver);
          font-family: 'Syncopate', sans-serif;
          overflow: hidden;
          position: relative;
          height: 100vh;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          position: absolute;
          inset: 0;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          pointer-events: none;
        }

        .canvas-3d {
          position: relative;
          width: 1000px; height: 600px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          transition: transform 0.5s ease;
        }

        .layer-1 { filter: contrast(1.2) brightness(0.7); }
        .layer-2 { filter: contrast(1.1) brightness(0.7); opacity: 0.6; mix-blend-mode: screen; }
        .layer-3 { filter: contrast(1.3) brightness(0.8); opacity: 0.4; mix-blend-mode: overlay; }

        .slider-track {
          display: flex;
          gap: 6rem;
          width: 100%;
          height: 100%;
          transition: transform 1.5s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .slider-img {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .vignette-overlay {
          position: absolute;
          inset: -50%;
          pointer-events: none;
          background: radial-gradient(ellipse 65% 65% at 50% 50%, transparent 55%, var(--bg) 95%);
          z-index: 5;
          transform: translateZ(200px);
        }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.05) 41px, transparent 42px);
          transform: translateZ(-200px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title-container {
          grid-column: 1 / -1;
          align-self: center;
          justify-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
        
        .mask-edges {
          mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
        }
      `}</style>

      <div
        className="halide-body"
        onClick={() => {
          if (!started) {
            setStarted(true);
            handleNarration();
          }
        }}
      >
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          
          <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.7rem' }}>

          </div>

          <div className="hero-title-container relative w-full h-full min-h-[400px]">
            {/* Intro Text Container */}
            <div 
               className={`absolute inset-0 flex flex-col items-center justify-center space-y-6 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                 showIntro ? 'opacity-100 transform scale-100 z-50' : 'opacity-0 transform scale-90 z-0 pointer-events-none'
               }`}
            >
               <p className="text-sm md:text-base tracking-[0.4em] font-medium uppercase text-center mt-12 md:mt-0" style={{ color: 'var(--accent)', filter: 'drop-shadow(0 0 12px rgba(230,54,48,0.4))' }}>
                 The Story of Standard Gas Shield
               </p>
               <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />
               
               <h2 className="text-4xl md:text-6xl lg:text-[72px] font-serif italic tracking-tight leading-[1.1] pb-2 text-center" style={{ fontFamily: 'Georgia, serif', color: 'var(--silver)' }}>
                 Ensuring Safety. <br />
                 <span style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.4))' }}>
                   Engineering Trust.
                 </span> <br />
                 <span className="text-3xl md:text-5xl font-serif italic  mt-2 block tracking-wider">Since 1967.</span>
               </h2>
               
               <p className="max-w-2xl text-center text-white/80 font-sans text-base md:text-lg leading-relaxed px-4">
                 India's leading manufacturer of cylinder handling equipment and gas safety solutions — trusted by industries across the nation for over five decades.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto">
                 <button className="px-8 py-3 bg-[#E63630] text-white rounded-full font-sans uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2" onClick={(e) => { e.stopPropagation(); /* handle navigation */ }}>
                   Explore Our Products <span>→</span>
                 </button>
                 <button className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-sans uppercase tracking-widest text-xs font-bold hover:border-[#E63630] hover:text-[#E63630] transition-colors flex items-center justify-center gap-2" onClick={(e) => { e.stopPropagation(); /* handle navigation */ }}>
                   Get In Touch <span>→</span>
                 </button>
               </div>
            </div>
            
            {/* Transcription Container */}
            <div 
               className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                 !showIntro ? 'opacity-100 transform scale-100 z-50' : 'opacity-0 transform scale-110 z-0 pointer-events-none'
               }`}
            >
               <div 
                 className="relative w-full max-w-4xl h-[40vh] md:h-[50vh] overflow-hidden mask-edges pointer-events-none"
               >
                 <div 
                   ref={textContainerRef}
                   className="absolute top-1/2 left-0 w-full transition-transform duration-500 ease-out will-change-transform"
                   style={{ transform: `translateY(-${translateY}px)` }}
                 >
                   <p className="text-4xl md:text-5xl lg:text-[54px] z-50 leading-[1.6] md:leading-[1.7] tracking-wider text-center pb-24" style={{ color: 'var(--silver)', fontFamily: "'Gambarino', serif" }}>
                     {NARRATION_WORDS.map((word, idx) => {
                       const wordTiming = wordTimings[idx];
                       const durationSecs = wordTiming ? Math.max(wordTiming.end - wordTiming.start, 0.1) : 0.3;
                       const isActive = idx === displayedWords;

                       return (
                         <span
                           key={idx}
                           id={`word-${idx}`}
                           className="inline-block will-change-transform pt-1"
                           style={{
                             opacity: 1,
                             color: isActive ? 'var(--accent)' : '#ffffff',
                             transform: isActive ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
                             fontWeight: isActive ? '800' : '500',
                             transition: `color 0.3s ease-in-out, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), text-shadow 0.4s ease-in-out, font-weight 0.1s linear`,
                             textShadow: isActive 
                               ? '0 0 25px rgba(230,54,48,0.8), 0 4px 15px rgba(0,0,0,1)' 
                               : '0 2px 10px rgba(0,0,0,0.4)',
                           }}
                         >
                           {word}&nbsp;
                         </span>
                       );
                     })}
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginLeft: '-4rem', marginRight: '-4rem', padding: '0 4rem' }}>
            
            {started && loading && (
              <div className="absolute bottom-16 right-16 flex items-center gap-2 px-3 py-2 text-sm" style={{ color: 'var(--accent)' }}>
                Generating narration...
              </div>
            )}
            
            <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', textAlign: 'right', color: 'var(--silver)' }}>
              <p>[ ARCHIVE 2026 ]</p>
              <p>INDUSTRIAL SAFETY & GAS EQUIPMENT</p>
            </div>
          </div>
        </div>

        <div className="viewport">
          <div className="vignette-overlay"></div>
          <div className="canvas-3d" ref={canvasRef}>
            <div className="contours"></div>
            {[0, 1, 2].map((layerIndex) => (
              <div 
                key={layerIndex} 
                className={`layer layer-${layerIndex + 1}`} 
                ref={(el) => (layersRef.current[layerIndex] = el)}
              >
                <div 
                  className="slider-track"
                  style={{ transform: `translateX(calc(-${bgIndex * 100}% - ${bgIndex * 6}rem))` }}
                >
                  {Array.from({ length: 60 }).map((_, i) => {
                    const set = BACKGROUND_SETS[i % BACKGROUND_SETS.length];
                    return (
                      <div 
                        key={i} 
                        className="slider-img" 
                        style={{ backgroundImage: `url('${set[layerIndex]}')` }} 
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {!started && <div className="scroll-hint"></div>}

        {started && !loading && audioError && (
          <div className="absolute bottom-6 left-6 z-50 flex items-center gap-3">
             <div className="text-xs px-3 py-2 bg-black/70 border border-red-500 rounded" style={{ color: 'var(--accent)' }}>
               <AlertCircle size={14} className="inline mr-2" />
               {audioError}
             </div>
          </div>
        )}
      </div>
    </>
  );
};

export { StorytellingIntro };

