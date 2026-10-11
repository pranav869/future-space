import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { categoriesData } from '../data/categoriesData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="brand-logo">
              <span className="brand-title">FUTURESPACE</span>
              <span className="brand-subtitle">Architecture & Interiors</span>
            </Link>
            <p className="footer-brand-desc">
              FutureSpace is an architectural and interior design studio crafting timeless residences, 
              bespoke villas, purposeful workplaces, and refined culinary spaces across India.
            </p>
            <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--color-ivory-dim)' }}>
                <MapPin size={15} color="var(--color-terracotta)" />
                <span>New Delhi &amp; Bengaluru, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--color-ivory-dim)' }}>
                <Mail size={15} color="var(--color-terracotta)" />
                <a href="mailto:inquiries@futurespace.co.in" style={{ color: 'inherit' }}>inquiries@futurespace.co.in</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--color-ivory-dim)' }}>
                <Phone size={15} color="var(--color-terracotta)" />
                <span>+91 (0) 11 4982 7200</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/work" className="footer-link">Portfolio</Link></li>
              <li><Link to="/services" className="footer-link">Services &amp; Capabilities</Link></li>
              <li><Link to="/studio" className="footer-link">The Studio</Link></li>
              <li><Link to="/contact" className="footer-link">Start a Project</Link></li>
            </ul>
          </div>

          {/* Project Disciplines */}
          <div>
            <h4 className="footer-col-title">Disciplines</h4>
            <ul className="footer-links">
              {categoriesData.map((cat) => (
                <li key={cat.id}>
                  <Link to={cat.route} className="footer-link">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Note & Consultation */}
          <div>
            <h4 className="footer-col-title">Consultation</h4>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.65', color: 'rgba(244, 239, 230, 0.72)', marginBottom: '1.25rem' }}>
              We collaborate with visionary private clients, developers, and institutions seeking distinctive spatial character and meticulous execution.
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.74rem' }}>
              <span>Project Inquiries</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FUTURESPACE Architecture &amp; Interior Design. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Architectural Studio India</span>
            <button 
              type="button" 
              onClick={scrollToTop} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-beige)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
