import React from 'react';
import { ChevronRight, Shield, Download, ShieldCheck, Factory, Globe2, Anchor, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import StorytellingIntro from './StorytellingIntro';

export default function HomePage({ setCurrentPage }) {
  return (
    <>
      <StorytellingIntro />

      {/* Hero Section */}
      {/* <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888081622-19e48ea112b0?q=80&w=2070&auto=format&fit=crop" 
            alt="Safety Engineering Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-[#861719]/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
          <RevealOnScroll>
            <span className="inline-block py-1 px-3 rounded-full bg-[#861719]/40 text-white font-secondary font-medium text-sm mb-6 border border-[#E63630]/30 tracking-widest uppercase">
              The Safety Backbone of Gas Infrastructure
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-primary italic font-medium text-white mb-6 leading-tight max-w-5xl mx-auto">
              Engineering Safety for <span className="text-[#E63630]">Gas Systems</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-200">
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-secondary font-medium leading-relaxed">
              Trusted by leading gas manufacturers, medical suppliers, and industrial partners — delivering durable safety solutions since 1967.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-300">
            <div className="flex justify-center">
              <button className="bg-[#E63630] hover:bg-[#861719] text-white px-8 py-4 rounded-md font-secondary font-medium text-lg transition-all shadow-[0_0_30px_rgba(230,54,48,0.4)] hover:shadow-[0_0_50px_rgba(134,23,25,0.6)] flex items-center justify-center gap-3">
                <Download className="h-5 w-5" /> Download Product Catalogue
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section> */}

      {/* Trust Strip */}
      {/* <section className="py-12 bg-[#861719] border-y border-[#E63630]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="px-4">
              <span className="block text-4xl font-primary italic font-medium text-white mb-2">1967</span>
              <span className="text-sm font-secondary font-medium text-white/80 uppercase tracking-widest">Established</span>
            </div>
            <div className="px-4">
              <span className="block text-4xl font-primary italic font-medium text-white mb-2">10M+</span>
              <span className="text-sm font-secondary font-medium text-white/80 uppercase tracking-widest">Safety Applications</span>
            </div>
            <div className="px-4">
              <span className="block text-4xl font-primary italic font-medium text-white mb-2">80%</span>
              <span className="text-sm font-secondary font-medium text-white/80 uppercase tracking-widest">Trusted by industry leaders</span>
            </div>
            <div className="px-4">
              <span className="block text-4xl font-primary italic font-medium text-white mb-2">ASEAN</span>
              <span className="text-sm font-secondary font-medium text-white/80 uppercase tracking-widest">Global Export</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Preview */}
      {/* <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll>
                <h3 className="text-[#E63630] font-secondary font-medium text-sm tracking-widest uppercase mb-2">About Us</h3>
                <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-black mb-6 leading-tight">
                  Built for Safety. <br/>Trusted at Scale.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay="delay-100">
                <p className="text-[#111] text-lg mb-6 leading-relaxed font-secondary font-medium">
                  We design and manufacture safety-critical components for high-pressure gas systems. 
                  From valve protection to cylinder handling, every product is built with one objective — to ensure safe operations where risk is constant.
                </p>
                <p className="text-[#111]/80 text-lg leading-relaxed font-secondary font-medium">
                  Our solutions are used by gas manufacturers, refilling units, and cylinder producers across India and international markets.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay="delay-200">
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="mt-8 bg-transparent border-2 border-[#E63630] text-[#E63630] hover:bg-[#E63630] hover:text-white px-8 py-3 rounded-md font-secondary font-medium transition-colors"
                >
                  Learn More About Us
                </button>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay="delay-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Engineering" 
                  className="rounded-lg shadow-2xl object-cover h-[500px] w-full grayscale contrast-125"
                />
                <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-lg shadow-xl hidden md:block max-w-xs border-l-4 border-[#E63630]">
                  <ShieldCheck className="h-10 w-10 text-[#E63630] mb-4" />
                  <p className="text-lg font-secondary font-medium">"Ensuring safe operations where risk is constant."</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section> */}

      {/* Services / Offerings */}
      {/* <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-[#E63630] font-secondary font-medium uppercase tracking-widest mb-2">Our Offerings</h3>
            <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-white mb-6">
              Safety Solutions Across the Gas Lifecycle.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Valve Protection Systems", desc: "Engineered guards and caps designed to protect high-pressure cylinders from damage and failure." },
              { icon: Factory, title: "Cylinder Handling Equipment", desc: "Trolleys, pallets, and skids built for safe movement and operational efficiency." },
              { icon: Anchor, title: "Gas Components & Accessories", desc: "Valves, regulators, hoses, and connectors designed for reliability in critical environments." },
              { icon: ShieldCheck, title: "Custom Safety Solutions", desc: "Tailored products built for specific industrial and medical applications." }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <RevealOnScroll key={idx} delay={`delay-${(idx + 1) * 100}`}>
                  <div className="bg-black rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-[#E63630]/50 group h-full flex flex-col hover:-translate-y-2">
                    <div className="w-16 h-16 bg-[#861719]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E63630] transition-colors border border-[#861719]/50">
                      <Icon className="h-8 w-8 text-[#E63630] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-2xl font-primary italic font-medium text-white mb-3">{service.title}</h4>
                    <p className="text-white/70 mb-8 flex-grow font-secondary font-medium">{service.desc}</p>
                    <button onClick={() => setCurrentPage('products')} className="flex items-center text-[#E63630] font-secondary font-medium group-hover:text-white transition-colors mt-auto w-fit">
                      View details <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Project / Impact Style */}
      {/* <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f4f5] hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <RevealOnScroll>
              <h3 className="text-[#E63630] font-secondary font-medium uppercase tracking-widest mb-2">Our Impact</h3>
              <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-black max-w-2xl leading-tight">
                Proven Where Safety Matters Most.
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <RevealOnScroll delay="delay-100">
               <p className="text-[#111] text-lg md:text-xl font-secondary font-medium leading-relaxed">
                 Our products are deployed across critical environments — from medical gas systems to industrial plants — where safety, durability, and precision are non-negotiable.
               </p>
             </RevealOnScroll>
             <RevealOnScroll delay="delay-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 hover:border-[#E63630] transition-colors">
                    <h4 className="text-3xl font-primary italic font-medium text-[#861719] mb-2">10M+</h4>
                    <p className="text-sm font-secondary font-medium text-black uppercase tracking-wider">Gas Cylinders Protected</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 hover:border-[#E63630] transition-colors">
                    <h4 className="text-3xl font-primary italic font-medium text-[#861719] mb-2">55+</h4>
                    <p className="text-sm font-secondary font-medium text-black uppercase tracking-wider">Years of Manufacturing</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 hover:border-[#E63630] transition-colors">
                    <h4 className="text-3xl font-primary italic font-medium text-[#861719] mb-2">PAN India</h4>
                    <p className="text-sm font-secondary font-medium text-black uppercase tracking-wider">+ International Presence</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 hover:border-[#E63630] transition-colors">
                    <h4 className="text-3xl font-primary italic font-medium text-[#861719] mb-2">Top 80%</h4>
                    <p className="text-sm font-secondary font-medium text-black uppercase tracking-wider">Market Trusted</p>
                  </div>
                </div>
             </RevealOnScroll>
          </div>
        </div>
      </section> */}

      {/* Process / Facility */}
      {/* <section className="py-24 bg-black relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl relative border-4 border-[#861719]">
                <img 
                  src="https://images.unsplash.com/photo-1565515268307-27bde66a8dbb?q=80&w=2070&auto=format&fit=crop" 
                  alt="Manufacturing" 
                  className="w-full h-full object-cover grayscale mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-[#861719]/10"></div>
              </div>
            </RevealOnScroll>
            <div>
              <RevealOnScroll delay="delay-100">
                <h3 className="text-[#E63630] font-secondary font-medium uppercase tracking-widest mb-2">Facility</h3>
                <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-white mb-6 leading-tight">
                  Precision Manufacturing. Consistent Performance.
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed font-secondary font-medium">
                  Every product is manufactured using advanced processes including CNC machining, automated welding, and powder coating — ensuring durability and reliability under demanding conditions.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section> */}

      {/* Safety Statement Signature */}
      {/* <section className="py-32 bg-[#E63630] relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#861719_0%,_#E63630_100%)]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <ShieldCheck className="w-20 h-20 text-white mx-auto mb-8 opacity-90" />
            <h2 className="text-5xl md:text-7xl font-primary italic font-medium text-white mb-8 leading-tight">
              Safety Is Not an Addition. It’s the Foundation.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-secondary font-medium leading-relaxed max-w-4xl mx-auto">
              In high-pressure gas environments, even small failures can have serious consequences. That’s why every product we build is designed to withstand real-world risks and perform without compromise.
            </p>
          </RevealOnScroll>
        </div>
      </section> */}

      {/* Global Section */}
      {/* <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <RevealOnScroll>
             <Globe2 className="w-16 h-16 text-[#E63630] mx-auto mb-6" />
             <h2 className="text-4xl md:text-5xl font-primary italic font-medium text-white mb-6">
               Expanding Across Global Markets
             </h2>
             <p className="text-white/80 text-lg md:text-xl font-secondary font-medium max-w-3xl mx-auto leading-relaxed">
               With a growing presence in South Asia and ASEAN regions — including the Philippines, Sri Lanka, and Bangladesh — we are building long-term partnerships with global gas manufacturers and suppliers.
             </p>
          </RevealOnScroll>
        </div>
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-primary italic font-medium text-black mb-6">
              Access Our Complete Product Range
            </h2>
            <p className="text-[#111] text-lg md:text-xl font-secondary font-medium mb-10 max-w-2xl mx-auto">
              Download our catalogue and explore solutions designed for safety, durability, and performance.
            </p>
            <button className="bg-[#E63630] hover:bg-[#861719] text-white px-10 py-5 rounded-md font-secondary font-medium text-lg transition-all shadow-[0_0_30px_rgba(230,54,48,0.4)] hover:shadow-[0_0_50px_rgba(134,23,25,0.6)]">
              Get Catalogue
            </button>
          </RevealOnScroll>
        </div>
      </section> */}
    </>
  );
}
