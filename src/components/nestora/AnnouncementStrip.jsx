import React from 'react';

export default function AnnouncementStrip({ onCtaClick }) {
  return (
    <div className="bg-[#F4F8F5] border-b border-[#DCE8DF] h-[38px] flex items-center justify-center px-4 text-center select-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-[#243B2C] truncate">
        <span className="text-base select-none" role="img" aria-label="celebration">🎉</span>
        <span>
          This month only:{' '}
          <button 
            type="button"
            onClick={onCtaClick}
            className="text-[#1F7A4C] font-extrabold hover:underline cursor-pointer"
          >
            FREE 3D Design + 45-day delivery
          </button>{' '}
          on full-home interiors —{' '}
          <span className="font-medium text-[#4D6A56]">limited slots</span>
        </span>
      </div>
    </div>
  );
}
