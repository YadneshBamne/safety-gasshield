import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { Shield, Globe2, ShieldCheck, Volume2, VolumeX, Play } from 'lucide-react';

/* ─── Timing ─────────────────────────────────────────────────────────────── */
const MORPH = 1.0;
const TOTAL = 4;

/* ─── Narration scripts per scene ────────────────────────────────────────── */
const NARRATION = [
  // Scene 0 — Brand
  "Welcome to Standard Gas Shield. For over five decades, we have been engineering safety solutions that protect lives and power industries across the nation and beyond.",
  // Scene 1 — History
  "Our story began in 1967, when Shri Indrajeet Bhutani founded Standard Engineers with a singular vision — to set the benchmark for cylinder safety equipment in India. Today, under the leadership of Mr. Rajan Bhutani and Mr. Devanshu Bhutani, we have grown into India's leading supplier, with over fifty-seven years of excellence and ten million units supplied.",
  // Scene 2 — Global
  "Our reach now extends far beyond India's borders. We export to the South Asian region and are rapidly expanding our footprint across the Middle East, Africa, and Southeast Asia. Decades of operational excellence have built a reputation the world is beginning to know.",
  // Scene 3 — Safety
  "Safety is not just what we make — it is who we are. It is woven into every product, every process, and every partnership. We remain close to our customers, transparent and accessible, because when it comes to safety, nothing less than the best will do.",
];

/* ─── Blob configs ───────────────────────────────────────────────────────── */
const BLOBS = [
  [
    { cx:'50%', cy:'50%', rx:500, ry:500, color:'#861719', op:0.34 },
    { cx:'50%', cy:'54%', rx:240, ry:240, color:'#E63630', op:0.20 },
  ],
  [
    { cx:'16%', cy:'62%', rx:460, ry:400, color:'#861719', op:0.28 },
    { cx:'82%', cy:'36%', rx:340, ry:300, color:'#E63630', op:0.15 },
    { cx:'54%', cy:'82%', rx:200, ry:180, color:'#861719', op:0.12 },
  ],
  [
    { cx:'50%', cy:'20%', rx:480, ry:320, color:'#861719', op:0.27 },
    { cx:'28%', cy:'80%', rx:280, ry:240, color:'#E63630', op:0.15 },
    { cx:'76%', cy:'66%', rx:180, ry:180, color:'#861719', op:0.10 },
  ],
  [
    { cx:'50%', cy:'50%', rx:580, ry:480, color:'#861719', op:0.38 },
    { cx:'50%', cy:'50%', rx:260, ry:260, color:'#E63630', op:0.24 },
    { cx:'50%', cy:'50%', rx:100, ry:100, color:'#FF4444', op:0.14 },
  ],
];

/* ─── Scene durations — matched to narration length (ms) ─────────────────── */
// Rough estimate: ~130 words/min at rate 0.88. We'll use speechSynthesis end event
// but also keep a fallback timer generous enough for the longest narration.
const SCENE_HOLD_MS = [7000, 14000, 11000, 12000];

/* ─── Helpers ────────────────────────────────────────────────────────────── */
const serif = { fontFamily: "'Georgia', serif", fontStyle: 'italic' };

const Pill = ({ children }) => (
  <span style={{ display:'inline-block', fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase', padding:'4px 12px', borderRadius:2, color:'#E63630', border:'1px solid rgba(230,54,48,0.38)', background:'rgba(230,54,48,0.07)' }}>
    {children}
  </span>
);

const Divider = () => (
  <div style={{ display:'flex', alignItems:'center', gap:12, maxWidth:200 }}>
    <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(230,54,48,0.55))' }} />
    <div style={{ width:5, height:5, borderRadius:'50%', background:'#E63630' }} />
    <div style={{ flex:1, height:1, background:'linear-gradient(to left, transparent, rgba(230,54,48,0.55))' }} />
  </div>
);

/* ─── Audio waveform bar visualiser (purely CSS animated) ─────────────────── */
function Waveform({ active }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:3, height:20 }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{
          width: 3, borderRadius: 2,
          background: '#E63630',
          opacity: active ? 0.9 : 0.25,
          animation: active ? `wavebar${i} ${0.5 + i * 0.12}s ease-in-out infinite alternate` : 'none',
          height: active ? undefined : 4,
        }} />
      ))}
      <style>{`
        @keyframes wavebar1 { from{height:4px} to{height:18px} }
        @keyframes wavebar2 { from{height:6px} to{height:14px} }
        @keyframes wavebar3 { from{height:8px} to{height:20px} }
        @keyframes wavebar4 { from{height:5px} to{height:16px} }
        @keyframes wavebar5 { from{height:3px} to{height:12px} }
      `}</style>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════ */
export default function StorytellingIntro({ onComplete }) {
  const [scene, setScene]         = useState(0);
  const [logoError, setLogoError] = useState(false);
  const [muted, setMuted]         = useState(false);
  const [started, setStarted]     = useState(false); // user must click to unlock audio
  const [speaking, setSpeaking]   = useState(false);

  const refs       = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const isBusy     = useRef(false);
  const currScene  = useRef(0);
  const timerRef   = useRef(null);
  const mutedRef   = useRef(false);
  const startedRef = useRef(false);
  const utterRef   = useRef(null);
  const goToRef    = useRef(null);

  /* ── keep refs in sync ── */
  useEffect(() => { mutedRef.current = muted; }, [muted]);
  useEffect(() => { startedRef.current = started; }, [started]);

  /* ── Speech synthesis narration ── */
  const narrate = useCallback((sceneIdx) => {
    if (!startedRef.current) return;
    
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    setSpeaking(false);
    clearTimeout(timerRef.current);
    clearInterval(timerRef.current);

    if (mutedRef.current) {
      timerRef.current = setTimeout(() => {
        if (currScene.current === sceneIdx && goToRef.current) {
          if (sceneIdx + 1 >= TOTAL) {
            onComplete?.();
          } else {
            goToRef.current(sceneIdx + 1);
          }
        }
      }, SCENE_HOLD_MS[sceneIdx]);
      return;
    }

    if (!window.speechSynthesis) return;

    const utter = new SpeechSynthesisUtterance(NARRATION[sceneIdx]);
    utter.rate   = 0.88;
    utter.pitch  = 0.95;
    utter.volume = 1;

    // Use an Indian English voice for ALL scenes
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('India') ||
      v.name.includes('Indian') ||
      v.lang === 'en-IN' ||
      v.name.includes('Ravi') ||
      v.name.includes('Veena')
    ) || voices.find(v => v.lang && v.lang.startsWith('en'));
    
    if (preferred) utter.voice = preferred;

    let hasTransitioned = false;

    const proceedToNext = () => {
      if (hasTransitioned) return;
      hasTransitioned = true;
      
      setSpeaking(false);
      clearInterval(timerRef.current);
      
      // Exactly when speech finishes, go to the next scene
      if (currScene.current === sceneIdx && goToRef.current) {
        if (sceneIdx + 1 >= TOTAL) {
          onComplete?.();
        } else {
          goToRef.current(sceneIdx + 1);
        }
      }
    };

    utter.onstart = () => {
      setSpeaking(true);
      
      // Active polling to ensure 100% perfect timing, avoiding Chrome's onend bug
      timerRef.current = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          proceedToNext();
        }
      }, 100);
    };
    
    utter.onend = proceedToNext;
    
    utter.onerror = (e) => {
      if (e.error !== 'canceled') {
        proceedToNext();
      }
    };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, []);

  /* ── morph transition ── */
  const goTo = useCallback((next) => {
    if (isBusy.current || next === currScene.current) return;
    isBusy.current = true;

    const outEl = refs[currScene.current].current;
    const inEl  = refs[next].current;
    gsap.killTweensOf([outEl, inEl]);

    gsap.timeline({
      onComplete: () => {
        currScene.current = next;
        setScene(next);
        isBusy.current = false;
        narrate(next);
      }
    })
    .to(outEl, { opacity:0, scale:1.09, filter:'blur(18px)', duration:MORPH, ease:'power2.inOut' })
    .fromTo(inEl,
      { opacity:0, scale:0.93, filter:'blur(16px)' },
      { opacity:1, scale:1,    filter:'blur(0px)',  duration:MORPH * 1.15, ease:'power2.out' },
      `-=${MORPH * 0.5}`
    );
  }, [narrate]);

  useEffect(() => {
    goToRef.current = goTo;
  }, [goTo]);

  /* ── start everything (called on first user interaction) ── */
  const handleStart = useCallback(() => {
    if (startedRef.current) return;
    setStarted(true);
    startedRef.current = true;

    const begin = () => {
      narrate(0);
    };

    if (window.speechSynthesis && window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = begin;
    } else {
      begin();
    }
  }, [narrate]);

  /* ── mount: fade in scene 0 ── */
  useEffect(() => {
    gsap.fromTo(refs[0].current,
      { opacity:0, scale:0.94, filter:'blur(14px)' },
      { opacity:1, scale:1,    filter:'blur(0px)',  duration:1.2, ease:'power2.out' }
    );
    return () => {
      clearTimeout(timerRef.current);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []); // eslint-disable-line

  /* ── mute toggle ── */
  const toggleMute = () => {
    const nextVal = !muted;
    setMuted(nextVal);
    mutedRef.current = nextVal;
    
    if (nextVal) {
      window.speechSynthesis?.cancel();
      setSpeaking(false);
    }
    
    if (startedRef.current) {
      narrate(currScene.current);
    }
  };

  /* ── dot / jump ── */
  const jumpTo = (i) => {
    clearTimeout(timerRef.current);
    goTo(i);
  };

  /* ─────────────────────── RENDER ─────────────────────── */
  return (
    <section
      onClick={!started ? handleStart : undefined}
      style={{ position:'relative', width:'100%', height:'100svh', minHeight:480, background:'#060608', overflow:'hidden', cursor: started ? 'default' : 'pointer' }}
    >
      {/* Base radial */}
      <div style={{ position:'absolute', inset:0, zIndex:1, background:'radial-gradient(ellipse 85% 75% at 50% 50%, #180304 0%, #060608 100%)' }} />

      {/* Blobs */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:2, filter:'blur(90px)', mixBlendMode:'screen' }} preserveAspectRatio="xMidYMid slice">
        {BLOBS[scene].map((b, i) => (
          <ellipse key={i} cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} fill={b.color} opacity={b.op}
            style={{ transition:'all 1.5s cubic-bezier(0.4,0,0.2,1)' }} />
        ))}
      </svg>

      {/* Noise */}
      <div style={{ position:'absolute', inset:0, zIndex:3, opacity:0.05, mixBlendMode:'overlay', pointerEvents:'none',
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:'200px 200px' }} />

      {/* Vignette */}
      <div style={{ position:'absolute', inset:0, zIndex:4, pointerEvents:'none',
        background:'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 38%, rgba(6,6,8,0.9) 100%)' }} />

      {/* ── Audio controls (bottom-left) ── */}
      <div style={{ position:'absolute', bottom:24, left:24, zIndex:90, display:'flex', alignItems:'center', gap:12 }}>
        {started ? (
          <>
            <button
              onClick={e => { e.stopPropagation(); toggleMute(); }}
              title={muted ? 'Unmute narration' : 'Mute narration'}
              style={{ display:'flex', alignItems:'center', justifyContent:'center', width:36, height:36, borderRadius:'50%', border:'1px solid rgba(230,54,48,0.4)', background:'rgba(6,6,8,0.7)', color: muted ? 'rgba(255,255,255,0.35)' : '#E63630', cursor:'pointer', backdropFilter:'blur(8px)', transition:'all 0.3s ease', boxShadow: muted ? 'none' : '0 0 14px rgba(230,54,48,0.25)' }}
            >
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <Waveform active={speaking && !muted} />
          </>
        ) : (
          /* "Click to begin" prompt */
          <div style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 16px', borderRadius:99, border:'1px solid rgba(230,54,48,0.35)', background:'rgba(6,6,8,0.6)', backdropFilter:'blur(10px)', color:'rgba(255,255,255,0.7)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer' }}>
            <Play size={11} style={{ color:'#E63630' }} />
            Click anywhere to begin
          </div>
        )}
      </div>

      {/* ── Progress dots (right) ── */}
      <div style={{ position:'absolute', right:20, top:'50%', transform:'translateY(-50%)', zIndex:90, display:'flex', flexDirection:'column', gap:12 }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i}
            onClick={e => { e.stopPropagation(); if (started) jumpTo(i); else handleStart(); }}
            style={{ width: i === scene ? 8 : 5, height: i === scene ? 8 : 5, borderRadius:'50%', border:'none', padding:0, cursor:'pointer', background: i === scene ? '#E63630' : 'rgba(255,255,255,0.28)', boxShadow: i === scene ? '0 0 10px #E63630' : 'none', transition:'all 0.5s ease' }}
          />
        ))}
      </div>

      {/* ══ SCENE 0 — Brand ══ */}
      <div ref={refs[0]} style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:20, padding:'0 24px', color:'white', opacity:0, willChange:'transform,opacity,filter' }}>
        <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle, rgba(230,54,48,0.16) 0%, transparent 70%)', filter:'blur(28px)' }} />
        <div style={{ width:'clamp(90px,14vw,140px)', height:'clamp(90px,14vw,140px)', marginBottom:22, position:'relative', zIndex:1 }}>
          {!logoError
            ? <img src="/logo.png" alt="Standard Gas Shield" style={{ width:'100%', height:'100%', objectFit:'contain', filter:'drop-shadow(0 0 36px rgba(230,54,48,0.5))' }} onError={() => setLogoError(true)} />
            : <div style={{ width:'100%', height:'100%', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg,#E63630,#861719)', boxShadow:'0 0 60px rgba(230,54,48,0.45)', border:'1px solid rgba(230,54,48,0.3)' }}>
                <Shield style={{ width:'46%', height:'46%', color:'white' }} />
              </div>
          }
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16, width:'100%', maxWidth:260 }}>
          <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(230,54,48,0.6))' }} />
          <div style={{ width:5, height:5, borderRadius:'50%', background:'#E63630' }} />
          <div style={{ flex:1, height:1, background:'linear-gradient(to left, transparent, rgba(230,54,48,0.6))' }} />
        </div>
        <h1 style={{ ...serif, fontSize:'clamp(1.9rem,6vw,4.5rem)', textAlign:'center', letterSpacing:'-0.01em', lineHeight:1.05, margin:'0 0 14px' }}>
          STANDARD <span style={{ color:'#E63630' }}>GAS SHIELD</span>
        </h1>
        <p style={{ color:'rgba(255,255,255,0.48)', fontSize:'clamp(9px,1.2vw,13px)', letterSpacing:'0.3em', textAlign:'center', textTransform:'uppercase', margin:0 }}>
          Engineered for Safety · Built for the World
        </p>
      </div>

      {/* ══ SCENE 1 — History ══ */}
      <div ref={refs[1]} style={{ position:'absolute', inset:0, display:'flex', zIndex:20, color:'white', opacity:0, willChange:'transform,opacity,filter' }}>
        {/* LEFT — full-height image */}
        <div style={{ position:'relative', width:'42%', flexShrink:0, overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')", backgroundSize:'cover', backgroundPosition:'center', filter:'grayscale(1)' }} />
          <div style={{ position:'absolute', inset:0, background:'rgba(6,6,8,0.45)' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 55%, #060608 100%)' }} />
          <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'28px 32px', background:'linear-gradient(to top, rgba(6,6,8,0.92) 0%, transparent 100%)', zIndex:2 }}>
            <div style={{ width:32, height:2, background:'#E63630', marginBottom:10, boxShadow:'0 0 12px rgba(230,54,48,0.6)' }} />
            <div style={{ ...serif, color:'white', fontSize:'clamp(14px,1.8vw,22px)', marginBottom:4 }}>SHRI I.G. BHUTANI</div>
            <div style={{ color:'rgba(255,255,255,0.45)', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase' }}>Founder · 1967</div>
          </div>
          <div style={{ position:'absolute', top:0, right:0, bottom:0, width:2, background:'linear-gradient(to bottom, transparent, #E63630 30%, #E63630 70%, transparent)', opacity:0.7 }} />
        </div>
        {/* RIGHT — content */}
        <div style={{ flex:1, display:'flex', alignItems:'center', padding:'0 clamp(28px,5vw,72px)' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:18, maxWidth:520 }}>
            <Pill>Our Legacy</Pill>
            <h2 style={{ ...serif, fontSize:'clamp(1.6rem,3.4vw,3rem)', lineHeight:1.12, margin:0 }}>
              Service of the nation,<br /><span style={{ color:'#E63630' }}>Since 1967.</span>
            </h2>
            <Divider />
            <p style={{ color:'rgba(255,255,255,0.68)', fontSize:'clamp(13px,1.3vw,15.5px)', lineHeight:1.8, margin:0 }}>
              Founded by <strong style={{ color:'white' }}>Shri Indrajeet Bhutani</strong>, Standard Engineers pioneered Valve Guards, Caps, and Cylinder handling equipment that set the national benchmark.
            </p>
            <p style={{ color:'rgba(255,255,255,0.68)', fontSize:'clamp(13px,1.3vw,15.5px)', lineHeight:1.8, margin:0 }}>
              Today, under <strong style={{ color:'white' }}>Mr. Rajan Bhutani</strong> and <strong style={{ color:'white' }}>Mr. Devanshu Bhutani</strong>, we stand as India's leading supplier.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:2 }}>
              {[['57+','Years'],['10M+','Units'],['Pan-India','Reach']].map(([n,l]) => (
                <div key={l} style={{ padding:'8px 16px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)', borderRadius:4 }}>
                  <div style={{ color:'#E63630', fontWeight:700, fontSize:15 }}>{n}</div>
                  <div style={{ color:'rgba(255,255,255,0.42)', fontSize:10, letterSpacing:'0.08em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ SCENE 2 — Global ══ */}
      <div ref={refs[2]} style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:20, padding:'0 24px', textAlign:'center', color:'white', opacity:0, willChange:'transform,opacity,filter' }}>
        <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:28 }}>
          {[140, 195].map((size, i) => (
            <div key={size} style={{ position:'absolute', width:size, height:size, borderRadius:'50%', border:`1px solid rgba(230,54,48,${i===0?0.3:0.12})`, animation:`orbitSpin ${i===0?16:26}s linear infinite ${i===1?'reverse':''}` }} />
          ))}
          <Globe2 style={{ width:58, height:58, color:'rgba(255,255,255,0.85)', strokeWidth:1, position:'relative', zIndex:1 }} />
        </div>
        <Pill>Global Presence</Pill>
        <h2 style={{ ...serif, fontSize:'clamp(1.5rem,4.2vw,3.4rem)', lineHeight:1.15, maxWidth:820, margin:'18px 0 14px' }}>
          Exporting to the South Asian Region.<br />
          <span style={{ backgroundImage:'linear-gradient(90deg,#E2E2E2 0%,#888 50%,#E2E2E2 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            Ready for the World.
          </span>
        </h2>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10, marginBottom:18 }}>
          {['South Asia','Middle East','Africa','Southeast Asia'].map(r => (
            <span key={r} style={{ fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 13px', borderRadius:20, border:'1px solid rgba(230,54,48,0.28)', background:'rgba(230,54,48,0.06)', color:'rgba(255,255,255,0.58)' }}>{r}</span>
          ))}
        </div>
        <p style={{ color:'rgba(255,255,255,0.52)', fontSize:'clamp(13px,1.4vw,17px)', maxWidth:580, lineHeight:1.75, margin:0 }}>
          Decades of operational excellence have carried our products across borders — and we are continuously expanding our global footprint.
        </p>
      </div>

      {/* ══ SCENE 3 — Safety ══ */}
      <div ref={refs[3]} style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:20, padding:'0 24px', textAlign:'center', color:'white', opacity:0, willChange:'transform,opacity,filter' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(ellipse 55% 55% at 50% 54%, rgba(134,23,25,0.24) 0%, transparent 70%)' }} />
        <ShieldCheck style={{ width:68, height:68, color:'#E63630', filter:'drop-shadow(0 0 28px rgba(230,54,48,0.55))', marginBottom:22, strokeWidth:1.5 }} />
        <h2 style={{ ...serif, fontSize:'clamp(2rem,5.5vw,4.5rem)', lineHeight:1.1, maxWidth:800, margin:'0 0 14px' }}>
          Safety is in our <span style={{ color:'#E63630', textShadow:'0 0 40px rgba(230,54,48,0.45)' }}>Culture.</span>
        </h2>
        <Divider />
        <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'clamp(13px,1.4vw,17px)', maxWidth:640, lineHeight:1.8, margin:'16px 0 28px' }}>
          It's woven into everything we make, every partnership we form. We stay close to our customers — transparent, accessible, and always just a call away.
        </p>
        <button
          onClick={e => { e.stopPropagation(); onComplete?.(); }}
          style={{ padding:'11px 30px', borderRadius:99, background:'linear-gradient(135deg,#E63630,#861719)', border:'1px solid rgba(230,54,48,0.5)', color:'white', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', fontWeight:600, cursor:'pointer', boxShadow:'0 0 28px rgba(230,54,48,0.35), inset 0 1px 0 rgba(255,255,255,0.14)', transition:'all 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow='0 0 50px rgba(230,54,48,0.55), inset 0 1px 0 rgba(255,255,255,0.14)'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow='0 0 28px rgba(230,54,48,0.35), inset 0 1px 0 rgba(255,255,255,0.14)'; e.currentTarget.style.transform='translateY(0)'; }}
        >
          Connect With Us
        </button>
      </div>

      <style>{`
        @keyframes orbitSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}