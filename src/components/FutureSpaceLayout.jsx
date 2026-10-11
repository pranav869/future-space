import React, { useState } from 'react';
import PromoBar from './nestora/PromoBar';
import Navbar from './nestora/Navbar';
import AnnouncementStrip from './nestora/AnnouncementStrip';
import Footer from './Footer';
import ConsultationModal from './nestora/ConsultationModal';
import PriceCalculatorModal from './nestora/PriceCalculatorModal';
import PartnerModal from './nestora/PartnerModal';
import '../futurespace_scoped.css';

export default function FutureSpaceLayout({ children }) {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <div className="futurespace-layout">
      {/* 1. TOP PROMOTIONAL BAR (Homepage Marquee) */}
      <PromoBar />

      {/* 2. MAIN HOMEPAGE NAVBAR COMPONENT */}
      <Navbar
        onBookQuoteClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
        onPartnerClick={() => setPartnerModalOpen(true)}
      />

      {/* 3. ANNOUNCEMENT STRIP */}
      <AnnouncementStrip onCtaClick={() => setConsultationModalOpen(true)} />

      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>

      <Footer />

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
    </div>
  );
}
