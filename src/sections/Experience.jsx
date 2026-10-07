import React from 'react';
import { Calendar, Building, Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  const experiences = [
    {
      id: 'cema',
      period: '01/2026 – 09/2026',
      company: "CEMA Bois de l'Atlas",
      role: 'IT & Development Internship',
      bullets: [
        'IT support & network environment',
        'GLPI (installation & configuration)',
        'Inventory & GLPI Agent',
        'Tickets & email notifications',
        'Development of the Gestion des Téléphones application'
      ]
    },
    {
      id: 'epg',
      period: '01/2024 – 01/2025',
      company: 'École Polytechnique des Génies – Fès',
      role: 'Web Development',
      bullets: [
        'React.js / Laravel 11',
        'MySQL / Sanctum',
        'RESTful APIs & role-based middleware',
        'UML modeling & system technical documentation'
      ]
    }
  ];

  return (
    <section className="section-wrapper experience-section" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="MY EXPERIENCE"
          title="Professional Journey"
          subtitle="Real-world internships combining web development with IT systems infrastructure."
        />

        {/* Timeline Container */}
        <div className="experience-timeline-wrap">
          <div className="timeline-track">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="timeline-item">
                {/* Left: Node and Timeline Marker */}
                <div className="timeline-marker-col">
                  <span className="timeline-period-badge font-mono">{exp.period}</span>
                  <div className="timeline-node-circle">
                    <span className="timeline-inner-dot"></span>
                  </div>
                  {idx < experiences.length - 1 && <div className="timeline-vertical-line"></div>}
                </div>

                {/* Right: Card Content */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="company-info">
                      <h3 className="company-name font-display">{exp.company}</h3>
                      <p className="role-title font-mono text-accent">{exp.role}</p>
                    </div>
                  </div>

                  <ul className="timeline-bullets-list">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="bullet-item">
                        <span className="bullet-dot"></span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .experience-timeline-wrap {
          max-width: 860px;
          margin: 0 auto;
        }
        .timeline-track {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
        }
        @media (min-width: 768px) {
          .timeline-item {
            grid-template-columns: 200px 1fr;
            gap: 2.5rem;
          }
        }
        .timeline-marker-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }
        @media (min-width: 768px) {
          .timeline-marker-col {
            align-items: flex-end;
            padding-right: 2rem;
          }
        }
        .timeline-period-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border);
          white-space: nowrap;
        }
        .timeline-node-circle {
          display: none;
          position: absolute;
          right: -7px;
          top: 8px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--accent);
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        @media (min-width: 768px) {
          .timeline-node-circle {
            display: flex;
          }
        }
        .timeline-inner-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
        }
        .timeline-vertical-line {
          display: none;
          position: absolute;
          right: 0px;
          top: 24px;
          bottom: -45px;
          width: 2px;
          background: var(--border);
          z-index: 1;
        }
        @media (min-width: 768px) {
          .timeline-vertical-line {
            display: block;
          }
        }
        .timeline-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .timeline-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .timeline-card-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }
        .company-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .role-title {
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: 0.25rem;
        }
        .timeline-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          margin-top: 7px;
        }
      `}</style>
    </section>
  );
}
