import React from 'react';
import { ChefHat, Tv, Bed, Building2, LampCeiling, Utensils, ArrowRight } from 'lucide-react';
import modularKitchenImg from '../../assets/everyday-joy/Modular kitchen.jpg';
import livingRoomTvImg from '../../assets/everyday-joy/Living Room TV Feature Walls.jpg';
import masterBedroomImg from '../../assets/everyday-joy/Master Bedroom Suites.jpeg';
import diningCrockeryImg from '../../assets/everyday-joy/Dining & Crockery Consoles.jpg';

export default function WhatWeDoSection({ onExploreClick }) {
  const categories = [
    {
      title: 'Modular Kitchens',
      tagline: 'Ergonomic layouts with German Blum / Hettich hardware',
      startingAt: '₹1.75 Lakhs',
      image: modularKitchenImg,
      icon: ChefHat,
      badge: 'Best Seller'
    },
    {
      title: 'Living Room TV Feature Walls',
      tagline: 'Acoustic fluted louvers, floating consoles & cove illumination',
      startingAt: '₹85,000',
      image: livingRoomTvImg,
      icon: Tv,
      badge: 'Trending'
    },
    {
      title: 'Master Bedroom Suites',
      tagline: 'Plush upholstered headboards, dressers & customized wardrobes',
      startingAt: '₹1.90 Lakhs',
      image: masterBedroomImg,
      icon: Bed,
      badge: 'Popular'
    },
    {
      title: 'Floor-to-Ceiling Wardrobes',
      tagline: 'Anti-scratch acrylic, tinted glass & smart sensor lighting',
      startingAt: '₹95,000',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      badge: 'Custom Sized'
    },
    {
      title: 'False Ceiling & Architectural Lighting',
      tagline: 'Gypsum board geometries with magnetic track spotlights',
      startingAt: '₹55 / sq.ft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      icon: LampCeiling,
      badge: 'Ambient'
    },
    {
      title: 'Dining & Crockery Consoles',
      tagline: 'Fluted glass display cabinets with integrated wine racks',
      startingAt: '₹65,000',
      image: diningCrockeryImg,
      icon: Utensils,
      badge: 'Bespoke'
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-[#FAF7F2] border-b border-[#EDE2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#1F7A4C]"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F7A4C]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2E24] tracking-tight">
              Spaces Designed For Everyday Joy
            </h2>
            <p className="text-sm text-gray-600 mt-3">
              From compact urban apartments to sprawling private villas, every millimeter is designed in 3D and precision-manufactured in our German-tech facility.
            </p>
          </div>

          <button
            type="button"
            onClick={onExploreClick}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1F7A4C] hover:text-[#18633C] transition-colors cursor-pointer"
          >
            <span>Explore All 3D Interior Packages</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-xs font-bold text-[#1E2E24] px-3 py-1 rounded-full shadow-xs">
                    {cat.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#1E2E24]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    Starts at <span className="text-[#34D399] font-extrabold">{cat.startingAt}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#1F7A4C]">
                      <IconComp size={18} />
                      <span className="text-xs font-extrabold uppercase tracking-wider">FutureSpace Craft</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1E2E24] group-hover:text-[#1F7A4C] transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1E2E24]">15-Yr Warranty Included</span>
                    <button
                      type="button"
                      onClick={onExploreClick}
                      className="text-xs font-bold text-[#1F7A4C] group-hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
