import React from 'react';
import { ShieldCheck, Target, Shield, Globe2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-black py-24 text-center border-b border-[#E63630]/20">
        <h1 className="text-5xl md:text-7xl font-primary italic font-medium text-white mb-6">
          Safety-Driven Manufacturing <span className="text-[#E63630]">Since 1967</span>
        </h1>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <RevealOnScroll>
              <h3 className="text-[#E63630] font-secondary font-medium uppercase tracking-widest mb-2">About Content</h3>
              <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-black mb-6">
                Focused on One Thing — Safety
              </h2>
              <p className="text-[#111] text-lg mb-6 leading-relaxed font-secondary font-medium">
                Standard Engineers specializes in manufacturing safety solutions for high-pressure gas systems. Our products are designed to ensure safe handling, transportation, and operation of gas cylinders across industries.
              </p>
              <div className="mt-8 space-y-4">
                <p className="font-secondary font-medium text-black uppercase">We work with:</p>
                <ul className="list-disc pl-5 font-secondary font-medium text-[#111] space-y-2">
                  <li>Gas Manufacturers (ASU Plants & Liquid Units)</li>
                  <li>Gas Refilling Units</li>
                  <li>Cylinder Manufacturers</li>
                </ul>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay="delay-200">
               <div className="bg-[#111] rounded-xl p-10 h-full border border-[#E63630]/30 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Target className="w-40 h-40 text-white" />
                 </div>
                 <h3 className="text-[#E63630] font-secondary font-medium uppercase tracking-widest mb-2">Positioning Block</h3>
                 <h2 className="text-4xl font-primary italic font-medium text-white mb-6 relative z-10">
                   Built for Critical Environments
                 </h2>
                 <p className="text-white/80 text-lg leading-relaxed font-secondary font-medium relative z-10">
                   Our solutions are used in environments where reliability is essential — including medical gas systems, industrial operations, and large-scale gas distribution networks.
                 </p>
               </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#E63630] text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-white mb-12">
              Why Choose Us
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Designed for durability and long-term use" },
              { icon: Target, title: "Trusted by large-scale gas manufacturers" },
              { icon: Shield, title: "Precision manufacturing processes" },
              { icon: ShieldCheck, title: "Strong focus on safety and compliance" }
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={`delay-${idx * 100}`}>
                <div className="bg-[#861719]/30 p-8 rounded-xl border border-white/20 h-full flex flex-col items-center">
                  <item.icon className="w-12 h-12 text-white mb-6" />
                  <h4 className="text-xl font-secondary font-medium text-white">{item.title}</h4>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <RevealOnScroll>
             <Globe2 className="w-16 h-16 text-[#E63630] mx-auto mb-6" />
             <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-white mb-6">
               Growing International Footprint
             </h2>
             <p className="text-white/80 text-lg md:text-xl font-secondary font-medium max-w-3xl mx-auto leading-relaxed">
               We are actively expanding across South Asia and ASEAN markets, working with partners who demand consistent quality and safety-focused engineering.
             </p>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
