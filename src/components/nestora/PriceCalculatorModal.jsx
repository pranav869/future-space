import React, { useState } from 'react';
import { X, Calculator, Sparkles, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function PriceCalculatorModal({ isOpen, onClose, onBookWithEstimate }) {
  if (!isOpen) return null;

  const [bhk, setBhk] = useState('3 BHK');
  const [tier, setTier] = useState('Premium');
  const [scopes, setScopes] = useState({
    kitchen: true,
    wardrobes: true,
    living: true,
    ceiling: true,
    painting: true,
  });

  // Base costs matrix (in Lakhs INR)
  const basePrices = {
    '1 BHK': { Essential: 2.8, Premium: 3.9, Luxury: 5.6 },
    '2 BHK': { Essential: 3.8, Premium: 5.4, Luxury: 7.9 },
    '3 BHK': { Essential: 5.2, Premium: 7.5, Luxury: 11.2 },
    '4 BHK': { Essential: 7.0, Premium: 10.2, Luxury: 15.5 },
  };

  const calculateEstimate = () => {
    let base = basePrices[bhk][tier];
    let multiplier = 0.5;
    if (scopes.kitchen) multiplier += 0.2;
    if (scopes.wardrobes) multiplier += 0.15;
    if (scopes.living) multiplier += 0.08;
    if (scopes.ceiling) multiplier += 0.04;
    if (scopes.painting) multiplier += 0.03;

    const total = base * (multiplier / 1.0);
    const min = (total * 0.92).toFixed(2);
    const max = (total * 1.08).toFixed(2);
    return { min, max, average: total.toFixed(2) };
  };

  const estimate = calculateEstimate();

  const toggleScope = (key) => {
    setScopes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1E2E24] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1F7A4C] text-white">
              <Calculator size={22} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold">FutureSpace Interior Price Calculator</h3>
              <p className="text-xs text-gray-300">Instant estimated quote tailored to your home layout</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Step 1: Configuration */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              1. Select Home Configuration
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBhk(item)}
                  className={`py-3 rounded-xl font-bold text-sm border-2 transition-all cursor-pointer ${
                    bhk === item
                      ? 'border-[#1F7A4C] bg-emerald-50/70 text-[#1F7A4C] shadow-xs'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Quality Tier */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              2. Select Material &amp; Finish Package
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { name: 'Essential', desc: 'Commercial ply + high-gloss laminate' },
                { name: 'Premium', desc: 'BWP ply + acrylic / anti-scratch' },
                { name: 'Luxury', desc: 'Bespoke PU lacquer + tinted glass + quartz' }
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setTier(item.name)}
                  className={`p-3 text-left rounded-xl border-2 transition-all cursor-pointer ${
                    tier === item.name
                      ? 'border-[#1F7A4C] bg-emerald-50/70 text-[#1F7A4C] shadow-xs'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <p className="font-bold text-sm mb-0.5">{item.name}</p>
                  <p className="text-[11px] text-gray-500 leading-tight">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Scope Checklist */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              3. Customize Included Spaces
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { key: 'kitchen', label: 'Modular Kitchen' },
                { key: 'wardrobes', label: 'Wardrobes' },
                { key: 'living', label: 'TV Unit & Living' },
                { key: 'ceiling', label: 'False Ceiling & LEDs' },
                { key: 'painting', label: 'Wall Paneling & Painting' },
              ].map((scope) => (
                <button
                  key={scope.key}
                  type="button"
                  onClick={() => toggleScope(scope.key)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                    scopes[scope.key]
                      ? 'bg-[#1E2E24] text-white border-[#1E2E24]'
                      : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-xs flex items-center justify-center ${scopes[scope.key] ? 'bg-[#1F7A4C]' : 'border border-gray-400'}`}>
                    {scopes[scope.key] && <Check size={12} className="text-white" />}
                  </div>
                  <span>{scope.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Calculation Result Box */}
          <div className="bg-[#FAF7F2] border-2 border-[#DCE8E0] rounded-2xl p-5 text-center">
            <span className="text-xs font-bold text-[#55695C] uppercase tracking-wider block mb-1">
              Estimated Total Investment ({bhk} • {tier})
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1F7A4C] my-1">
              ₹{estimate.min} – ₹{estimate.max} Lakhs*
            </div>
            <p className="text-xs text-gray-600">
              Includes complete design, 3D modeling, materials, German joinery &amp; on-site installation.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1 font-medium"><Clock size={14} className="text-[#1F7A4C]" /> 45-Day Handover</span>
            <span className="flex items-center gap-1 font-medium"><ShieldCheck size={14} className="text-[#1F7A4C]" /> 15-Yr Warranty</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              if (onBookWithEstimate) onBookWithEstimate(estimate.average, bhk);
            }}
            className="bg-[#1F7A4C] hover:bg-[#18633C] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>Lock Estimate &amp; Get 3D Design</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
