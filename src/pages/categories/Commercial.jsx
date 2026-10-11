import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase, Zap, ShieldCheck, Users, Volume2, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProjectCard from '../../components/ProjectCard';
import ContactCTA from '../../components/ContactCTA';

export default function Commercial() {
  const commercialProjects = projectsData.filter(p => p.category === 'commercial');

  const workplaceStrategies = [
    { title: 'Agile Spatial Zoning', desc: 'Seamless orchestration between high-focus quiet dens, collaborative town halls, and private executive boardrooms.' },
    { title: 'Acoustic Intelligence', desc: 'Engineered micro-perforated timber ceiling baffles, double-glazed acoustic partitions (Rw 48dB+), and sound-dampening textiles.' },
    { title: 'Brand Architecture & Identity', desc: 'Translating institutional vision into tactile spatial expressions through bespoke reception sculptures, materials, and wayfinding.' },
    { title: 'Circadian Biophilic Lighting', desc: 'Tunable white LEDs shifting from energetic 5000K daylight to calming 3000K afternoon warmth to enhance cognitive stamina.' }
  ];

  return (
    <div className="commercial-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: 'Commercial', href: '/work/commercial' }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>COMMERCIAL PRACTICE</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Spaces that work beautifully.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              Great commercial design does more than look impressive. It supports the way people work, 
              interact, and experience a brand.
            </p>
            <p className="body-muted">
              FutureSpace explores the relationship between functionality, spatial identity, materiality, 
              and visual character to develop commercial environments with a clear sense of purpose.
            </p>
          </div>

          <div style={{ marginTop: '3.5rem', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85" 
              alt="Executive commercial interior architecture" 
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR APPROACH */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>WORKPLACE PHILOSOPHY</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Elevating the workplace to a cultural destination.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  In an era where remote work is effortless, the physical office must offer something genuinely 
                  magnetic: sensory richness, effortless connectivity, and an atmosphere that fosters deep creative focus.
                </p>
                <p className="body-muted">
                  We design corporate headquarters, flagship boutiques, wealth management chambers, and innovative creative 
                  studios across India’s premier financial hubs including Mumbai BKC, Bengaluru, and Gurugram.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Users size={24} color="var(--color-terracotta)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>Collaborative Agility</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.72)' }}>Spaces designed for team synchronicity and impromptu exchange.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Volume2 size={24} color="var(--color-terracotta)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>Acoustic Privacy</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.72)' }}>Decoupled partitions ensuring utmost corporate confidentiality.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Zap size={24} color="var(--color-terracotta)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>Integrated Tech</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.72)' }}>Invisible cable routing and seamless conferencing integration.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <Sparkles size={24} color="var(--color-terracotta)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>Enduring Polish</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(244, 239, 230, 0.72)' }}>Commercial-grade natural marbles, heavy bronzes, and oak.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: WORKPLACE PLANNING & MATERIAL STRATEGY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">TECHNICAL RIGOR</span>
            <h2 className="heading-section">Workplace Planning &amp; Material Strategy</h2>
          </div>

          <div className="grid-2">
            {workplaceStrategies.map((item, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-deep)', border: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>
                  STRATEGY 0{idx + 1}
                </span>
                <h3 className="heading-card" style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="body-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMERCIAL PROJECT GALLERY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">COMMERCIAL CASE STUDIES</span>
              <h2 className="heading-section">Selected Workspaces &amp; Commercial Chambers</h2>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>All Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid-2">
            {commercialProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="COMMERCIAL ENQUIRY"
        title="Let's design a space that moves your business forward."
        description="Connect with our commercial architectural team to schedule a workplace strategy consultation and preliminary feasibility review."
        buttonText="Discuss Your Workspace"
        projectType="Commercial"
      />
    </div>
  );
}
