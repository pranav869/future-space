import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Target, Sparkles, Layers, Sliders, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ComparisonTable from '../components/ComparisonTable';
import ContactCTA from '../components/ContactCTA';

export default function Studio() {
  const values = [
    {
      title: 'Contextual Integrity',
      desc: 'We design in dialogue with place, climate, solar path, and regional materials, ensuring every building belongs naturally to its landscape.'
    },
    {
      title: 'Material Authenticity',
      desc: 'We champion raw, honest materials—handcrafted terracotta, honed granite, lime plasters, and seasoned teak—that age with dignity.'
    },
    {
      title: 'Spatial Calm',
      desc: 'By paring away superfluous visual noise, we create environments that feel tranquil, generous, and emotionally grounding.'
    },
    {
      title: 'Execution Precision',
      desc: 'Architecture is realized in the millwork details, shadowlines, and water-shedding profiles. We obsess over the microscopic to elevate the macroscopic.'
    }
  ];

  const methodology = [
    {
      phase: 'Phase 01',
      title: 'Discovery & Contextual Research',
      desc: 'We examine the site, zoning parameters, solar angles, and family or organizational rituals to define a clear architectural brief.'
    },
    {
      phase: 'Phase 02',
      title: 'Concept & Spatial Massing',
      desc: 'Exploring structural volumes, courtyard locations, cross-ventilation axes, and light wells through sketches, diagrams, and 3D studies.'
    },
    {
      phase: 'Phase 03',
      title: 'Design Development & Detailing',
      desc: 'Rigorous selection of material palettes, joinery details, electrical engineering, MEP coordination, and precision construction drawings.'
    },
    {
      phase: 'Phase 04',
      title: 'Execution Oversight & Handover',
      desc: 'Close collaboration with master craftspeople, stone masons, and structural contractors on site to ensure seamless realization.'
    }
  ];

  return (
    <div className="studio-page">
      <Breadcrumbs items={[{ label: 'Studio', href: '/studio' }]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>ABOUT FUTURESPACE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Designing with clarity. Creating with purpose.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              FutureSpace is an architecture and interior design studio focused on creating thoughtful 
              environments for contemporary living and working.
            </p>
            <p className="body-muted">
              Our approach combines creative exploration, practical planning, and careful attention to detail 
              to shape spaces that respond to the people who use them.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85" 
              alt="Architectural studio interior and material samples" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div style={{ padding: '3rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <Target size={20} color="var(--color-terracotta)" />
                <span className="editorial-label">OUR VISION</span>
              </div>
              <h2 className="heading-card" style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--color-ivory)' }}>
                To shape meaningful spaces that stand the test of time.
              </h2>
              <p className="body-muted">
                We envision an architectural future in India where contemporary design draws strength from timeless 
                environmental wisdom—creating buildings that feel effortlessly modern yet deeply grounded in their soil.
              </p>
            </div>

            <div style={{ padding: '3rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <Compass size={20} color="var(--color-terracotta)" />
                <span className="editorial-label">OUR MISSION</span>
              </div>
              <h2 className="heading-card" style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--color-ivory)' }}>
                To bring together thoughtful planning, considered aesthetics, and purposeful design in every project.
              </h2>
              <p className="body-muted">
                Our mission is to translate our clients' deepest aspirations into buildable, enduring reality through 
                uncompromising structural rigor, tactile material exploration, and meticulous craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-surface)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">DESIGN PRINCIPLES</span>
            <h2 className="heading-section">The Ethos Behind FutureSpace</h2>
            <p className="body-muted" style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
              Four guiding convictions that govern every sketch, blueprint, and construction decision in our studio.
            </p>
          </div>

          <div className="grid-2">
            {values.map((val, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  PRINCIPLE 0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{val.title}</h3>
                <p className="body-muted">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Methodology */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <span className="editorial-label">WORKFLOW</span>
            <h2 className="heading-section">Our Project Methodology</h2>
            <p className="body-muted">
              A transparent, iterative process engineered to ensure total architectural clarity from the earliest pencil sketch to client moving day.
            </p>
          </div>

          <div className="grid-4">
            {methodology.map((step, idx) => (
              <div key={idx} style={{ padding: '2rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-beige)', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {step.phase}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p className="body-muted" style={{ fontSize: '0.86rem', flexGrow: 1 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FutureSpace Comparison Table */}
      <ComparisonTable />

      {/* CTA */}
      <ContactCTA 
        label="ENGAGE THE STUDIO"
        title="Let's build something extraordinary together."
        description="We welcome discussions for bespoke residences, private estates, and commercial commissions across India."
      />
    </div>
  );
}
