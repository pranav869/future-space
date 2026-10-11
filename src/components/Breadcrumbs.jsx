import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb Navigation">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li className="breadcrumbs-separator" aria-hidden="true">
                  <ChevronRight size={12} />
                </li>
                <li>
                  {isLast ? (
                    <span className="breadcrumbs-current" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
