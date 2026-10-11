import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustStatsSection from '../components/nestora/TrustStatsSection';

export default function About() {
  const philosophies = [
    {
      number: '01',
      title: 'PURPOSEFUL PLANNING',
      description: 'Every great space begins with understanding its purpose. We consider functionality, spatial flow, and everyday needs before shaping the design.'
    },
    {
      number: '02',
      title: 'THOUGHTFUL AESTHETICS',
      description: 'Materials, textures, colours, lighting, and proportions come together to create a distinctive visual identity.'
    },
    {
      number: '03',
      title: 'DESIGNED AROUND YOU',
      description: 'Every client has a different vision. We aim to understand individual preferences and translate them into spaces that feel personal and meaningful.'
    },
    {
      number: '04',
      title: 'ATTENTION TO DETAIL',
      description: 'From the overall layout to the smallest finishing elements, thoughtful detailing helps create a cohesive design experience.'
    }
  ];

  const expertiseCategories = [
    {
      id: 'residential',
      title: 'Residential Design',
      description: 'Considered homes shaped by natural light, spatial clarity, and enduring architectural craftsmanship.',
      image: '/images/R1.png',
      route: '/work/residential',
      tag: 'Architecture & Living'
    },
    {
      id: 'commercial',
      title: 'Commercial Design',
      description: 'Purposeful workplaces and boutique commercial environments designed to support collaboration, focus, and growth.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      route: '/work/commercial',
      tag: 'Workplaces & Studios'
    },
    {
      id: 'kitchens',
      title: 'Kitchen Design',
      description: 'Architectural culinary sanctuaries engineered with precision joinery, ergonomic intelligence, and tactile stone.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      route: '/work/kitchens',
      tag: 'Culinary Joinery'
    },
    {
      id: 'hospitality',
      title: 'Hospitality Design',
      description: 'Atmospheric dining and boutique destination spaces designed for immersive sensory experiences.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      route: '/work/hospitality',
      tag: 'Atmosphere & Dining'
    },
    {
      id: 'villas',
      title: 'Villa Design',
      description: 'Distinctive private estates and pavilion compounds harmonizing indoor-outdoor living, generous proportions, and serene grounds.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
      route: '/work/villas',
      tag: 'Private Estates'
    },
    {
      id: 'interiors',
      title: 'Interior Design',
      description: 'Curated interior compositions layered with rich textures, bespoke lighting, and custom furniture.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      route: '/work/interiors',
      tag: 'Material Curation'
    },
    {
      id: 'visualization',
      title: '3D Visualization',
      description: 'High-precision architectural visualizations and spatial studies that articulate unbuilt concepts with clarity and photorealistic fidelity.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      route: '/services',
      tag: 'Spatial Simulation'
    }
  ];

  const processStages = [
    {
      number: '01',
      title: 'Discover',
      description: "Understand the client's vision, requirements, preferences, and the purpose of the space."
    },
    {
      number: '02',
      title: 'Envision',
      description: 'Explore concepts, layouts, materials, and design directions.'
    },
    {
      number: '03',
      title: 'Develop',
      description: 'Refine the selected concept through detailed planning and design development.'
    },
    {
      number: '04',
      title: 'Visualize',
      description: 'Use suitable visualizations to communicate the proposed design.'
    },
    {
      number: '05',
      title: 'Realize',
      description: 'Progress toward implementation according to the agreed scope and project responsibilities.'
    }
  ];

  return (
    <div className="about-page">
      <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />

      {/* 1. ABOUT HERO */}
      <section 
        className="section-padding-sm" 
        style={{ 
          backgroundColor: 'var(--color-forest-deep)', 
          borderBottom: '1px solid var(--color-border-subtle)' 
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
            <span className="editorial-label" style={{ marginBottom: '1.25rem', color: 'var(--color-beige)' }}>
              ABOUT FUTURESPACE
            </span>
            <h1 className="display-hero" style={{ marginBottom: '1.5rem', lineHeight: 1.12 }}>
              Spaces that inspire.<br />Design that lasts.
            </h1>
            <p className="body-lead" style={{ maxWidth: '760px', marginBottom: '2.5rem' }}>
              At FutureSpace, we believe exceptional spaces are created when thoughtful architecture 
              meets purposeful design. We bring together creativity, functionality, and attention to detail 
              to shape environments that reflect the people who experience them.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/work" className="btn btn-primary">
                <span>Explore Our Work</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Start a Project</span>
              </Link>
            </div>
          </div>

          {/* Hero Architectural Photographic Showcase */}
          <div 
            style={{ 
              position: 'relative', 
              border: '1px solid var(--color-border-subtle)', 
              overflow: 'hidden',
              backgroundColor: 'var(--color-forest-main)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=85" 
              alt="Contemporary architectural residence with refined concrete, glass, and warm wood accents by FutureSpace" 
              style={{ width: '100%', height: 'clamp(360px, 50vw, 580px)', objectFit: 'cover' }}
            />
            <div 
              style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '1.25rem 2rem', 
                background: 'linear-gradient(to top, rgba(9, 20, 16, 0.92) 0%, transparent 100%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige)' }}>
                Architectural Form &amp; Material Exploration
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-ivory-dim)', opacity: 0.85 }}>
                FutureSpace Design Studio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--color-forest-main)', 
          borderBottom: '1px solid var(--color-border-subtle)' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 5.5rem)', 
              alignItems: 'center' 
            }}
          >
            {/* Left Image */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  border: '1px solid var(--color-border-subtle)', 
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-forest-deep)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85" 
                  alt="Considered living pavilion featuring natural light and honest materiality" 
                  style={{ width: '100%', height: '520px', objectFit: 'cover' }}
                />
              </div>
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem', 
                  backgroundColor: 'rgba(9, 20, 16, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.65rem 1.15rem',
                  border: '1px solid var(--color-border-subtle)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-beige)'
                }}
              >
                Studio Philosophy
              </div>
            </div>

            {/* Right Editorial Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="editorial-label" style={{ marginBottom: '1.25rem' }}>
                WHO WE ARE
              </span>
              <h2 className="heading-section" style={{ marginBottom: '1.75rem', lineHeight: 1.25 }}>
                Designing spaces beyond expectations.
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead" style={{ color: 'var(--color-ivory)', fontWeight: 400 }}>
                  FutureSpace is an architecture and interior design studio focused on creating spaces 
                  that balance aesthetics, functionality, and individuality.
                </p>
                <p className="body-muted" style={{ lineHeight: 1.8 }}>
                  We believe great design goes beyond appearances. It is about understanding how people live, 
                  work, and connect with their surroundings. Every decision, from spatial planning and material 
                  selection to lighting and finishing details, contributes to a cohesive experience.
                </p>
                <p className="body-muted" style={{ lineHeight: 1.8 }}>
                  Our approach combines creative thinking with practical solutions to create spaces that 
                  feel considered, distinctive, and enduring.
                </p>
              </div>

              <div 
                style={{ 
                  marginTop: '2.5rem', 
                  paddingTop: '2rem', 
                  borderTop: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2.5rem'
                }}
              >
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-ivory)', lineHeight: 1.1 }}>
                    Bespoke
                  </span>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-beige-dark)', textTransform: 'uppercase' }}>
                    Contextual Architecture
                  </span>
                </div>
                <div style={{ width: '1px', height: '36px', backgroundColor: 'var(--color-border-subtle)' }} />
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-ivory)', lineHeight: 1.1 }}>
                    Enduring
                  </span>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-beige-dark)', textTransform: 'uppercase' }}>
                    Material Integrity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESIGN PHILOSOPHY */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--color-forest-surface)', 
          borderBottom: '1px solid var(--color-border-subtle)' 
        }}
      >
        <div className="container">
          <div className="section-header" style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
            <span className="editorial-label">DESIGN PHILOSOPHY</span>
            <h2 className="heading-section" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              Good design is felt, not just seen.
            </h2>
            <p className="body-muted" style={{ maxWidth: '640px' }}>
              Our work is anchored in convictions that govern every spatial decision, material selection, 
              and architectural detail we propose.
            </p>
          </div>

          {/* 4 Visually Sophisticated Editorial Blocks (Refrained from generic rounded cards) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1px', 
              backgroundColor: 'var(--color-border-subtle)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            {philosophies.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: 'var(--color-forest-deep)', 
                  padding: 'clamp(2rem, 3.5vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '290px',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-forest-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-forest-deep)'}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.25rem', 
                        color: 'var(--color-beige)', 
                        opacity: 0.9 
                      }}
                    >
                      {item.number}
                    </span>
                    <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-terracotta)' }} />
                  </div>

                  <h3 
                    style={{ 
                      fontSize: '0.92rem', 
                      letterSpacing: '0.14em', 
                      textTransform: 'uppercase', 
                      color: 'var(--color-ivory)', 
                      fontWeight: 600, 
                      marginBottom: '1rem' 
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="body-muted" style={{ fontSize: '0.92rem', lineHeight: 1.75 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERTISE */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--color-forest-dark)', 
          borderBottom: '1px solid var(--color-border-subtle)' 
        }}
      >
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="editorial-label">DISCIPLINES &amp; CAPABILITIES</span>
            <h2 className="heading-section" style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              From architectural vision to interior experience.
            </h2>
            <p className="body-muted" style={{ maxWidth: '640px' }}>
              Explore our core practices spanning residential architecture, commercial environments, 
              bespoke culinary joinery, hospitality atmosphere, and high-fidelity spatial visualization.
            </p>
          </div>

          {/* 7 Disciplines Editorial Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {expertiseCategories.map((cat) => (
              <article 
                key={cat.id} 
                style={{ 
                  backgroundColor: 'var(--color-forest-main)', 
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast), transform var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250, 247, 242, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Wrap */}
                <Link 
                  to={cat.route} 
                  style={{ display: 'block', position: 'relative', height: '220px', overflow: 'hidden' }}
                  aria-label={`Explore ${cat.title}`}
                >
                  <img 
                    src={cat.image} 
                    alt={`${cat.title} portfolio showcasing FutureSpace design execution`} 
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div 
                    style={{ 
                      position: 'absolute', 
                      top: '0.85rem', 
                      left: '0.85rem',
                      backgroundColor: 'rgba(9, 20, 16, 0.85)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-beige)'
                    }}
                  >
                    {cat.tag}
                  </div>
                </Link>

                {/* Card Content */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.75rem', color: 'var(--color-ivory)' }}>
                    <Link to={cat.route} style={{ color: 'inherit' }}>
                      {cat.title}
                    </Link>
                  </h3>
                  
                  <p className="body-muted" style={{ fontSize: '0.88rem', lineHeight: 1.65, flexGrow: 1, marginBottom: '1.5rem' }}>
                    {cat.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem' }}>
                    <Link 
                      to={cat.route} 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.45rem', 
                        fontSize: '0.76rem', 
                        letterSpacing: '0.12em', 
                        textTransform: 'uppercase', 
                        color: 'var(--color-ivory)',
                        fontWeight: 600
                      }}
                    >
                      <span>Explore Practice</span>
                      <ArrowUpRight size={14} color="var(--color-terracotta)" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--color-forest-deep)', 
          borderBottom: '1px solid var(--color-border-subtle)' 
        }}
      >
        <div className="container">
          <div className="section-header" style={{ maxWidth: '820px', marginBottom: '4rem' }}>
            <span className="editorial-label">PROCESS &amp; METHODOLOGY</span>
            <h2 className="heading-section" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              Every great space begins with a conversation.
            </h2>
            <p className="body-muted" style={{ maxWidth: '640px' }}>
              Our design process is structured as five progressive stages, providing transparent clarity 
              from early exploration to final architectural realization.
            </p>
          </div>

          {/* 5 Elegant Stages */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {processStages.map((stage, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: 'var(--color-forest-main)', 
                  border: '1px solid var(--color-border-subtle)',
                  padding: '2.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span 
                    style={{ 
                      fontSize: '0.78rem', 
                      letterSpacing: '0.18em', 
                      textTransform: 'uppercase', 
                      color: 'var(--color-terracotta)', 
                      fontWeight: 700 
                    }}
                  >
                    STAGE {stage.number}
                  </span>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }} />
                </div>

                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.5rem', 
                    color: 'var(--color-ivory)', 
                    marginBottom: '0.85rem' 
                  }}
                >
                  {stage.title}
                </h3>

                <p className="body-muted" style={{ fontSize: '0.86rem', lineHeight: 1.7 }}>
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISION */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--color-forest-dark)', 
          borderBottom: '1px solid var(--color-border-subtle)' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              position: 'relative', 
              border: '1px solid var(--color-border-subtle)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-forest-deep)'
            }}
          >
            {/* Background Image with Dark Vignette */}
            <div style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'center' }}>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85" 
                alt="Architectural space defined by light wells and tactile surfaces" 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(0.38)'
                }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(135deg, rgba(9, 20, 16, 0.94) 0%, rgba(14, 30, 23, 0.72) 100%)' 
                }} 
              />

              {/* Text Overlay */}
              <div 
                style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  padding: 'clamp(2.5rem, 6vw, 5rem)', 
                  maxWidth: '820px' 
                }}
              >
                <span className="editorial-label" style={{ marginBottom: '1.25rem', color: 'var(--color-beige)' }}>
                  LONG-TERM VISION
                </span>
                
                <h2 
                  className="display-title" 
                  style={{ 
                    marginBottom: '1.5rem', 
                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                    lineHeight: 1.2 
                  }}
                >
                  Creating spaces for the way we live tomorrow.
                </h2>

                <p 
                  className="body-lead" 
                  style={{ 
                    color: 'var(--color-ivory)', 
                    marginBottom: '1.25rem', 
                    fontWeight: 300,
                    lineHeight: 1.7 
                  }}
                >
                  Our vision is to create meaningful environments that combine thoughtful planning, 
                  distinctive aesthetics, and everyday functionality.
                </p>

                <p 
                  className="body-muted" 
                  style={{ 
                    color: 'var(--color-ivory-dim)', 
                    maxWidth: '680px', 
                    lineHeight: 1.8 
                  }}
                >
                  We approach every project as an opportunity to make spaces more inspiring, purposeful, 
                  and connected to the people who use them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TAMIL NADU TRUSTS FUTURESPACE (STATS + PARTNERS + 3D DESIGN FORM) */}
      <TrustStatsSection />

      {/* 7. FINAL CTA */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--color-forest-deep)' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              maxWidth: '840px', 
              margin: '0 auto', 
              textAlign: 'center',
              padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3.5rem)',
              backgroundColor: 'var(--color-forest-main)',
              border: '1px solid var(--color-border-subtle)',
              position: 'relative'
            }}
          >
            <span className="editorial-label" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
              PROJECT COLLABORATION
            </span>

            <h2 className="display-title" style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Have a space in mind?
            </h2>

            <p className="body-lead" style={{ maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
              Whether you're planning a new home, reimagining an existing interior, or exploring ideas 
              for a commercial project, let's start a conversation.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Let's Discuss Your Project</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/work" className="btn btn-secondary">
                <span>Explore Selected Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
