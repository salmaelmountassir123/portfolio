import React from 'react';
import { ExternalLink, CheckCircle, ArrowUpRight, Layers, Sparkles, Hammer } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import SectionHeader from '../components/ui/SectionHeader';
import { projectsData } from '../data/projectsData';
import StockProVisual from './projects/StockProVisual';
import HajzVisual from './projects/HajzVisual';
import ECommerceVisual from './projects/ECommerceVisual';
import CemaGallery from './projects/CemaGallery';
import GestionClientVisual from './projects/GestionClientVisual';

export default function Projects() {
  const getVisualComponent = (id) => {
    switch (id) {
      case 'stockpro':
        return <StockProVisual />;
      case 'hajz':
        return <HajzVisual />;
      case 'ecommerce':
        return <ECommerceVisual />;
      case 'cema':
        return <CemaGallery />;
      case 'gestion-client':
        return <GestionClientVisual />;
      default:
        return null;
    }
  };

  return (
    <section className="section-wrapper projects-section" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="PORTFOLIO HIGHLIGHTS"
          number="SELECTED WORK"
          title="SELECTED WORK"
          subtitle="Projects where code meets real-world problems. Engineered with architectural precision, clean code, and operational durability."
        />

        {/* Alternating Large Editorial Case Studies */}
        <div className="case-studies-stack">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1; // 0: Right visual, 1: Left visual, 2: Right visual, 3: Left visual

            return (
              <article
                key={project.id}
                className={`case-study-card ${isEven ? 'layout-reverse' : ''}`}
                id={`project-${project.id}`}
              >
                {/* Text Content Column */}
                <div className="case-study-info">
                  <div className="case-study-meta">
                    <span className="case-number font-mono">{project.number}</span>
                    <span className="case-category font-mono">{project.category}</span>
                    {project.statusLabel && (
                      <span className="case-status-pill font-mono">
                        <Hammer size={11} />
                        <span>{project.statusLabel}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="case-title font-display">{project.name}</h3>
                  <p className="case-tagline font-serif italic">{project.tagline}</p>
                  <p className="case-description">{project.description}</p>

                  {/* Highlight Callout */}
                  <div className="case-highlight-badge font-mono">
                    <Sparkles size={13} className="text-highlight" />
                    <span>{project.highlight}</span>
                  </div>

                  {/* Technical Achievements */}
                  <div className="case-achievements">
                    <h4 className="achievements-heading font-mono">KEY TECHNICAL ACHIEVEMENTS:</h4>
                    <ul className="achievements-list">
                      {project.technicalHighlights.map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle size={13} className="achievement-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="case-tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`tech-badge ${tech === 'Django REST Framework' || tech === 'React.js' ? 'tech-badge-glpi' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="case-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      id={`github-${project.id}`}
                    >
                      <GithubIcon size={14} />
                      <span>SOURCE CODE</span>
                    </a>
                    <a
                      href={project.demo}
                      className="btn btn-primary btn-sm"
                      id={`demo-${project.id}`}
                    >
                      <span>INTERACTIVE DEMO</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Interactive Visual Preview Column */}
                <div className="case-study-visual">
                  {getVisualComponent(project.id)}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-primary);
          position: relative;
        }
        .case-studies-stack {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        @media (min-width: 768px) {
          .case-studies-stack {
            gap: 7.5rem;
          }
        }
        .case-study-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          padding-bottom: 5rem;
          border-bottom: 1px solid var(--border);
        }
        .case-study-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        @media (min-width: 1024px) {
          .case-study-card {
            grid-template-columns: 1.05fr 1fr;
            gap: 4rem;
          }
          .case-study-card.layout-reverse {
            grid-template-columns: 1fr 1.05fr;
          }
          .case-study-card.layout-reverse .case-study-info {
            order: 2;
          }
          .case-study-card.layout-reverse .case-study-visual {
            order: 1;
          }
        }
        .case-study-info {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .case-study-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .case-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-highlight);
          letter-spacing: -0.02em;
        }
        .case-category {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .case-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          background: rgba(180, 83, 9, 0.12);
          color: #B45309;
          border: 1px solid rgba(180, 83, 9, 0.35);
          padding: 2px 8px;
          border-radius: var(--radius-xs);
        }
        .case-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          line-height: 1.1;
        }
        .case-tagline {
          font-size: 1.15rem;
          color: var(--text-highlight);
          line-height: 1.4;
        }
        .case-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .case-highlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 6px 12px;
          background: var(--bg-surface);
          border: 1px solid var(--border-accent);
          border-left: 3px solid var(--accent);
          border-radius: var(--radius-xs);
          font-size: 0.75rem;
          color: var(--text-primary);
          width: fit-content;
        }
        .case-achievements {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1rem 1.25rem;
        }
        .achievements-heading {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 0.6rem;
        }
        .achievements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .achievements-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
        .achievement-icon {
          color: var(--accent-light);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .case-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .case-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .case-study-visual {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
