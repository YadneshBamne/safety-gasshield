import React from 'react';
import { Package, Shield, Settings, AlertCircle, TrendingUp } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ProductsPage() {
  const categories = [
    {
      title: "Valve Protection Guards",
      desc: "Parallel, Conical, DA, and Fire Safety variants designed for cylinder protection.",
      icon: Shield
    },
    {
      title: "Cylinder Caps",
      desc: "Dome-type caps for impact protection and safe storage.",
      icon: Package
    },
    {
      title: "Handling Equipment",
      desc: "Cylinder trolleys, pallets, and skids for safe transportation and logistics.",
      icon: Settings
    },
    {
      title: "Accessories",
      desc: "Valves, regulators, hoses, connectors, and supporting components.",
      icon: TrendingUp
    },
    {
      title: "Value-Added Solutions",
      desc: "Cryogenic products, pressure relief systems, and customized safety components.",
      icon: AlertCircle
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-black py-24 text-center border-b border-[#E63630]/20">
        <RevealOnScroll>
          <h1 className="text-5xl md:text-7xl font-primary italic font-medium text-white mb-6 max-w-5xl mx-auto">
            Complete Range of <span className="text-[#E63630]">Gas Safety Solutions</span>
          </h1>
          <p className="text-white/80 text-xl font-secondary font-medium mt-6">
            Designed for high-pressure environments. Built for durability. Engineered for safety.
          </p>
        </RevealOnScroll>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <RevealOnScroll key={idx} delay={`delay-${(idx % 3) * 100}`}>
                <div className="bg-[#f4f4f5] border border-gray-200 p-8 rounded-xl h-full flex flex-col hover:border-[#E63630] hover:shadow-2xl transition-all hover:-translate-y-1">
                  <cat.icon className="w-12 h-12 text-[#E63630] mb-6" />
                  <h3 className="text-2xl font-primary italic font-medium text-black mb-4">{cat.title}</h3>
                  <p className="text-[#111] font-secondary font-medium leading-relaxed">{cat.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
