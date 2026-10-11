import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight } from 'lucide-react';

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: 'Personalized design approach',
      futureSpace: { type: 'confirmed', text: 'Yes' },
      contractor: { type: 'text', text: 'Depends on the designer' },
      otherStudios: { type: 'confirmed', text: 'Yes' },
    },
    {
      feature: 'Residential interior design',
      futureSpace: { type: 'confirmed', text: 'Yes' },
      contractor: { type: 'text', text: 'Depends on specialization' },
      otherStudios: { type: 'text', text: 'Depends on specialization' },
    },
    {
      feature: 'Commercial design',
      futureSpace: { type: 'confirmed', text: 'Yes, if offered' },
      contractor: { type: 'text', text: 'Depends on specialization' },
      otherStudios: { type: 'text', text: 'Depends on specialization' },
    },
    {
      feature: 'Kitchen design',
      futureSpace: { type: 'confirmed', text: 'Yes, if offered' },
      contractor: { type: 'text', text: 'Depends on specialization' },
      otherStudios: { type: 'text', text: 'Depends on specialization' },
    },
    {
      feature: '3D visualization',
      futureSpace: { type: 'confirmed', text: 'Available, if offered' },
      contractor: { type: 'text', text: 'Depends on the package' },
      otherStudios: { type: 'text', text: 'Depends on the package' },
    },
    {
      feature: 'Transparent project quotations',
      futureSpace: { type: 'text', text: 'Project-specific quotation' },
      contractor: { type: 'text', text: 'Varies' },
      otherStudios: { type: 'text', text: 'Varies' },
    },
    {
      feature: 'Material and finish selection',
      futureSpace: { type: 'text', text: 'Based on project scope' },
      contractor: { type: 'text', text: 'Varies' },
      otherStudios: { type: 'text', text: 'Varies' },
    },
    {
      feature: 'Project coordination',
      futureSpace: { type: 'text', text: 'As agreed in the project scope' },
      contractor: { type: 'text', text: 'Varies' },
      otherStudios: { type: 'text', text: 'Varies' },
    },
    {
      feature: 'After-project support',
      futureSpace: { type: 'text', text: 'As agreed in the contract' },
      contractor: { type: 'text', text: 'Varies' },
      otherStudios: { type: 'text', text: 'Varies' },
    },
  ];

  const renderCellContent = (item, isHighlight = false) => {
    if (item.type === 'confirmed') {
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem' }}>
          <span 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '22px', 
              height: '22px', 
              borderRadius: '50%', 
              backgroundColor: '#E8F5E9', 
              color: '#1F7A4C',
              flexShrink: 0 
            }}
          >
            <Check size={14} strokeWidth={2.8} />
          </span>
          <span style={{ fontWeight: 600, color: isHighlight ? '#13271F' : '#2D3748', fontSize: '0.9rem' }}>
            {item.text}
          </span>
        </div>
      );
    }

    return (
      <span 
        style={{ 
          fontSize: '0.88rem', 
          color: isHighlight ? '#13271F' : '#4A5568', 
          fontWeight: isHighlight ? 500 : 400 
        }}
      >
        {item.text}
      </span>
    );
  };

  return (
    <section 
      id="why-future-space"
      className="section-padding" 
      style={{ 
        backgroundColor: '#FAF7F2', 
        color: '#1E1714',
        borderTop: '1px solid rgba(19, 39, 31, 0.1)',
        borderBottom: '1px solid rgba(19, 39, 31, 0.1)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <span 
            className="editorial-label" 
            style={{ 
              color: '#BD684B', 
              marginBottom: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            WHY FUTURE SPACE
          </span>

          <h2 
            className="heading-section" 
            style={{ 
              color: '#0E1E17', 
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              lineHeight: 1.18,
              marginBottom: '1.25rem' 
            }}
          >
            Why <span style={{ color: '#BD684B' }}>Choose FutureSpace</span> for Your Next Project?
          </h2>

          <p 
            style={{ 
              fontSize: 'clamp(0.98rem, 1.25vw, 1.15rem)', 
              lineHeight: 1.7, 
              color: '#3A3D3C',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            Thoughtful design, transparent communication, and a considered approach to creating spaces 
            that feel distinctly yours.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div 
          style={{ 
            maxWidth: '1080px', 
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(19, 39, 31, 0.12)',
            boxShadow: '0 20px 45px -15px rgba(14, 30, 23, 0.08), 0 0 1px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden'
          }}
        >
          {/* Scrollable container on mobile */}
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table 
              style={{ 
                width: '100%', 
                minWidth: '720px', 
                borderCollapse: 'separate', 
                borderSpacing: 0,
                textAlign: 'left'
              }}
            >
              <thead>
                <tr>
                  {/* Column 1: Feature */}
                  <th 
                    style={{ 
                      width: '34%', 
                      padding: '1.4rem 1.75rem', 
                      backgroundColor: '#13271F', 
                      color: '#FAF7F2', 
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem', 
                      letterSpacing: '0.12em', 
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      borderRight: '1px solid rgba(250, 247, 242, 0.1)'
                    }}
                  >
                    Feature
                  </th>

                  {/* Column 2: Future Space (Distinctive Highlighted Header) */}
                  <th 
                    style={{ 
                      width: '26%', 
                      padding: '1.4rem 1.5rem', 
                      backgroundColor: '#BD684B', 
                      color: '#FFFFFF', 
                      textAlign: 'center',
                      fontFamily: 'var(--font-sans)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.18)',
                      boxShadow: 'inset 0 -2px 0 rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        FutureSpace
                      </span>
                      <span 
                        style={{ 
                          fontSize: '0.66rem', 
                          fontWeight: 700, 
                          letterSpacing: '0.14em', 
                          textTransform: 'uppercase',
                          backgroundColor: 'rgba(255, 255, 255, 0.22)',
                          padding: '0.15rem 0.6rem',
                          borderRadius: '999px',
                          display: 'inline-block'
                        }}
                      >
                        STUDIO APPROACH
                      </span>
                    </div>
                  </th>

                  {/* Column 3: Independent Contractor */}
                  <th 
                    style={{ 
                      width: '20%', 
                      padding: '1.4rem 1.25rem', 
                      backgroundColor: '#13271F', 
                      color: '#FAF7F2', 
                      textAlign: 'center',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem', 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      borderRight: '1px solid rgba(250, 247, 242, 0.1)'
                    }}
                  >
                    Independent Contractor
                  </th>

                  {/* Column 4: Other Design Studios */}
                  <th 
                    style={{ 
                      width: '20%', 
                      padding: '1.4rem 1.25rem', 
                      backgroundColor: '#13271F', 
                      color: '#FAF7F2', 
                      textAlign: 'center',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem', 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    Other Design Studios
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, idx) => {
                  const isEven = idx % 2 === 1;
                  const rowBg = isEven ? '#FAF8F5' : '#FFFFFF';
                  const highlightBg = isEven ? '#F4EDE3' : '#F9F3EA';
                  const isLastRow = idx === comparisonData.length - 1;

                  return (
                    <tr key={idx} style={{ backgroundColor: rowBg }}>
                      {/* Feature Column */}
                      <td 
                        style={{ 
                          padding: '1.15rem 1.75rem', 
                          fontSize: '0.92rem', 
                          fontWeight: 600, 
                          color: '#13271F',
                          borderBottom: isLastRow ? 'none' : '1px solid rgba(19, 39, 31, 0.08)',
                          borderRight: '1px solid rgba(19, 39, 31, 0.08)'
                        }}
                      >
                        {row.feature}
                      </td>

                      {/* FutureSpace Column (Subtle Contrasting Background) */}
                      <td 
                        style={{ 
                          padding: '1.15rem 1.5rem', 
                          textAlign: 'center',
                          backgroundColor: highlightBg,
                          borderBottom: isLastRow ? 'none' : '1px solid rgba(189, 104, 75, 0.15)',
                          borderRight: '1px solid rgba(19, 39, 31, 0.08)'
                        }}
                      >
                        {renderCellContent(row.futureSpace, true)}
                      </td>

                      {/* Independent Contractor */}
                      <td 
                        style={{ 
                          padding: '1.15rem 1.25rem', 
                          textAlign: 'center',
                          borderBottom: isLastRow ? 'none' : '1px solid rgba(19, 39, 31, 0.08)',
                          borderRight: '1px solid rgba(19, 39, 31, 0.08)'
                        }}
                      >
                        {renderCellContent(row.contractor)}
                      </td>

                      {/* Other Design Studios */}
                      <td 
                        style={{ 
                          padding: '1.15rem 1.25rem', 
                          textAlign: 'center',
                          borderBottom: isLastRow ? 'none' : '1px solid rgba(19, 39, 31, 0.08)'
                        }}
                      >
                        {renderCellContent(row.otherStudios)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small Disclaimer */}
        <p 
          style={{ 
            fontSize: '0.78rem', 
            color: '#606764', 
            textAlign: 'center', 
            marginTop: '1.25rem',
            fontStyle: 'italic',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Services, deliverables, timelines, and support are subject to the scope agreed for each project. 
          Please contact FutureSpace for details.
        </p>

        {/* Call to Action Section */}
        <div 
          style={{ 
            marginTop: '4.5rem', 
            padding: '3rem 2rem', 
            backgroundColor: '#F5EFE6', 
            borderRadius: '16px',
            border: '1px solid rgba(19, 39, 31, 0.1)',
            textAlign: 'center',
            maxWidth: '820px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h3 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', 
              color: '#0E1E17',
              marginBottom: '0.85rem' 
            }}
          >
            Every project deserves a thoughtful beginning.
          </h3>

          <p 
            style={{ 
              fontSize: '0.95rem', 
              color: '#3A3D3C', 
              maxWidth: '560px', 
              margin: '0 auto 1.75rem auto',
              lineHeight: 1.65
            }}
          >
            Tell us about your space, your ideas, and your requirements. We'll help you explore the next steps.
          </p>

          <Link 
            to="/contact" 
            className="btn btn-terracotta"
            style={{ 
              padding: '0.9rem 2.25rem', 
              fontSize: '0.82rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
