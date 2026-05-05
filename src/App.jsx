import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Shield, MapPin, Phone, Mail, ChevronRight
} from 'lucide-react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import ContactPage from './ContactPage';
import LegacyPage from './LegacyPage';
import { StorytellingIntro } from './StorytellingIntro';

const WaveformIcon = ({ isPlaying }) => (
  <div className="flex items-center justify-center gap-[3px] w-6 h-5">
    <style>{`
      @keyframes waveform {
        0%, 100% { transform: scaleY(0.4); }
        50% { transform: scaleY(1); }
      }
    `}</style>
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="w-[3px] bg-current rounded-full origin-bottom"
        style={{
          height: '100%',
          transform: isPlaying ? 'scaleY(0.4)' : 'scaleY(0.2)',
          animation: isPlaying ? `waveform 1s ease-in-out infinite alternate ${i * 0.15}s` : 'none',
          transition: 'transform 0.3s ease-out'
        }}
      />
    ))}
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [logoError, setLogoError] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleAudioState = (e) => setIsAudioPlaying(e.detail.isPlaying);
    window.addEventListener('audio-state-change', handleAudioState);
    return () => window.removeEventListener('audio-state-change', handleAudioState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setNavVisible(false); // scrolling down
      } else {
        setNavVisible(true);  // scrolling up
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'our legacy', label: 'Our Legacy' },
    { id: 'products', label: 'Products' },
  ];

  const handleNav = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-secondary font-medium text-black min-h-screen flex flex-col bg-[#f4f4f5] animate-[fadeIn_1s_ease-out]">
      
      <nav
        className={`fixed rounded-b-[2.5rem] top-0 left-0 right-0 z-100 transition-all duration-300 ease-in-out ${
          navVisible ? 'translate-y-0 ' : '-translate-y-full'
        } ${
          currentPage !== 'home' ? 'bg-[#f4f4f5] py-5  text-black ' : isScrolled ? 'bg-black/20 rounded-b-3xl backdrop-blur-sm py-5 text-white' : 'bg-transparent py-7 text-white'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav('home')}
            className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${
              currentPage !== 'home' ? 'text-black' : 'text-white'
            }`}
          >
            <span className="text-2xl font-primary italic font-bold tracking-tight uppercase">
              STD <span className="text-[#E63630]">Gas Shield</span>
            </span>
          </button>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className={`text-xs tracking-[0.15em] uppercase font-secondary font-semibold transition-colors ${
                  currentPage === link.id
                    ? 'text-[#E63630]'
                    : currentPage !== 'home' ? 'text-gray-900 hover:text-[#E63630]' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('toggle-audio'))}
              className={`p-2 transition-colors ${
                currentPage !== 'home' ? 'text-gray-900 hover:text-[#E63630]' : 'text-gray-200 hover:text-white'
              }`}
              aria-label="Toggle narration"
            >
              <WaveformIcon isPlaying={isAudioPlaying} />
            </button>

            <button
              type="button"
              onClick={() => handleNav('contact')}
              className={`text-xs tracking-[0.15em] uppercase font-secondary font-semibold transition-colors ${
                currentPage !== 'home' ? 'text-gray-900 hover:text-[#E63630]' : 'text-gray-200 hover:text-white'
              }`}
            >
              Contact Us
            </button>
            <a href="tel:+919811440081" className={`text-sm tracking-widest font-secondary font-semibold transition-colors ${
              currentPage !== 'home' ? 'text-gray-900 hover:text-[#E63630]' : 'text-white hover:text-gray-200'
            }`}>
              +91-9811440081
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('toggle-audio'))}
              className={`p-2 transition-colors ${
                currentPage !== 'home' ? 'text-gray-900 hover:text-[#E63630]' : 'text-gray-200 hover:text-white'
              }`}
              aria-label="Toggle narration"
            >
              <WaveformIcon isPlaying={isAudioPlaying} />
            </button>

            <button
              type="button"
              className={`p-2 transition-colors ${
                currentPage !== 'home' ? 'text-black hover:text-[#E63630]' : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer Overlay */}
      <div 
        className={`md:hidden fixed  inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto ' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <div 
        className={`md:hidden  rounded-l-[2.6rem] fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-zinc-950 z-[120] shadow-2xl flex flex-col px-8 pt-24 transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          className="absolute top-6 right-6 p-2 text-white hover:text-[#E63630] transition-colors"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>

        <div className="flex flex-col gap-8 mt-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className={`text-left text-2xl tracking-[0.1em] uppercase font-secondary font-bold transition-all duration-300 ${
                currentPage === link.id
                  ? 'text-[#E63630] translate-x-2'
                  : 'text-gray-300 hover:text-white hover:translate-x-2'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="w-full h-px bg-white/10 my-4" />

          <a href="tel:+919811440081" className="text-xl tracking-widest font-secondary font-bold text-white hover:text-[#E63630] transition-all duration-300">
            +91-9811440081
          </a>

          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="mt-4 bg-[#E63630] text-white py-4 px-6 rounded-full text-sm tracking-[0.15em] uppercase font-bold transition-colors shadow-lg shadow-[#E63630]/20 flex items-center justify-between"
          >
            Contact us <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content Hub */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'our legacy' && <LegacyPage />}
      </main>

      <footer className="bg-white text-[#060608] py-12 md:py-16 relative overflow-hidden rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-gray-100">
        {/* Subtle background industrial pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            
            {/* Branding Column */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-[#060608] rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:rotate-3">
                  {!logoError ? (
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain brightness-0 invert" onError={() => setLogoError(true)} />
                  ) : (
                    <Shield className="h-7 w-7 text-white" />
                  )}
                </div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight uppercase" style={{ fontFamily: "'Gambarino', serif" }}>
                  STD <span className="text-[#E63630]">Gas Shield</span>
                </span>
              </div>
              <p className="mb-10 leading-relaxed font-secondary text-sm md:text-base text-gray-500 max-w-sm font-medium tracking-wide">
                Engineering safety for high-pressure gas systems since 1967. Trusted by leading manufacturers across India and the ASEAN region.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#060608] text-sm font-secondary font-bold mb-6 uppercase tracking-[0.25em]">Quick Links</h4>
              <ul className="space-y-4 font-secondary text-sm text-gray-500">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleNav(link.id)} className="hover:text-[#E63630] hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group font-bold uppercase tracking-wider text-xs">
                       <ChevronRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E63630]" /> 
                       <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#060608] text-sm font-secondary font-bold mb-6 uppercase tracking-[0.25em]">Contact Us</h4>
              <ul className="space-y-4 font-secondary text-sm text-gray-500">
                <li className="flex items-start gap-4 group cursor-pointer hover:text-[#060608] transition-colors">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-[#E63630] group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="mt-1.5 font-bold tracking-wide text-xs uppercase leading-relaxed">Standard Engineers<br/>Mumbai, India</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer hover:text-[#060608] transition-colors">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-[#E63630] group-hover:text-white transition-colors duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-bold tracking-wide text-xs uppercase">+91-9811440081</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer hover:text-[#060608] transition-colors">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-[#E63630] group-hover:text-white transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-bold tracking-wide text-xs uppercase">sales@standardengineers.com</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-secondary text-gray-400 uppercase tracking-[0.15em] font-bold">
            <p>&copy; {new Date().getFullYear()} Standard Gas Shield. <span className="hidden md:inline">All rights reserved.</span></p>
            <div className="flex gap-8">
              <span className="hover:text-[#E63630] hover:-translate-y-1 transition-all cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#E63630] hover:-translate-y-1 transition-all cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
