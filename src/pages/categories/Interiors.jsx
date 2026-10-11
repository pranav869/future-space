import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Sliders, SunMedium, Compass, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import ContactCTA from '../../components/ContactCTA';

export default function Interiors() {
  const interiorProjects = projectsData.filter(p => p.category === 'interiors');

  const interiorPillars = [
    { title: 'Material Honesty & Tactility', desc: 'Curating authentic stones, open-pore woods, lime plasters, and natural linens that invite touch and evoke quiet serenity.' },
    { title: 'Custom Furniture Prototyping', desc: 'Bespoke dining tables, sculptural credenzas, and lounge chairs designed specifically for the dimensional scale of each room.' },
    { title: 'Architectural Shadow Gaps & Details', desc: 'Recessed baseboards, flush door architraves, and concealed drapery pockets that keep walls uncluttered and architectural.' },
    { title: 'Atmospheric Lighting Choreography', desc: 'Concealed LED profiles, high-CRI graze fixtures, and warm dimming technology creating evening sanctuaries without glare.' }
  ];

  return (
    <div className="interiors-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: 'Interiors', href: '/work/interiors' }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>INTERIOR ARCHITECTURE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Interiors with depth, warmth, and character.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              An exceptional interior is the result of many considered decisions: the balance of light and shadow, 
              the character of materials, the proportions of furniture, the warmth of textures, and the way every 
              element relates to the larger space.
            </p>
            <p className="body-muted">
              Our approach brings these elements together to create cohesive, functional, and visually distinctive 
              interiors for luxury apartments, penthouses, and private estates across Mumbai, Pune, Delhi, and Bengaluru.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85" 
              alt="Luxury editorial interior architecture" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: PHILOSOPHY & SPACE PLANNING */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>INTERIOR DISCIPLINE</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Thoughtful curation over decorative excess.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  We treat interior design not as surface decoration applied after construction, but as an 
                  extension of architecture itself—sculpting space with light, volume, custom joinery, and tactility.
                </p>
                <p className="body-muted">
                  From living rooms and dining salons to master suites, home offices, and private dressing rooms, 
                  every piece is considered in dialogue with the room's proportions, natural daylight, and the way you live.
                </p>
              </div>
            </div>

            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
                Spatial Scope
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--color-ivory-dim)' }}>
                  <CheckCircle2 size={16} color="var(--color-terracotta)" />
                  <span>Curated Living &amp; Entertaining Salons</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--color-ivory-dim)' }}>
                  <CheckCircle2 size={16} color="var(--color-terracotta)" />
                  <span>Master Bedroom Sanctuaries &amp; Spa En-suites</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--color-terracotta)"' }}>
                  <CheckCircle2 size={16} color="var(--color-terracotta)" />
                  <span>Bespoke Walk-in Dressing Suites &amp; Armoires</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--color-ivory-dim)' }}>
                  <CheckCircle2 size={16} color="var(--color-terracotta)" />
                  <span>Acoustically Treated Private Studies &amp; Libraries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MATERIALS, FURNITURE & LIGHTING */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">CURATION METHODOLOGY</span>
            <h2 className="heading-section">Materials, Furniture &amp; Lighting Design</h2>
          </div>

          <div className="grid-2">
            {interiorPillars.map((item, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="body-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERIOR PROJECT GALLERY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">INTERIOR ARCHIVE</span>
              <h2 className="heading-section">Selected Interior Spaces</h2>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>All Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid-2">
            {interiorProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="INTERIOR ENQUIRY"
        title="Let's shape your next space."
        description="Whether redesigning an entire penthouse or curating bespoke millwork and lighting for a residence, our interior team is at your service."
        buttonText="Discuss Your Interior"
        projectType="Interior Design"
      />
    </div>
  );
}
