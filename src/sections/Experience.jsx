import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal, Layers, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  return (
    <section className="section-wrapper experience-section" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="CAREER TIMELINE"
          number="EXPERIENCE"
          title="PROFESSIONAL EXPERIENCE"
          subtitle="Applied engineering across real internships: internal tooling, IT asset management, and full-stack software development."
        />

        {/* Editorial Vertical Timeline */}
        <div className="editorial-timeline">
          {experienceData.map((exp, index) => {
            const isFeatured = exp.id === 'cema';

            return (
              <div
                key={exp.id}
                className={`timeline-entry ${isFeatured ? 'featured-entry' : ''}`}
                id={`exp-${exp.id}`}
              >
                {/* Left Period Column */}
                <div className="timeline-aside">
                  <span className="entry-index font-mono">0{index + 1}</span>
                  <div className="entry-period font-mono">
                    <Calendar size={13} className="text-highlight" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="entry-location font-mono">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                  <span className="entry-type-pill font-mono">{exp.type}</span>
                </div>

                {/* Center Node Marker */}
                <div className="timeline-node-line">
                  <div className="timeline-node-dot">
                    <span className="dot-inner"></span>
                  </div>
                  <div className="timeline-node-bar"></div>
                </div>

                {/* Right Card Content */}
                <div className="timeline-content-card">
                  <div className="card-top">
                    <div>
                      <span className="company-name font-mono">{exp.company}</span>
                      <h3 className="role-title font-display">{exp.role}</h3>
                    </div>
                    {isFeatured && (
                      <span className="badge-featured font-mono">
                        PROMINENT: IT SI & WEB DEV
                      </span>
                    )}
                  </div>

                  <p className="exp-summary">{exp.summary}</p>

                  {/* Responsibilities List */}
                  <div className="exp-responsibilities">
                    <h4 className="resp-header font-mono">KEY RESPONSIBILITIES & DELIVERABLES:</h4>
                    <ul className="resp-list">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>
                          <CheckCircle size={13} className="resp-check" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prominent Technical Tags */}
                  <div className="prominent-tags-section">
                    <span className="tags-label font-mono">TECHNICAL BADGES:</span>
                    <div className="tags-flex">
                      {exp.prominentTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`tech-badge ${isFeatured ? 'tech-badge-glpi' : ''}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-primary);
          position: relative;
        }
        .editorial-timeline {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          position: relative;
        }
        .timeline-entry {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
        }
        @media (min-width: 860px) {
          .timeline-entry {
            grid-template-columns: 240px 40px 1fr;
            gap: 2rem;
          }
        }
        .timeline-aside {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .entry-index {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-highlight);
          line-height: 1;
        }
        .entry-period {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .entry-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .entry-type-pill {
          font-size: 0.65rem;
          padding: 2px 7px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          width: fit-content;
          margin-top: 0.4rem;
        }
        .timeline-node-line {
          display: none;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        @media (min-width: 860px) {
          .timeline-node-line {
            display: flex;
          }
        }
        .timeline-node-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--border-accent-strong);
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .featured-entry .timeline-node-dot {
          border-color: var(--accent);
          box-shadow: 0 0 12px var(--accent-glow);
        }
        .dot-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }
        .timeline-node-bar {
          width: 1px;
          flex-grow: 1;
          background: linear-gradient(180deg, var(--border-accent), var(--border-subtle));
          margin-top: 6px;
        }
        .timeline-content-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 2rem;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .featured-entry .timeline-content-card {
          border-color: var(--border-accent);
          background: var(--bg-card-hover);
          box-shadow: var(--shadow-md);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.75rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
        }
        .company-name {
          font-size: 0.8rem;
          color: var(--text-highlight);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .role-title {
          font-size: clamp(1.25rem, 2vw, 1.6rem);
          color: var(--text-primary);
          margin-top: 0.25rem;
        }
        .badge-featured {
          font-size: 0.65rem;
          background: rgba(110, 36, 53, 0.3);
          color: #E8A598;
          border: 1px solid var(--accent);
          padding: 3px 8px;
          border-radius: 2px;
          letter-spacing: 0.05em;
        }
        .exp-summary {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .exp-responsibilities {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 1.25rem;
        }
        .resp-header {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }
        .resp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .resp-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .resp-check {
          color: var(--accent-light);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .prominent-tags-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .tags-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }
        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
      `}</style>
    </section>
  );
}
