import React, { useState } from 'react';
import { MapPin, Star, ArrowUpRight } from 'lucide-react';

export default function GallerySection({ onConsultationClick }) {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'The Alipore Residence',
      city: 'Kolkata',
      type: '3 BHK Full Home',
      duration: '42 Days Handover',
      image: '/images/R1.png',
      quote: '"FutureSpace delivered 3 days before schedule. The fluted wooden TV wall and Italian marble shine exactly like the 3D VR renders!"',
      owner: 'Vikram & Radhika S.',
      tag: 'Residential'
    },
    {
      title: 'Jubilee Hills Sky Villa',
      city: 'Hyderabad',
      type: '4 BHK Luxury Villa',
      duration: '45 Days Handover',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
      quote: '"The modular kitchen joinery is on par with imported European luxury brands, at almost half the price."',
      owner: 'Ananya & K. Rao',
      tag: 'Villas'
    },
    {
      title: 'BKC Sea-View Penthouse',
      city: 'Mumbai',
      type: '3 BHK Contemporary',
      duration: '44 Days Handover',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      quote: '"Transparent pricing and zero hidden costs. The 15-year warranty gives complete peace of mind."',
      owner: 'Sameer Merchant',
      tag: 'Residential'
    },
    {
      title: 'Whitefield Solarium Apartment',
      city: 'Bengaluru',
      type: '2 BHK Modern Minimal',
      duration: '39 Days Handover',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      quote: '"Seamless experience from our first visit at Indiranagar experience center to the final key handover."',
      owner: 'Pooja & Karthik N.',
      tag: 'Residential'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tag === filter);

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] border-b border-[#EDE2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#1F7A4C]"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F7A4C]">
                COMPLETED HOMES GALLERY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2E24] tracking-tight">
              Real Homes. Real Timelines.
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Explore recent homes handed over in 45 days across Bengaluru, Mumbai, Delhi NCR, and Hyderabad.
            </p>
          </div>

          <div className="flex gap-2">
            {['All', 'Residential', 'Villas'].map(item => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === item
                    ? 'bg-[#1F7A4C] text-white shadow-xs'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1E2E24]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#34D399]" />
                  <span>{proj.city}</span>
                </div>
                <div className="absolute top-4 right-4 bg-[#1F7A4C] text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-sm">
                  {proj.duration}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{proj.type}</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1E2E24] mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed bg-[#FAF7F2] p-4 rounded-xl border border-gray-100 mb-4">
                    {proj.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-800">Client: {proj.owner}</span>
                  <button
                    type="button"
                    onClick={onConsultationClick}
                    className="text-xs font-bold text-[#1F7A4C] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Similar Design</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
