import React from 'react';
import { X, Printer, Download, Mail, MapPin, CheckCircle2, ExternalLink, Terminal } from 'lucide-react';
import { experienceData } from '../../data/experienceData';
import { skillsCategories } from '../../data/skillsData';
import { educationData } from '../../data/educationData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose} id="cv-modal">
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Actions */}
        <div className="cv-modal-header no-print">
          <div className="cv-modal-title">
            <span className="cv-badge font-mono">Curriculum Vitae</span>
            <h3 className="font-display">SALMA EL MOUNTASSIR</h3>
          </div>
          <div className="cv-actions">
            <button onClick={handlePrint} className="btn-icon" title="Print / Save PDF" id="cv-print-btn">
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>
            <button onClick={onClose} className="btn-close" title="Close modal" id="cv-close-btn">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="cv-document">
          {/* Header */}
          <header className="cv-doc-header">
            <div>
              <h1 className="cv-name font-display">SALMA EL MOUNTASSIR</h1>
              <h2 className="cv-title font-mono text-accent">JUNIOR FULL-STACK DEVELOPER & IT SYSTEMS SPECIALIST</h2>
              <p className="cv-positioning">
                "Building practical web applications and solving real-world IT problems." Specializing in modern web applications, backend APIs, scalable microservices, and internal IT asset management tooling.
              </p>
            </div>
            <div className="cv-contact-box font-mono">
              <div className="cv-contact-item">
                <Mail size={13} className="text-accent" />
                <a href="mailto:elmountassirsalma12@gmail.com">elmountassirsalma12@gmail.com</a>
              </div>
              <div className="cv-contact-item">
                <MapPin size={13} className="text-accent" />
                <span>Fès, Morocco</span>
              </div>
              <div className="cv-contact-item">
                <Terminal size={13} className="text-accent" />
                <span>React · Django · Laravel · Node · Python · GLPI</span>
              </div>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* Section: Professional Summary */}
          <section className="cv-section">
            <h3 className="cv-section-title font-mono">01. PROFESSIONAL PROFILE</h3>
            <p className="cv-text">
              Passionate Junior Full-Stack Developer with hands-on experience spanning frontend component architectures, backend RESTful APIs, and relational/NoSQL databases. Proven ability to build real internal tools — including an IT asset management platform that grew from a simple phone tracker into a full system covering equipment, employees, and assignments — with additional exposure to GLPI for IT asset inventory concepts.
            </p>
          </section>

          {/* Section: Work Experience */}
          <section className="cv-section">
            <h3 className="cv-section-title font-mono">02. PROFESSIONAL EXPERIENCE</h3>
            <div className="cv-timeline">
              {experienceData.map((exp) => (
                <div key={exp.id} className="cv-timeline-item">
                  <div className="cv-timeline-header">
                    <div>
                      <h4 className="cv-job-title font-display">{exp.role}</h4>
                      <h5 className="cv-company font-mono text-accent">{exp.company}</h5>
                    </div>
                    <span className="cv-period font-mono">{exp.period}</span>
                  </div>
                  <ul className="cv-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={13} className="cv-check-icon text-accent" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="cv-tags">
                    {exp.prominentTags.map((tag, idx) => (
                      <span key={idx} className="cv-tag font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Key Projects */}
          <section className="cv-section">
            <h3 className="cv-section-title font-mono">03. FEATURED TECHNICAL PROJECTS</h3>
            <div className="cv-projects-grid">
              <div className="cv-project-card">
                <h4 className="cv-proj-name font-display">Gestion des Téléphones — CEMA IT Asset Platform</h4>
                <p className="cv-proj-tech font-mono text-accent">React.js · Vite · Django REST Framework · MySQL</p>
                <p className="cv-proj-desc">Internal platform that grew from a phone-tracking tool into full IT asset management: computers, phones, SIM cards, rooms and machines, employee assignments with history, and renewal alerts.</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name font-display">Gestion Client — Freelance Client Management</h4>
                <p className="cv-proj-tech font-mono text-accent">React.js · Laravel · PHP · MySQL</p>
                <p className="cv-proj-desc">Active development of client relationship and revenue tracking portal with real-time dashboard analytics.</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name font-display">StockPro — Microservices Stock Management</h4>
                <p className="cv-proj-tech font-mono text-accent">React.js · Node.js · Express · MongoDB · JWT · Recharts</p>
                <p className="cv-proj-desc">Engineered high-throughput stock platform with centralized API Gateway and 6 independent microservices (Auth, Products, Suppliers, Movements, Dashboard).</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name font-display">HAJZ.ma — Reservation Platform</h4>
                <p className="cv-proj-tech font-mono text-accent">React.js · Redux Toolkit · Bootstrap · JavaScript</p>
                <p className="cv-proj-desc">Deterministic booking platform featuring responsive multi-step booking workflows, collision-prevention algorithms, and centralized Redux state.</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name font-display">E-Commerce Website — Full-Stack Storefront</h4>
                <p className="cv-proj-tech font-mono text-accent">React.js · Laravel · MySQL · REST API · Axios</p>
                <p className="cv-proj-desc">Robust online store with structured Laravel REST controllers, relational MySQL models, token authentication, and synchronized cart state.</p>
              </div>
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="cv-section">
            <h3 className="cv-section-title font-mono">04. TECHNICAL SKILLS & EXPERTISE</h3>
            <div className="cv-skills-grid">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="cv-skill-group">
                  <span className="cv-skill-cat font-mono text-accent">{cat.category}</span>
                  <p className="cv-skill-list">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section className="cv-section">
            <h3 className="cv-section-title font-mono">05. EDUCATION & FORMATION</h3>
            <div className="cv-edu-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="cv-edu-item">
                  <div className="cv-timeline-header">
                    <div>
                      <h4 className="cv-job-title font-display">{edu.degree} — {edu.field}</h4>
                      <h5 className="cv-company font-mono text-accent">{edu.institution}</h5>
                    </div>
                    <span className="cv-period font-mono">{edu.period}</span>
                  </div>
                  <p className="cv-edu-status font-mono">{edu.status}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .cv-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }
        .cv-modal-container {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-lg);
          position: relative;
        }
        .cv-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border);
          background: var(--bg-secondary);
        }
        .cv-modal-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cv-modal-title h3 {
          font-size: 1.05rem;
          font-weight: 800;
        }
        .cv-badge {
          background: var(--accent);
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .cv-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .btn-icon {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 5px 12px;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--accent);
          border-radius: var(--radius-xs);
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-icon:hover {
          background: var(--accent);
          color: #FFFFFF;
        }
        .btn-close {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-close:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
        .cv-document {
          padding: 2.5rem;
          overflow-y: auto;
          background: var(--bg-surface);
        }
        .cv-doc-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .cv-doc-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }
        .cv-name {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .cv-title {
          font-size: 0.78rem;
          font-weight: 700;
          margin-top: 0.25rem;
          letter-spacing: 0.05em;
        }
        .cv-positioning {
          font-size: 0.85rem;
          color: var(--text-secondary);
          max-width: 480px;
          margin-top: 0.5rem;
          line-height: 1.5;
        }
        .cv-contact-box {
          font-size: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }
        .cv-contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .cv-divider {
          margin: 1.5rem 0;
          border: none;
          height: 1px;
          background: var(--border);
        }
        .cv-section {
          margin-bottom: 2rem;
        }
        .cv-section-title {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }
        .cv-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .cv-timeline-item {
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 2px solid var(--accent);
        }
        .cv-timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .cv-job-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .cv-company {
          font-size: 0.82rem;
          font-weight: 600;
        }
        .cv-period {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .cv-responsibilities {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .cv-responsibilities li {
          font-size: 0.82rem;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          line-height: 1.4;
        }
        .cv-check-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .cv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.75rem;
        }
        .cv-tag {
          font-size: 0.68rem;
          font-weight: 500;
          padding: 2px 7px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: 2px;
        }
        .cv-projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .cv-projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .cv-project-card {
          background: var(--bg-secondary);
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }
        .cv-proj-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .cv-proj-tech {
          font-size: 0.72rem;
          font-weight: 600;
          margin: 0.25rem 0 0.5rem 0;
        }
        .cv-proj-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .cv-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        @media (min-width: 640px) {
          .cv-skills-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .cv-skill-group {
          background: var(--bg-secondary);
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }
        .cv-skill-cat {
          font-size: 0.72rem;
          font-weight: 700;
          display: block;
          margin-bottom: 0.25rem;
        }
        .cv-skill-list {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .cv-edu-item {
          padding-left: 1rem;
          border-left: 2px solid var(--accent);
          margin-bottom: 1rem;
        }
        .cv-edu-status {
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 600;
          margin-top: 0.25rem;
        }

        /* Print styling */
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .cv-modal-overlay {
            position: static !important;
            padding: 0 !important;
            background: none !important;
          }
          .cv-modal-container {
            border: none !important;
            box-shadow: none !important;
            max-width: 100% !important;
            max-height: none !important;
          }
          .cv-document {
            padding: 0 !important;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
