import React, { useState } from 'react';
import { X, LogIn, Lock, Phone, ArrowRight } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setOtpSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#1E2E24] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1F7A4C] text-white">
              <LogIn size={20} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold">Customer Portal</h3>
              <p className="text-xs text-gray-300">Track your 45-day project handover live</p>
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
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Registered Mobile Number
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#E86A33]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E86A33] hover:bg-[#D35622] text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer"
              >
                Send One-Time Password (OTP)
              </button>

              <p className="text-center text-[11px] text-gray-500 pt-2">
                New client? <span className="text-[#E86A33] font-semibold">Your portal access will be activated upon 3D design freeze.</span>
              </p>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 text-center">
                OTP sent successfully to <strong>+91 {phone}</strong>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Enter 4-Digit OTP
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="text"
                    maxLength={4}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="• • • •"
                    className="w-full pl-10 pr-3.5 py-2.5 text-center text-lg tracking-widest font-bold bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#E86A33]"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#1E2E24] hover:bg-black text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Verify &amp; View Project Dashboard</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
