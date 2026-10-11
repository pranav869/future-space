import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { categoriesData } from '../data/categoriesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <header 
      className="site-header"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color var(--transition-fast)'
      }}
    >
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="FutureSpace Home">
          <span className="brand-title">FUTURESPACE</span>
          <span className="brand-subtitle">Architecture & Interiors</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-navigation" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/work" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/studio" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Studio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.45rem', fontSize: '0.76rem' }}>
            <span>Start a Project</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/work">Work</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/studio">Studio</Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="mobile-nav-categories">
          <h4>Project Categories</h4>
          <div className="mobile-categories-grid">
            {categoriesData.map((cat) => (
              <Link key={cat.id} to={cat.route}>
                {cat.title}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact" className="btn btn-terracotta" style={{ width: '100%' }}>
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
}
