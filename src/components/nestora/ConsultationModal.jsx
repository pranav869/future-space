import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Sparkles, Phone, User, MapPin } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    city: 'Bengaluru',
    propertyType: '3 BHK',
    budget: '₹5 - ₹8 Lakhs',
    timeline: 'Immediate (Within 45 Days)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#14261C] text-white p-6 sm:p-8 flex items-start justify-between relative">
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#34D399]">
              FREE 3D DESIGN + 45-DAY HANDOVER
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Book A Free Consultation
            </h3>
            <p className="text-xs text-gray-300">
              Meet our senior interior designer &amp; get a personalized 3D design walkthrough.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full bg-white/10 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-3 text-gray-400" />
                    <select
                      value={formState.city}
                      onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                    >
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi NCR">Delhi NCR (Gurugram / Noida)</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Pune">Pune</option>
                      <option value="Kolkata">Kolkata</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Property Type *
                  </label>
                  <select
                    value={formState.propertyType}
                    onChange={(e) => setFormState({ ...formState, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                  >
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                    <option value="Luxury Villa / Penthouse">Luxury Villa / Penthouse</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Approximate Budget
                </label>
                <select
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#1F7A4C]"
                >
                  <option value="Under ₹3.5 Lakhs">Under ₹3.5 Lakhs</option>
                  <option value="₹3.5 - ₹5 Lakhs">₹3.5 - ₹5 Lakhs (Essential)</option>
                  <option value="₹5 - ₹8 Lakhs">₹5 - ₹8 Lakhs (Premium)</option>
                  <option value="₹8 - ₹15 Lakhs">₹8 - ₹15 Lakhs (Luxury)</option>
                  <option value="₹15 Lakhs+">₹15 Lakhs+ (Ultra Luxury)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1F7A4C] hover:bg-[#18633C] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all text-base cursor-pointer"
                >
                  Confirm Free 3D Design Slot →
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#1F7A4C]" /> 45-Day Handover
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-[#1F7A4C]" /> 15-Yr Warranty
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles size={13} className="text-[#1F7A4C]" /> Zero Hidden Costs
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-gray-900">
                Consultation Confirmed!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <strong className="text-gray-900">{formState.name}</strong>. Our senior designer for <strong>{formState.city}</strong> will call you on <strong>{formState.phone}</strong> within 2 hours to confirm your 3D design slot.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#14261C] hover:bg-black text-white font-semibold text-sm px-6 py-2.5 rounded-xl cursor-pointer"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
