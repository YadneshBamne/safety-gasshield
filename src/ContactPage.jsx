import React, { useState } from 'react';
import { 
  ShieldCheck, MapPin, Phone, Mail, Globe, Clock, Download, 
  CheckCircle2, ArrowRight, FileText, Send, Sparkles, AlertCircle 
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    cityState: '',
    natureOfEnquiry: 'Catalogue Request',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const triggerBrochureDownload = () => {
    setIsDownloading(true);
    
    // Create authentic downloadable catalogue text/PDF payload
    const catalogueContent = 
`=============================================================
STANDARD GASSHIELD PVT. LTD. - OFFICIAL PRODUCT CATALOGUE
Formerly Standard Engineers (Est. 1967)
ISO 9001:2015 TÜV NORD Certified | BIS Compliant
=============================================================

Headquarters & Manufacturing Plant:
13, Mahalaxmi Industrial Estate, Iyava Gaon, Taluka Sanand,
Ahmedabad – 382170, Gujarat, India

Phone: +91 9824047764 | +91 9824980239
Email: sales@standardgasshield.com | safetyguards@gmail.com
Web: www.standardgasshield.com | www.safetyguards.in

-------------------------------------------------------------
1. VALVE PROTECTION GUARDS (VPG)
-------------------------------------------------------------
- SE Parallel Series: For Spindle Operated High-Pressure Valves (Oxygen - Black)
- SE Conical Series: For Wheel Operated Valves (CO2 - Green Grey)
- SE-DA Series: For Dissolved Acetylene Welded & Seamless Cylinders (Nitrogen - Pewter)
- SE-DA Conical: For Wheel Operated Acetylene & Argon Cylinders (Peacock Blue)
- SE-Hydrogen Series: Signal Red High-Risk Cylinders & Fire Safety (47L+)

-------------------------------------------------------------
2. DOME TYPE CAPS
-------------------------------------------------------------
- SE DOME: Complete valve head enclosure for maximum transit and storage protection.
- Thread: Standard W80 11 TPI. Color-coded finishes available.

-------------------------------------------------------------
3. CYLINDER HANDLING TROLLEYS
-------------------------------------------------------------
- Single Cylinder Trolleys (Powder-coated, safety chained)
- Double Cylinder Trolleys (Dual-gas transport, puncture-proof wheels)
- Lay-down and utility loading trolleys

-------------------------------------------------------------
4. PALLETS, SKIDS & BULK STORAGE
-------------------------------------------------------------
- Certified Hydrogen Cascade Transport Skids
- Multi-Cylinder Grouping Pallets for Forklift Handling
- Custom-fabricated manifold frames

-------------------------------------------------------------
5. ACCESSORIES & VALUE ADDITION
-------------------------------------------------------------
- Thermal Pressure Relief Valves (15 Bar)
- Cryogenic Flexible Hoses & Cryo Globe Valves
- Cryo Regulator Cum Economizer
- Replacement Valve Spindles & Forged Spindle Keys
- Cylinder Forged Neck Rings & Hydrostatic Testing Rings

"Ensuring Safety. Engineering Trust. Since 1967."
=============================================================`;

    const blob = new Blob([catalogueContent], { type: 'text/plain;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `Standard_Gasshield_Product_Catalogue.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
    
    setTimeout(() => setIsDownloading(false), 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.companyName) {
      alert('Please complete all required fields.');
      return;
    }

    setSubmitted(true);
    // Automatic download as requested in Slide 8
    triggerBrochureDownload();
  };

  return (
    <div className="bg-[#060608] min-h-screen selection:bg-[#E63630] selection:text-white pb-32">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E63630] text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <Download className="w-3.5 h-3.5" /> Instant Catalogue Access
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>
              Get <span className="text-[#E63630] italic">Brochure</span> & Connect With Us
            </h1>
            <p className="max-w-3xl mx-auto text-white/70 font-sans text-base md:text-xl leading-relaxed font-light">
              Whether you have a product enquiry, custom manufacturing requirement, or need pricing for bulk cylinder handling equipment — submitting this form automatically initiates the product brochure download.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Main Form & Contact Information Grid */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Form (Auto-downloads Brochure) */}
            <div className="lg:col-span-7">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E63630]/10 blur-[100px] rounded-full pointer-events-none"></div>

                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Gambarino', serif" }}>
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-white/70 font-sans text-base max-w-md mx-auto leading-relaxed">
                      Your enquiry has been received. Your official <strong className="text-white">Standard Gasshield Product Catalogue</strong> download has started automatically.
                    </p>
                    
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={triggerBrochureDownload}
                        className="bg-[#E63630] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Again</span>
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '', companyName: '', email: '', phone: '',
                            cityState: '', natureOfEnquiry: 'Catalogue Request', message: ''
                          });
                        }}
                        className="bg-white/5 border border-white/10 text-white/70 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                      >
                        Submit Another Requirement
                      </button>
                    </div>

                    <p className="text-white/40 text-xs font-mono pt-4">
                      A sales engineer will review your specifications and contact you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Gambarino', serif" }}>
                        Request Catalogue & Quote
                      </h3>
                      <p className="text-white/50 text-xs">
                        Fill in your details below to download our complete catalogue immediately.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Indrajeet Patel"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Apex Industrial Gases"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98240 00000"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          City / State
                        </label>
                        <input
                          type="text"
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          placeholder="Ahmedabad, Gujarat"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          Nature of Enquiry
                        </label>
                        <select
                          value={formData.natureOfEnquiry}
                          onChange={(e) => setFormData({ ...formData, natureOfEnquiry: e.target.value })}
                          className="w-full bg-[#111116] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        >
                          <option value="Catalogue Request">Catalogue Request</option>
                          <option value="Product Enquiry">Product Enquiry</option>
                          <option value="Custom Manufacturing">Custom Manufacturing</option>
                          <option value="Distributorship">Distributorship</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                        Message / Requirement Details
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify cylinder categories, quantity, thread requirements, or custom skid dimensions..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors resize-none font-sans"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white/60">
                      <Download className="w-4 h-4 text-[#E63630] shrink-0" />
                      <span>Form submission automatically initiates the download of the official product brochure.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isDownloading}
                      className="w-full bg-[#E63630] hover:bg-white hover:text-black text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_10px_30px_rgba(230,54,48,0.3)] flex items-center justify-center gap-3"
                    >
                      <span>{isDownloading ? 'Downloading Brochure...' : 'Send Enquiry & Download Brochure'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Contact Details, Plant Address & Working Hours */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Plant & Registered Address */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <span className="text-[#E63630] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  Registered Plant
                </span>
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>
                  Standard Gasshield Pvt. Ltd.
                </h3>

                <div className="space-y-6 text-sm text-white/70 font-sans">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium mb-1">Facility Address:</strong>
                      13, Mahalaxmi Industrial Estate,<br />
                      Iyava Gaon, Taluka Sanand,<br />
                      Ahmedabad – 382170, Gujarat, India
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium mb-1">Direct Lines:</strong>
                      <a href="tel:+919824047764" className="hover:text-[#E63630] transition-colors block">+91 9824047764</a>
                      <a href="tel:+919824980239" className="hover:text-[#E63630] transition-colors block">+91 9824980239</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium mb-1">Email Enquiries:</strong>
                      <span className="text-white/50 text-xs block">Sales:</span>
                      <a href="mailto:sales@standardgasshield.com" className="hover:text-[#E63630] transition-colors block mb-1">sales@standardgasshield.com</a>
                      <span className="text-white/50 text-xs block">General:</span>
                      <a href="mailto:safetyguards@gmail.com" className="hover:text-[#E63630] transition-colors block">safetyguards@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-[#E63630] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium mb-1">Web:</strong>
                      <span className="block text-white/80">www.standardgasshield.com</span>
                      <span className="block text-white/80">www.safetyguards.in</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#E63630]" />
                  <h4 className="text-lg font-bold text-white font-secondary uppercase tracking-wider">
                    Working Hours
                  </h4>
                </div>
                <div className="space-y-2 text-sm font-sans">
                  <div className="flex justify-between text-white/80">
                    <span>Monday to Saturday:</span>
                    <span className="font-mono text-white font-medium">9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between text-white/50 border-t border-white/5 pt-2">
                    <span>Sunday:</span>
                    <span className="font-mono text-[#E63630]">Closed</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4 pt-4 border-t border-white/5">
                  We endeavour to respond to all email and form enquiries within one business day.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 p-4">
            <div className="px-4 py-3 mb-2 flex items-center justify-between">
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E63630]" />
                Find Us — 13, Mahalaxmi Industrial Estate, Iyava Gaon, Taluka Sanand, Ahmedabad – 382170, Gujarat
              </span>
              <span className="text-[10px] uppercase font-bold text-[#E63630] bg-[#E63630]/10 px-3 py-1 rounded-full border border-[#E63630]/20 hidden md:inline">
                Manufacturing Plant
              </span>
            </div>
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-black/60 relative">
              <iframe
                title="Standard Gasshield Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117511.97010474668!2d72.30230559999999!3d22.9904258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ec19e7a8e8055%3A0x6b77c3a0dfa4db95!2sSanand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert contrast-125 opacity-80"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Note / CTA */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-[#E63630]/10 border border-[#E63630]/30 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
              Looking for a Catalogue or Custom Quote?
            </h3>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans mb-8">
              Drop us a message and we will send you our complete product catalogue along with pricing and lead time information tailored to your requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-mono">
              <span>Direct dispatch across India</span>
              <span>•</span>
              <span>TÜV NORD Certified Quality</span>
              <span>•</span>
              <span>Over 5 Decades of Engineering</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

