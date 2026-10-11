import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TrustStatsSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Chennai',
    propertyType: '3 BHK',
    serviceNeeded: 'Full Home Interiors'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello FutureSpace Interiors! I would like a free 3D design & quote.\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nCity: ${formData.city}\nProperty: ${formData.propertyType}\nService: ${formData.serviceNeeded}`
    );

    window.open(`https://wa.me/919363419550?text=${message}`, '_blank');
  };

  const stats = [
    { number: '13+', label: 'Years of Industry Experience' },
    { number: '146+', label: 'Quality Checks' },
    { number: '5', label: 'Cities in Tamil Nadu' },
    { number: '15 Years', label: 'Warranty' },
    { number: 'AI', label: 'Tech + AI Driven Solutions' }
  ];

  return (
    <section id="trust-stats" className="py-14 sm:py-18 bg-[#F4F8F5] border-b border-[#D8E6DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#14261C] flex items-center justify-center gap-3">
            <span className="text-[#1F7A4C] opacity-60 font-normal">—</span>
            <span>WHY TAMIL NADU TRUSTS FUTURESPACE</span>
            <span className="text-[#1F7A4C] opacity-60 font-normal">—</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Stats + Brand Partners (8 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Top Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 pb-10 border-b border-[#D8E6DC]">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`text-center ${idx < stats.length - 1 ? 'sm:border-r sm:border-[#D8E6DC] sm:pr-3' : ''}`}
                >
                  <div className="text-3xl sm:text-3xl lg:text-4xl font-black text-[#1F7A4C] tracking-tight leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#14261C] mt-3 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Heading: Trusted Materials & Brand Partners */}
            <div className="my-8 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-[#14261C] flex items-center justify-center sm:justify-start gap-3">
                <span className="text-[#1F7A4C] opacity-60 font-normal">—</span>
                <span>TRUSTED MATERIALS &amp; BRAND PARTNERS</span>
                <span className="text-[#1F7A4C] opacity-60 font-normal hidden sm:inline">—</span>
              </h3>
            </div>

            {/* Brand Partners Logo Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-items-center bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-[#D8E6DC] shadow-xs">
              
              {/* 1. Saint-Gobain */}
              <div className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform" title="Saint-Gobain Glass & Hardware">
                <div className="w-24 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 120 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 28 L22 10 L34 28 Z" stroke="#E05A1B" strokeWidth="2.5" fill="none" />
                    <path d="M22 10 L28 28 L16 28 Z" fill="#0284C7" opacity="0.8" />
                    <text x="42" y="24" fontFamily="sans-serif" fontSize="9" fontWeight="900" fill="#003865" letterSpacing="0.5">SAINT-GOBAIN</text>
                  </svg>
                </div>
              </div>

              {/* 2. CenturyPly */}
              <div className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform" title="CenturyPly BWP Waterproof Plywood">
                <div className="w-24 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 120 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="20" r="8" fill="#DC2626" />
                    <path d="M16 14 L16 26 M10 20 L22 20" stroke="white" strokeWidth="2" />
                    <text x="32" y="24" fontFamily="sans-serif" fontSize="10" fontWeight="900" fill="#DC2626" letterSpacing="0.5">CENTURYPLY</text>
                  </svg>
                </div>
              </div>

              {/* 3. Ebco */}
              <div className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform" title="Ebco Precision Fittings">
                <div className="w-20 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 100 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="45" cy="20" rx="36" ry="14" stroke="#0284C7" strokeWidth="2" fill="none" />
                    <text x="45" y="24" fontFamily="serif" fontSize="14" fontStyle="italic" fontWeight="bold" fill="#0284C7" textAnchor="middle">ebco</text>
                  </svg>
                </div>
              </div>

              {/* 4. Häfele */}
              <div className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform" title="Häfele German Architectural Hardware">
                <div className="w-22 h-10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-black text-sm text-[#DC2626] tracking-wider block">HÄFELE</span>
                    <span className="text-[7px] text-gray-500 font-bold tracking-widest uppercase block -mt-1">GERMANY</span>
                  </div>
                </div>
              </div>

              {/* 5. Hettich */}
              <div className="flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform" title="Hettich Hinges & Drawer Channels">
                <div className="w-24 h-10 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 border border-gray-300 p-1 rounded-sm bg-white">
                    <div className="w-3.5 h-6 bg-gradient-to-b from-blue-500 via-yellow-400 to-red-500 rounded-2xs"></div>
                    <div>
                      <span className="font-extrabold text-xs text-black block leading-none">Hettich</span>
                      <span className="text-[6px] text-gray-500 font-bold uppercase tracking-wider block">International</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Assurance Note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-600 font-medium">
              <ShieldCheck size={16} className="text-[#1F7A4C]" />
              <span>100% Genuine, certified materials backed by direct brand warranty cards and certificate of authenticity.</span>
            </div>

          </div>

          {/* Right Column: Lead Form Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#1F7A4C]/25 hover:border-[#1F7A4C]/45 transition-colors relative">
              
              <div className="text-center sm:text-left mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#14261C] tracking-tight leading-snug">
                  Get your free 3D design + Quote
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Our interior designers in Tamil Nadu reply within 2 hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input 
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1F7A4C] focus:ring-1 focus:ring-[#1F7A4C] text-sm text-gray-900 bg-[#F9FAF8] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input 
                        type="tel"
                        required
                        placeholder="Phone *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1F7A4C] focus:ring-1 focus:ring-[#1F7A4C] text-sm text-gray-900 bg-[#F9FAF8] transition-colors"
                      />
                    </div>

                    <div>
                      <select 
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1F7A4C] focus:ring-1 focus:ring-[#1F7A4C] text-sm text-gray-700 bg-[#F9FAF8] transition-colors"
                      >
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Salem">Salem</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <select 
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1F7A4C] focus:ring-1 focus:ring-[#1F7A4C] text-sm text-gray-700 bg-[#F9FAF8] transition-colors"
                      >
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                        <option value="4+ BHK">4+ BHK / Penthouse</option>
                        <option value="Independent Villa">Independent Villa</option>
                        <option value="Commercial Space">Commercial Space</option>
                      </select>
                    </div>

                    <div>
                      <select 
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#1F7A4C] focus:ring-1 focus:ring-[#1F7A4C] text-sm text-gray-700 bg-[#F9FAF8] transition-colors"
                      >
                        <option value="Full Home Interiors">Full Home Interiors</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Wardrobes & Closets">Wardrobes &amp; Closets</option>
                        <option value="Living Room Renovation">Living Room</option>
                        <option value="Turnkey Interior">Turnkey Interior</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#1F7A4C] hover:bg-[#18633C] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Free Quote on WhatsApp</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#1F7A4C] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-extrabold text-lg text-emerald-900">Request Sent!</h4>
                  <p className="text-xs text-emerald-700">
                    A senior FutureSpace designer has received your inquiry. We're connecting with you on WhatsApp shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#1F7A4C] font-bold underline cursor-pointer"
                  >
                    Submit another quote request
                  </button>
                </div>
              )}

              {/* Privacy Footer */}
              <div className="mt-4 text-center">
                <span className="text-[11px] text-gray-500 font-medium inline-flex items-center gap-1.5">
                  <span>🔒</span> Your details are safe. No spam.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
