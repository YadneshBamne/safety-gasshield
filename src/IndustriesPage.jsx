import React from 'react';
import { Factory, HardHat, Building2, Stethoscope } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function IndustriesPage() {
  const segments = [
    {
      title: "Gas Manufacturers (ASU Plants)",
      desc: "Supporting large-scale liquid gas production and distribution systems.",
      icon: Factory
    },
    {
      title: "Gas Refilling Units",
      desc: "Ensuring safe handling and operational efficiency.",
      icon: HardHat
    },
    {
      title: "Cylinder Manufacturers",
      desc: "Providing critical components for cylinder safety and performance.",
      icon: Building2
    },
    {
      title: "Medical Gas Suppliers",
      desc: "Delivering safety-focused solutions for healthcare environments.",
      icon: Stethoscope
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-black py-24 text-center border-b border-[#E63630]/20">
        <RevealOnScroll>
          <h1 className="text-5xl md:text-7xl font-primary italic font-medium text-white mb-6 max-w-5xl mx-auto">
            Supporting the Gas Industry at <span className="text-[#E63630]">Every Level</span>
          </h1>
        </RevealOnScroll>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {segments.map((seg, idx) => (
              <RevealOnScroll key={idx} delay={`delay-${(idx % 2) * 100}`}>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#861719]/10 p-4 rounded-xl shrink-0">
                    <seg.icon className="w-10 h-10 text-[#E63630]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-primary italic font-medium text-black mb-3">{seg.title}</h3>
                    <p className="text-[#111] font-secondary font-medium text-lg leading-relaxed">{seg.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
