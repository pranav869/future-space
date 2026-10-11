import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, showCategoryLink = true }) {
  if (!project) return null;

  return (
    <article className="project-card">
      <Link 
        to={`/work/projects/${project.slug}`} 
        className="project-card-image-wrap"
        aria-label={`View details of ${project.title}`}
      >
        <img 
          src={project.heroImage} 
          alt={project.title} 
          loading="lazy"
          className="project-card-image" 
        />
        <div className="project-card-badge">
          {project.categoryLabel}
        </div>
      </Link>

      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="project-card-title">
          <Link to={`/work/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="project-card-desc">
          {project.summary}
        </p>

        <div className="project-card-footer">
          {showCategoryLink ? (
            <Link 
              to={`/work/${project.category}`} 
              style={{ color: 'var(--color-beige-dark)', fontSize: '0.72rem', letterSpacing: '0.12em' }}
            >
              Explore {project.categoryLabel}
            </Link>
          ) : (
            <span style={{ color: 'var(--color-beige-dark)', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
              {project.scope}
            </span>
          )}

          <Link 
            to={`/work/projects/${project.slug}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
          >
            <span>View Project</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
