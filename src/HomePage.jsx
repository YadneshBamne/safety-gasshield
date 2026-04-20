import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Download, ShieldCheck, Factory, Globe2, Anchor, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { StorytellingIntro } from './StorytellingIntro';

export default function HomePage({ setCurrentPage }) {
  return (
    <>
      <StorytellingIntro />

      {/* Brand Commitment Section with Overlapping Card */}
      <section className="relative py-24 md:py-32 bg-[#060608] mt-0 lg:mt-0 border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          
          {/* Overlapping Orange/Red Card - Responsive Positioning */}
          <div className="group relative lg:absolute lg:-top-44 left-0 w-full lg:w-[400px] xl:w-[450px] bg-[#E63630] p-10 md:p-14 lg:p-16 mb-16 lg:mb-0 shadow-[0_30px_60px_rgba(230,54,48,0.2)] hover:shadow-[0_40px_80px_rgba(230,54,48,0.5)] z-100 flex flex-col justify-between aspect-auto md:aspect-square lg:aspect-[3/4] overflow-hidden -mt-32 lg:mt-0 transition-all duration-700 ease-out hover:-translate-y-2">
            {/* Animated overlay gradient inside card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            {/* Background Graphic/Arrows */}
            <div className="absolute top-0 right-0 w-32 md:w-48 lg:w-56 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none transform scale-x-[-1] origin-right animate-pulse">
              <svg viewBox="0 0 100 200" className="w-full h-auto text-white filter drop-shadow-xl group-hover:-translate-x-2 transition-transform duration-700">
                <polygon points="0,50 80,10 100,25 20,65" fill="#111111" />
                <polygon points="0,90 80,50 100,65 20,105" fill="#ffffff" />
                <polygon points="0,130 80,90 100,105 20,145" fill="#111111" />
                <polygon points="0,170 80,130 100,145 20,185" fill="#ffffff" />
              </svg>
            </div>
            
            <RevealOnScroll className="relative z-10">
              <span className="text-white text-sm font-semibold tracking-[0.3em] uppercase font-secondary mb-16 block">
                About us
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-100" className="relative z-10 mt-16 md:mt-24 lg:mt-32">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-wider leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                  Reliability.<br />Innovation.<br />Experience.
                </h3>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side Text Content / Features List */}
          <div className="w-full lg:w-[55%] ml-auto text-left lg:pl-12 py-10 lg:py-0 relative z-10">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-3xl lg:text-[40px] xl:text-[44px] text-white mb-10 leading-[1.3] tracking-wide" style={{ fontFamily: "'Gambarino', serif" }}>
                Why partner with us for your safety-critical operations?
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay="delay-100">
              <ul className="space-y-8 md:space-y-10">
                {[
                  { title: "Precision Engineering", desc: "Rigorous quality control processes guaranteeing that every component functions flawlessly under extreme pressure.", icon: Shield },
                  { title: "Industry Proven Expertise", desc: "Over 50 years of trusted, hands-on manufacturing experience across diverse industrial applications.", icon: Factory },
                  { title: "Global Safety Standards", desc: "Certified engineering solutions meeting and exceeding rigorous international regulatory requirements.", icon: Globe2 }
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-5 md:gap-6 group cursor-pointer relative">
                    <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-[2px] bg-[#E63630] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top ease-out"></div>
                    <div className="mt-1 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 shrink-0 transition-all duration-300 group-hover:border-[#E63630]/60 group-hover:bg-[#E63630]/20 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_25px_rgba(230,54,48,0.3)]">
                      <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-[#E63630] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div className="transition-transform duration-500 group-hover:translate-x-2 ease-out">
                      <h4 className="text-white font-secondary font-bold tracking-wider text-xl md:text-2xl mb-2 transition-colors duration-300 group-hover:text-[#E63630]">{feature.title}</h4>
                      <p className="text-white/60 font-secondary text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-white/90">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* Tilted Safety Strip Separator 1 */}
      <div className="relative z-40 h-24 md:h-32 -my-12 md:-my-16 flex items-center justify-center w-full overflow-hidden pointer-events-none">
        {/* Background gap fixers */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#060608]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

        <div className="w-[120%] -ml-4 h-12 md:h-16 bg-[#E63630] -rotate-2 transform origin-center border-y-[3px] md:border-y-[4px] border-[#060608] relative flex items-center overflow-hidden">
          {/* Industrial Grunge Texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMSIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
          
          <div className="flex whitespace-nowrap items-center h-full text-[#060608] w-[200%]" style={{ animation: 'marquee 30s linear infinite' }}>
            <style>{`
              @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
            `}</style>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center h-full shrink-0">
                <span className="mx-6 font-secondary font-black tracking-[0.3em] text-sm md:text-base">WARNING</span>
                {/* Irregular skew shapes instead of uniform stripes */}
                <div className="mx-4 flex gap-1 h-full items-center py-0">
                  <div className="w-8 h-[120%] bg-[#060608] -skew-x-[30deg]"></div>
                  <div className="w-2 h-[120%] bg-[#060608] -skew-x-[30deg]"></div>
                  <div className="w-4 h-[120%] bg-[#060608] -skew-x-[30deg]"></div>
                  <div className="w-12 h-[120%] bg-[#060608] -skew-x-[30deg]"></div>
                </div>
                <span className="mx-6 font-secondary font-bold tracking-[0.2em] text-sm md:text-base opacity-80">CRITICAL SAFETY PROTOCOLS</span>
                <div className="mx-4 flex gap-2 h-full items-center py-0">
                  <div className="w-3 h-[120%] bg-[#060608] -skew-x-[30deg] opacity-60"></div>
                  <div className="w-16 h-[120%] bg-[#060608] -skew-x-[30deg]"></div>
                  <div className="w-2 h-[120%] bg-[#060608] -skew-x-[30deg]"></div>
                </div>
                <span className="mx-6 font-secondary font-black tracking-[0.4em] text-sm md:text-base">///</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-white relative z-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { number: "50+", label: "Years in Business" },
              { number: "1,000+", label: "Clients Served Worldwide" },
              { number: "ISO 9001", label: "Certified Manufacturing" }
            ].map((stat, idx) => (
              <RevealOnScroll key={idx} delay={`delay-${idx * 100}`}>
                <div className="text-center py-8 md:py-0 group cursor-default">
                  <div className="inline-block relative">
                    <h3 className="relative z-10 text-5xl md:text-7xl font-bold text-[#E63630] mb-6 tracking-tight transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_10px_20px_rgba(230,54,48,0.3)]" style={{ fontFamily: "'Gambarino', serif" }}>{stat.number}</h3>
                    <div className="absolute inset-0 bg-[#E63630] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full scale-150 pointer-events-none"></div>
                  </div>
                  <p className="text-black font-secondary font-bold uppercase tracking-[0.2em] text-xs md:text-sm transition-colors duration-500 group-hover:text-[#E63630]">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tilted Safety Strip Separator 2 */}
      <div className="relative z-40 h-24 md:h-32 -my-12 md:-my-16 flex items-center justify-center w-full overflow-hidden pointer-events-none">
        {/* Background gap fixers to prevent bleed */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#060608]"></div>

        <div className="w-[120%] -ml-4 h-12 md:h-16 bg-[#E63630] rotate-2 transform origin-center border-y-[3px] md:border-y-[4px] border-[#060608] relative flex items-center overflow-hidden">
          {/* Industrial Grunge Texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMSIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
          
          <div className="flex whitespace-nowrap items-center h-full text-[#060608] w-[200%]" style={{ animation: 'marquee 35s linear infinite reverse' }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center h-full shrink-0">
                <span className="mx-8 font-secondary font-black tracking-[0.4em] text-sm md:text-base">/// ISO 9001</span>
                {/* Irregular skew shapes replacing stripes */}
                <div className="mx-6 flex gap-1.5 h-full items-center py-0">
                  <div className="w-16 h-[120%] bg-[#060608] skew-x-[30deg]"></div>
                  <div className="w-1 h-[120%] bg-[#060608] skew-x-[30deg]"></div>
                  <div className="w-4 h-[120%] bg-[#060608] skew-x-[30deg]"></div>
                </div>
                <span className="mx-8 font-secondary font-bold tracking-[0.2em] text-sm md:text-base opacity-80">PRESSURE OVERRIDE ACTIVE</span>
                <div className="mx-6 flex gap-2.5 h-full items-center py-0">
                  <div className="w-6 h-[120%] bg-[#060608] skew-x-[30deg]"></div>
                  <div className="w-2 h-[120%] bg-[#060608] skew-x-[30deg]"></div>
                  <div className="w-10 h-[120%] bg-[#060608] skew-x-[30deg] opacity-70"></div>
                  <div className="w-1 h-[120%] bg-[#060608] skew-x-[30deg]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-[#060608] relative overflow-hidden flex items-center justify-center border-t border-[#060608]">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E63630] opacity-[0.07] blur-[120px] rounded-full pointer-events-none animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div> */}
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-5xl md:text-6xl tracking-wider text-white mb-8" style={{ fontFamily: "'Gambarino', serif" }}>
              Ready to secure your operations?
            </h2>
            <p className="text-lg md:text-xl font-secondary font-normal mb-14 text-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Get in touch with our engineering experts today to discuss tailored safety requirements or explore our full product range.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <button 
                onClick={() => setCurrentPage?.('contact')}
                className="group relative bg-[#E63630] text-white hover:text-[#060608] px-10 py-5 rounded-full font-secondary uppercase tracking-[0.15em] font-bold text-sm transition-all duration-300 shadow-[0_10px_30px_rgba(230,54,48,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 w-full sm:w-auto overflow-hidden flex items-center justify-center gap-3"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Contact Us Now</span>
                <ArrowRight className="h-4 w-4 relative z-10 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
              </button>
              <button 
                onClick={() => setCurrentPage?.('products')}
                className="group relative bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-secondary uppercase tracking-[0.15em] font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E63630] hover:shadow-[0_0_20px_rgba(230,54,48,0.2)] w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-[#E63630] transition-colors duration-300">Browse Products</span>
                <div className="absolute inset-0 bg-[#E63630]/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out"></div>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
