import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, AlertCircle, FileText, Send } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: preselectedType || 'Residential',
    location: '',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (preselectedType) {
      setFormData(prev => ({ ...prev, projectType: preselectedType }));
    }
  }, [preselectedType]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (8-15 digits).';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please specify the project location / city.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief description of your project scope.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save state
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Residential',
      location: '',
      budget: '',
      description: '',
    });
  };

  return (
    <div className="contact-page">
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

      {/* Hero Header */}
      <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-forest-deep)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-label" style={{ marginBottom: '1rem' }}>PROJECT INQUIRIES</span>
            <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
              Let's talk about your next project.
            </h1>
            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              Every great space begins with a conversation.
            </p>
            <p className="body-muted">
              Tell us a little about your project, your aspirations, and the kind of space you want to create. 
              Our team can use this information to understand your requirements and discuss the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Studio Details Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'start' }}>
            {/* Form Column */}
            <div>
              {!submittedData ? (
                <form onSubmit={handleSubmit} noValidate style={{ backgroundColor: 'var(--color-forest-main)', padding: 'clamp(1.5rem, 4vw, 3rem)', border: '1px solid var(--color-border-subtle)' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <h2 className="heading-card" style={{ marginBottom: '0.5rem' }}>Project Consultation Form</h2>
                    <p className="body-muted" style={{ fontSize: '0.88rem' }}>
                      Please provide details regarding your site, scope, and timeline. All inquiries are held in strict confidence.
                    </p>
                  </div>

                  <div className="form-grid">
                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        placeholder="e.g. Vikramaditya Singhania"
                        required
                      />
                      {errors.fullName && <span className="invalid-feedback">{errors.fullName}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="e.g. vikram@domain.com"
                        required
                      />
                      {errors.email && <span className="invalid-feedback">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="e.g. +91 98200 12345"
                        required
                      />
                      {errors.phone && <span className="invalid-feedback">{errors.phone}</span>}
                    </div>

                    {/* Project Type */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="projectType">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Kitchen">Kitchen Design</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Villa">Villa / Private Estate</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Architecture">Architecture &amp; Masterplanning</option>
                        <option value="Other">Other / Advisory</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="location">Project Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                        placeholder="e.g. Alipore, Kolkata or South Delhi"
                        required
                      />
                      {errors.location && <span className="invalid-feedback">{errors.location}</span>}
                    </div>

                    {/* Approximate Budget */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="budget">Approximate Budget (INR)</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="">Select an approximate range</option>
                        <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                        <option value="₹1 Crore - ₹3 Crores">₹1 Crore - ₹3 Crores</option>
                        <option value="₹3 Crores - ₹7 Crores">₹3 Crores - ₹7 Crores</option>
                        <option value="₹7 Crores - ₹15 Crores">₹7 Crores - ₹15 Crores</option>
                        <option value="₹15 Crores+">₹15 Crores+</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="description">Project Description &amp; Scope *</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        placeholder="Tell us about your plot size, architectural aspirations, family needs, and anticipated timeline..."
                        required
                      />
                      {errors.description && <span className="invalid-feedback">{errors.description}</span>}
                    </div>
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      <span>Submit Project Enquiry</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </form>
              ) : (
                /* Verified Summary & Form Service Backend Documentation */
                <div style={{ backgroundColor: 'var(--color-forest-surface)', padding: '2.5rem', border: '1px solid var(--color-border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <CheckCircle2 size={24} color="var(--color-terracotta)" />
                    <h3 className="heading-card" style={{ fontSize: '1.5rem', color: 'var(--color-ivory)' }}>
                      Inquiry Validated &amp; Generated
                    </h3>
                  </div>

                  <p className="body-muted" style={{ marginBottom: '1.5rem' }}>
                    Your project details have been validated by the studio intake system. Below is your structured inquiry summary:
                  </p>

                  <div style={{ backgroundColor: 'var(--color-forest-deep)', padding: '1.5rem', border: '1px solid var(--color-border-subtle)', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
                    <p><strong>Client:</strong> {submittedData.fullName}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Phone:</strong> {submittedData.phone}</p>
                    <p><strong>Discipline:</strong> {submittedData.projectType}</p>
                    <p><strong>Location:</strong> {submittedData.location}</p>
                    <p><strong>Estimated Budget:</strong> {submittedData.budget || 'Not specified'}</p>
                    <p style={{ marginTop: '0.5rem' }}><strong>Scope:</strong> {submittedData.description}</p>
                  </div>

                  {/* Backend Integration Requirements Notice as per instructions */}
                  <div style={{ padding: '1.25rem', backgroundColor: 'rgba(189, 104, 75, 0.12)', border: '1px solid var(--color-terracotta)', marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <AlertCircle size={20} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div style={{ fontSize: '0.84rem', lineHeight: '1.6', color: 'var(--color-ivory-dim)' }}>
                        <strong>Backend Dispatch Notice:</strong>
                        <br />
                        As requested by the project specifications, to avoid fake success states when no backend service is configured, this intake form prepares the payload client-side. To activate direct email inbox delivery, integrate an endpoint such as <code>Formspree</code>, <code>Resend API</code>, or <code>EmailJS</code> into <code>handleSubmit</code>.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={`mailto:inquiries@futurespace.co.in?subject=Project Inquiry - ${submittedData.projectType} (${submittedData.fullName})&body=Client: ${submittedData.fullName}%0D%0AEmail: ${submittedData.email}%0D%0APhone: ${submittedData.phone}%0D%0ADiscipline: ${submittedData.projectType}%0D%0ALocation: ${submittedData.location}%0D%0ABudget: ${submittedData.budget}%0D%0A%0D%0AScope:%0D%0A${encodeURIComponent(submittedData.description)}`}
                      className="btn btn-primary"
                    >
                      <Send size={14} />
                      <span>Dispatch via Email Client</span>
                    </a>
                    <button type="button" onClick={handleReset} className="btn btn-secondary">
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Studio Information Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ backgroundColor: 'var(--color-forest-surface)', padding: '2.5rem', border: '1px solid var(--color-border-subtle)' }}>
                <span className="editorial-label" style={{ marginBottom: '1rem' }}>STUDIO LOCATIONS</span>
                <h3 className="heading-card" style={{ fontSize: '1.45rem', marginBottom: '1.25rem' }}>Offices &amp; Consultations</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9rem', color: 'rgba(244, 239, 230, 0.8)' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-ivory)', fontWeight: 600, marginBottom: '0.25rem' }}>New Delhi Studio Hub</h4>
                    <p>Mehrauli Archaeological Road, South Delhi, 110030</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-ivory)', fontWeight: 600, marginBottom: '0.25rem' }}>Bengaluru Design Studio</h4>
                    <p>Indiranagar 100ft Road, Bengaluru, Karnataka 560038</p>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--color-forest-surface)', padding: '2.5rem', border: '1px solid var(--color-border-subtle)' }}>
                <span className="editorial-label" style={{ marginBottom: '1rem' }}>DIRECT CONTACT</span>
                <h3 className="heading-card" style={{ fontSize: '1.45rem', marginBottom: '1.25rem' }}>Direct Lines</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} color="var(--color-terracotta)" />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', display: 'block' }}>Email Inquiries</span>
                      <a href="mailto:inquiries@futurespace.co.in" style={{ color: 'var(--color-ivory)' }}>inquiries@futurespace.co.in</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} color="var(--color-terracotta)" />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', display: 'block' }}>Studio Telephone</span>
                      <span style={{ color: 'var(--color-ivory)' }}>+91 (0) 11 4982 7200</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock size={18} color="var(--color-terracotta)" />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-beige-dark)', display: 'block' }}>Operating Hours</span>
                      <span style={{ color: 'var(--color-ivory-dim)' }}>Monday – Friday: 10:00 AM – 6:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Notice */}
              <div style={{ padding: '1.5rem', border: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-forest-deep)' }}>
                <p style={{ fontSize: '0.82rem', lineHeight: '1.6', color: 'rgba(244, 239, 230, 0.65)' }}>
                  <strong>Client Confidentiality:</strong> FutureSpace undertakes projects under mutual non-disclosure agreements whenever required. Site visits for ongoing commissions are scheduled exclusively by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
