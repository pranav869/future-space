import React from 'react';
import { Home, Percent, ShieldCheck, Sparkles, Flame } from 'lucide-react';

export default function PromoBar() {
  const promoItems = [
    { icon: Home, text: 'Free Home Consultation' },
    { icon: Percent, text: 'Flat 25% Off on Interior Packages' },
    { icon: ShieldCheck, text: 'Trusted by 10,000+ Happy Homes' },
    { icon: Sparkles, text: 'Designs for Every Budget' },
    { icon: Flame, text: 'Summer Sale: Up to 25% Off', isHighlight: true },
  ];

  const renderItemSet = (prefix) => (
    <div key={prefix} className="flex items-center gap-6 sm:gap-8 px-4 flex-shrink-0">
      {promoItems.map((item, idx) => {
        const IconComp = item.icon;
        return (
          <React.Fragment key={`${prefix}-${idx}`}>
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-white transition-colors">
              {item.isHighlight ? (
                <div className="flex items-center gap-1.5 bg-[#1F7A4C]/40 border border-[#34D399]/40 rounded-full px-3 py-0.5 shadow-xs">
                  <IconComp size={13} className="text-[#34D399] animate-pulse" />
                  <span className="text-[#A7F3D0] font-bold tracking-wide">
                    Summer Sale: <span className="text-white font-extrabold underline decoration-[#34D399]">Up to 25% Off</span>
                  </span>
                </div>
              ) : (
                <>
                  <IconComp size={13} className="text-[#34D399]" />
                  <span className="font-medium tracking-wide text-gray-200">{item.text}</span>
                </>
              )}
            </div>
            <span className="text-gray-600/70 select-none">|</span>
          </React.Fragment>
        );
      })}
    </div>
  );

  return (
    <div 
      className="bg-[#142018] text-white text-xs border-b border-[#24362B] h-[38px] flex items-center select-none overflow-hidden relative cursor-default"
      title="Promotions (hover to pause)"
    >
      <div className="animate-marquee flex items-center">
        {renderItemSet('set-a')}
        {renderItemSet('set-b')}
        {renderItemSet('set-c')}
      </div>
    </div>
  );
}

