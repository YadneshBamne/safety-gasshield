import React, { useState } from 'react';
import { Shield, Package, Truck, Layers, Wrench, PlusCircle, Factory, ChevronRight, Activity, ThermometerSnowflake, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ProductsPage() {
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
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Valve Protection Guards (VPGs)</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                The most critical safety accessory for any pressurised gas cylinder. They protect the valve — the most vulnerable component — from impact damage during handling, transportation, and storage. A damaged valve can lead to catastrophic gas release or explosion. Our SE Series guards are manufactured for all major cylinder types and gas categories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* 1.1 Parallel Series */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#E63630]/50 transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <span className="bg-[#E63630] text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Industrial Oxygen (Black)</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>SE Parallel Series</h3>
                <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">High Pressure Industrial Gas Cylinders with Spindle Operated Valves.</p>
                <div className="space-y-4 mt-auto">
                  {[
                    { name: "SE LITE", specs: "ID: 80mm | H: 105-112mm | W: 800g", thread: "W80 11 TPI" },
                    { name: "SE DURABLE", specs: "ID: 80mm | H: 105-112mm | W: 1Kg", thread: "W80 11 TPI" },
                    { name: "SE MIGHTY", specs: "ID: 80mm | H: 105-112mm | W: 1.05Kg", desc: "Heavy Clamp Set" }
                  ].map((item, i) => (
                    <div key={i} className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-[#E63630]/30 transition-colors">
                      <h4 className="text-[#E63630] font-bold mb-1 text-lg">{item.name}</h4>
                      <p className="text-white/80 text-sm font-mono tracking-wide">{item.specs}</p>
                      {item.thread && <p className="text-white/50 text-xs mt-2 uppercase tracking-wider">Thread: {item.thread}</p>}
                      {item.desc && <p className="text-white/50 text-xs mt-2 uppercase tracking-wider">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* 1.2 Conical Series */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#E63630]/50 transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <span className="bg-gray-600 text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Industrial CO₂ (Green Grey)</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>SE Conical Series</h3>
                <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">High Pressure Gas Cylinders with Wheel Operated (C/D/O-Type) Valves.</p>
                <div className="space-y-4 mt-auto">
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-[#E63630]/30 transition-colors">
                    <h4 className="text-white font-bold mb-4 text-lg">SE STALWART Range</h4>
                    <ul className="text-white/70 text-sm space-y-3 font-sans">
                      <li className="flex items-start gap-2"><strong className="text-[#E63630]">01:</strong> C-Type Top Wheel Side Outlet</li>
                      <li className="flex items-start gap-2"><strong className="text-[#E63630]">02:</strong> C-Type Side Wheel Top Outlet</li>
                      <li className="flex items-start gap-2"><strong className="text-[#E63630]">03:</strong> D-Type Top Wheel Side Outlet</li>
                      <li className="flex items-start gap-2"><strong className="text-[#E63630]">04:</strong> O-Type Top Wheel Side Outlet</li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-white/50 text-xs uppercase tracking-wider font-mono">ID 80mm | H 110-140mm | W 1.1-1.4Kg | W80 11 TPI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.3 DA Parallel Series */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#E63630]/50 transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <span className="bg-gray-400 text-black text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Industrial Nitrogen (Pewter)</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>SE–DA Parallel Series</h3>
                <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">Dissolved Acetylene Welded & Seamless Gas Cylinders.</p>
                <div className="space-y-4 mt-auto">
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-[#E63630]/30 transition-colors">
                    <p className="text-[#E63630] text-sm font-mono tracking-wider mb-4 pb-4 border-b border-white/10">ID: 89mm | H: 105-112mm | W80 11 TPI</p>
                    <ul className="text-white/80 text-sm space-y-4 font-sans">
                      <li className="flex items-center justify-between"><strong className="text-white font-bold">SE DA LITE</strong> <span className="text-white/50">1 Kg</span></li>
                      <li className="flex items-center justify-between"><strong className="text-white font-bold">SE DA STRONG</strong> <span className="text-white/50">1.3 Kg</span></li>
                      <li className="flex flex-col mt-2 pt-2"><strong className="text-[#E63630] font-bold mb-1">SE 1N10W</strong> <span className="text-white/60 text-xs">Special variant for Nitrogen/DA cylinders</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1.4 DA Conical Series */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#E63630]/50 transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Industrial Argon (Peacock Blue)</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>SE–DA Conical Series</h3>
                <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">For Dissolved Acetylene Welded and Seamless Gas Cylinders with Wheel Operated Valves.</p>
                <div className="space-y-4 mt-auto">
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-[#E63630]/30 transition-colors">
                    <h4 className="text-white font-bold mb-4 text-lg">SE DA GRAND Range</h4>
                    <ul className="text-white/80 text-sm space-y-4 font-sans">
                      <li className="flex items-center justify-between"><strong className="text-[#E63630] font-bold">01</strong> <span className="text-white/50 text-xs font-mono tracking-wider">ID 89mm | W: 1-1.4Kg</span></li>
                      <li className="flex items-center justify-between"><strong className="text-[#E63630] font-bold">02</strong> <span className="text-white/50 text-xs font-mono tracking-wider">ID 89-125mm | W: 1-1.4Kg</span></li>
                      <li className="flex items-center justify-between"><strong className="text-[#E63630] font-bold">03</strong> <span className="text-white/50 text-xs font-mono tracking-wider">ID 89-125mm | W: 1.5+ Kg</span></li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-white/50 text-xs uppercase tracking-wider font-mono">H: 110-140mm | W80 11 TPI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.5 Special */}
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#E63630]/50 transition-colors">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="bg-red-600 text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Hydrogen (Signal Red)</span>
                  <span className="bg-white/20 text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">Special Applications</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>SE–Hydrogen, Fire Safety & Refrigerant</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {[
                     { name: "SE H2 01", desc: "Hydrogen with Neck Ring", spec: "ID: 80mm | W80 11 TPI" },
                     { name: "SE H2 02", desc: "Hydrogen without Neck Ring", spec: "ID: Free Size | No Thread" },
                     { name: "SE COOL", desc: "Refrigerant Gases", spec: "ID: 80mm | No Thread" },
                     { name: "SE FIRE", desc: "47L+ Fire Extinguishers", spec: "ID: 80mm | W80 11 TPI" },
                     { name: "SE MASSE", desc: "Enclosed VPG with Valve", spec: "Custom specifications" }
                   ].map((item, idx) => (
                     <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-[#E63630]/30 transition-colors flex flex-col h-full">
                       <h4 className="text-[#E63630] font-bold text-xl mb-2">{item.name}</h4>
                       <p className="text-white/80 text-sm mb-4 leading-relaxed">{item.desc}</p>
                       <p className="text-white/40 text-xs font-mono tracking-wider mt-auto">{item.spec}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Dome Type Caps</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                The Dome Type Cap provides complete, enclosed protection for gas cylinder valves. Unlike open-frame guards, the dome cap covers the entire valve head, offering maximum protection during transportation, filling, and storage.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-2xl">
              <div className="w-full lg:w-1/2">
                <div className="w-16 h-16 bg-[#E63630]/20 rounded-2xl flex items-center justify-center mb-8">
                  <Package className="w-8 h-8 text-[#E63630]" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Gambarino', serif" }}>SE DOME</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-[#E63630] flex-shrink-0 mt-0.5" /> <div className="text-white/80 text-lg"><strong className="text-white">ID Range:</strong> 80 mm – 125 mm</div></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-[#E63630] flex-shrink-0 mt-0.5" /> <div className="text-white/80 text-lg"><strong className="text-white">Thread:</strong> W80 11 TPI</div></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-[#E63630] flex-shrink-0 mt-0.5" /> <div className="text-white/80 text-lg"><strong className="text-white">Application:</strong> Suitable for all types of gas cylinders</div></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-[#E63630] flex-shrink-0 mt-0.5" /> <div className="text-white/80 text-lg"><strong className="text-white">Colour Options:</strong> Red, White, Black, custom compliance colours</div></li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-[#E63630]/10 border border-[#E63630]/30 p-10 rounded-3xl shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E63630]/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <h4 className="text-[#E63630] font-bold text-xl uppercase tracking-widest mb-4 flex items-center gap-3">
                    <Activity className="w-6 h-6"/> Safety Note
                  </h4>
                  <p className="text-white/80 leading-relaxed text-lg">
                    The valve guard or dome cap must not be removed from the cylinder during filling, transportation, operation, or storage. Always ensure absolute safety before any removal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
             <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Cylinder Handling Trolleys</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                Safe cylinder handling requires the right equipment. Rolling or dragging cylinders, or lifting them by the valve, are among the most dangerous practices in the gas industry. Our cylinder trolleys are designed to eliminate these risks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 hover:border-[#E63630]/50 transition-all duration-300 group">
                 <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#E63630]/20 transition-colors">
                   <Truck className="w-10 h-10 text-[#E63630]" />
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>Single & Double Trolleys</h3>
                 <p className="text-white/60 mb-8 text-lg leading-relaxed">Stable, ergonomic, and reliable transport solutions for factories, hospitals, laboratories, and filling stations.</p>
                 <div className="bg-black/30 p-6 rounded-2xl border border-white/5">
                   <ul className="text-white/80 space-y-4 font-sans text-base">
                     <li className="flex justify-between border-b border-white/5 pb-2"><strong className="text-white font-medium">Finish</strong> <span className="text-white/60">Powder Coated</span></li>
                     <li className="flex justify-between border-b border-white/5 pb-2"><strong className="text-white font-medium">Types</strong> <span className="text-white/60">Single, Double, Lay-down</span></li>
                     <li className="flex justify-between"><strong className="text-white font-medium">Compliance</strong> <span className="text-[#E63630] text-right max-w-[200px]">Keeps cylinders upright & restrained</span></li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Pallets & Skids</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                For bulk storage and multi-cylinder transport, our custom-manufactured cylinder pallets and skids provide the structural integrity and safety required for high-pressure gas cylinders.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                 <div className="flex justify-between items-start mb-8">
                   <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Gambarino', serif" }}>Cylinder Skids</h3>
                   <Layers className="w-10 h-10 text-[#E63630] opacity-50 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <p className="text-white/70 leading-relaxed text-lg mb-6">Manufactured as per customer requirement. We are specialist manufacturers of Hydrogen Cylinder Skids for high-pressure hydrogen storage and transport.</p>
                 <span className="inline-block text-xs uppercase tracking-widest text-[#E63630] font-bold border border-[#E63630]/30 px-4 py-2 rounded-full">Custom Configuration</span>
               </div>
               
               <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                 <div className="flex justify-between items-start mb-8">
                   <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Gambarino', serif" }}>Cylinder Pallets</h3>
                   <Layers className="w-10 h-10 text-[#E63630] opacity-50 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <p className="text-white/70 leading-relaxed text-lg mb-6">Manufactured as per customer requirement. Suitable for grouping multiple cylinders for safe storage and forklift handling.</p>
                 <span className="inline-block text-xs uppercase tracking-widest text-[#E63630] font-bold border border-[#E63630]/30 px-4 py-2 rounded-full">Bulk Storage</span>
               </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Accessories</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                We supply a comprehensive range of critical cylinder accessories for the gas industry:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { title: "Cylinder Valve Spindle", desc: "Precision-machined replacement spindles for gas cylinder valves." },
                { title: "Standard Forged Spindle Key", desc: "Heavy-duty forged keys (O₂ & CO₂) for operating cylinder valves safely." },
                { title: "Cylinder Forged Neck Ring", desc: "Precision-forged neck rings for cylinder valve seating and protection." },
                { title: "Cylinder Testing Ring", desc: "Used during hydrostatic testing — ensures compliance with periodic testing requirements." },
                { title: "Cylinder Valve", desc: "Wide range of cylinder valves for industrial, medical, and specialty gas applications." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#E63630]/50 transition-colors group">
                  <div className="w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E63630]/20 transition-colors">
                    <Wrench className="w-7 h-7 text-[#E63630]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Value Addition Products</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                Beyond our core cylinder handling range, we offer an extended portfolio of premium gas industry products:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Thermal Pressure Relief Valve", desc: "Rated at 15 Bar — provides automatic pressure relief to prevent over-pressurisation." },
                { title: "Cryogenic Hoses & Connectors", desc: "Flexible hoses engineered for cryogenic service (Liquid N₂, O₂, LNG)." },
                { title: "Cryogenic Globe Valve", desc: "Precision valves designed for cryogenic temperature service." },
                { title: "Cryo Regulator Cum Economizer", desc: "Combined system improves efficiency and reduces cryogenic gas wastage." },
                { title: "Liquid Dura Cylinder", desc: "Heavy-duty liquid gas storage cylinders for cryogenic applications." },
                { title: "Cylinder Connection Pig Tails", desc: "Flexible pigtail connectors for safe, leak-free cylinder-to-manifold connections." },
                { title: "Empty New Cylinders", desc: "Available on request — suitable for industrial, medical, and specialty gas." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-[#E63630]/10 hover:border-[#E63630]/30 transition-all duration-300">
                  <h4 className="text-[#E63630] font-bold text-xl mb-4">{item.title}</h4>
                  <p className="text-white/70 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-12 transition-opacity duration-500 animate-in fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Gambarino', serif" }}>Comprehensive Gas Solutions</h2>
              <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                In addition to equipment manufacturing, Standard Gasshield offers the supply of a complete range of gases for diverse industrial and commercial applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 hover:border-gray-400/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gray-500/10 blur-3xl rounded-full"></div>
                <Factory className="w-12 h-12 text-gray-400 mb-8" />
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>Industrial Gases</h3>
                <p className="text-white/60 text-lg leading-relaxed">Oxygen (O₂), Nitrogen (N₂), Argon (Ar), Carbon Dioxide (CO₂), Hydrogen (H₂), Acetylene (C₂H₂)</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full"></div>
                <ThermometerSnowflake className="w-12 h-12 text-blue-400 mb-8" />
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>Refrigerant Gases</h3>
                <p className="text-white/60 text-lg leading-relaxed">R134a, R404A, R410A, R22, R32, Ammonia (NH₃) & Aerosol Cans (R134a, R600, R290, R32, R410, R438 & Hydrocarbons)</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 hover:border-purple-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full"></div>
                <Activity className="w-12 h-12 text-purple-400 mb-8" />
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>Specialty & Mixed Gases</h3>
                <p className="text-white/60 text-lg leading-relaxed">Helium (He), Calibration Gas Mixtures, Zero Air, Specialty Gas Blends, Medical Gases</p>
              </div>
              <div className="bg-[#E63630]/10 border border-[#E63630]/30 rounded-3xl p-10 md:p-12 hover:bg-[#E63630]/20 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E63630]/20 blur-3xl rounded-full"></div>
                <Flame className="w-12 h-12 text-[#E63630] mb-8" />
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>Fire Safety & Services</h3>
                <p className="text-white/80 text-lg leading-relaxed">All types of fire cylinders and extinguishers. Professional Cylinder Testing Services to maintain integrity and longevity.</p>
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
      <section className="py-24 md:py-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            
            {/* Sidebar Categories */}
            <div className="w-full lg:w-1/4">
              <div className="lg:sticky lg:top-32 space-y-3">
                <span className="text-[#E63630] text-sm font-bold tracking-[0.3em] uppercase mb-8 block px-4">
                  Categories
                </span>
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      activeTab === idx 
                        ? 'bg-[#E63630] text-white shadow-[0_10px_30px_rgba(230,54,48,0.2)] scale-105' 
                        : 'bg-transparent text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <cat.icon className={`w-5 h-5 ${activeTab === idx ? 'text-white' : 'text-[#E63630]'}`} />
                      <span className="font-bold text-sm md:text-lg font-secondary">{cat.name}</span>
                    </div>
                    {activeTab === idx && <ChevronRight className="w-5 h-5 opacity-100" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="w-full lg:w-3/4">
              <div className="min-h-[600px] bg-black/20 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/5">
                {renderCategoryContent()}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
