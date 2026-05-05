import React, { useState } from 'react';
import { Clock, Shield, Award, Users, Factory, Globe2, Quote, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function LegacyPage() {
  const timeline = [
    {
      year: "1967",
      title: "The Beginning",
      desc: "Shri Indrajeet Bhutani founds Standard Engineers in Ahmedabad. Recognising a critical gap in India's industrial safety landscape, he begins manufacturing Valve Guards and Caps. We become one of the first domestic manufacturers.",
      icon: Clock,
      align: "left"
    },
    {
      year: "1970s–1990s",
      title: "The Growth Years",
      desc: "The SE brand becomes synonymous with quality valve protection. The product range expands to cover multiple cylinder types, growing alongside India's rapidly expanding industrial and medical gas sector.",
      icon: Factory,
      align: "right"
    },
    {
      year: "Second Gen",
      title: "Entry of Mr. Rajan Bhutani",
      desc: "Mr. Rajan Bhutani joins the family business, bringing a professional approach to operations and quality management, transitioning towards modern manufacturing practices.",
      icon: Users,
      align: "left"
    },
    {
      year: "Restructuring",
      title: "Standard Gasshield Pvt. Ltd.",
      desc: "The company is restructured and incorporated as Standard Gasshield Pvt. Ltd., reflecting the shield of protection we provide and our expanded scope.",
      icon: Shield,
      align: "right"
    },
    {
      year: "Quality mark",
      title: "ISO Certification",
      desc: "Achieves ISO 9001:2015 Certification from TÜV NORD, validating that our products are built to the highest global quality standards.",
      icon: Award,
      align: "left"
    },
    {
      year: "Third Gen",
      title: "Mr. Devanshu Bhutani",
      desc: "Mr. Devanshu Bhutani joins, upgrading the Sanand facility with CNC Turning, MIG Welding & Automation. The portfolio expands to Cryogenic equipment and Comprehensive Gas Solutions.",
      icon: Globe2,
      align: "right"
    },
    {
      year: "Today",
      title: "Serving the Nation, Still",
      desc: "Over 55 years later, we continue to serve India's gas industry. Committed to the founding mission: ensuring safety, every single day.",
      icon: Shield,
      align: "left"
    }
  ];

  const milestones = [
    { title: "1967", text: "Company founded by Shri Indrajeet Bhutani as Standard Engineers, Ahmedabad" },
    { title: "First Products", text: "Valve Guards, Valve Caps, and Cylinder Handling Accessories — manufactured domestically" },
    { title: "Expansion", text: "Product range extended to cover all major industrial gas cylinder types" },
    { title: "Restructuring", text: "Company incorporated as Standard Gasshield Pvt. Ltd. — signalling a new era" },
    { title: "ISO 9001:2015", text: "TÜV NORD Certification achieved — formal recognition of quality excellence" },
    { title: "Manufacturing", text: "New facility at Sanand with CNC, Powder Coating & Automation" },
    { title: "Today", text: "Pan-India supplier of gas safety products, under third-generation leadership" },
  ];

  return (
    <div className="bg-[#060608] min-h-screen selection:bg-[#E63630] selection:text-white pb-32">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif tracking-tight leading-[1.1] pb-6 text-white" style={{ fontFamily: "'Gambarino', serif" }}>
              Our <span className="text-[#E63630] italic">Legacy</span> & History
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <div className="w-24 h-1 bg-[#E63630] mx-auto mb-8"></div>
            <p className="max-w-4xl mx-auto text-white/70 font-sans text-xl md:text-3xl leading-relaxed mt-4 font-light italic">
              "Some companies are built for profit. <br className="hidden md:block"/> Standard Gasshield was built for purpose."
            </p>
            <p className="max-w-3xl mx-auto text-white/60 font-sans text-lg md:text-xl leading-relaxed mt-8">
              This is the story of a man, a mission, and more than half a century of service to India's gas industry.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Founder Tribute */}
      <section className="py-24 md:py-32 relative z-10 bg-black/40 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E63630]/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <Quote className="w-16 h-16 text-[#E63630]/40 mb-8" />
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                In Honour of Shri Indrajeet Bhutani <br />
                <span className="text-[#E63630] text-2xl md:text-4xl block mt-4 italic">The Man Who Made India's Gas Industry Safer</span>
              </h2>
              
              <div className="space-y-6 text-white/70 text-lg md:text-xl leading-relaxed font-sans max-w-4xl relative z-10">
                <p>
                  Before Shri I.G. Bhutani founded Standard Engineers in 1967, safe cylinder handling equipment was either unavailable or unaffordable for most Indian industries. He changed that.
                </p>
                <p>
                  With determination and purpose, he built a company that manufactured protective products accessible to gas companies, industrial plants, and workers across the country. His contribution was not measured in profits. It was measured in accidents prevented, lives protected, and a safer industrial India.
                </p>
                <p>
                  Today, as Standard Gasshield Pvt. Ltd. serves the nation under the third generation of the Bhutani family, his legacy lives in every product that leaves our factory floor.
                </p>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-2xl text-white font-bold tracking-widest uppercase" style={{ fontFamily: "'Gambarino', serif" }}>
                    "Service of the Nation, Since 1967."
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. The Timeline */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>Timeline of Legacy</h2>
            </RevealOnScroll>
          </div>

          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E63630]/50 to-transparent -translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, idx) => (
                <RevealOnScroll key={idx} delay={`delay-${(idx % 3) * 100}`}>
                  <div className={`flex flex-col md:flex-row items-center justify-between group ${item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Content */}
                    <div className="w-full md:w-5/12">
                      <div className={`bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#E63630]/50 transition-colors ${item.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                        <div className={`mb-4 flex ${item.align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-[#E63630] font-mono tracking-widest text-sm font-bold uppercase">{item.year}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>{item.title}</h3>
                        <p className="text-white/60 leading-relaxed text-base">{item.desc}</p>
                      </div>
                    </div>

                    {/* Node / Center icon */}
                    <div className="hidden md:flex w-2/12 justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-[#060608] border-2 border-[#E63630]/30 flex items-center justify-center relative z-10 group-hover:border-[#E63630] group-hover:bg-[#E63630]/10 transition-colors shadow-[0_0_30px_rgba(230,54,48,0)] group-hover:shadow-[0_0_30px_rgba(230,54,48,0.3)]">
                        <item.icon className="w-6 h-6 text-[#E63630]" />
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Milestones Grid */}
      <section className="py-24 bg-[#E63630] relative overflow-hidden rounded-[3rem] mx-4 lg:mx-8">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>Company Milestones</h2>
              <p className="text-white/90 text-xl font-medium">A glance at our journey of growth and excellence.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {milestones.map((ms, idx) => (
              <RevealOnScroll key={idx} delay={`delay-${(idx % 4) * 100}`}>
                <div className="bg-black/20 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full hover:bg-black/30 transition-colors">
                  <h4 className="text-white font-bold text-xl uppercase tracking-widest mb-4 font-mono">{ms.title}</h4>
                  <p className="text-white/90 leading-relaxed">{ms.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
