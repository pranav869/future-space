import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Wine, Sparkles, Moon, Sun, Coffee } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import ContactCTA from '../../components/ContactCTA';

export default function Hospitality() {
  const hospitalityProjects = projectsData.filter(p => p.category === 'hospitality');

  const experiencePillars = [
    { title: 'The Threshold of Arrival', desc: 'Crafting ceremonial transition vestibules that transport guests immediately from city traffic into an intimate sensory enclave.' },
    { title: 'Acoustic Intimacy', desc: 'Calibrated soundscapes allowing lively communal hum without forcing guests at individual dining tables to raise their voices.' },
    { title: 'Choreographed Back-of-House', desc: 'Uninterrupted server routes, discreet bussing stations, and ergonomic service bars that keep front-of-house staff graceful.' },
    { title: 'Atmospheric Luminescence', desc: 'Sculptural low-level illumination, warm candle flicker warmth, and dim-to-warm lighting shifting gracefully from lunch to midnight cocktails.' }
  ];

  return (
    <div className="hospitality-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: 'Hospitality', href: '/work/hospitality' }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>HOSPITALITY PRACTICE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Spaces that turn moments into memories.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              Hospitality spaces are experienced through more than their appearance. Atmosphere, movement, 
              comfort, lighting, materials, and attention to detail all shape how people feel in a place.
            </p>
            <p className="body-muted">
              Our design approach explores how these elements work together to create distinctive and welcoming 
              environments for boutique hotels, heritage retreats, cocktail lounges, and signature restaurants across India.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85" 
              alt="Atmospheric hospitality interior architecture" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: PHILOSOPHY & GUEST EXPERIENCE */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>GUEST IMMERSION</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Architecture as the backdrop for human ritual.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  Memorable dining or travel experiences are rarely about excessive decoration; they arise when 
                  proportions feel comforting, air moves gently, lighting is flattering, and seating encourages lingering.
                </p>
                <p className="body-muted">
                  From adaptive reuse of coastal warehouses in Kerala to heritage palaces in Rajasthan, 
                  we layer local crafts, textured lime plasters, and botanical courtyards into modern hospitality operations.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Coffee size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Boutique Cafes</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Daylit conversational corners and artisan espresso bars.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Wine size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Fine Dining</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Sculptural banquet salons and intimate sommelier suites.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Moon size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Destination Lounges</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Moody acoustic cocktails spaces with tactile upholstery.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Sun size={24} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Heritage Retreats</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Courtyard suites rooted in regional stone masonry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPATIAL PLANNING & ATMOSPHERE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">HOSPITALITY ANATOMY</span>
            <h2 className="heading-section">Spatial Planning &amp; Atmospheric Dynamics</h2>
          </div>

          <div className="grid-2">
            {experiencePillars.map((item, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  DIMENSION 0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="body-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOSPITALITY PORTFOLIO */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">SELECTED CASE STUDIES</span>
              <h2 className="heading-section">Hospitality Portfolio</h2>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>Explore All Disciplines</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid-2">
            {hospitalityProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="HOSPITALITY COLLABORATION"
        title="Let's create a memorable experience."
        description="Connect with our hospitality team to discuss concept development, spatial masterplanning, or interior atmosphere curation for your hotel or restaurant."
        buttonText="Discuss Your Hospitality Project"
        projectType="Hospitality"
      />
    </div>
  );
}
