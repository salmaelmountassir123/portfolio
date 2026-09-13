import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { educationData } from '../data/educationData';

export default function Education() {
  return (
    <section className="section-wrapper education-section" id="education">
      <div className="container">
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND"
          number="EDUCATION"
          title="FORMATION & DIPLOMAS"
          subtitle="Rigorous foundations in digital software engineering, full-stack systems, and scientific reasoning."
        />

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div className="edu-top">
                <div className="edu-icon-wrap">
                  {idx === 0 ? <GraduationCap size={20} /> : <Award size={20} />}
                </div>
                <div className="edu-period font-mono">
                  <Calendar size={12} className="text-highlight" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="edu-meta">
                <span className="edu-institution font-mono">{edu.institution}</span>
                <h3 className="edu-degree font-display">{edu.degree}</h3>
                <h4 className="edu-field">{edu.field}</h4>
              </div>

              <div className="edu-status-badge font-mono">
                <CheckCircle size={12} className="text-highlight" />
                <span>{edu.status}</span>
              </div>

              <p className="edu-desc">{edu.description}</p>

              <div className="edu-highlights font-mono">
                {edu.highlights.map((h, hIdx) => (
                  <span key={hIdx} className="tech-badge">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background: var(--bg-primary);
          position: relative;
        }
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        .edu-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: var(--transition-smooth);
        }
        .edu-card:hover {
          border-color: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .edu-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .edu-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-xs);
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-highlight);
        }
        .edu-card:hover .edu-icon-wrap {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .edu-period {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .edu-institution {
          font-size: 0.75rem;
          color: var(--text-highlight);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .edu-degree {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-top: 0.2rem;
        }
        .edu-field {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .edu-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 4px 10px;
          background: var(--bg-surface);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-xs);
          font-size: 0.75rem;
          color: var(--text-primary);
          width: fit-content;
        }
        .edu-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          flex-grow: 1;
        }
        .edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
        }
      `}</style>
    </section>
  );
}
