import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Eye, Shield, Waves, Sun, Maximize2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import ContactCTA from '../../components/ContactCTA';

export default function Villas() {
  const villaProjects = projectsData.filter(p => p.category === 'villas');

  const architecturalPillars = [
    { title: 'Dramatic Structural Cantilevers', desc: 'Sculpted concrete volumes that float above terrain, creating massive shaded ground-level living pavilions and sheltered verandahs.' },
    { title: 'Water as Thermal Architecture', desc: 'Continuous black granite reflection pools and infinity water courts designed for evaporative cooling and soothing ambient soundscapes.' },
    { title: 'Sublime Indoor-Outdoor Thresholds', desc: 'Motorized oversized cavity glazing that slides completely into basalt stone pocket walls, turning living salons into open-air garden terraces.' },
    { title: 'Topographical Harmony', desc: 'Stepping architectural terraces gracefully following natural site contours, preserving ancient trees, rock boulders, and natural rainwater runoffs.' }
  ];

  return (
    <div className="villas-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: 'Villas', href: '/work/villas' }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>VILLA ARCHITECTURE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Private residences. Distinctive expressions.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              A villa is an opportunity to explore architecture at a more personal scale, where space, 
              privacy, light, landscape, and material expression come together.
            </p>
            <p className="body-muted">
              FutureSpace approaches villa design with an emphasis on considered planning, architectural 
              character, and the relationship between indoor and outdoor living across sprawling estates in Hyderabad, Bengaluru, Goa, and New Delhi.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85" 
              alt="Sculptural contemporary luxury villa" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: ARCHITECTURAL VISION & INDOOR-OUTDOOR LIVING */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>MONUMENTAL SCALE</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Pavilion living shaped around landscape and silence.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  Our villas celebrate the luxury of volume, generous sightlines, and absolute privacy. 
                  Rather than imposing a single imposing block, we compose villas as interconnected pavilions 
                  interspersed with private internal courtyards, swimming pools, and open-air loggias.
                </p>
                <p className="body-muted">
                  Every estate is custom-engineered to respond to the natural topography—capitalizing on prevailing 
                  breezes, sunrise views from the master suite, and sunset vistas from outdoor entertaining decks.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Waves size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Reflecting Pools</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Thermal microclimate moderators and shimmering light catchers.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Maximize2 size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Monumental Spans</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Post-tensioned concrete slabs allowing column-free salons.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Sun size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Deep Overhangs</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Calculated solar protection shielding glass from harsh summer heat.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Shield size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Complete Privacy</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Inward-facing sanctuary design shielding family living from neighbors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MATERIALS & DETAILS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">TECTONIC PALETTE</span>
            <h2 className="heading-section">Materials &amp; Structural Details</h2>
          </div>

          <div className="grid-2">
            {architecturalPillars.map((item, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  ELEMENT 0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="body-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VILLA GALLERY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">VILLA PORTFOLIO</span>
              <h2 className="heading-section">Selected Private Estates</h2>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>All Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid-2">
            {villaProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="ESTATE COMMISSION"
        title="Begin your villa project."
        description="Schedule a private confidential consultation with our architectural partners to review your site, zoning guidelines, and design aspirations."
        buttonText="Discuss Your Villa"
        projectType="Villa"
      />
    </div>
  );
}
