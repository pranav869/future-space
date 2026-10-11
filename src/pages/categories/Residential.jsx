import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sun, Shield, Layers, CheckCircle2, Sliders } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import ContactCTA from '../../components/ContactCTA';

export default function Residential() {
  const residentialProjects = projectsData.filter(p => p.category === 'residential');

  const considerations = [
    { title: 'Spatial Planning', desc: 'Fluid movement paths, multi-functional family zones, and acoustic separation between private and entertaining quarters.' },
    { title: 'Natural Light & Ventilation', desc: 'Strategic sun path orientation, deep overhangs, clerestory fenestration, and courtyards that draw cool air through the home.' },
    { title: 'Material & Finish Selection', desc: 'Tactile natural stones (Kota, Jodhpur sandstone, granite), seasoned teakwood, lime plasters, and authentic brass details.' },
    { title: 'Interior Detailing', desc: 'Shadowline reveals, integrated millwork, concealed pocket doors, and seamless transitions between surfaces.' },
    { title: 'Functional Storage', desc: 'Discreet floor-to-ceiling cabinetry and hidden pantries that eliminate clutter without sacrificing daily accessibility.' },
    { title: 'Lighting Design', desc: 'Layered circadian lighting with warm 2700K ambient washes, architectural graze lights, and sculptural focal luminaires.' },
    { title: 'Indoor-Outdoor Relationships', desc: 'Verandahs, private garden courts, and floor-to-ceiling pivot glazing connecting living rooms with nature.' }
  ];

  const processSteps = [
    { num: '01', title: 'Understanding Your Requirements', desc: 'Deep discovery sessions exploring your daily rituals, family dynamics, site conditions, and aesthetic inclinations.' },
    { num: '02', title: 'Concept Development', desc: 'Iterative massing studies, spatial volumes, hand sketches, and structural layout options.' },
    { num: '03', title: 'Spatial Planning', desc: 'Detailed dimensional floor plans, structural coordination, and functional zoning diagrams.' },
    { num: '04', title: 'Material Selection', desc: 'Physical moodboards, stone yard sourcing, timber curation, and custom hardware samples.' },
    { num: '05', title: 'Design Development', desc: 'Comprehensive technical working drawings, reflected ceiling plans, electrical layouts, and millwork details.' },
    { num: '06', title: 'Visualization & Coordination', desc: 'Photorealistic 3D visual models and continuous on-site design coordination through completion.' }
  ];

  return (
    <div className="residential-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: 'Residential', href: '/work/residential' }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>RESIDENTIAL PRACTICE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Homes designed around the way you live.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              Thoughtful residential design brings together architecture, natural light, spatial flow, 
              materials, and the everyday rituals that make a house feel like home.
            </p>
            <p className="body-muted">
              At FutureSpace, we approach each residence as an opportunity to create a considered environment 
              that reflects its context, its inhabitants, and their aspirations.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" 
              alt="Contemporary Indian residential architecture" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION A: OUR APPROACH */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>OUR APPROACH</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>Personal by design.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  Every home has a different story. Our approach begins with understanding the people who will 
                  inhabit the space, how they live, and what matters most to them.
                </p>
                <p className="body-muted">
                  We translate those insights into considered layouts, carefully selected materials, balanced 
                  proportions, and interiors that feel both functional and distinctive. We do not impose a 
                  rigid house style; instead, we refine your worldview into an enduring architectural language.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-forest-surface)', padding: '2.5rem', border: '1px solid var(--color-border-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
                The Residential Standard
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--color-ivory-dim)' }}>
                  <CheckCircle2 size={18} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Microclimate-responsive layouts that reduce artificial air-conditioning dependencies.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--color-ivory-dim)' }}>
                  <CheckCircle2 size={18} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Seamless multi-generational living configurations respecting privacy and shared communion.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--color-ivory-dim)' }}>
                  <CheckCircle2 size={18} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Artisan joinery fabricated with sustainably harvested teak and seasoned regional hardwoods.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: DESIGN CONSIDERATIONS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">SPATIAL RIGOR</span>
            <h2 className="heading-section">Key Design Considerations</h2>
            <p className="body-muted" style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
              Every residential commission addresses seven fundamental architectural dimensions to ensure lasting comfort.
            </p>
          </div>

          <div className="grid-3">
            {considerations.map((item, idx) => (
              <div key={idx} style={{ padding: '2rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.65rem' }}>{item.title}</h3>
                <p className="body-muted" style={{ fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: RESIDENTIAL PROJECTS GALLERY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">PROJECT ARCHIVE</span>
              <h2 className="heading-section">Selected Residential Works</h2>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>View Full Archive</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid-2">
            {residentialProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: OUR PROCESS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-deep)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="editorial-label">METHODOLOGY</span>
            <h2 className="heading-section">Our Six-Stage Residential Process</h2>
            <p className="body-muted">
              From first conversation to turnkey handover, our structured workflow ensures transparency, precision, and artistic integrity.
            </p>
          </div>

          <div className="grid-3">
            {processSteps.map((step, idx) => (
              <div key={idx} style={{ padding: '2.25rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {step.num}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p className="body-muted" style={{ fontSize: '0.86rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: CTA */}
      <ContactCTA 
        label="RESIDENTIAL INQUIRY"
        title="Let's create a home that feels unmistakably yours."
        description="Whether you are planning a new residence, reimagining an existing interior, or developing a private family compound, we would love to hear about your vision."
        buttonText="Discuss Your Residence"
        projectType="Residential"
      />
    </div>
  );
}
