import React, { useState } from 'react';
import { X, Briefcase, CheckCircle, Handshake, Building } from 'lucide-react';

export default function PartnerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [partnerType, setPartnerType] = useState('Architect / Designer');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#1E2E24] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1F7A4C] text-white">
              <Handshake size={20} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold">Become Our Partner</h3>
              <p className="text-xs text-gray-300">Join FutureSpace's certified pan-India design network</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Partner Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Architect / Designer', 'Builder / Developer', 'Contractor'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPartnerType(type)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        partnerType === type
                          ? 'border-[#1F7A4C] bg-emerald-50 text-[#1F7A4C]'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Full Name / Studio Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Studio Vistara Architecture"
                  className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200..."
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="partner@domain.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1F7A4C] hover:bg-[#18633C] text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer"
                >
                  Submit Partner Application
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-gray-900">Application Received</h4>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Our channel partnership team will review your credentials and get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 bg-[#1E2E24] text-white text-xs font-semibold px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
