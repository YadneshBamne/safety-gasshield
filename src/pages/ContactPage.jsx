import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#111] py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#861719_0%,_transparent_50%)] opacity-20"></div>
        <RevealOnScroll className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-primary italic font-medium text-white mb-6">
            Get the <span className="text-[#E63630]">Product Catalogue</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-secondary font-medium max-w-3xl mx-auto">
            Fill in your details to access our full product range and connect with our team.
          </p>
        </RevealOnScroll>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-secondary font-medium text-gray-700">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63630]/50 focus:border-[#E63630] font-secondary font-medium transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-secondary font-medium text-gray-700">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63630]/50 focus:border-[#E63630] font-secondary font-medium transition-all" placeholder="Acme Gas Systems" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-secondary font-medium text-gray-700">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63630]/50 focus:border-[#E63630] font-secondary font-medium transition-all" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-secondary font-medium text-gray-700">Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63630]/50 focus:border-[#E63630] font-secondary font-medium transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-secondary font-medium text-gray-700">Requirement</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63630]/50 focus:border-[#E63630] font-secondary font-medium transition-all resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                
                <div className="pt-4 flex items-start gap-4 p-4 bg-[#f8fafc] rounded-lg border border-gray-100">
                  <ShieldCheck className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm font-secondary font-medium text-gray-600">Your information remains secure and confidential. We prioritize safety in data just as we do in operations.</p>
                </div>

                <button type="button" className="w-full bg-[#E63630] hover:bg-[#861719] text-white font-secondary font-medium py-4 rounded-md transition-colors shadow-lg text-lg flex justify-center items-center gap-2">
                  Request Catalogue
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
