import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  ArrowUpRight, 
  ChevronDown, 
  Menu, 
  X, 
  Calculator, 
  ChefHat,
  Bed,
  Tv,
  LampCeiling,
  Building2
} from 'lucide-react';

export default function Navbar({ 
  onBookQuoteClick, 
  onCalculatorClick, 
  onPartnerClick, 
  onNavigateSection 
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isGalleryPage = location.pathname === '/gallery';
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      // Always show at the top
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
        // Scrolling up -> reveal
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const productItems = [
    { name: 'Modular Kitchens', desc: 'Island, L-shape & parallel layouts with German fittings', icon: ChefHat },
    { name: 'Living Room TV Units', desc: 'Fluted panels, floating consoles & cove lighting', icon: Tv },
    { name: 'Master Bedroom Suites', desc: 'Custom headboards, wardrobes & bedside joinery', icon: Bed },
    { name: 'Wardrobes & Walk-Ins', desc: 'Floor-to-ceiling sliding & lacquered glass storage', icon: Building2 },
    { name: 'False Ceiling & Lighting', desc: 'Gypsum profiles, magnetic tracks & ambient coves', icon: LampCeiling },
  ];

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    if (isHomePage) {
      if (onNavigateSection) {
        onNavigateSection(sectionId);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className={`bg-white border-b border-[#E3ECE6] sticky top-0 z-50 shadow-xs transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* 1. TOP UTILITY BAR (48px high, vertically centered) */}
      <div className="border-b border-gray-100 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[48px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A4C] inline-block"></span>
            <span>Architecture &amp; Interior Design Practice</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onPartnerClick}
              className="bg-[#1F7A4C] hover:bg-[#18633C] text-white text-xs font-semibold px-3.5 py-1.5 rounded-md shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Become Our Partner
            </button>

            <button
              type="button"
              onClick={onCalculatorClick}
              className="bg-[#1F7A4C] hover:bg-[#18633C] text-white text-xs font-semibold px-3.5 py-1.5 rounded-md shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <Calculator size={13} />
              <span>Price Calculator</span>
            </button>

            <div className="h-4 w-px bg-gray-200 mx-1"></div>

            {/* Direct Phone Number */}
            <a 
              href="tel:+919363419550" 
              className="flex items-center gap-1.5 text-gray-900 hover:text-[#1F7A4C] font-bold text-xs sm:text-sm tracking-tight transition-colors"
            >
              <span className="p-1 rounded-full bg-emerald-50 text-[#1F7A4C]">
                <Phone size={12} />
              </span>
              <span>+91 9363419550</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION ROW (76px high, vertically centered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Brand Logo */}
          <Link 
            to="/"
            onClick={() => {
              if (isHomePage) handleNavClick('hero');
            }} 
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            {/* Minimalist geometric house icon mark */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-[#14261C] text-white shadow-md group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#14261C] to-[#224A34] rounded-lg"></div>
              {/* Stylized roof & door mark in emerald green */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-5 h-2.5 border-t-2 border-l-2 border-r-2 border-[#34D399] transform rotate-45 mb-0.5"></div>
                <div className="w-3.5 h-3 bg-white/95 rounded-xs flex items-end justify-center">
                  <div className="w-1.5 h-2 bg-[#1F7A4C] rounded-t-xs"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center tracking-tight font-extrabold text-2xl text-[#14261C]">
                <span>FutureSpace</span>
              </div>
              <div className="text-[10px] uppercase font-bold tracking-[0.26em] text-[#1F7A4C] -mt-1">
                Interiors Studio
              </div>
            </div>
          </Link>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-sm text-[#2C221E]">
            {isHomePage ? (
              <button 
                type="button"
                onClick={() => handleNavClick('hero')} 
                className="text-[#1F7A4C] font-bold hover:text-[#18633C] transition-colors cursor-pointer relative py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1F7A4C]"></span>
              </button>
            ) : (
              <Link 
                to="/" 
                className="hover:text-[#1F7A4C] transition-colors cursor-pointer py-2"
              >
                Home
              </Link>
            )}

            <Link 
              to="/about" 
              className={`transition-colors cursor-pointer py-2 relative ${
                isAboutPage 
                  ? 'text-[#1F7A4C] font-bold' 
                  : 'hover:text-[#1F7A4C]'
              }`}
            >
              About Us
              {isAboutPage && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1F7A4C]"></span>
              )}
            </Link>

            <button 
              type="button"
              onClick={() => handleNavClick('why-us')} 
              className="hover:text-[#1F7A4C] transition-colors cursor-pointer py-2 font-medium"
            >
              Why Us
            </button>

            <button 
              type="button"
              onClick={() => handleNavClick('what-we-do')} 
              className="hover:text-[#1F7A4C] transition-colors cursor-pointer py-2"
            >
              What We Do
            </button>

            <Link 
              to="/services" 
              className="hover:text-[#1F7A4C] transition-colors cursor-pointer py-2"
            >
              Services
            </Link>

            {/* Products Link & Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link 
                to="/products"
                className="flex items-center gap-1 hover:text-[#1F7A4C] transition-colors cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#1F7A4C]' : ''}`} />
              </Link>

              {productsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3.5 py-1.5 border-b border-gray-100 mb-1">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Custom Interior Solutions</span>
                  </div>
                  {productItems.map((prod, idx) => {
                    const IconComp = prod.icon;
                    return (
                      <Link
                        key={idx}
                        to="/products"
                        onClick={() => setProductsOpen(false)}
                        className="w-full px-3.5 py-2.5 text-left flex items-start gap-3 hover:bg-[#F2F8F4] transition-colors group cursor-pointer block"
                      >
                        <div className="p-1.5 rounded-md bg-[#E8F3EC] text-[#1F7A4C] group-hover:bg-[#1F7A4C] group-hover:text-white transition-colors">
                          <IconComp size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1F7A4C]">{prod.name}</p>
                          <p className="text-xs text-gray-500 leading-snug">{prod.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link 
              to="/gallery" 
              className={`transition-colors cursor-pointer py-2 relative ${
                isGalleryPage 
                  ? 'text-[#1F7A4C] font-bold' 
                  : 'hover:text-[#1F7A4C]'
              }`}
            >
              Gallery
              {isGalleryPage && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1F7A4C]"></span>
              )}
            </Link>

            <Link 
              to="/contact" 
              className="hover:text-[#1F7A4C] transition-colors cursor-pointer py-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Prominent Outlined "Book Free Quote" button with circular green arrow icon */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={onBookQuoteClick}
              className="group flex items-center bg-white hover:bg-emerald-50/60 border-2 border-[#14261C] rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span className="font-bold text-sm text-gray-900 group-hover:text-[#1F7A4C] transition-colors mr-3">
                Book Free Quote
              </span>
              <div className="w-8 h-8 rounded-full bg-[#1F7A4C] group-hover:bg-[#18633C] flex items-center justify-center text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onBookQuoteClick}
              className="bg-[#1F7A4C] text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1"
            >
              <span>Quote</span>
              <ArrowUpRight size={13} />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#1F7A4C] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onPartnerClick(); }}
              className="bg-[#1F7A4C] text-white text-[11px] font-bold py-2 rounded-md text-center"
            >
              Become Partner
            </button>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onCalculatorClick(); }}
              className="bg-[#1F7A4C] text-white text-[11px] font-bold py-2 rounded-md text-center"
            >
              Price Calculator
            </button>
          </div>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick('hero')}
              className="w-full text-left py-2 text-base font-semibold text-[#1F7A4C]"
            >
              Home
            </button>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left py-2 text-base block ${
                isAboutPage 
                  ? 'font-bold text-[#1F7A4C]' 
                  : 'font-medium text-gray-800 hover:text-[#1F7A4C]'
              }`}
            >
              About Us
            </Link>
            <button
              type="button"
              onClick={() => handleNavClick('why-us')}
              className="w-full text-left py-2 text-base font-medium text-gray-800"
            >
              Why Us (Comparison)
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('what-we-do')}
              className="w-full text-left py-2 text-base font-medium text-gray-800"
            >
              What We Do
            </button>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-base font-medium text-gray-800 block hover:text-[#1F7A4C]"
            >
              Services
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-base font-medium text-gray-800 block hover:text-[#1F7A4C]"
            >
              Products &amp; Modular Joinery
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left py-2 text-base block ${
                isGalleryPage 
                  ? 'font-bold text-[#1F7A4C]' 
                  : 'font-medium text-gray-800 hover:text-[#1F7A4C]'
              }`}
            >
              Gallery &amp; Real Homes
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2 text-base font-medium text-gray-800 block hover:text-[#1F7A4C]"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <a href="tel:+919363419550" className="flex items-center gap-2 font-bold text-sm text-gray-900">
              <Phone size={14} className="text-[#1F7A4C]" />
              <span>+91 9363419550</span>
            </a>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onBookQuoteClick(); }}
              className="bg-[#1F7A4C] text-white text-xs font-bold px-4 py-2 rounded-full"
            >
              Book Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
