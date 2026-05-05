import React, { useState } from 'react';
import { ShieldCheck, Target, Globe2, Factory, Crosshair, Users, Wrench, FileCheck, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function AboutPage() {
  const [activeCap, setActiveCap] = useState(0);

  const capabilities = [
    { 
      title: "CNC Turning", 
      desc: "Precision machining for dimensional accuracy across all components — ensuring consistent thread profiles, tolerances, and surface finish in every product batch.", 
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1565439399-5f2d5901dc61?auto=format&fit=crop&q=80"
    },
    { 
      title: "Powder Coating", 
      desc: "All cylinder trolleys, guards, and fabricated items undergo in-house powder coating for superior corrosion resistance, durability, and a professional finish that meets industrial requirements.", 
      icon: Crosshair,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80"
    },
    { 
      title: "MIG Welding & Automation", 
      desc: "Our automated MIG welding systems ensure uniform weld quality across high-volume production — critical for structural components such as trolleys, pallets, and skids.", 
      icon: Factory,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-[#060608] min-h-screen selection:bg-[#E63630] selection:text-white pb-0">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#060608]/80 mix-blend-multiply z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="text-[#E63630] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-8">Established 1967</p>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-serif text-white tracking-tight leading-[1.05] mb-8" style={{ fontFamily: "'Gambarino', serif" }}>
              A Name Built on <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">Decades of Safety</span> <br />
              and Service.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <div className="w-24 h-1 bg-[#E63630] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-white/80 font-sans text-xl md:text-2xl leading-relaxed font-light">
              Standard Gasshield Pvt. Ltd. — formerly Standard Engineers — has been at the forefront of gas cylinder safety and handling equipment in India since 1967.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Company Overview - Image & Text Split */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[#E63630]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80" 
                  alt="Manufacturing Facility" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20">
                  <p className="text-white font-serif italic text-3xl" style={{ fontFamily: "'Gambarino', serif" }}>"Engineered for safety, built for durability."</p>
                </div>
              </div>
            </RevealOnScroll>
            
            <div className="space-y-10">
              <RevealOnScroll delay="delay-100">
                <span className="text-[#E63630] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                  Company Overview
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                  Who We Are
                </h2>
                <div className="space-y-6 text-gray-700 font-sans text-lg leading-relaxed">
                  <p>
                    <strong className="text-black font-semibold">Standard Gasshield Pvt. Ltd.</strong> is a pioneering Indian manufacturer of cylinder handling equipment, valve protection guards, dome caps, cylinder trolleys, skids, and a comprehensive range of gas safety accessories. 
                  </p>
                  <p>
                    Headquartered in Ahmedabad, Gujarat, we serve the gas industry across India with products that are backed by over five decades of manufacturing expertise. We are an <strong className="text-[#E63630] font-bold">ISO 9001:2015 TÜV NORD Certified</strong> company, committed to maintaining the highest standards of quality management.
                  </p>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay="delay-200">
                <div className="flex items-start gap-6 p-8 bg-gray-50 border-l-4 border-[#E63630] rounded-r-2xl">
                  <Factory className="w-10 h-10 text-[#E63630] flex-shrink-0" />
                  <div>
                    <h4 className="text-black font-bold text-xl mb-2 font-secondary">Modern Manufacturing</h4>
                    <p className="text-gray-600 font-sans">
                      Our facility at Mahalaxmi Industrial Estate, Ahmedabad, is equipped with CNC Turning centres, MIG Welding, and in-house Powder Coating. Every product meets strict BIS and international safety standards.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission - Dynamic Split Layout */}
      <section className="bg-[#060608] relative">
        <div className="flex flex-col md:flex-row">
          {/* Vision */}
          <div className="w-full md:w-1/2 p-12 md:p-24 lg:p-32 bg-[#E63630] text-white flex flex-col justify-center relative overflow-hidden group">
            <Target className="absolute -right-20 -top-20 w-96 h-96 opacity-10 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
            <RevealOnScroll>
              <h3 className="text-white/80 font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-4 text-sm">
                <div className="w-12 h-[2px] bg-white"></div> Our Vision
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                Empowering a <br/><span className="italic opacity-90">Safer World</span>
              </h2>
              <p className="mt-8 text-white/90 font-sans text-xl md:text-2xl leading-relaxed max-w-lg font-light">
                Through the implementation of incremental safety measures, creating a safer and more secure global community.
              </p>
            </RevealOnScroll>
          </div>
          
          {/* Mission */}
          <div className="w-full md:w-1/2 p-12 md:p-24 lg:p-32 bg-[#111111] text-white flex flex-col justify-center relative overflow-hidden group">
            <ShieldCheck className="absolute -left-20 -bottom-20 w-96 h-96 text-[#E63630] opacity-5 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
            <RevealOnScroll delay="delay-100">
              <h3 className="text-[#E63630] font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-4 text-sm">
                <div className="w-12 h-[2px] bg-[#E63630]"></div> Our Mission
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                Leading the way <br/><span className="italic opacity-90 text-gray-400">towards progress</span>
              </h2>
              <p className="mt-8 text-white/70 font-sans text-xl md:text-2xl leading-relaxed max-w-lg font-light">
                By delivering innovative solutions that ensure the secure management of high-pressure gas cylinders, we strive to create a safer environment for all.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. Leadership - Engaging Portrait Cards */}
      <section className="py-24 md:py-40 bg-white relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-24">
              <span className="text-[#E63630] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Leadership</span>
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                The Bhutani Legacy
              </h2>
              <p className="text-xl text-gray-500 font-sans italic">Three Generations of Service to the Nation</p>
            </div>
          </RevealOnScroll>

          <div className="space-y-32 lg:space-y-40">
            {/* Founder Profile */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-5/12">
                <RevealOnScroll>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80" 
                      alt="Shri Indrajeet Bhutani placeholder" 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-[#E63630] font-bold tracking-[0.2em] uppercase text-sm mb-2">Founder</p>
                      <h3 className="text-3xl text-white font-serif" style={{ fontFamily: "'Gambarino', serif" }}>Shri Indrajeet Bhutani</h3>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
              <div className="w-full lg:w-7/12">
                <RevealOnScroll delay="delay-100">
                  <div className="pl-0 lg:pl-12">
                    <Users className="w-12 h-12 text-[#E63630] mb-8 opacity-50" />
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                      "A singular vision: to make gas cylinders safer for every person."
                    </h3>
                    <div className="space-y-6 text-gray-600 font-sans text-lg leading-relaxed">
                      <p>
                        In 1967, Shri Indrajeet Bhutani (I.G. Bhutani) pioneered the development and manufacturing of Valve Guards, Valve Caps, and cylinder handling equipment in India — products that were not widely available domestically at the time.
                      </p>
                      <p>
                        His commitment was not just commercial; it was a service to the nation. At a time when industrial safety standards were still evolving in India, his products provided protection to workers, gas companies, and industrial facilities across the country. His legacy is one of purpose, passion, and an unwavering belief that safety must never be compromised.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* Current Leadership Profile */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="w-full lg:w-5/12">
                <RevealOnScroll>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80" 
                      alt="Current Leadership placeholder" 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-[#E63630] font-bold tracking-[0.2em] uppercase text-sm mb-2">Current Leadership</p>
                      <h3 className="text-3xl text-white font-serif" style={{ fontFamily: "'Gambarino', serif" }}>Mr. Rajan & Devanshu Bhutani</h3>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
              <div className="w-full lg:w-7/12">
                <RevealOnScroll delay="delay-100">
                  <div className="pr-0 lg:pr-12 text-left lg:text-right">
                    <Users className="w-12 h-12 text-[#E63630] mb-8 opacity-50 ml-0 lg:ml-auto" />
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                      "Scaling operations while staying true to founding values."
                    </h3>
                    <div className="space-y-6 text-gray-600 font-sans text-lg leading-relaxed">
                      <p>
                        Carrying forward the vision of the founder, Mr. Rajan Bhutani and Mr. Devanshu Bhutani have restructured the company as Standard Gasshield Pvt. Ltd. — a name that reflects both heritage and an expanded scope in gas safety solutions.
                      </p>
                      <p>
                        The current leadership has invested in modern manufacturing infrastructure, ISO certification, and a broader product range — positioning the company as not just a manufacturer, but a complete gas safety solutions partner for Indian industries.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Capability - Interactive Tabbed Design */}
      <section className="py-24 md:py-40 bg-[#060608] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[#E63630] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Infrastructure</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                Manufacturing Capabilities
              </h2>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {capabilities.map((cap, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveCap(idx)}
                  className={`text-left p-6 md:p-8 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    activeCap === idx 
                      ? 'bg-[#E63630] text-white shadow-xl scale-105' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <cap.icon className={`w-6 h-6 ${activeCap === idx ? 'text-white' : 'text-[#E63630]'}`} />
                    <span className="font-bold text-lg md:text-xl font-secondary">{cap.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeCap === idx ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-2/3">
              <div className="bg-[#111111] rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col transition-all duration-500">
                <div className="h-64 md:h-96 relative overflow-hidden bg-black">
                  {capabilities.map((cap, idx) => (
                    <img 
                      key={idx}
                      src={cap.image} 
                      alt={cap.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeCap === idx ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
                </div>
                <div className="p-10 md:p-12 relative z-10 -mt-16">
                  <div className="w-20 h-20 bg-[#E63630] rounded-2xl flex items-center justify-center text-white mb-8 shadow-[0_10px_30px_rgba(230,54,48,0.4)]">
                    {React.createElement(capabilities[activeCap].icon, { className: "w-10 h-10" })}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>
                    {capabilities[activeCap].title}
                  </h3>
                  <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed">
                    {capabilities[activeCap].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Values & Certifications - Grid Layout */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6" style={{ fontFamily: "'Gambarino', serif" }}>
                Principles & Standards
              </h2>
              <div className="w-24 h-1 bg-[#E63630] mx-auto"></div>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Core Values */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <h3 className="text-3xl font-bold text-black mb-10 font-secondary flex items-center gap-4">
                  Core Values <ArrowRight className="w-6 h-6 text-[#E63630]" />
                </h3>
              </RevealOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {[
                  { title: "Safety First", desc: "Every decision and process is guided by: does this make gas handling safer?" },
                  { title: "Legacy & Trust", desc: "55+ years of consistent quality. We take our reputation seriously." },
                  { title: "Innovation", desc: "Investing in technology to stay ahead of industry needs." },
                  { title: "Customisation", desc: "Every requirement is unique. We manufacture to specification." },
                  { title: "Nation First", desc: "Serving India's industrial growth by making workplaces safer." }
                ].map((val, idx) => (
                  <RevealOnScroll key={idx} delay={`delay-${idx * 100}`}>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#E63630]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#E63630] mb-6 group-hover:bg-[#E63630] group-hover:text-white transition-colors duration-300 border border-gray-100">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-black mb-3 font-secondary">{val.title}</h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{val.desc}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-5">
              <RevealOnScroll delay="delay-200">
                <div className="bg-[#060608] rounded-3xl p-10 md:p-14 text-white h-full relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E63630]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <h3 className="text-3xl font-bold text-white mb-10 font-secondary relative z-10 flex items-center gap-4">
                    Certifications
                  </h3>
                  <ul className="space-y-8 relative z-10">
                    {[
                      "ISO 9001:2015 — TÜV NORD Certified Quality Management System",
                      "Manufactured in compliance with BIS specifications",
                      "Adherence to IS standards for gas cylinder handling",
                      "Colour coding aligned with industrial gas standards (Oxygen, CO₂, Nitrogen, etc.)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-5 group items-start">
                        <div className="bg-[#4ADE80]/10 p-2 rounded-lg flex-shrink-0 mt-0.5 group-hover:bg-[#4ADE80]/20 transition-colors">
                          <FileCheck className="w-6 h-6 text-[#4ADE80]" />
                        </div>
                        <span className="text-white/80 font-sans leading-relaxed text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


