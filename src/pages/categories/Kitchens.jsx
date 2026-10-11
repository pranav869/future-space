import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Utensils, Sparkles, Layers, Sliders, Shield, Lightbulb } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import ContactCTA from '../../components/ContactCTA';

export default function Kitchens() {
  const kitchenProjects = projectsData.filter(p => p.category === 'kitchens');

  const technicalAspects = [
    {
      title: 'Precision Ergonomics & Work Triangles',
      desc: 'Optimized pathways between refrigeration, prep sinks, cooktops, and scullery pantries, calibrated to eliminate unnecessary steps.'
    },
    {
      title: 'Monolithic Islands & Natural Stones',
      desc: 'Solid blocks of honed Nero Marquina marble, Taj Mahal quartzite, and sintered stone engineered for heat, stain, and acid resistance.'
    },
    {
      title: 'Concealed Architecture & Pocket Joinery',
      desc: 'Full-height pocket doors that glide smoothly to conceal heavy breakfast stations and wine dispensers when entertaining guests.'
    },
    {
      title: 'Layered Culinary Luminescence',
      desc: 'High CRI 95+ under-cabinet task lighting rendering natural food hues accurately, paired with mood-enhancing ambient island luminaires.'
    }
  ];

  return (
    <div className="kitchens-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: 'Kitchens', href: '/work/kitchens' }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>CULINARY ARCHITECTURE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Where thoughtful design meets everyday living.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              The kitchen is one of the most personal spaces in a home. It brings together daily routines, 
              shared moments, materials, storage, lighting, and the practical details that make a difference.
            </p>
            <p className="body-muted">
              Our kitchen design approach balances visual refinement with intelligent layouts and functional solutions, 
              delivering culinary studios as beautiful as they are effortless to cook in.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85" 
              alt="Bespoke luxury architectural kitchen" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1 & 2: CONTEMPORARY KITCHEN DESIGN & MODULAR CONCEPTS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>JOINERY &amp; ERGONOMICS</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Contemporary kitchen design meets custom Indian gastronomy.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  Modern culinary spaces in India require a nuanced balance: the capacity to support high-heat 
                  spice preparations alongside the clean minimalism of an open entertainment show-kitchen.
                </p>
                <p className="body-muted">
                  We solve this through double-kitchen configurations—pairing a sleek, architectural front display island 
                  with a high-powered, fully enclosed back prep kitchen and walk-in spice pantry equipped with heavy-duty extraction.
                </p>
              </div>
            </div>

            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
                Bespoke Joinery Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--color-beige)', marginBottom: '0.25rem' }}>Full-Extension Soft-Close Hardwares</h4>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Heavy-duty German undermount runners rated for 70kg pan storage.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--color-beige)', marginBottom: '0.25rem' }}>Concealed Extraction</h4>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Integrated flush downdraft extractors and invisible ceiling cassette hoods.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: 'var(--color-beige)', marginBottom: '0.25rem' }}>Tactile Finishes</h4>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.7)' }}>Smoked oak veneer, micro-textured ceramic worktops, and knurled brass.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: TECHNICAL SPECIFICATIONS & MATERIALS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">MATERIAL INTEGRITY</span>
            <h2 className="heading-section">Materials, Storage &amp; Space Optimization</h2>
          </div>

          <div className="grid-2">
            {technicalAspects.map((aspect, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{aspect.title}</h3>
                <p className="body-muted">{aspect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: KITCHEN PROJECT GALLERY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">FEATURED KITCHENS</span>
              <h2 className="heading-section">Selected Culinary Projects</h2>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>View All Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid-2">
            {kitchenProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="CULINARY CONSULTATION"
        title="Let's create a kitchen that works for you."
        description="Share your culinary lifestyle, layout preferences, and project location with our bespoke kitchen design studio."
        buttonText="Discuss Your Kitchen"
        projectType="Kitchen"
      />
    </div>
  );
}
