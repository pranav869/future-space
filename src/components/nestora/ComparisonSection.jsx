import React from 'react';
import { Check, X, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function ComparisonSection({ onConsultationClick }) {
  const comparisonRows = [
    {
      feature: 'In-house manufacturing',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'cross', text: '' },
      bigBrand: { type: 'cross', text: '' },
    },
    {
      feature: '45-day delivery promise',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'cross', text: '' },
      bigBrand: { type: 'text', text: 'Sometimes' },
    },
    {
      feature: '15-year flat warranty',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'cross', text: '' },
      bigBrand: { type: 'text', text: '1–5 yrs' },
    },
    {
      feature: 'Free 3D design consultation',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'cross', text: '' },
      bigBrand: { type: 'text', text: 'Paid' },
    },
    {
      feature: 'Transparent itemised pricing',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'text', text: 'Varies' },
      bigBrand: { type: 'check', text: '' },
    },
    {
      feature: 'Post-installation support',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'cross', text: '' },
      bigBrand: { type: 'check', text: '' },
    },
    {
      feature: 'Personalized design approach',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'text', text: 'Depends on designer' },
      bigBrand: { type: 'check', text: '' },
    },
    {
      feature: 'No hidden cost surprises',
      nestora: { type: 'check', text: '' },
      contractor: { type: 'cross', text: '' },
      bigBrand: { type: 'text', text: 'Varies' },
    },
  ];

  const renderCell = (item, isHighlight = false) => {
    if (item.type === 'check') {
      return (
        <div className="inline-flex items-center justify-center">
          <span className="w-7 h-7 rounded-full bg-[#E8F5E9] text-[#1F7A4C] inline-flex items-center justify-center shadow-xs">
            <Check size={16} strokeWidth={3} />
          </span>
        </div>
      );
    }

    if (item.type === 'cross') {
      return (
        <div className="inline-flex items-center justify-center">
          <span className="w-7 h-7 rounded-full bg-[#FEE2E2] text-[#DC2626] inline-flex items-center justify-center shadow-xs">
            <X size={16} strokeWidth={2.8} />
          </span>
        </div>
      );
    }

    return (
      <span className={`text-sm ${isHighlight ? 'font-semibold text-gray-900' : 'text-gray-600 font-medium'}`}>
        {item.text}
      </span>
    );
  };

  return (
    <section id="why-us" className="py-20 bg-[#FAF7F2] border-b border-[#EDE2D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#1F7A4C] mb-3 bg-[#E8F5E9] px-3.5 py-1 rounded-full">
            WHY FUTURESPACE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14261C] tracking-tight leading-tight mb-4">
            <span className="text-[#E05A1B]">Why Homeowners Choose</span>{' '}
            India's Premium Interior Design Studio
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The difference is owning the whole journey — bespoke design, factory manufacturing, and a 15-year warranty.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr>
                  {/* Column 1: Feature */}
                  <th className="w-[32%] py-5 px-6 sm:px-8 bg-[#6E1C0A] text-white font-bold text-sm sm:text-base tracking-wide uppercase border-r border-white/10">
                    Feature
                  </th>

                  {/* Column 2: NESTORA Interiors (Highlight) */}
                  <th className="w-[28%] py-5 px-4 sm:px-6 bg-[#E05A1B] text-white text-center border-r border-white/10 shadow-sm">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="font-extrabold text-base sm:text-lg tracking-wide uppercase">
                        FutureSpace Interiors
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-white/25 text-white px-2.5 py-0.5 rounded-full inline-block">
                        YOUR BEST CHOICE
                      </span>
                    </div>
                  </th>

                  {/* Column 3: Local Contractor */}
                  <th className="w-[20%] py-5 px-4 sm:px-6 bg-[#6E1C0A] text-white font-bold text-sm sm:text-base tracking-wide text-center border-r border-white/10">
                    Local Contractor
                  </th>

                  {/* Column 4: Big Brand */}
                  <th className="w-[20%] py-5 px-4 sm:px-6 bg-[#6E1C0A] text-white font-bold text-sm sm:text-base tracking-wide text-center">
                    Big Brand
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, idx) => {
                  const isEven = idx % 2 === 1;
                  const rowBg = isEven ? 'bg-[#FCFAF7]' : 'bg-white';

                  return (
                    <tr key={idx} className={`${rowBg} hover:bg-amber-50/30 transition-colors`}>
                      {/* Feature Name */}
                      <td className="py-4 sm:py-5 px-6 sm:px-8 font-semibold text-gray-900 text-sm sm:text-base border-r border-gray-100">
                        {row.feature}
                      </td>

                      {/* NESTORA Column (Continuous Highlight) */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center bg-[#FFF8F2] border-r border-amber-100/60 shadow-xs">
                        {renderCell(row.nestora, true)}
                      </td>

                      {/* Local Contractor */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center border-r border-gray-100">
                        {renderCell(row.contractor)}
                      </td>

                      {/* Big Brand */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                        {renderCell(row.bigBrand)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small Disclaimer */}
        <p className="text-center text-xs text-gray-500 italic mt-4 max-w-3xl mx-auto">
          Services, deliverables, warranties, and delivery timelines are subject to contract terms agreed for each project.
          FutureSpace Interiors guarantees on-time 45-day handover or pays monthly rent compensation.
        </p>

        {/* Call To Action Box directly beneath table */}
        <div className="mt-12 bg-gradient-to-r from-[#14261C] to-[#1F402F] rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2D5A42]">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Free 3D Design Session</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Every dream home deserves a thoughtful beginning.
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Book a free consultation with our senior designers. Get personalized 3D spatial renders and transparent pricing with zero obligation.
            </p>
          </div>

          <button
            type="button"
            onClick={onConsultationClick}
            className="flex-shrink-0 bg-[#E05A1B] hover:bg-[#C94E15] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          >
            <span>Book Free 3D Design</span>
            <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
