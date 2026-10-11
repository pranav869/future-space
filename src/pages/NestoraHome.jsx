import React, { useState } from 'react';
import PromoBar from '../components/nestora/PromoBar';
import Navbar from '../components/nestora/Navbar';
import AnnouncementStrip from '../components/nestora/AnnouncementStrip';
import HeroSection from '../components/nestora/HeroSection';
import TrustStatsSection from '../components/nestora/TrustStatsSection';
import WhatWeDoSection from '../components/nestora/WhatWeDoSection';
import ComparisonSection from '../components/nestora/ComparisonSection';
import HandoverProcessSection from '../components/nestora/HandoverProcessSection';
import GallerySection from '../components/nestora/GallerySection';
import Footer from '../components/nestora/Footer';
import ChatWidget from '../components/nestora/ChatWidget';
import ConsultationModal from '../components/nestora/ConsultationModal';
import PriceCalculatorModal from '../components/nestora/PriceCalculatorModal';
import PartnerModal from '../components/nestora/PartnerModal';

export default function NestoraHome() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithEstimate = (estimateAvg, bhk) => {
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] antialiased">
      {/* 1. TOP PROMOTIONAL BAR */}
      <PromoBar />

      {/* 2. MAIN NAVIGATION HEADER */}
      <Navbar
        onBookQuoteClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
        onPartnerClick={() => setPartnerModalOpen(true)}
        onNavigateSection={handleScrollToSection}
      />

      {/* 3. ANNOUNCEMENT STRIP */}
      <AnnouncementStrip onCtaClick={() => setConsultationModalOpen(true)} />

      {/* 4. HERO SECTION */}
      <main className="flex-1">
        <HeroSection onConsultationClick={() => setConsultationModalOpen(true)} />

        {/* 2ND SECTION: WHY TAMIL NADU TRUSTS FUTURESPACE (STATS + PARTNERS + 3D DESIGN FORM) */}
        <TrustStatsSection />

        {/* WHAT WE DO SECTION */}
        <WhatWeDoSection onExploreClick={() => setConsultationModalOpen(true)} />

        {/* 6. WHY FUTURESPACE COMPARISON TABLE SECTION (3RD SECTION) */}
        <ComparisonSection onConsultationClick={() => setConsultationModalOpen(true)} />

        {/* 7. 45-DAY HANDOVER PROCESS SECTION */}
        <HandoverProcessSection onConsultationClick={() => setConsultationModalOpen(true)} />

        {/* 7. REAL COMPLETED HOMES GALLERY */}
        <GallerySection onConsultationClick={() => setConsultationModalOpen(true)} />
      </main>

      {/* 8. FOOTER */}
      <Footer 
        onNavigateSection={handleScrollToSection}
        onConsultationClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
      />

      {/* 9. FLOATING CUSTOMER SUPPORT / WHATSAPP WIDGET */}
      <ChatWidget 
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onOpenCalculator={() => setCalculatorModalOpen(true)}
      />

      {/* 10. INTERACTIVE MODALS */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <PriceCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onBookWithEstimate={handleBookWithEstimate}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}
