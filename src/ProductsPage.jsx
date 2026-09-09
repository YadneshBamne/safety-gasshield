import React, { useState } from 'react';
import { 
  Shield, Package, Truck, Layers, Wrench, PlusCircle, Factory, ChevronRight, 
  Activity, ThermometerSnowflake, Flame, ArrowRight, CheckCircle2, ShieldCheck, 
  AlertCircle, Download, FileText, Anchor
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ProductsPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { id: 'vpg', name: 'Valve Protection Guards', icon: Shield },
    { id: 'dome', name: 'Dome Type Caps', icon: Package },
    { id: 'trolleys', name: 'Cylinder Trolleys', icon: Truck },
    { id: 'skids', name: 'Pallets & Skids', icon: Layers },
    { id: 'accessories', name: 'Accessories', icon: Wrench },
    { id: 'value', name: 'Value Addition Products', icon: PlusCircle },
    { id: 'gas', name: 'Comprehensive Gas Solutions', icon: Factory },
  ];

  const renderCategoryContent = () => {
    switch(activeTab) {
      case 0:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Primary Protection</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Valve Protection Guards (VPGs)
              </h2>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-4xl">
                The most critical safety accessory for pressurized cylinders. Our VPGs shield the valve from catastrophic impact damage during handling, transit, and filling operations across all industrial gas categories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "SE Parallel Series (Oxygen & Inerts)",
                  desc: "Engineered for high-pressure industrial cylinders with spindle-operated valves, delivering maximum impact resilience and rigid neck mounting.",
                  badge: "Industrial Oxygen (Black)"
                },
                {
                  title: "SE Conical Series (CO₂ & Multi-Gas)",
                  desc: "Tapered guard profile optimized for cylinders with wheel-operated (C-Type, D-Type, O-Type) valves, allowing unrestricted handwheel operation.",
                  badge: "Industrial CO₂ (Green Grey)"
                },
                {
                  title: "SE–DA Series (Dissolved Acetylene)",
                  desc: "Heavy-gauge reinforced guard architecture designed specifically for welded and seamless dissolved acetylene cylinders.",
                  badge: "Industrial Nitrogen (Pewter)"
                },
                {
                  title: "SE–DA Conical Range (Argon & Welded)",
                  desc: "Robust conical guards tailored for high-volume argon and wheel-operated acetylene vessels requiring rapid manifold access.",
                  badge: "Industrial Argon (Peacock Blue)"
                },
                {
                  title: "SE Hydrogen & Fire Safety Guards",
                  desc: "Specially engineered protective collars for high-risk hydrogen cylinder necks and 47L+ industrial fire extinguishing installations.",
                  badge: "Hydrogen & Fire (Signal Red)"
                },
                {
                  title: "SE Refrigerant & Enclosed Guards",
                  desc: "Special enclosed designs engineered for refrigerant gas containers, dual-valve cylinder systems, and integrated regulator assemblies.",
                  badge: "Specialty & HVAC Gases"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#E63630]/50 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] group-hover:bg-[#E63630] group-hover:text-white transition-colors shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-secondary group-hover:text-[#E63630] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Complete Enclosure</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Dome Type Caps
              </h2>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-4xl">
                Unlike open-frame guards, the SE Dome Cap covers the entire valve head to offer complete 360-degree shielding against moisture, yard debris, and severe transit shocks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] mb-4">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Gambarino', serif" }}>
                    SE Dome Cap Enclosure
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-6 font-sans">
                    Precision threaded dome caps engineered for all standard high-pressure industrial, medical, and specialty gas cylinders.
                  </p>
                </div>
                <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                    <span>Universally compatible across all industrial gas cylinder sizes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                    <span>Standardized thread profile with reinforced drop-proof steel</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] mb-4">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Gambarino', serif" }}>
                    Industrial Color Coding
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-6 font-sans">
                    Available in durable powder-coated color finishes in strict alignment with IS/BIS and international gas identification standards.
                  </p>
                </div>
                <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                    <span>Oxygen (Black), Nitrogen (Pewter), CO₂ (Green Grey)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                    <span>Argon (Peacock Blue), Hydrogen (Signal Red), Custom</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E63630]/10 border border-[#E63630]/30 rounded-2xl p-6 md:p-8 flex items-start gap-5">
              <div className="w-10 h-10 rounded-xl bg-[#E63630]/20 flex items-center justify-center text-[#E63630] shrink-0 mt-1">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#E63630] font-bold text-base uppercase tracking-widest mb-1">
                  Safety Precaution
                </h4>
                <p className="text-white/80 leading-relaxed text-sm md:text-base font-sans">
                  The valve guard or dome cap must never be removed from the cylinder during filling, transportation, or long-term storage. Always verify safety procedures before detaching.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Plant Logistics</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Cylinder Handling Trolleys
              </h2>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-4xl">
                Eliminate dangerous dragging, rolling, or valve-lifting. Our ergonomic trolleys ensure stable, zero-tip transit across workshops, plants, and medical gas wards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Single Cylinder Trolleys",
                  desc: "Ergonomic powder-coated trolleys with heavy-duty safety chains, designed for swift and stable single-cylinder maneuvering."
                },
                {
                  title: "Double Cylinder Trolleys",
                  desc: "Dual-cylinder carrier engineered for balanced transport of gas combinations like Oxy-Acetylene with puncture-resistant industrial wheels."
                },
                {
                  title: "Lay-Down & Utility Trolleys",
                  desc: "Engineered for low-strain horizontal cylinder placement and seamless transition into vertical storage racks."
                }
              ].map((trolley, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#E63630]/50 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] group-hover:bg-[#E63630] group-hover:text-white transition-colors mb-5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-secondary">{trolley.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-sans">{trolley.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Bulk Transport & Storage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Pallets & Skids
              </h2>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-4xl">
                Engineered for bulk multi-cylinder movement and safe storage. Certified heavy-duty structural designs tailored to forklift, crane, and manifold operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Hydrogen Cylinder Skids",
                  desc: "Specialist certified skids engineered for high-pressure hydrogen cascade storage, secure manifold connections, and offshore transit."
                },
                {
                  title: "Multi-Cylinder Industrial Pallets",
                  desc: "Heavy-duty steel pallets built for grouping multiple cylinders, equipped with integrated safety gates and forklift channels."
                },
                {
                  title: "Custom Skid Systems",
                  desc: "Custom-manufactured skid frames fabricated to client dimensional and load-bearing requirements with dedicated crane lifting lugs."
                }
              ].map((skid, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#E63630]/50 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] group-hover:bg-[#E63630] group-hover:text-white transition-colors mb-5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-secondary">{skid.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-sans">{skid.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Precision Components</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Accessories
              </h2>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-4xl">
                A comprehensive portfolio of precision-machined replacement hardware, keys, and certification accessories for industrial gas systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { title: "Cylinder Valve Spindle", desc: "Precision CNC-machined replacement spindles ensuring leak-tight valve operation." },
                { title: "Standard Forged Spindle Key", desc: "Heavy-duty forged operating keys (O₂ & CO₂) for secure, slip-free valve control." },
                { title: "Cylinder Forged Neck Ring", desc: "High-strength forged neck rings for reliable guard and cap seating." },
                { title: "Cylinder Testing Ring", desc: "Specialized rings utilized during hydrostatic testing to ensure BIS compliance." },
                { title: "Cylinder Valves", desc: "Full spectrum of certified valves for industrial, medical, and ultra-high-purity gases." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-7 flex gap-5 hover:border-[#E63630]/50 transition-colors group">
                  <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center flex-shrink-0 text-[#E63630] group-hover:bg-[#E63630] group-hover:text-white transition-colors">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 font-secondary">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Advanced Engineering</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Value Addition Products
              </h2>
              <p className="text-white/70 font-sans text-lg leading-relaxed max-w-4xl">
                High-performance auxiliary components engineered for cryogenic pipelines, pressure management, and specialized gas distribution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Thermal Pressure Relief Valve", desc: "Rated at 15 Bar — automatic relief prevents over-pressurization in gas lines." },
                { title: "Cryogenic Hoses & Connectors", desc: "Flexible hoses engineered for liquid nitrogen, liquid oxygen, and LNG transfer." },
                { title: "Cryogenic Globe Valve", desc: "Precision engineered valves designed for extreme cryogenic temperature service." },
                { title: "Cryo Regulator Cum Economizer", desc: "Dual system designed to improve distribution efficiency and reduce gas boil-off." },
                { title: "Liquid Dura Cylinders", desc: "Heavy-duty cryogenic liquid cylinders for high-volume storage and dispensing." },
                { title: "Cylinder Connection Pig Tails", desc: "Flexible high-pressure pigtail connectors for safe, leak-free manifold coupling." },
                { title: "Empty New Cylinders", desc: "Supplied on request for industrial, medical, and specialty gas filling requirements." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E63630]/50 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] group-hover:bg-[#E63630] group-hover:text-white transition-colors mb-4">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-secondary">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-10 transition-opacity duration-500 animate-in fade-in">
            <div>
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Total Solutions</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                Comprehensive Gas Solutions
              </h2>
              <p className="text-white/70 font-sans text-lg leading-relaxed max-w-4xl">
                In addition to manufacturing equipment, Standard Gasshield supplies complete gas solutions for industrial, commercial, and laboratory use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/30 transition-colors">
                <Factory className="w-10 h-10 text-[#E63630] mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Gambarino', serif" }}>Industrial Gases</h3>
                <p className="text-white/60 text-base leading-relaxed font-sans">
                  Reliable supply of Oxygen (O₂), Nitrogen (N₂), Argon (Ar), Carbon Dioxide (CO₂), Hydrogen (H₂), and Dissolved Acetylene (C₂H₂).
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-blue-500/50 transition-colors">
                <ThermometerSnowflake className="w-10 h-10 text-blue-400 mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Gambarino', serif" }}>Refrigerant Gases</h3>
                <p className="text-white/60 text-base leading-relaxed font-sans">
                  Complete line of R134a, R404A, R410A, R22, R32, Ammonia (NH₃), and portable aerosol refill canisters.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-purple-500/50 transition-colors">
                <Activity className="w-10 h-10 text-purple-400 mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Gambarino', serif" }}>Specialty & Mixed Gases</h3>
                <p className="text-white/60 text-base leading-relaxed font-sans">
                  Helium (He), certified calibration gas standards, zero air, custom laboratory mixtures, and medical-grade gases.
                </p>
              </div>

              <div className="bg-[#E63630]/10 border border-[#E63630]/30 rounded-2xl p-7 hover:bg-[#E63630]/20 transition-colors">
                <Flame className="w-10 h-10 text-[#E63630] mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Gambarino', serif" }}>Fire Safety & Services</h3>
                <p className="text-white/80 text-base leading-relaxed font-sans">
                  Complete fire cylinder supply, periodic hydrostatic testing services, and certified cylinder maintenance.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#060608] min-h-screen selection:bg-[#E63630] selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif tracking-tight leading-[1.1] pb-6 text-white" style={{ fontFamily: "'Gambarino', serif" }}>
              Our <span className="text-[#E63630] italic">Products</span> & Solutions
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <div className="w-24 h-1 bg-[#E63630] mx-auto mb-8"></div>
            <p className="max-w-4xl mx-auto text-white/70 font-sans text-lg md:text-2xl leading-relaxed mt-4 font-light">
              At Standard Gasshield, we manufacture a comprehensive range of cylinder handling equipment and gas safety accessories — each designed to meet the demands of India's gas industry with precision, durability, and unwavering safety compliance.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Interactive Products Dashboard */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Sidebar Categories */}
            <div className="w-full lg:w-1/4">
              <div className="lg:sticky lg:top-32 space-y-3">
                <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-6 block px-4">
                  Categories
                </span>
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      activeTab === idx 
                        ? 'bg-[#E63630] text-white shadow-[0_10px_30px_rgba(230,54,48,0.25)] scale-[1.02]' 
                        : 'bg-transparent text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <cat.icon className={`w-5 h-5 ${activeTab === idx ? 'text-white' : 'text-[#E63630]'}`} />
                      <span className="font-bold text-sm md:text-base font-secondary">{cat.name}</span>
                    </div>
                    {activeTab === idx && <ChevronRight className="w-5 h-5 opacity-100" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="w-full lg:w-3/4">
              <div className="min-h-[550px] bg-black/30 rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
                {renderCategoryContent()}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Gas Safety Awareness Section (Moved from HomePage as per Slide 4) */}
      <section className="py-24 md:py-32 bg-[#060608] relative z-10 border-t border-white/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <RevealOnScroll>
                <span className="text-[#E63630] text-sm font-semibold tracking-[0.3em] uppercase font-secondary mb-4 block">
                  Safety Philosophy
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-6 tracking-wide leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                  Treat Every Cylinder With Respect — It Is A Sleeping Giant.
                </h2>
                <p className="text-white/70 font-sans text-lg leading-relaxed mb-8">
                  At Standard Gasshield, safety is not just our business — it is our belief. We are committed to educating the industry on safe gas cylinder handling practices that prevent accidents, save lives, and protect property.
                </p>
                <div className="flex items-center gap-4 text-white/50 text-sm font-mono uppercase tracking-wider">
                  <span className="w-3 h-3 rounded-full bg-[#E63630] animate-pulse"></span>
                  Adheres to BIS & International Handling Directives
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RevealOnScroll delay="delay-100">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                  <h3 className="text-[#4ADE80] font-bold text-xl mb-6 font-secondary uppercase tracking-widest flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]"></div> Key Do's
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Always use proper cylinder handling trolleys",
                      "Store cylinders upright and strap them securely",
                      "Use protective valve guards or caps at all times",
                      "Ensure personnel are trained in cylinder handling",
                      "Handle cylinders as per IS standards approved by BIS"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-sans leading-relaxed">
                        <ShieldCheck className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay="delay-200">
                <div className="bg-[#E63630]/10 border border-[#E63630]/30 rounded-2xl p-8 h-full">
                  <h3 className="text-[#E63630] font-bold text-xl mb-6 font-secondary uppercase tracking-widest flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E63630]"></div> Key Don'ts
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Never roll or drop cylinders on the ground",
                      "Never lift a cylinder by its valve assembly",
                      "Never use leaking or damaged gas cylinders",
                      "Never use wrong fittings — always verify specifications"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-sans leading-relaxed">
                        <AlertCircle className="w-5 h-5 text-[#E63630] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Request a Brochure Section (Slide 7) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden text-[#060608]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#060608] rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E63630]/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="w-full lg:w-7/12 relative z-10">
              <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Official Catalog & Specs
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>
                Request Our Complete <br />
                <span className="text-[#E63630] italic">Product Catalogue</span>
              </h2>
              <p className="text-white/70 text-base md:text-xl font-sans leading-relaxed mb-8 max-w-xl font-light">
                Get instant access to complete dimensional drawings, BIS compliance certifications, material grades, and quotation guidance tailored to your operational scale.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-mono">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" /> Instant PDF Download
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" /> Full Product Portfolio
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-end relative z-10">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm w-full max-w-md text-center flex flex-col items-center">
                <FileText className="w-16 h-16 text-[#E63630] mb-6" />
                <h4 className="text-xl font-bold text-white mb-2 font-secondary">Ready to explore?</h4>
                <p className="text-white/60 text-sm mb-8">
                  Filling the form will automatically lead to the download of the catalogue.
                </p>
                <button
                  onClick={() => setCurrentPage?.('brochure')}
                  className="w-full bg-[#E63630] hover:bg-white hover:text-black text-white py-4 px-8 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_10px_30px_rgba(230,54,48,0.35)] flex items-center justify-center gap-3 group"
                >
                  <span>Get Brochure</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
