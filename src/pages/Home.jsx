import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles, Building, UtensilsCrossed, Hotel, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import heroBgImage from '../assets/R1.png';
import { projectsData } from '../data/projectsData';
import { categoriesData } from '../data/categoriesData';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featuredOnHome);

  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background Architectural Backdrop with Subtle Gradient */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img 
            src={heroBgImage} 
            alt="FutureSpace Contemporary Luxury Architectural Residence"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.52)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9, 20, 16, 0.38) 0%, rgba(9, 20, 16, 0.72) 75%, var(--color-forest-dark) 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: '880px' }}>
            <span className="editorial-label" style={{ marginBottom: '1.5rem', color: 'var(--color-beige)' }}>
              ARCHITECTURE / INTERIORS / SPATIAL DESIGN
            </span>
            <h1 className="display-hero" style={{ marginBottom: '1.75rem' }}>
              Spaces that inspire.<br />
              Architecture that endures.
            </h1>
            <p className="body-lead" style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
              FutureSpace creates thoughtfully designed homes, refined interiors, and meaningful environments 
              where architecture and everyday living come together.
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
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1.25rem' }}>STUDIO MANIFESTO</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Designing spaces with purpose, precision, and personality.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="body-lead">
                  At FutureSpace, we believe great design begins with understanding how people live, work, 
                  connect, and experience their surroundings.
                </p>
                <p className="body-muted">
                  Our approach brings architecture, interior design, materiality, and functionality together 
                  to create spaces that feel distinctive, considered, and enduring. We resist fleeting trends, 
                  favoring honest textures, natural light, spatial balance, and site-responsive solutions tailored 
                  to India's diverse climates and rich crafts heritage.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2.5rem' }}>
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-terracotta)', lineHeight: 1 }}>06</span>
                  <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-beige)' }}>Design Disciplines</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-ivory)', lineHeight: 1 }}>100%</span>
                  <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-beige)' }}>Custom Architecture</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-beige)', lineHeight: 1 }}>PAN</span>
                  <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-beige)' }}>India Practice</span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ border: '1px solid var(--color-border-subtle)', padding: '0.75rem', backgroundColor: 'var(--color-forest-deep)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" 
                  alt="Architectural study of light and stone"
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', backgroundColor: 'var(--color-terracotta)', padding: '1.25rem 1.75rem', maxWidth: '280px', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-ivory)', lineHeight: 1.3 }}>
                  "Where architecture meets the art of living."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SELECTED WORK */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="editorial-label">CURATED PORTFOLIO</span>
              <h2 className="heading-section">A portfolio of spaces that redefine luxury.</h2>
              <p className="body-muted" style={{ marginTop: '0.75rem' }}>
                From contemporary residences and bespoke villas to refined commercial environments, 
                every project begins with an idea and evolves into a space shaped by thoughtful design.
              </p>
            </div>
            <Link to="/work" className="btn btn-secondary">
              <span>View All Projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Quick Categories Bar */}
          <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--color-forest-surface)', border: '1px solid var(--color-border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="editorial-label" style={{ marginBottom: '0.25rem' }}>EXPLORE BY DISCIPLINE</span>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-ivory)' }}>
                  Discover specialized projects across our six dedicated practices
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {categoriesData.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={cat.route}
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 1.15rem', fontSize: '0.72rem' }}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR EXPERTISE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-deep)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <span className="editorial-label">CAPABILITIES &amp; SERVICES</span>
            <h2 className="heading-section">Considered design. Exceptional execution.</h2>
            <p className="body-muted">
              We bring complete spatial coherence to every venture, uniting structural intelligence, 
              material sourcing, and bespoke interior craftsmanship under one holistic vision.
            </p>
          </div>

          <div className="grid-3">
            {/* Service 1 */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <Building size={28} color="var(--color-terracotta)" style={{ marginBottom: '1.25rem' }} />
              <h3 className="heading-card" style={{ marginBottom: '0.75rem' }}>ARCHITECTURE &amp; PLANNING</h3>
              <p className="body-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Creating architectural concepts that balance spatial intelligence, proportion, light, and functionality.
              </p>
              <Link to="/services" className="btn-link">Learn More</Link>
            </div>

            {/* Service 2 */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <HomeIcon size={28} color="var(--color-terracotta)" style={{ marginBottom: '1.25rem' }} />
              <h3 className="heading-card" style={{ marginBottom: '0.75rem' }}>RESIDENTIAL INTERIORS</h3>
              <p className="body-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Designing thoughtful living environments that reflect the people who inhabit them.
              </p>
              <Link to="/services" className="btn-link">Learn More</Link>
            </div>

            {/* Service 3 */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <Layers size={28} color="var(--color-terracotta)" style={{ marginBottom: '1.25rem' }} />
              <h3 className="heading-card" style={{ marginBottom: '0.75rem' }}>COMMERCIAL SPACES</h3>
              <p className="body-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Creating purposeful workplaces and commercial environments that bring together brand identity, functionality, and aesthetics.
              </p>
              <Link to="/services" className="btn-link">Learn More</Link>
            </div>

            {/* Service 4 */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <UtensilsCrossed size={28} color="var(--color-terracotta)" style={{ marginBottom: '1.25rem' }} />
              <h3 className="heading-card" style={{ marginBottom: '0.75rem' }}>KITCHEN DESIGN</h3>
              <p className="body-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Crafting beautiful, efficient kitchens through intelligent layouts, carefully selected materials, and considered detailing.
              </p>
              <Link to="/services" className="btn-link">Learn More</Link>
            </div>

            {/* Service 5 */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <Hotel size={28} color="var(--color-terracotta)" style={{ marginBottom: '1.25rem' }} />
              <h3 className="heading-card" style={{ marginBottom: '0.75rem' }}>HOSPITALITY DESIGN</h3>
              <p className="body-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Creating memorable hospitality environments through atmosphere, comfort, spatial flow, and distinctive design.
              </p>
              <Link to="/services" className="btn-link">Learn More</Link>
            </div>

            {/* Service 6 */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-forest-main)', border: '1px solid var(--color-border-subtle)' }}>
              <Sparkles size={28} color="var(--color-terracotta)" style={{ marginBottom: '1.25rem' }} />
              <h3 className="heading-card" style={{ marginBottom: '0.75rem' }}>3D VISUALIZATION</h3>
              <p className="body-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Bringing architectural concepts to life through detailed, photorealistic visual representations.
              </p>
              <Link to="/services" className="btn-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DESIGN PHILOSOPHY */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(2.5rem, 6vw, 5rem)', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" 
                alt="Tactile materials and warm architectural shadows"
                style={{ width: '100%', height: '520px', objectFit: 'cover', border: '1px solid var(--color-border-subtle)' }}
              />
            </div>

            <div>
              <span className="editorial-label" style={{ marginBottom: '1.25rem' }}>OUR CORE PHILOSOPHY</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>
                Beyond aesthetics. Designed around life.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <p className="body-lead">
                  We see architecture as more than the arrangement of walls, materials, and forms.
                </p>
                <p className="body-muted">
                  It is the relationship between light and space, the experience of movement, the warmth of materials, 
                  and the small details that make a place feel personal.
                </p>
                <p className="body-muted">
                  Every FutureSpace project is approached with curiosity, clarity, and a commitment to thoughtful design. 
                  Whether shaping a private villa or a high-traffic restaurant, we balance practical performance 
                  with visceral emotional resonance.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Contextual Relevance</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244, 239, 230, 0.7)' }}>Responding directly to local sunlight, orientation, regional stones, and climate.</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>Enduring Materiality</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244, 239, 230, 0.7)' }}>Materials that age gracefully and patinate over decades rather than deteriorate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STUDIO INTRODUCTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-surface)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>ABOUT THE STUDIO</span>
            <h2 className="display-title" style={{ marginBottom: '1.5rem' }}>
              An approach shaped by detail.
            </h2>
            <p className="body-lead" style={{ marginBottom: '2.5rem' }}>
              Every project presents an opportunity to create something meaningful. We combine creative thinking, 
              spatial planning, material exploration, and careful attention to detail to develop environments that 
              respond to their context and the people who use them.
            </p>
            <Link to="/studio" className="btn btn-primary">
              <span>Discover FutureSpace</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}
