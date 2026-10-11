import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Award, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigateSection, onConsultationClick, onCalculatorClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#101A14] text-white pt-16 pb-8 border-t border-[#223629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
            <div className="p-3 rounded-xl bg-[#1F7A4C] text-white">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">45-Day Handover Guaranteed</h4>
              <p className="text-xs text-gray-400">Strict on-time move-in or we pay you rent</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
            <div className="p-3 rounded-xl bg-[#1F7A4C] text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">15-Year Flat Warranty</h4>
              <p className="text-xs text-gray-400">Hettich &amp; Blum hardware + BWP plywood</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
            <div className="p-3 rounded-xl bg-[#1F7A4C] text-white">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">146+ Strict Quality Audits</h4>
              <p className="text-xs text-gray-400">German laser edge-banding &amp; joinery</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1F7A4C] text-white flex items-center justify-center font-bold text-lg shadow-md">
                F
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white">FutureSpace</span>
                <span className="block text-[10px] uppercase font-bold tracking-[0.24em] text-[#34D399] -mt-1">
                  Interiors Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              FutureSpace is India's leading tech-enabled home interior company. We combine 3D design innovation with precision in-house manufacturing to deliver dream homes on time, every time.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-300">
              <a href="tel:+919363419550" className="flex items-center gap-2 hover:text-[#34D399] transition-colors">
                <Phone size={14} className="text-[#34D399]" />
                <span className="font-semibold">+91 9363419550</span> (Mon-Sun, 9am - 8pm)
              </a>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#34D399]" />
                <span>hello@futurespace.in</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#34D399] mb-4">
              Interior Spaces
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><button type="button" onClick={() => onNavigateSection('what-we-do')} className="hover:text-white transition-colors cursor-pointer">Modular Kitchens</button></li>
              <li><button type="button" onClick={() => onNavigateSection('what-we-do')} className="hover:text-white transition-colors cursor-pointer">Living Room TV Units</button></li>
              <li><button type="button" onClick={() => onNavigateSection('what-we-do')} className="hover:text-white transition-colors cursor-pointer">Master Bedrooms</button></li>
              <li><button type="button" onClick={() => onNavigateSection('what-we-do')} className="hover:text-white transition-colors cursor-pointer">Wardrobes &amp; Closets</button></li>
              <li><button type="button" onClick={() => onNavigateSection('what-we-do')} className="hover:text-white transition-colors cursor-pointer">False Ceiling &amp; Lights</button></li>
              <li><button type="button" onClick={() => onNavigateSection('what-we-do')} className="hover:text-white transition-colors cursor-pointer">Bespoke Dining Bars</button></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#34D399] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors cursor-pointer">About FutureSpace</Link></li>
              <li><button type="button" onClick={() => onNavigateSection && onNavigateSection('about')} className="hover:text-white transition-colors cursor-pointer">45-Day Delivery Promise</button></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors cursor-pointer">Real Homes Gallery</Link></li>
              <li><button type="button" onClick={onCalculatorClick} className="hover:text-white transition-colors cursor-pointer">Interior Price Calculator</button></li>
              <li><button type="button" onClick={onConsultationClick} className="hover:text-white transition-colors cursor-pointer">Book Free 3D Design</button></li>
            </ul>
          </div>

          {/* Col 4: Experience Centers */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#34D399] mb-4">
              Experience Centers
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><strong>Bengaluru:</strong> 100ft Rd, Indiranagar</li>
              <li><strong>Mumbai:</strong> Linking Rd, Bandra West</li>
              <li><strong>Delhi NCR:</strong> Golf Course Rd, Gurugram</li>
              <li><strong>Hyderabad:</strong> Rd No. 36, Jubilee Hills</li>
              <li><strong>Chennai:</strong> 2nd Ave, Anna Nagar</li>
              <li><strong>Pune:</strong> North Main Rd, Koregaon Park</li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} FutureSpace Interiors Pvt. Ltd. All rights reserved.
            <span className="block text-[11px] text-gray-500 mt-1">
              *45 working days timeline begins from the formal 3D design freeze and advance payment confirmation. Terms and conditions apply.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-300 hover:text-[#34D399] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
