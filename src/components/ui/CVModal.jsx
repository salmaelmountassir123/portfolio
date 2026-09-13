import React from 'react';
import { X, Printer, Download, Mail, MapPin, CheckCircle, ExternalLink, Terminal } from 'lucide-react';
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
            <span className="cv-badge">Curriculum Vitae</span>
            <h3>SALMA EL MOUNTASSIR</h3>
          </div>
          <div className="cv-actions">
            <button onClick={handlePrint} className="btn-icon" title="Print / Save PDF" id="cv-print-btn">
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>
            <button onClick={onClose} className="btn-close" title="Close modal" id="cv-close-btn">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="cv-document">
          {/* Header */}
          <header className="cv-doc-header">
            <div>
              <h1 className="cv-name">SALMA EL MOUNTASSIR</h1>
              <h2 className="cv-title">JUNIOR FULL-STACK DEVELOPER & IT SYSTEMS SPECIALIST</h2>
              <p className="cv-positioning">
                "Junior by experience, ambitious by technical depth." Specializing in modern web applications, backend APIs, scalable microservices, and internal IT asset management tooling.
              </p>
            </div>
            <div className="cv-contact-box">
              <div className="cv-contact-item">
                <Mail size={14} />
                <a href="mailto:elmountassirsalma12@gmail.com">elmountassirsalma12@gmail.com</a>
              </div>
              <div className="cv-contact-item">
                <MapPin size={14} />
                <span>Morocco</span>
              </div>
              <div className="cv-contact-item">
                <Terminal size={14} />
                <span>React · Django · Laravel · Node · Python · GLPI (basics)</span>
              </div>
            </div>
          </header>

          <hr className="cv-divider" />

          {/* Section: Professional Summary */}
          <section className="cv-section">
            <h3 className="cv-section-title">01. PROFESSIONAL PROFILE</h3>
            <p className="cv-text">
              Passionate Junior Full-Stack Developer with hands-on experience spanning frontend component architectures, backend RESTful APIs, and relational/NoSQL databases. Proven ability to build real internal tools — including an IT asset management platform that grew from a simple phone tracker into a full system covering equipment, employees, and assignments — with additional exposure to GLPI for IT asset inventory concepts.
            </p>
          </section>

          {/* Section: Work Experience */}
          <section className="cv-section">
            <h3 className="cv-section-title">02. PROFESSIONAL EXPERIENCE</h3>
            <div className="cv-timeline">
              {experienceData.map((exp) => (
                <div key={exp.id} className="cv-timeline-item">
                  <div className="cv-timeline-header">
                    <div>
                      <h4 className="cv-job-title">{exp.role}</h4>
                      <h5 className="cv-company">{exp.company}</h5>
                    </div>
                    <span className="cv-period">{exp.period}</span>
                  </div>
                  <ul className="cv-responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle size={12} className="cv-check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="cv-tags">
                    {exp.prominentTags.map((tag, idx) => (
                      <span key={idx} className="cv-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Key Projects */}
          <section className="cv-section">
            <h3 className="cv-section-title">03. FEATURED TECHNICAL PROJECTS</h3>
            <div className="cv-projects-grid">
              <div className="cv-project-card">
                <h4 className="cv-proj-name">STOCKPRO — Microservices Stock Management</h4>
                <p className="cv-proj-tech">React.js · Node.js · Express · MongoDB · JWT · Recharts · Vite</p>
                <p className="cv-proj-desc">Engineered high-throughput stock platform with centralized API Gateway and 6 independent microservices (Auth, Products, Suppliers, Movements, Dashboard).</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name">PARC INFORMATIQUE — CEMA IT Asset Management</h4>
                <p className="cv-proj-tech">React.js · Vite · Django REST Framework · MySQL</p>
                <p className="cv-proj-desc">Internal platform that grew from a phone-tracking tool into full IT asset management: computers, phones, SIM cards, rooms and machines, employee assignments with history, and renewal alerts.</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name">HAJZ — Reservation Management Platform</h4>
                <p className="cv-proj-tech">React.js · Redux Toolkit · CSS3 · JavaScript ES6+</p>
                <p className="cv-proj-desc">Deterministic booking platform featuring responsive multi-step booking workflows, collision-prevention algorithms, and centralized Redux state.</p>
              </div>
              <div className="cv-project-card">
                <h4 className="cv-proj-name">E-COMMERCE — Full-Stack Web Platform</h4>
                <p className="cv-proj-tech">React.js · Laravel · MySQL · REST API · Axios</p>
                <p className="cv-proj-desc">Robust e-commerce store with structured Laravel REST controllers, relational MySQL models, token authentication, and synchronized cart state.</p>
              </div>
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="cv-section">
            <h3 className="cv-section-title">04. TECHNICAL SKILLS & EXPERTISE</h3>
            <div className="cv-skills-grid">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="cv-skill-group">
                  <span className="cv-skill-cat">{cat.category}</span>
                  <p className="cv-skill-list">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section className="cv-section">
            <h3 className="cv-section-title">05. EDUCATION & FORMATION</h3>
            <div className="cv-edu-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="cv-edu-item">
                  <div className="cv-timeline-header">
                    <div>
                      <h4 className="cv-job-title">{edu.degree} — {edu.field}</h4>
                      <h5 className="cv-company">{edu.institution}</h5>
                    </div>
                    <span className="cv-period">{edu.period}</span>
                  </div>
                  <p className="cv-edu-status">{edu.status}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .cv-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(13, 11, 12, 0.85);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }
        .cv-modal-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
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
          background: var(--bg-surface);
        }
        .cv-modal-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cv-modal-title h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }
        .cv-badge {
          background: var(--burgundy);
          color: #F2E9E4;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 2px 8px;
          border-radius: 2px;
          text-transform: uppercase;
        }
        .cv-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .btn-icon {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 6px 12px;
          background: var(--accent-soft);
          border: 1px solid var(--border-accent);
          color: var(--text-primary);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-icon:hover {
          background: var(--burgundy);
          color: #F2E9E4;
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
          background: var(--accent-soft);
        }
        .cv-document {
          padding: 2.5rem;
          overflow-y: auto;
          background: var(--bg-primary);
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
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }
        .cv-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-highlight);
          letter-spacing: 0.1em;
          margin-top: 0.25rem;
        }
        .cv-positioning {
          font-size: 0.85rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-top: 0.5rem;
          line-height: 1.5;
        }
        .cv-contact-box {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          color: var(--text-secondary);
          background: var(--bg-card);
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
          margin: 1.75rem 0;
          border: none;
          height: 1px;
          background: var(--border-accent);
        }
        .cv-section {
          margin-bottom: 2rem;
        }
        .cv-section-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          color: var(--text-highlight);
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
          border-left: 2px solid var(--burgundy);
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
          font-weight: 600;
          color: var(--text-primary);
        }
        .cv-company {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--text-highlight);
        }
        .cv-period {
          font-family: var(--font-mono);
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
          color: var(--accent-light);
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
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 2px 6px;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--badge-text);
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
          background: var(--bg-card);
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }
        .cv-proj-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .cv-proj-tech {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-highlight);
          margin: 0.25rem 0 0.5rem 0;
        }
        .cv-proj-desc {
          font-size: 0.78rem;
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
          background: var(--bg-card);
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }
        .cv-skill-cat {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-highlight);
          display: block;
          margin-bottom: 0.25rem;
          font-weight: 600;
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
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-highlight);
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
