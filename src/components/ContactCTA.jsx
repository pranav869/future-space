import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ContactCTA({ 
  label = "COLLABORATION & INQUIRIES",
  title = "Have a space in mind?",
  description = "Whether you are planning a new residence, reimagining an existing interior, or developing a commercial space, we would love to hear about your vision.",
  buttonText = "Let's Discuss Your Project",
  projectType = ""
}) {
  const contactLink = projectType ? `/contact?type=${encodeURIComponent(projectType)}` : '/contact';

  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="contact-cta-wrapper">
          <span className="editorial-label">{label}</span>
          <h2 className="display-title">{title}</h2>
          <p className="body-lead">{description}</p>
          <div className="contact-cta-buttons">
            <Link to={contactLink} className="btn btn-primary">
              <span>{buttonText}</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link to="/work" className="btn btn-secondary">
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
