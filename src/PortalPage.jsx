import React, { useState } from 'react';
import { 
  Shield, Lock, Key, FileCheck, Download, CheckCircle2, AlertCircle, 
  ArrowRight, UserCheck, Mail, Phone, Building2, Eye, ShieldAlert, Sparkles 
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function PortalPage({ setCurrentPage }) {
  const [activePortalTab, setActivePortalTab] = useState('register'); // 'register' | 'documents'
  
  // Registration State
  const [regData, setRegData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    designation: ''
  });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [regSuccess, setRegSuccess] = useState(false);

  // Document & OTP Access State
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [verifiedDocs, setVerifiedDocs] = useState({});
  const [downloadNotice, setDownloadNotice] = useState(null);

  const documents = [
    {
      id: 'iso-cert',
      title: 'ISO 9001:2015 TÜV NORD Quality Certificate',
      category: 'Certification & Quality',
      fileSize: '1.8 MB',
      format: 'PDF',
      restricted: true,
      desc: 'Official certificate of quality management verification by TÜV NORD Germany/India for cylinder safety manufacturing.'
    },
    {
      id: 'bis-spec',
      title: 'BIS IS:3224 & Statutory Valve Protection Dossier',
      category: 'Compliance Standards',
      fileSize: '4.2 MB',
      format: 'PDF',
      restricted: true,
      desc: 'Comprehensive compliance report validating adherence to Bureau of Indian Standards (BIS) gas cylinder directives.'
    },
    {
      id: 'eng-drawings',
      title: 'SE Series Engineering Drawings & Dimension Tolerances',
      category: 'Technical Specifications',
      fileSize: '8.6 MB',
      format: 'PDF / CAD',
      restricted: true,
      desc: 'Detailed CAD profiles, thread pitch specifications (W80 11 TPI), and tensile strength testing results.'
    },
    {
      id: 'hydro-testing',
      title: 'Hydrostatic Pressure & Impact Resistance Protocol',
      category: 'Safety & Testing',
      fileSize: '3.1 MB',
      format: 'PDF',
      restricted: true,
      desc: 'Destructive drop-test data and hydrostatic test protocols for high-pressure industrial cylinders.'
    }
  ];

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regData.fullName || !regData.email || !regData.phone) {
      alert('Please fill all required fields');
      return;
    }

    const uniqueId = `SG-REG-${Math.floor(100000 + Math.random() * 900000)}`;
    const userProfile = {
      ...regData,
      registrationId: uniqueId,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setRegisteredUser(userProfile);
    setRegSuccess(true);
  };

  const handleDocumentClick = (doc) => {
    setSelectedDoc(doc);
    setOtpInput('');
    setOtpError('');
    setOtpModalOpen(true);
  };

  const verifyOtpAndDownload = () => {
    if (!otpInput || otpInput.trim().length < 4) {
      setOtpError('Please enter a valid 4 to 6 digit OTP code.');
      return;
    }

    // Success verification
    setVerifiedDocs(prev => ({ ...prev, [selectedDoc.id]: true }));
    setOtpModalOpen(false);

    // Trigger synthetic download
    const blob = new Blob([
      `Standard Gasshield Pvt. Ltd. - Authorized Technical Document\n` +
      `Document: ${selectedDoc.title}\n` +
      `Format: ${selectedDoc.format} | Size: ${selectedDoc.fileSize}\n` +
      `Authorized To: ${registeredUser?.fullName || 'Registered B2B Partner'}\n` +
      `Registration ID: ${registeredUser?.registrationId || 'SG-AUDIT-ACTIVE'}\n` +
      `Security Hash: SHA256-VERIFIED-${Math.random().toString(36).substring(2, 10).toUpperCase()}\n` +
      `Confidential & Proprietary - Standard Gasshield Pvt. Ltd.`
    ], { type: 'text/plain;charset=utf-8' });

    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${selectedDoc.id}_Standard_Gasshield.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    setDownloadNotice(`Automated security notification dispatched to Standard Gasshield: Document "${selectedDoc.title}" accessed and verified.`);
    setTimeout(() => setDownloadNotice(null), 8000);
  };

  return (
    <div className="bg-[#060608] min-h-screen selection:bg-[#E63630] selection:text-white pb-32">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E63630] text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <Shield className="w-3.5 h-3.5" /> B2B Secure Client Portal
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: "'Gambarino', serif" }}>
              Technical Vault & <span className="text-[#E63630] italic">Dossiers</span>
            </h1>
            <p className="max-w-3xl mx-auto text-white/70 font-sans text-base md:text-xl leading-relaxed font-light">
              Restricted portal for authorized gas company representatives, OEM distributors, and technical auditors to access compliance certificates, CAD profiles, and material testing data.
            </p>
          </RevealOnScroll>

          {/* Tab Controls */}
          <div className="flex justify-center mt-12">
            <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 inline-flex">
              <button
                onClick={() => setActivePortalTab('register')}
                className={`px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                  activePortalTab === 'register'
                    ? 'bg-[#E63630] text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>1. User Registration</span>
              </button>
              <button
                onClick={() => setActivePortalTab('documents')}
                className={`px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                  activePortalTab === 'documents'
                    ? 'bg-[#E63630] text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>2. Secure Document Access</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Notification Banner */}
      {downloadNotice && (
        <div className="max-w-4xl mx-auto px-6 mt-6">
          <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] p-4 rounded-2xl flex items-center justify-between text-xs md:text-sm font-mono animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{downloadNotice}</span>
            </div>
            <span className="hidden sm:inline bg-[#4ADE80]/20 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold">
              LOGGED TO SG
            </span>
          </div>
        </div>
      )}

      {/* Main Portal Body */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* TAB 1: USER REGISTRATION */}
          {activePortalTab === 'register' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Info Panel */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Gambarino', serif" }}>
                    Seamless Registration
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Self-register to gain verified access to proprietary testing certificates and technical drawings.
                  </p>
                  
                  <div className="space-y-4 text-xs text-white/70 font-sans">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#E63630]/20 flex items-center justify-center text-[#E63630] shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <strong className="text-white block font-medium">Automated Confirmation</strong>
                        Instant confirmation link and real-time security alerts dispatched to both customer and SG.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#E63630]/20 flex items-center justify-center text-[#E63630] shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <strong className="text-white block font-medium">Unique Registration ID</strong>
                        The system assigns a permanent customer ID accessible across Standard Gasshield departments.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#E63630]/20 flex items-center justify-center text-[#E63630] shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <strong className="text-white block font-medium">OTP-Protected Repository</strong>
                        Two-factor email OTP ensures sensitive engineering data remains strictly within verified hands.
                      </div>
                    </div>
                  </div>
                </div>

                {registeredUser && (
                  <div className="bg-[#E63630]/10 border border-[#E63630]/40 rounded-3xl p-8 relative overflow-hidden">
                    <div className="flex items-center gap-3 text-[#E63630] font-bold text-xs uppercase tracking-widest mb-3 font-mono">
                      <Sparkles className="w-4 h-4" /> Active Registration Profile
                    </div>
                    <div className="text-2xl font-bold text-white font-mono mb-2">
                      {registeredUser.registrationId}
                    </div>
                    <p className="text-white/70 text-xs mb-4">
                      Assigned to <strong>{registeredUser.fullName}</strong> ({registeredUser.companyName})
                    </p>
                    <button
                      onClick={() => setActivePortalTab('documents')}
                      className="w-full bg-[#E63630] text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors"
                    >
                      <span>Proceed to Document Vault</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Form Panel */}
              <div className="lg:col-span-7">
                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                  
                  {regSuccess ? (
                    <div className="text-center py-8 space-y-6">
                      <div className="w-20 h-20 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Gambarino', serif" }}>
                        Registration Successfully Generated
                      </h3>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3 font-mono text-sm">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/50">Unique ID:</span>
                          <span className="text-[#E63630] font-bold">{registeredUser?.registrationId}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/50">Customer:</span>
                          <span className="text-white">{registeredUser?.fullName}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/50">Company:</span>
                          <span className="text-white">{registeredUser?.companyName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/50">Notification:</span>
                          <span className="text-[#4ADE80] text-xs">Sent to Customer & SG</span>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={() => setActivePortalTab('documents')}
                          className="bg-[#E63630] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors"
                        >
                          Access Document Vault Now
                        </button>
                        <button
                          onClick={() => {
                            setRegSuccess(false);
                            setRegData({ fullName: '', companyName: '', email: '', phone: '', designation: '' });
                          }}
                          className="bg-white/5 border border-white/10 text-white/70 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                        >
                          Register Another Representative
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterSubmit} className="space-y-6">
                      <div className="border-b border-white/10 pb-4 mb-6">
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Gambarino', serif" }}>
                          Client Self-Registration
                        </h3>
                        <p className="text-white/50 text-xs mt-1">
                          A unique registration ID will be generated upon submitting.
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
                            value={regData.fullName}
                            onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                            placeholder="e.g. Ramesh Varma"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                            Company / Plant Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={regData.companyName}
                            onChange={(e) => setRegData({ ...regData, companyName: e.target.value })}
                            placeholder="e.g. Bharat Gas Solutions"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                            Email ID *
                          </label>
                          <input
                            type="email"
                            required
                            value={regData.email}
                            onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                            placeholder="ramesh@company.com"
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
                            value={regData.phone}
                            onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                            placeholder="+91 98200 00000"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                          Designation / Department
                        </label>
                        <input
                          type="text"
                          value={regData.designation}
                          onChange={(e) => setRegData({ ...regData, designation: e.target.value })}
                          placeholder="e.g. Safety Officer / Plant Manager"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#E63630] transition-colors"
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                        <span>By registering, you authorize real-time automated security alerts to both your registered contact and Standard Gasshield compliance auditors.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#E63630] hover:bg-white hover:text-black text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_10px_30px_rgba(230,54,48,0.3)] flex items-center justify-center gap-3"
                      >
                        <span>Generate Registration ID & Submit</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SECURE DOCUMENT ACCESS */}
          {activePortalTab === 'documents' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div>
                  <h3 className="text-xl font-bold text-white font-secondary flex items-center gap-3">
                    <Lock className="w-5 h-5 text-[#E63630]" /> OTP-Gated Technical Repository
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    Email-based OTP verification is mandatory prior to downloading each technical file.
                  </p>
                </div>
                {registeredUser ? (
                  <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-xl border border-white/10 text-xs font-mono">
                    <span className="text-white/50">Current ID:</span>
                    <span className="text-[#E63630] font-bold">{registeredUser.registrationId}</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActivePortalTab('register')}
                    className="text-xs uppercase tracking-wider text-[#E63630] hover:underline font-bold"
                  >
                    Don't have a Reg ID? Register Here →
                  </button>
                )}
              </div>

              {/* Document Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc) => (
                  <div 
                    key={doc.id}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#E63630]/50 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-[#E63630] bg-[#E63630]/10 px-3 py-1 rounded-full border border-[#E63630]/20">
                          {doc.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                          <span>{doc.format}</span>
                          <span>•</span>
                          <span>{doc.fileSize}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-3 leading-snug font-secondary group-hover:text-[#E63630] transition-colors">
                        {doc.title}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                        {doc.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                        <Lock className="w-3.5 h-3.5 text-[#E63630]" />
                        <span>OTP Required</span>
                      </div>

                      <button
                        onClick={() => handleDocumentClick(doc)}
                        className="bg-white/10 hover:bg-[#E63630] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Verify & Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* OTP VERIFICATION MODAL */}
      {otpModalOpen && selectedDoc && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] flex items-center justify-center p-6 animate-in fade-in">
          <div className="bg-[#0e0e12] border border-white/10 rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl relative">
            <div className="w-14 h-14 rounded-2xl bg-[#E63630]/20 text-[#E63630] flex items-center justify-center mx-auto mb-6">
              <Key className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-2" style={{ fontFamily: "'Gambarino', serif" }}>
              Email OTP Verification
            </h3>
            <p className="text-white/60 text-xs text-center leading-relaxed mb-6">
              To download <strong className="text-white">{selectedDoc.title}</strong>, please enter the one-time verification passcode sent to your registered email address.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  maxLength={6}
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  placeholder="Enter 6-digit OTP (e.g. 749210)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-center text-xl tracking-[0.3em] font-mono text-white focus:outline-none focus:border-[#E63630] transition-colors"
                />
                {otpError && (
                  <p className="text-[#E63630] text-xs mt-2 text-center">{otpError}</p>
                )}
              </div>

              <div className="bg-white/5 p-3 rounded-xl text-[11px] text-white/50 text-center font-mono">
                Security notice: Download activity and Registration ID will be logged to SG Admin.
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOtpModalOpen(false)}
                  className="w-1/2 py-3.5 rounded-xl border border-white/10 text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={verifyOtpAndDownload}
                  className="w-1/2 py-3.5 rounded-xl bg-[#E63630] hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
                >
                  Verify & Get
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
