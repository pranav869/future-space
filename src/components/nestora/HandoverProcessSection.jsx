import React from 'react';
import { CalendarCheck, Cpu, Hammer, KeyRound, Clock, ShieldAlert } from 'lucide-react';

export default function HandoverProcessSection({ onConsultationClick }) {
  const steps = [
    {
      days: 'Day 01 – 10',
      title: 'Free 3D Design Freeze',
      desc: 'Collaborate with your dedicated architect on 3D VR renders. Select materials, finishes, and lock your quotation with zero surprises.',
      icon: CalendarCheck,
      color: 'bg-emerald-50 text-emerald-700'
    },
    {
      days: 'Day 11 – 28',
      title: 'In-House Factory Manufacturing',
      desc: 'Engineered in our 50,000 sq.ft German Homag-equipped facility. CNC cut, laser edge-banded, and pre-assembled with 146+ quality checks.',
      icon: Cpu,
      color: 'bg-blue-50 text-blue-700'
    },
    {
      days: 'Day 29 – 40',
      title: 'On-Site Installation',
      desc: 'Flat-packed modular units arrive at your doorstep. Trained FutureSpace technicians install kitchen, wardrobes, false ceiling & lighting.',
      icon: Hammer,
      color: 'bg-amber-50 text-amber-700'
    },
    {
      days: 'Day 41 – 45',
      title: 'Deep Clean & Handover',
      desc: 'Professional deep cleaning, final audit with the homeowner, certificate of 15-year warranty, and ceremonial key handover!',
      icon: KeyRound,
      color: 'bg-emerald-50 text-[#1F7A4C]'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#16241C] text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E4236_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2 bg-[#1F7A4C]/25 border border-[#34D399]/40 rounded-full px-4 py-1">
            <Clock size={13} className="text-[#34D399]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#A7F3D0]">
              OUR IRONCLAD PROMISE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 text-white">
            Project Handover In 45 Working Days*
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
            Most interior designers take 4–6 months with endless delays. At FutureSpace, we control the entire supply chain with in-house manufacturing, ensuring you move in on the promised date or we pay you rent.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#1E2E24] rounded-2xl p-6 border border-[#2D4435] shadow-lg relative flex flex-col justify-between hover:border-[#34D399] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#A7F3D0] bg-[#1F7A4C]/30 px-3 py-1 rounded-full border border-[#34D399]/30">
                      {step.days}
                    </span>
                    <span className="font-serif text-2xl font-bold text-white/30">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                    <IconComp size={24} className="text-[#34D399]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#A7F3D0]">
                  <span>Step 0{idx + 1} of 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 bg-gradient-to-r from-[#24382B] via-[#1E2E24] to-[#24382B] border border-[#3A5643] rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-serif text-2xl font-bold text-white">
              Ready to begin your 45-day journey?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Claim your Free 3D Design Session + Flat 25% Off summer discount voucher today.
            </p>
          </div>

          <button
            type="button"
            onClick={onConsultationClick}
            className="bg-[#1F7A4C] hover:bg-[#18633C] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Claim Free 3D Design →
          </button>
        </div>
      </div>
    </section>
  );
}
