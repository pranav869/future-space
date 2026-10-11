import React, { useState } from 'react';
import { Clock, ShieldCheck, Factory, ArrowRight } from 'lucide-react';
import heroLivingRoom from '../../assets/nestora_hero.jpg';

export default function HeroSection({ onConsultationClick }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Project Handover",
      subtitle: "In 45 Working Days*",
      tagline: "MODERN SPACES | BETTER LIVING",
      image: heroLivingRoom,
    },
    {
      title: "100% Customised",
      subtitle: "Living & Kitchen Spaces*",
      tagline: "GERMAN JOINERY | 15-YR WARRANTY",
      image: heroLivingRoom,
    },
    {
      title: "Designer Homes",
      subtitle: "Tailored to Your Budget*",
      tagline: "ZERO HIDDEN COSTS | FREE 3D DESIGNS",
      image: heroLivingRoom,
    }
  ];

  return (
    <section id="hero" className="relative w-full min-h-[580px] lg:min-h-[82vh] flex items-center overflow-hidden bg-[#16241C]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[activeSlide].image}
          alt="FutureSpace Luxury Modern Indian Living Room"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Sophisticated Dual Gradient Overlays matching sample1.png */}
        {/* Left Dark Gradient for ultra-crisp typography contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#121A15]/95 via-[#121A15]/75 via-45% to-transparent" 
          aria-hidden="true"
        />
        {/* Subtle bottom vignette */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#121A15]/60 via-transparent to-black/25" 
          aria-hidden="true"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl text-left">
          {/* Small Uppercase Tagline */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5 bg-[#34D399]"></span>
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#EADBCE] drop-shadow-sm">
              {slides[activeSlide].tagline}
            </span>
          </div>

          {/* Main Headline in Large Elegant Serif Font */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            <span>{slides[activeSlide].title}</span>
            <br />
            <span className="text-white font-normal italic">
              {slides[activeSlide].subtitle}
            </span>
          </h1>

          {/* Benefits Panel: Light-cream rounded horizontal panel with green icons */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center bg-[#FAF5EC]/95 backdrop-blur-md rounded-2xl sm:rounded-full px-5 sm:px-7 py-3 sm:py-3.5 shadow-2xl border border-[#EADBCE]/80 gap-3 sm:gap-6 mb-8 transition-all hover:bg-[#FAF5EC]">
            {/* Benefit 1 */}
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-full bg-emerald-100 text-[#1F7A4C]">
                <Clock size={18} strokeWidth={2.2} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#2C221E] whitespace-nowrap">
                45-Days Delivery
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-[#D8C7B0]"></div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-full bg-emerald-100 text-[#1F7A4C]">
                <ShieldCheck size={18} strokeWidth={2.2} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#2C221E] whitespace-nowrap">
                15-Years Warranty
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-[#D8C7B0]"></div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-full bg-emerald-100 text-[#1F7A4C]">
                <Factory size={18} strokeWidth={2.2} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#2C221E] whitespace-nowrap">
                In-House Manufacturing
              </span>
            </div>
          </div>

          {/* Primary CTA: Prominent Green Button */}
          <div>
            <button
              type="button"
              onClick={onConsultationClick}
              className="group inline-flex items-center gap-3 bg-[#1F7A4C] hover:bg-[#18633C] text-white text-base sm:text-lg font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-emerald-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span>Book A Free Consultation</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Carousel Indicator Dots (matching bottom center of sample1.png) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              activeSlide === idx
                ? 'w-7 h-2.5 bg-[#34D399] rounded-full'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80 rounded-full'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
