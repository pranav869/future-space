import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Building, Home, Layers, UtensilsCrossed, Hotel, Compass, Sparkles, Sliders } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ComparisonTable from '../components/ComparisonTable';
import ContactCTA from '../components/ContactCTA';

export default function Services() {
  const servicesList = [
    {
      id: 'architecture-planning',
      title: 'Architecture & Planning',
      icon: Building,
      summary: 'Creating architectural concepts that balance spatial intelligence, proportion, light, and functionality.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Site analysis and climatic orientation studies',
        'Zoning, setback, and municipal code compliance planning',
        'Massing development and structural conceptualization',
        'Passive bioclimatic ventilation and sun-shading strategies',
        'Comprehensive architectural working and construction drawings',
        'Structural and MEP engineer coordination'
      ],
      linkType: 'Architecture'
    },
    {
      id: 'residential-design',
      title: 'Residential Design',
      icon: Home,
      summary: 'Designing thoughtful living environments that reflect the people who inhabit them.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Family lifestyle and spatial flow discovery',
        'Custom floor plan zoning and multi-generational suites',
        'Natural light maximization and window placement',
        'Integrated architectural storage solutions',
        'Courtyard and private verandah integration',
        'Turnkey architectural design supervision'
      ],
      linkType: 'Residential'
    },
    {
      id: 'commercial-interiors',
      title: 'Commercial Interiors',
      icon: Layers,
      summary: 'Creating purposeful workplaces and commercial environments that bring together brand identity, functionality, and aesthetics.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Workplace headcount strategy and spatial density planning',
        'High-performance acoustic ceiling and partition design',
        'Executive boardroom and client reception suites',
        'Agile hot-desking and collaboration amphitheaters',
        'Lighting strategy supporting cognitive wellbeing',
        'Commercial code, egress, and accessibility coordination'
      ],
      linkType: 'Commercial'
    },
    {
      id: 'kitchen-design',
      title: 'Kitchen Design',
      icon: UtensilsCrossed,
      summary: 'Crafting beautiful, efficient kitchens through intelligent layouts, carefully selected materials, and considered detailing.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Wet and dry dual-kitchen operational layouts',
        'Bespoke joinery and internal drawer organization systems',
        'Natural stone, sintered ceramic, and quartz countertop sourcing',
        'Appliance integration (sub-zero, steam, flush induction)',
        'Heavy-duty ventilation and extraction engineering',
        'High CRI task and atmospheric LED lighting'
      ],
      linkType: 'Kitchen'
    },
    {
      id: 'hospitality-design',
      title: 'Hospitality Design',
      icon: Hotel,
      summary: 'Creating memorable hospitality environments through atmosphere, comfort, spatial flow, and distinctive design.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Destination concept development and sensory narrative',
        'Table layout optimization and dining privacy zoning',
        'Back-of-house kitchen and service corridor integration',
        'Acoustic reverberation control in dining rooms',
        'Dim-to-warm architectural lighting design',
        'Custom furniture, banquet seating, and bar millwork'
      ],
      linkType: 'Hospitality'
    },
    {
      id: 'villa-design',
      title: 'Villa Design',
      icon: Compass,
      summary: 'Distinctive private residences shaped by architectural expression, generous spaces, and a strong connection to surroundings.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Topography-integrated estate masterplanning',
        'Indoor-outdoor pavilion and reflection pool living',
        'Structural cantilever design and shaded loggias',
        'Landscape and native planting coordination',
        'Private wellness suites and entertainment pavilions',
        'Security, gatehouse, and service wing planning'
      ],
      linkType: 'Villa'
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      icon: Sliders,
      summary: 'Considered interior environments that bring together colour, texture, lighting, furniture, and architectural detail.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Full material palette curation (stone, timber, lime, metals)',
        'Bespoke furniture prototyping and artisan commission',
        'Reflected ceiling plans and architectural cove lighting',
        'Custom wall paneling, fluted details, and shadowlines',
        'Soft furnishings, natural linen drapery, and rugs',
        'Art curation and final styling accessories'
      ],
      linkType: 'Interior Design'
    },
    {
      id: '3d-visualization',
      title: '3D Visualization & Spatial Prototyping',
      icon: Sparkles,
      summary: 'Bringing architectural concepts to life through detailed, photorealistic visual representations and material simulations.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
      deliverables: [
        'Photorealistic interior and exterior architectural renderings',
        'Daylight and artificial solar simulation studies',
        'Physical material texture and finish accuracy testing',
        'Interactive 360-degree virtual spatial tours',
        'Design iteration visual mockups prior to construction',
        'Client presentation packages'
      ],
      linkType: 'Architecture'
    }
  ];

  return (
    <div className="services-page">
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>PRACTICE &amp; CAPABILITIES</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Design expertise, from concept to experience.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              Every successful project begins with a clear understanding of its purpose, context, and possibilities.
            </p>
            <p className="body-muted">
              FutureSpace brings together architectural thinking, interior design, planning, and visualization 
              to help shape spaces that are functional, distinctive, and thoughtfully resolved.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section - Prominently Displayed Directly Below Hero */}
      <ComparisonTable />

      {/* Detailed Services Sections */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 1;
              const IconComp = service.icon;

              return (
                <div 
                  key={service.id}
                  id={service.id}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isEven ? '1fr 1.1fr' : '1.1fr 1fr', 
                    gap: 'clamp(2.5rem, 5vw, 5rem)', 
                    alignItems: 'center',
                    paddingBottom: '4rem',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <IconComp size={22} color="var(--color-terracotta)" />
                      <span className="editorial-label">{`DISCIPLINE 0${index + 1}`}</span>
                    </div>

                    <h2 className="heading-section" style={{ marginBottom: '1rem' }}>{service.title}</h2>
                    <p className="body-lead" style={{ marginBottom: '1.75rem' }}>{service.summary}</p>

                    <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige)', marginBottom: '1rem', fontWeight: 600 }}>
                      What This Service Includes:
                    </h4>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                      {service.deliverables.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(244, 239, 230, 0.8)' }}>
                          <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={`/contact?type=${encodeURIComponent(service.linkType)}`}
                      className="btn btn-primary"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <div style={{ order: isEven ? 1 : 2, border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy"
                      style={{ width: '100%', height: '460px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="START A CONVERSATION"
        title="Ready to begin your architectural journey?"
        description="Connect with our design team to discuss your project requirements, scope, timelines, and tailored service packages."
      />
    </div>
  );
}
