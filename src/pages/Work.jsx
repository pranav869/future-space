import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { categoriesData } from '../data/categoriesData';
import { projectsData } from '../data/projectsData';
import CategoryCard from '../components/CategoryCard';
import ProjectCard from '../components/ProjectCard';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactCTA from '../components/ContactCTA';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="work-page">
      <Breadcrumbs items={[{ label: 'Work', href: '/work' }]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>SELECTED PORTFOLIO</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Spaces shaped by vision.
            </h1>
            <p className="heading-card" style={{ color: 'var(--color-beige)', fontWeight: 400, marginBottom: '1.5rem' }}>
              A portfolio of spaces that redefine luxury.
            </p>
            <p className="body-lead">
              Explore a collection of architectural concepts, residential environments, commercial spaces, 
              and considered interiors. Each project reflects a different interpretation of space, material, 
              light, proportion, and the way people experience their surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Prominent Project Categories Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="editorial-label">ARCHITECTURAL PRACTICES</span>
            <h2 className="heading-section">Six Specialized Design Disciplines</h2>
            <p className="body-muted" style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
              Select a discipline below to explore dedicated project archives, design philosophies, 
              material considerations, and specialized execution workflows.
            </p>
          </div>

          <div className="grid-3">
            {categoriesData.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Projects Showcase with Filter */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-forest-main)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="editorial-label">ARCHIVE &amp; CASE STUDIES</span>
              <h2 className="heading-section">All Architectural Projects</h2>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.74rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--color-border-subtle)',
                  backgroundColor: activeFilter === 'all' ? 'var(--color-ivory)' : 'transparent',
                  color: activeFilter === 'all' ? 'var(--color-forest-dark)' : 'var(--color-ivory)',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                All ({projectsData.length})
              </button>
              {categoriesData.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.slug)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.74rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: activeFilter === cat.slug ? 'var(--color-terracotta)' : 'transparent',
                    color: activeFilter === cat.slug ? 'var(--color-ivory)' : 'var(--color-ivory-dim)',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid-3">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-beige-dark)' }}>
              <p>No projects match the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        label="COMMISSION AN ARCHITECTURAL WORK"
        title="Ready to discuss your project?"
        description="Whether embarking on a private villa, an urban sanctuary, or a boutique commercial headquarters, our studio welcomes initial consultations."
      />
    </div>
  );
}
