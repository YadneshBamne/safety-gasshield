import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Shield, MapPin, Phone, Mail, ChevronRight
} from 'lucide-react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import IndustriesPage from './IndustriesPage';
import ContactPage from './ContactPage';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-secondary font-medium text-black min-h-screen flex flex-col bg-[#f4f4f5]">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-black shadow-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="w-12 h-12 flex items-center justify-center">
              {!logoError ? (
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={() => setLogoError(true)} />
              ) : (
                <Shield className="h-8 w-8 text-[#E63630]" />
              )}
            </div>
            <span className="text-xl font-primary italic font-medium text-white tracking-tight uppercase">
              Standard <span className="text-[#E63630]">Gas Shield</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNav(link.id)} 
                className={`${currentPage === link.id ? 'text-[#E63630]' : 'text-white/80 hover:text-white'} transition-colors font-medium text-sm tracking-widest uppercase`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="bg-[#E63630] hover:bg-[#861719] text-white px-6 py-2.5 rounded-full font-secondary font-medium transition-all shadow-md hover:shadow-[0_0_20px_rgba(230,54,48,0.4)]"
            >
              Get Catalogue
            </button>
          </div>

          <button 
            className="md:hidden text-white hover:text-[#E63630] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 shadow-2xl">
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => handleNav(link.id)} 
                  className={`text-left ${currentPage === link.id ? 'text-[#E63630]' : 'text-white/80 hover:text-white'} transition-colors font-medium text-lg uppercase py-2 border-b border-white/5`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav('contact')}
                className="bg-[#E63630] text-white px-6 py-4 rounded-md font-secondary font-medium w-full text-center mt-4 uppercase tracking-wider"
              >
                Get Catalogue
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Hub */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'industries' && <IndustriesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      {/* <footer className="bg-black text-white/60 py-16 border-t border-[#E63630]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  {!logoError ? (
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain grayscale" onError={() => setLogoError(true)} />
                  ) : (
                    <Shield className="h-8 w-8 text-[#E63630]" />
                  )}
                </div>
                <span className="text-2xl font-primary italic font-medium text-white tracking-tight uppercase">
                  STD <span className="text-[#E63630]">Gas Shield</span>
                </span>
              </div>
              <p className="mb-6 leading-relaxed font-secondary text-sm">
                Engineering safety for high-pressure gas systems since 1967. Trusted by leading manufacturers across India and the ASEAN region.
              </p>
            </div>

            <div>
              <h4 className="text-white text-lg font-primary italic font-medium mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 font-secondary text-sm">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => handleNav(link.id)} className="hover:text-[#E63630] transition-colors flex items-center gap-2">
                       <ChevronRight className="h-4 w-4" /> {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-primary italic font-medium mb-6 uppercase tracking-wider">Key Markets</h4>
              <ul className="space-y-3 font-secondary text-sm">
                {['Gas Manufacturers', 'Refilling Units', 'Cylinder Manufacturers', 'Medical Suppliers'].map((item, i) => (
                  <li key={i}>
                    <button onClick={() => handleNav('industries')} className="hover:text-[#E63630] transition-colors flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" /> {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-primary italic font-medium mb-6 uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-4 font-secondary text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#E63630] shrink-0 mt-0.5" />
                  <span>Standard Engineers<br/>Mumbai, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#E63630] shrink-0" />
                  <span>+91 98XXX XXXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#E63630] shrink-0" />
                  <span>sales@standardengineers.com</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-secondary text-white/40">
            <p>&copy; {new Date().getFullYear()} Standard Gas Shield. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
