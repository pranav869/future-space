import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle, 
  Utensils, 
  Building2, 
  Armchair, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Clock, 
  ChefHat, 
  Tv, 
  Bed, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';

import PromoBar from '../components/nestora/PromoBar';
import Navbar from '../components/nestora/Navbar';
import Footer from '../components/nestora/Footer';
import ChatWidget from '../components/nestora/ChatWidget';
import ConsultationModal from '../components/nestora/ConsultationModal';
import PriceCalculatorModal from '../components/nestora/PriceCalculatorModal';
import PartnerModal from '../components/nestora/PartnerModal';

export default function Products() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // Active Category State for the 3-column interactive section
  const [activeCategory, setActiveCategory] = useState('living-room');

  // FAQ Accordion Open State (default question 0 is open)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bhk: '3 BHK',
    location: 'Chennai',
    projectNeed: 'Complete Home Interiors',
    message: '',
    saveInfo: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = [
    {
      id: 'living-room',
      name: 'Living Room',
      title: 'Living Room Interiors',
      description: "Make a lasting first impression with a living room that's as practical as it is beautiful. Our designers craft custom layouts with modular TV units, smart storage, and layered lighting built from premium, durable materials and manufactured in-house, backed by a 15-year warranty.",
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Modular TV Units & Display Cabinets',
        'Designer False Ceiling & Cove Lighting',
        'Smart Storage & Seating Solutions',
        'Premium Laminates & Wall Panelling'
      ]
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      title: 'Modular Kitchen Design',
      description: 'A well-designed modular kitchen balances seamless workflow with visual elegance. Explore considered L-shaped, U-shaped, and island layouts with German Blum and Hettich hardware, anti-fingerprint acrylic finishes, and moisture-resistant BWP marine ply.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      features: [
        'L-shaped, U-shaped & Island Kitchen Layouts',
        'Soft-Close Tandem Drawers & Cutlery Organisers',
        'Corner Magic Carousel & Tall Pantry Units',
        'Quartz & Sintered Stone Scratch-Resistant Countertops'
      ]
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      title: 'Master Bedroom Interiors',
      description: 'Create a restful personal retreat with balanced proportions, plush upholstered headboards, integrated dressing tables, and floor-to-ceiling wardrobes with smart interior organizers and ambient cove lighting.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Bespoke King Bed & Custom Upholstered Headboard',
        'Floor-to-Ceiling Sliding & Lacquered Wardrobes',
        'Floating Bedside Consoles & Vanities',
        'Warm Dimmable Architectural Cove Lighting'
      ]
    },
    {
      id: 'kids-bedroom',
      name: 'Kids Bedroom',
      title: "Kids' Bedroom & Study",
      description: 'Design a vibrant room that balances rest, creative play, study, and toy storage. Adaptable joinery and rounded-edge safety finishes ensure a space that comfortably evolves as your children grow.',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Ergonomic Study Desks & Pinboard Wall Units',
        'Trundle & Bunk Beds with Built-in Drawer Steps',
        'Open Bookshelves & Anti-Scratch Finish Finishes',
        'Playful Non-Toxic Paint & Custom Storage Cubbies'
      ]
    },
    {
      id: 'dining',
      name: 'Dining',
      title: 'Dining Area & Crockery Units',
      description: 'Elevate family gatherings and dinner parties with custom dining tables, fluted wooden partition screens, integrated wine chillers, and glass-fronted illuminated crockery showcases.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Custom 6-to-8 Seater Dining Table Compositions',
        'Fluted Tinted Glass Crockery Units with LED Profiles',
        'Integrated Wine & Glassware Consoles',
        'Warm Accent Chandeliers & Ceiling Beams'
      ]
    },
    {
      id: 'pooja-unit',
      name: 'Pooja Unit',
      title: 'Sacred Pooja Unit Design',
      description: 'Design a tranquil, sacred space for daily prayer and contemplation. Choose from traditional teak wood carvings, modern brass-inlaid fluted panels, backlit Corian jaali designs, and concealed storage for prayer essentials.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Laser-Cut CNC Backlit Corian Jaali Patterns',
        'Bespoke Teak & Rosewood Finish Joinery',
        'Pull-Out Diya Trays & Concealed Brass Bells',
        'Durable Granite / Marble Base Platform'
      ]
    }
  ];

  const currentCategoryData = categories.find(c => c.id === activeCategory) || categories[0];

  const faqs = [
    {
      question: '1. What accessories should I include in a modular kitchen?',
      answer: (
        <div className="space-y-2">
          <p className="text-gray-700">A high-performance modular kitchen should have the following functional accessories:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li><strong>Drawers</strong> – wire baskets, cutlery organisers, and soft-close tandem drawers</li>
            <li><strong>Oil pull-outs</strong> – slim 2-tier bottle and spice pull-out racks near the hob</li>
            <li><strong>Corner units</strong> – carousel trays, magic corners, and LeMans corner pull-outs</li>
            <li><strong>Tall pantry units</strong> – multi-level basket storage to organize monthly dry rations</li>
          </ul>
        </div>
      )
    },
    {
      question: '2. How do I pick the right wardrobe material?',
      answer: (
        <div className="space-y-2">
          <p className="text-gray-700">For Indian humidity conditions, we recommend Boiling Water Resistant (BWR) or Boiling Water Proof (BWP) calibrated plywood for the carcass. For shutter finishes, you can choose:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li><strong>Anti-scratch Acrylic</strong> for a high-gloss, reflective luxury finish</li>
            <li><strong>Matte Merino Laminates</strong> for everyday durability and ease of maintenance</li>
            <li><strong>Tinted Fluted Glass with Aluminum Profiles</strong> for an open walk-in closet boutique look</li>
          </ul>
        </div>
      )
    },
    {
      question: '3. Are Murphy beds a good idea for compact bedrooms?',
      answer: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Yes! Murphy beds (wall-mounted folding beds) are ideal for guest rooms, study rooms, and studio apartments. With German piston mechanisms, they lift effortlessly to reveal a study desk, sofa, or open floor space during the day without compromising mattress comfort at night.
        </p>
      )
    },
    {
      question: '4. How to design a study unit on a small budget?',
      answer: (
        <p className="text-gray-700 text-sm leading-relaxed">
          Focus on a wall-hung cantilevered worktop (which keeps the floor clear and makes the room look bigger), combine it with open cubby shelves for books, integrated wire grommets, and an under-cabinet magnetic LED light bar.
        </p>
      )
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToCategories = () => {
    const el = document.getElementById('interactive-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] antialiased">
      {/* 1. TOP PROMO BAR */}
      <PromoBar />

      {/* 2. MAIN HEADER */}
      <Navbar 
        onBookQuoteClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
        onPartnerClick={() => setPartnerModalOpen(true)}
      />

      {/* BREADCRUMB BAR */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold">
            <Link to="/" className="text-gray-500 hover:text-[#E05A1B] transition-colors">
              Home
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-[#E05A1B]">Products</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        {/* ========================================================
            3. HERO SECTION (Matching Screenshot 1)
           ======================================================== */}
        <section className="relative bg-[#6E8F7A]/20 py-16 sm:py-24 overflow-hidden border-b border-[#D8E6DC]">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
              alt="Luxury Interior Backdrop" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Floating Interior Photo Card */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85" 
                    alt="Living and Studio Interior" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Center Typography & CTA */}
              <div className="lg:col-span-6 text-center px-2">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#1F7A4C] mb-4 bg-white/80 backdrop-blur-xs px-4 py-1.5 rounded-full shadow-xs border border-emerald-100">
                  INTERIORS DESIGNED AROUND YOU
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14261C] tracking-tight leading-[1.12] mb-6">
                  Smart Modular Kitchen &amp; Interior Design in Tamil Nadu
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto mb-8 font-medium">
                  Explore considered interior solutions for every corner of your home, from elegant living rooms and functional kitchens to beautifully designed bedrooms and complete home interiors.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={scrollToCategories}
                    className="bg-[#E05A1B] hover:bg-[#C94E15] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center gap-2"
                  >
                    <span>Explore Our Designs</span>
                    <ArrowUpRight size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationModalOpen(true)}
                    className="bg-white hover:bg-gray-50 border-2 border-[#14261C] text-[#14261C] font-bold text-sm sm:text-base px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>

              {/* Right Floating Interior Photo Card */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=85" 
                    alt="Luxury Wardrobe Suite" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            4. INTERACTIVE PRODUCT CATEGORY SECTION (Screenshot 2)
           ======================================================== */}
        <section id="interactive-categories" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#EDE2D3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.24em] text-gray-800 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E05A1B] inline-block"></span>
                <span>PRODUCTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14261C] tracking-tight leading-tight">
                <span className="text-[#E05A1B]">Modular Interiors We Design &amp; Manufacture</span> in Tamil Nadu
              </h2>
            </div>

            {/* Three Column Interactive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Column 1: Vertical Selectable Pill Buttons (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-3.5">
                {categories.map((cat) => {
                  const isActive = cat.id === activeCategory;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full py-4 px-6 rounded-full flex items-center justify-between text-left font-extrabold text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-xs ${
                        isActive
                          ? 'bg-[#E05A1B] text-white shadow-md transform scale-[1.02]'
                          : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-white text-[#E05A1B]' : 'bg-orange-50 text-[#E05A1B]'
                      }`}>
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Column 2: Large Central Photo (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/5]">
                  <img 
                    src={currentCategoryData.image} 
                    alt={currentCategoryData.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Column 3: Category Description & Features (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14261C] mb-3">
                    {currentCategoryData.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {currentCategoryData.description}
                  </p>
                </div>

                {/* Feature Bullet Points with Orange Checks */}
                <div className="space-y-3 pt-2">
                  {currentCategoryData.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#E05A1B] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-gray-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setConsultationModalOpen(true)}
                    className="bg-[#14261C] hover:bg-[#1E3B2C] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2"
                  >
                    <span>Discuss Your {currentCategoryData.name} Design</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            5. DESIGN PROCESS & FAQ ACCORDION (Screenshot 3)
           ======================================================== */}
        <section className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading + Interactive Accordion */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight mb-4">
                    A Simple, Proven Process
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    From first design to doorstep delivery, every FutureSpace project follows a transparent, proven process trusted by 2,000+ homeowners across Tamil Nadu.
                  </p>
                </div>

                {/* Accordion Questions */}
                <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="py-5">
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                          className="w-full flex items-center justify-between text-left text-base sm:text-lg font-bold text-[#14261C] hover:text-[#E05A1B] transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <span className="p-1 rounded-full text-gray-500 hover:text-[#E05A1B] flex-shrink-0 ml-4">
                            {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="pt-4 pr-6 animate-in fade-in duration-200">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Tall Architectural Kitchen & Cabinet Showcase */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl border-l-4 border-dashed border-[#E05A1B]/40 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85" 
                    alt="Precision Engineered Joinery" 
                    className="w-full h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-orange-400">
                      FACTORY FINISHED
                    </span>
                    <h4 className="text-xl font-bold">German Laser Edge-Banding Joinery</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            6. ENQUIRY FORM SECTION (Screenshot 4)
           ======================================================== */}
        <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Form */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight mb-2">
                    Still Got Questions?
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Talk to us. We're ready to help you with any questions about our products and services.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                      <Check size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900">Enquiry Received Successfully!</h4>
                    <p className="text-sm text-emerald-700">
                      Our senior designer will call you within 2 working hours to discuss your project requirements.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-900"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Your Phone *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-900"
                        />
                      </div>
                      <div>
                        <select
                          value={formData.bhk}
                          onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-700 bg-white"
                        >
                          <option value="1 BHK">1 BHK</option>
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                          <option value="4+ BHK">4+ BHK / Luxury Penthouse</option>
                          <option value="Independent Villa">Independent Villa</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-700 bg-white"
                        >
                          <option value="Chennai">Chennai</option>
                          <option value="Coimbatore">Coimbatore</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Madurai">Madurai</option>
                          <option value="Trichy">Trichy</option>
                          <option value="Salem">Salem</option>
                          <option value="Other">Other South Indian City</option>
                        </select>
                      </div>
                      <div>
                        <select
                          value={formData.projectNeed}
                          onChange={(e) => setFormData({ ...formData, projectNeed: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-700 bg-white"
                        >
                          <option value="Complete Home Interiors">Complete Home Interiors</option>
                          <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                          <option value="Wardrobes & Bedrooms">Wardrobes &amp; Bedrooms</option>
                          <option value="Living Room & TV Units">Living Room &amp; TV Units</option>
                          <option value="Pooja Unit & Dining">Pooja Unit &amp; Dining</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Message (Tell us about your floor plan, move-in timeline, or budget preferences)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-hidden focus:border-[#E05A1B] text-sm text-gray-900"
                      ></textarea>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox"
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                        className="rounded-sm text-[#E05A1B] focus:ring-[#E05A1B]"
                      />
                      <label htmlFor="saveInfo" className="text-xs text-gray-600">
                        Save my details in this browser for instant quote calculations.
                      </label>
                    </div>

                    {/* Submit Button with Orange Circular Arrow */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group flex items-center bg-white hover:bg-orange-50 border-2 border-gray-900 rounded-full pl-6 pr-2 py-2 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                      >
                        <span className="font-bold text-sm text-gray-900 group-hover:text-[#E05A1B] transition-colors mr-3">
                          Submit Now
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#E05A1B] group-hover:bg-[#C94E15] flex items-center justify-center text-white transition-all transform group-hover:translate-x-0.5 shadow-xs">
                          <ArrowUpRight size={17} strokeWidth={2.5} />
                        </div>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Photo with Floating Badge */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85" 
                      alt="Interior Design Consultation" 
                      className="w-full h-[480px] object-cover"
                    />
                  </div>

                  {/* Floating Orange Laurel Badge (Matching Screenshot 4) */}
                  <div className="absolute -bottom-6 -right-4 sm:bottom-4 sm:right-4 bg-gradient-to-r from-[#E05A1B] to-[#F27238] text-white p-5 rounded-2xl shadow-2xl border-2 border-white max-w-[240px] text-center">
                    <div className="flex justify-center mb-1 text-white">
                      <Award size={32} strokeWidth={2.2} />
                    </div>
                    <p className="font-extrabold text-xs sm:text-sm tracking-tight leading-snug">
                      Tamil Nadu's Fast-Growing Modular Interior Studio
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            7. FINAL PRODUCTS INTRODUCTION & CARDS (Screenshot 5)
           ======================================================== */}
        <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#EDE2D3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#14261C] block mb-3">
                BUILT IN-HOUSE, ACROSS TAMIL NADU
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14261C] tracking-tight leading-tight mb-4">
                <span className="text-[#E05A1B]">Modular Kitchen &amp; Wardrobe Designers</span> in Tamil Nadu
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                From modular kitchen interior design in Tamil Nadu to bespoke storage, FutureSpace designs and manufactures every product in-house. As trusted modular wardrobe designers and custom modular furniture manufacturers, we deliver premium, moisture-resistant and termite-resistant finishes — backed by a 15-year warranty and 45-day delivery.
              </p>
            </div>

            {/* 3 Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              
              {/* Card 1: Modular Kitchen */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#E05A1B] flex items-center justify-center mb-6">
                  <Utensils size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Modular Kitchen Interior Design
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ergonomic L / U / parallel &amp; island kitchens with premium hardware and a 15-year flat warranty.
                </p>
              </div>

              {/* Card 2: Modular Wardrobes */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#E05A1B] flex items-center justify-center mb-6">
                  <Building2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Modular Wardrobe Designers
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sliding &amp; swing wardrobes, walk-ins and storage — designed to fit your room dimensions and budget.
                </p>
              </div>

              {/* Card 3: Custom Furniture */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#E05A1B] flex items-center justify-center mb-6">
                  <Armchair size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Custom Modular Furniture Manufacturer
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  TV units, crockery units, study tables and more — made in our own high-tech factory in Tamil Nadu.
                </p>
              </div>

            </div>

            {/* Full-Width Dark CTA Banner (Matching Screenshot 5 Bottom) */}
            <div className="bg-[#101A26] rounded-3xl p-10 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                  Worried About Overpriced Kitchens, Hidden Costs &amp; Late Delivery?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  FutureSpace fixes all three. We design and manufacture your modular kitchen in-house — a <strong className="text-white">free 3D design</strong>, one transparent fixed-price quote, delivery in just <strong className="text-white">45 days</strong>, and a <strong className="text-white">15-year warranty</strong>. No middlemen, no surprises.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a
                    href="https://wa.me/919363419550?text=Hello%20FutureSpace%20Interiors,%20I%20would%20like%20a%20free%20quote%20for%20my%20modular%20kitchen%20and%20home%20interiors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <MessageCircle size={18} />
                    <span>Get Free Quote on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919363419550"
                    className="bg-[#E05A1B] hover:bg-[#C94E15] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Phone size={17} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <Footer 
        onConsultationClick={() => setConsultationModalOpen(true)}
        onCalculatorClick={() => setCalculatorModalOpen(true)}
      />

      {/* 9. FLOATING CHAT WIDGET */}
      <ChatWidget 
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onOpenCalculator={() => setCalculatorModalOpen(true)}
      />

      {/* 10. MODALS */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <PriceCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}
