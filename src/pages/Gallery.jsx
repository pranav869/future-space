import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Compass, 
  Layers, 
  Maximize, 
  Users, 
  ChevronDown
} from 'lucide-react';

import PromoBar from '../components/nestora/PromoBar';
import Navbar from '../components/nestora/Navbar';
import Footer from '../components/nestora/Footer';
import ChatWidget from '../components/nestora/ChatWidget';
import ConsultationModal from '../components/nestora/ConsultationModal';
import PriceCalculatorModal from '../components/nestora/PriceCalculatorModal';
import PartnerModal from '../components/nestora/PartnerModal';

import { galleryCategories, galleryItems, commercialSlides } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [commercialSlideIndex, setCommercialSlideIndex] = useState(0);

  // Modals
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // Filtered gallery items
  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Scroll to gallery grid
  const handleScrollToGrid = () => {
    const el = document.getElementById('gallery-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevLightboxImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightboxImage();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextLightboxImage, prevLightboxImage]);

  // Auto advance commercial slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCommercialSlideIndex((prev) => (prev + 1) % commercialSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] antialiased">
      {/* 1. TOP PROMOTIONAL BAR */}
      <PromoBar />

      {/* 2. MAIN NAVIGATION HEADER */}
      <Navbar
        onBookQuoteClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
        onPartnerClick={() => setPartnerModalOpen(true)}
      />

      {/* BREADCRUMB BAR */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-500 hover:text-[#1F7A4C] transition-colors">
              Home
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-[#1F7A4C]">Gallery</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        {/* ========================================================
            3. GALLERY HERO SECTION (Forest Green & Emerald Gradient)
           ======================================================== */}
        <section className="relative bg-gradient-to-b from-[#0A1610] via-[#122319] to-[#0D1812] text-white pt-20 pb-24 overflow-hidden border-b border-[#21382A]">
          {/* Subtle architectural ambient texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#34D399_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
              <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.24em] text-[#34D399]">
                FUTURE SPACE STUDIO
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
              A Portfolio of Spaces{' '}
              <span className="text-[#34D399] block sm:inline">
                That Redefine Modern Living
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Explore a considered collection of residential interiors, contemporary kitchens, 
              thoughtfully designed bedrooms, elegant living spaces, and distinctive architectural projects. 
              Discover ideas, materials, and design details that bring every space to life.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setConsultationModalOpen(true)}
                className="group inline-flex items-center gap-2.5 bg-[#1F7A4C] hover:bg-[#18633C] text-white border border-[#34D399]/40 text-sm font-bold px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight size={16} className="text-[#34D399] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleScrollToGrid}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                <span>Explore the Gallery</span>
                <ChevronDown size={16} className="text-[#1F7A4C]" />
              </button>
            </div>

            {/* Statistics Panel (Horizontal Panel with 4 items) */}
            <div className="mt-14 max-w-4xl mx-auto bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Stat 1 */}
                <div className="text-center pt-3 md:pt-0">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    250<span className="text-[#34D399]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-300 mt-1">
                    Residential Interiors
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Living &amp; Bedroom Suites
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center pt-3 md:pt-0 md:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    35<span className="text-[#34D399]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-300 mt-1">
                    Commercial Spaces
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Offices &amp; Retail Studios
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center pt-3 md:pt-0 md:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    120<span className="text-[#34D399]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-300 mt-1">
                    Kitchen Designs
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Precision Modular Joinery
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center pt-3 md:pt-0 md:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    25<span className="text-[#34D399]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-300 mt-1">
                    Architectural Projects
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Villas &amp; Elevations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. GALLERY INTRODUCTION & 5. CATEGORY FILTERS
           ======================================================== */}
        <section className="pt-16 pb-6 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Centered Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14261C] tracking-tight max-w-3xl mx-auto">
              <span className="text-[#1F7A4C]">Residential &amp; Commercial</span>{' '}
              <span>Interior Design</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover interior design ideas for living rooms, bedrooms, modular kitchens, pooja spaces, 
              and commercial environments. Explore different design styles, carefully considered materials, 
              and creative approaches to transforming spaces.
            </p>

            {/* 5. INTERACTIVE CATEGORY FILTERS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3" role="tablist" aria-label="Gallery category filters">
              {galleryCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                      isActive
                        ? 'bg-[#14261C] text-white shadow-md scale-[1.02]'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-[#1F7A4C] hover:text-[#1F7A4C]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            6. GALLERY IMAGE GRID
           ======================================================== */}
        <section id="gallery-grid" className="pb-24 pt-8 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col"
                >
                  {/* Image Container with 4:3 Aspect Ratio */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Discreet Expand Icon Top-Right */}
                    <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                      <Maximize2 size={15} />
                    </div>

                    {/* Gradient Overlay for bottom label contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Category Pill Tag Bottom-Left */}
                    <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-semibold tracking-wide">
                        {item.category}
                      </span>
                      {item.type && (
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#1F7A4C]/80 backdrop-blur-xs text-white text-[10px] font-medium">
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Caption / Title Bar */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-[#1F7A4C] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                      <span className="font-medium text-[#1F7A4C]">{item.type}</span>
                      <span className="group-hover:translate-x-1 transition-transform text-[#1F7A4C] font-semibold flex items-center gap-1">
                        <span>View</span>
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state safeguard */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-500 text-sm">No items found in this category.</p>
                <button
                  type="button"
                  onClick={() => setActiveCategory('All')}
                  className="mt-3 text-xs font-bold text-[#1F7A4C] underline cursor-pointer"
                >
                  View All Gallery Items
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            7. IMAGE LIGHTBOX MODAL
           ======================================================== */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Modal Dialog Content */}
            <div
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#14261C] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1F7A4C] text-white text-xs font-bold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative flex-1 flex items-center justify-center bg-black/80 p-2 sm:p-4 min-h-[300px] max-h-[70vh] overflow-hidden">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].alt}
                  className="max-h-[66vh] max-w-full object-contain rounded-lg"
                />

                {/* Previous Button */}
                <button
                  type="button"
                  onClick={prevLightboxImage}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={nextLightboxImage}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Lightbox Footer Details */}
              <div className="px-5 py-4 bg-[#0F1E16] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
                <div>
                  <h4 className="text-base font-bold text-white">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    {filteredItems[lightboxIndex].subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full font-medium">
                    {filteredItems[lightboxIndex].type}
                  </span>
                  <button
                    type="button"
                    onClick={() => { closeLightbox(); setConsultationModalOpen(true); }}
                    className="bg-[#1F7A4C] hover:bg-[#18633C] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    Enquire for this Style
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            8. COMMERCIAL INTERIOR FEATURE SECTION
           ======================================================== */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#1F7A4C]"></span>
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1F7A4C]">
                    BEYOND RESIDENTIAL SPACES
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14261C] tracking-tight leading-[1.15]">
                  <span className="text-[#1F7A4C] block">Commercial Interiors</span>
                  <span>Designed Around Your Business</span>
                </h2>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Explore thoughtful design concepts for offices, studios, retail environments, 
                  hospitality spaces, and other commercial interiors. Our approach considers the way 
                  people use a space, the atmosphere it creates, and the practical needs of the business.
                </p>

                {/* Feature List with Forest Green Checkmarks */}
                <div className="space-y-3.5 pt-2">
                  {[
                    'Contemporary office and workspace concepts',
                    'Retail and showroom design ideas',
                    'Space planning and furniture layouts',
                    'Materials, lighting, and finish coordination'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 text-[#1F7A4C] mt-0.5 shrink-0">
                        <CheckCircle2 size={18} className="fill-[#1F7A4C] text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setConsultationModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#14261C] hover:bg-[#1E3A2B] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
                  >
                    <span>Discuss Your Commercial Project</span>
                    <ArrowUpRight size={16} className="text-[#34D399]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Large Commercial Showcase with Mini Carousel */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] bg-gray-100 group">
                  <img
                    src={commercialSlides[commercialSlideIndex].image}
                    alt={commercialSlides[commercialSlideIndex].alt}
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />

                  {/* Gradient Overlay for Bottom Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

                  {/* Slide Description Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
                    <div className="text-white">
                      <h4 className="text-base sm:text-lg font-bold">
                        {commercialSlides[commercialSlideIndex].title}
                      </h4>
                      <p className="text-xs text-gray-200 mt-0.5 line-clamp-1">
                        {commercialSlides[commercialSlideIndex].subtitle}
                      </p>
                    </div>

                    {/* Carousel Indicator Dots */}
                    <div className="flex items-center gap-1.5 shrink-0 bg-black/40 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/10">
                      {commercialSlides.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setCommercialSlideIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            commercialSlideIndex === dotIdx
                              ? 'w-6 bg-[#34D399]'
                              : 'w-2 bg-white/50 hover:bg-white'
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            9. WHY FUTURE SPACE SECTION
           ======================================================== */}
        <section className="py-20 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#1F7A4C]"></span>
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1F7A4C]">
                THE FUTURE SPACE APPROACH
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14261C] tracking-tight">
              Thoughtful Design. Meaningful Details.
            </h2>

            {/* 4 Cards in a Row on Desktop */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {/* CARD 1 */}
              <div className="group bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3EC] text-[#1F7A4C] group-hover:bg-[#1F7A4C] group-hover:text-white flex items-center justify-center shadow-xs transition-colors mb-5">
                  <Compass size={26} strokeWidth={2.2} />
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">
                  Considered Design
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Spaces planned around aesthetics, functionality, and the needs of the people who use them.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="group bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3EC] text-[#1F7A4C] group-hover:bg-[#1F7A4C] group-hover:text-white flex items-center justify-center shadow-xs transition-colors mb-5">
                  <Layers size={26} strokeWidth={2.2} />
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">
                  Material Harmony
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Thoughtful combinations of colours, textures, surfaces, and finishes.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="group bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3EC] text-[#1F7A4C] group-hover:bg-[#1F7A4C] group-hover:text-white flex items-center justify-center shadow-xs transition-colors mb-5">
                  <Maximize size={26} strokeWidth={2.2} />
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">
                  Space Planning
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  Layouts that make considered use of available space and improve the overall flow of an interior.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="group bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3EC] text-[#1F7A4C] group-hover:bg-[#1F7A4C] group-hover:text-white flex items-center justify-center shadow-xs transition-colors mb-5">
                  <Users size={26} strokeWidth={2.2} />
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">
                  Project Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                  A design process shaped by clear communication and an understanding of your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            10. FINAL CALL-TO-ACTION SECTION
           ======================================================== */}
        <section className="relative bg-gradient-to-r from-[#0C1711] via-[#14261C] to-[#0A130E] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1C3325]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Eyebrow */}
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#34D399]">
              READY TO CREATE SOMETHING DISTINCTIVE?
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Your Space. Your Vision.{' '}
              <span className="text-[#34D399] block sm:inline">
                Let's Bring It to Life.
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a new home, refreshing an existing interior, 
              or exploring possibilities for a commercial space, we'd love to hear about your ideas.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setConsultationModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#1F7A4C] hover:bg-[#18633C] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight size={16} className="text-[#34D399]" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 text-sm font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer"
              >
                <span>Contact Future Space</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 11. GLOBAL FOOTER */}
      <Footer
        onNavigateSection={() => {}}
        onConsultationClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
      />

      {/* Interactive Global Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <PriceCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onBookWithEstimate={() => {
          setCalculatorModalOpen(false);
          setConsultationModalOpen(true);
        }}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

      <ChatWidget onStartChat={() => setConsultationModalOpen(true)} />
    </div>
  );
}
