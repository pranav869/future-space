import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <article className="category-card">
      <Link to={category.route} className="category-card-img-wrap" aria-label={`Explore ${category.title}`}>
        <img 
          src={category.image} 
          alt={category.title} 
          loading="lazy"
          className="category-card-img" 
        />
        <div className="category-card-overlay"></div>
      </Link>

      <div className="category-card-body">
        <span className="category-card-count">
          {category.projectCount} Curated Case Studies
        </span>

        <h3 className="category-card-title">
          <Link to={category.route}>
            {category.title}
          </Link>
        </h3>

        <p className="category-card-desc">
          {category.description}
        </p>

        <Link to={category.route} className="category-card-cta">
          <span>Explore {category.title}</span>
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
