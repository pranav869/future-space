import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Calendar, Maximize, Compass } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';

export default function ProjectDetail() {
  const { slug } = useParams();
  const currentIndex = projectsData.findIndex(p => p.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  // Related projects in the same category or others
  const relatedProjects = projectsData
    .filter(p => p.id !== project.id && (p.category === project.category || p.featuredOnHome))
    .slice(0, 2);

  return (
    <div className="project-detail-page">
      <Breadcrumbs items={[
        { label: 'Work', href: '/work' },
        { label: project.categoryLabel, href: `/work/${project.category}` },
        { label: project.title, href: `/work/projects/${project.slug}` }
      ]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '920px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Link to={`/work/${project.category}`} className="editorial-label" style={{ color: 'var(--color-terracotta)' }}>
                {project.categoryLabel}
              </Link>
              <span style={{ color: 'rgba(250, 247, 242, 0.3)' }}>•</span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-beige)' }}>
                Case Study
              </span>
            </div>

            <h1 className="display-hero" style={{ marginBottom: '1.5rem' }}>
              {project.title}
            </h1>

            <p className="body-lead" style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
              {project.summary}
            </p>
          </div>

          {/* Project Metadata Ribbon */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.5rem', 
            padding: '2rem', 
            backgroundColor: 'var(--color-forest-surface)', 
            border: '1px solid var(--color-border-subtle)',
            marginTop: '2rem'
          }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', marginBottom: '0.35rem' }}>Location</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>{project.location}</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', marginBottom: '0.35rem' }}>Completion Year</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>{project.year}</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', marginBottom: '0.35rem' }}>Built-Up Area</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>{project.area}</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', marginBottom: '0.35rem' }}>Discipline Scope</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)' }}>{project.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Full Width Photo */}
      <section style={{ backgroundColor: 'var(--color-forest-dark)' }}>
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div style={{ border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
            <img 
              src={project.heroImage} 
              alt={project.title} 
              style={{ width: '100%', height: 'clamp(380px, 65vh, 680px)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Concept & Spatial Approach Spread */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem, 6vw, 6rem)', alignItems: 'start' }}>
            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>DESIGN CONCEPT</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>The Architectural Genesis</h2>
              <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
                {project.concept}
              </p>
              <div style={{ borderLeft: '2px solid var(--color-terracotta)', paddingLeft: '1.5rem', marginTop: '2rem' }}>
                <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', lineHeight: 1.5 }}>
                  "Every design gesture responds directly to light, movement, and the tactility of authentic materials."
                </p>
              </div>
            </div>

            <div>
              <span className="editorial-label" style={{ marginBottom: '1rem' }}>SPATIAL APPROACH</span>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>Circulation &amp; Volume</h2>
              <p className="body-lead" style={{ marginBottom: '2rem' }}>
                {project.spatialApproach}
              </p>

              <div style={{ backgroundColor: 'var(--color-forest-deep)', padding: '2rem', border: '1px solid var(--color-border-subtle)' }}>
                <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  Materials &amp; Finishes Palette
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {project.materials.map((mat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'rgba(244, 239, 230, 0.85)' }}>
                      <CheckCircle2 size={16} color="var(--color-terracotta)" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Photographic Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="editorial-label">PHOTOGRAPHIC STUDY</span>
            <h2 className="heading-section">Architectural Documentation</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {project.gallery.map((imgUrl, i) => (
              <div 
                key={i} 
                style={{ 
                  border: '1px solid var(--color-border-subtle)', 
                  overflow: 'hidden',
                  gridColumn: i === 0 ? '1 / -1' : 'auto'
                }}
              >
                <img 
                  src={imgUrl} 
                  alt={`${project.title} photographic frame ${i + 1}`}
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: i === 0 ? 'clamp(360px, 55vh, 600px)' : '380px', 
                    objectFit: 'cover' 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section style={{ backgroundColor: 'var(--color-forest-surface)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link 
              to={`/work/projects/${prevProject.slug}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-ivory)' }}
            >
              <ArrowLeft size={18} color="var(--color-terracotta)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige-dark)' }}>Previous Case Study</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{prevProject.title}</span>
              </div>
            </Link>

            <Link to="/work" className="btn btn-secondary" style={{ fontSize: '0.74rem' }}>
              <span>Back to Portfolio</span>
            </Link>

            <Link 
              to={`/work/projects/${nextProject.slug}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'right', color: 'var(--color-ivory)' }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-beige-dark)' }}>Next Case Study</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{nextProject.title}</span>
              </div>
              <ArrowRight size={18} color="var(--color-terracotta)" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="editorial-label">EXPLORE FURTHER</span>
              <h2 className="heading-section">Related Architectural Works</h2>
            </div>
            <div className="grid-2">
              {relatedProjects.map(rel => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ContactCTA 
        label="PROJECT INQUIRY"
        title="Envisioning a similar space?"
        description={`Discuss your site and design requirements with our studio team. We would love to collaborate on your next ${project.categoryLabel.toLowerCase()} project.`}
        buttonText={`Commission a ${project.categoryLabel}`}
        projectType={project.categoryLabel}
      />
    </div>
  );
}
