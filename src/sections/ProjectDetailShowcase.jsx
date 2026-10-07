import React, { useState } from 'react';
import {
  Check,
  Building,
  Briefcase,
  ArrowRight,
  Maximize2,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FolderKanban
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailShowcase({ activeProjectId = 'cema', onSelectProject }) {
  const [activeNavSection, setActiveNavSection] = useState('Overview');
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = projectsData.find((p) => p.id === activeProjectId) || projectsData[0];
  const thumbnails = project.thumbnails || [{ id: 'main', image: project.previewImage, label: project.name }];
  const currentImage = thumbnails[activeThumbIndex]?.image || project.previewImage;

  const sidebarNavItems = [
    'Overview',
    'Context',
    'My Role',
    'Technologies',
    'Features',
    'Screenshots',
    'Challenges',
    'What I Learned'
  ];

  const handleNextProject = () => {
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    onSelectProject(projectsData[nextIndex].id);
    setActiveThumbIndex(0);
  };

  const handlePrevProject = () => {
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    onSelectProject(projectsData[prevIndex].id);
    setActiveThumbIndex(0);
  };

  return (
    <div className="project-detail-panel">
      {/* Project Switcher Bar */}
      <div className="showcase-topbar">
        <div className="showcase-tabs">
          {projectsData.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                onSelectProject(p.id);
                setActiveThumbIndex(0);
              }}
              className={`showcase-tab-btn ${p.id === project.id ? 'active' : ''}`}
            >
              <span className="tab-num font-mono">{p.number}</span>
              <span className="tab-name">{p.shortName || p.name}</span>
            </button>
          ))}
        </div>

        <div className="showcase-nav-arrows">
          <button onClick={handlePrevProject} className="nav-arrow-btn" aria-label="Previous project">
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleNextProject} className="nav-arrow-btn" aria-label="Next project">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main 3-Column / 2-Column Responsive Layout */}
      <div className="showcase-content-grid">
        {/* Left Sidebar: Section Navigation Tree */}
        <aside className="showcase-sidebar">
          <div className="sidebar-nav-tree">
            {sidebarNavItems.map((item) => {
              const isActive = activeNavSection === item;
              return (
                <button
                  key={item}
                  onClick={() => setActiveNavSection(item)}
                  className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                >
                  <span className="sidebar-nav-dot"></span>
                  <span className="sidebar-nav-text">{item}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Center: Structured Case Study Information */}
        <div className="showcase-main-info">
          <div className="project-heading-block">
            <span className="project-number-tag font-mono">PROJECT {project.number}</span>
            <h3 className="project-title font-display">{project.name}</h3>

            {/* Badges */}
            <div className="project-badge-row">
              <span className="meta-badge company-badge">
                <Building size={13} />
                <span>{project.company}</span>
              </span>
              <span className="meta-badge exp-badge">
                <Briefcase size={13} />
                <span>{project.badgeType || 'Full-Stack Project'}</span>
              </span>
            </div>
          </div>

          {/* Dynamic Content based on selected Sidebar Item */}
          <div className="project-dynamic-section">
            {activeNavSection === 'Overview' && (
              <p className="project-desc-paragraph">{project.description}</p>
            )}
            {activeNavSection === 'Context' && (
              <p className="project-desc-paragraph">{project.sections?.context || project.description}</p>
            )}
            {activeNavSection === 'My Role' && (
              <p className="project-desc-paragraph">{project.sections?.role || project.tagline}</p>
            )}
            {activeNavSection === 'Technologies' && (
              <p className="project-desc-paragraph">{project.sections?.technologies || project.technologies.join(', ')}</p>
            )}
            {activeNavSection === 'Features' && (
              <p className="project-desc-paragraph">{project.sections?.features || "Structured module features and role-based views."}</p>
            )}
            {activeNavSection === 'Challenges' && (
              <p className="project-desc-paragraph">{project.sections?.challenges || "Handling data normalization and asynchronous state integrity."}</p>
            )}
            {activeNavSection === 'What I Learned' && (
              <p className="project-desc-paragraph">{project.sections?.whatILearned || "End-to-end full-stack development and real operational workflows."}</p>
            )}
            {activeNavSection === 'Screenshots' && (
              <p className="project-desc-paragraph">Interactive screenshots and interface views shown on the right panel.</p>
            )}
          </div>

          {/* Technologies Chips */}
          <div className="project-tech-group">
            <span className="group-label font-mono">Technologies</span>
            <div className="tech-chips-row">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features 2-Column Checklist */}
          <div className="project-features-group">
            <span className="group-label font-mono">Key Features</span>
            <div className="features-checklist-grid">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="feature-check-item">
                  <span className="feature-check-icon">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="feature-check-text">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="project-cta-row">
            <button
              onClick={() => setLightboxOpen(true)}
              className="btn btn-primary"
              id="view-screenshots-btn"
            >
              <span>View Screenshots</span>
              <ArrowRight size={15} />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>GitHub Source</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Right: Large Screenshot Viewport & Thumbnails */}
        <div className="showcase-visual-col">
          <div className="viewport-window">
            <div className="viewport-topbar">
              <div className="window-dots">
                <span className="dot close"></span>
                <span className="dot min"></span>
                <span className="dot max"></span>
              </div>
              <span className="window-title font-mono">{project.shortName || project.name}</span>
              <button
                onClick={() => setLightboxOpen(true)}
                className="zoom-btn"
                title="Enlarge screenshot"
              >
                <Maximize2 size={13} />
              </button>
            </div>

            <div className="viewport-screen" onClick={() => setLightboxOpen(true)}>
              <img
                src={currentImage}
                alt={`${project.name} preview`}
                className="main-screen-img"
              />
            </div>
          </div>

          {/* 4 Thumbnails Below */}
          {thumbnails.length > 1 && (
            <div className="showcase-thumbnails-row">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={thumb.id || idx}
                  onClick={() => setActiveThumbIndex(idx)}
                  className={`thumb-card ${activeThumbIndex === idx ? 'active' : ''}`}
                >
                  <img src={thumb.image} alt={thumb.label} className="thumb-img" />
                </button>
              ))}
            </div>
          )}

          {/* Pagination Indicators */}
          {thumbnails.length > 1 && (
            <div className="thumb-dots-row">
              {thumbnails.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setActiveThumbIndex(idx)}
                  className={`pagination-dot ${activeThumbIndex === idx ? 'active' : ''}`}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
          <img
            src={currentImage}
            alt={`${project.name} enlarged view`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .project-detail-panel {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          padding: 1.5rem;
        }
        @media (min-width: 768px) {
          .project-detail-panel {
            padding: 2.25rem;
          }
        }
        .showcase-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .showcase-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .showcase-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .showcase-tab-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        .showcase-tab-btn.active {
          background: var(--accent);
          color: #FFFFFF;
          border-color: var(--accent);
          box-shadow: 0 2px 8px rgba(0, 102, 255, 0.25);
        }
        .tab-num {
          font-size: 0.72rem;
          opacity: 0.85;
        }
        .showcase-nav-arrows {
          display: flex;
          gap: 0.4rem;
        }
        .nav-arrow-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .nav-arrow-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .showcase-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 860px) {
          .showcase-content-grid {
            grid-template-columns: 160px 1.15fr 1.15fr;
            gap: 2.5rem;
          }
        }
        .showcase-sidebar {
          display: none;
          position: relative;
        }
        @media (min-width: 860px) {
          .showcase-sidebar {
            display: block;
            border-right: 1px solid var(--border);
            padding-right: 1.5rem;
          }
        }
        .sidebar-nav-tree {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          position: relative;
        }
        .sidebar-nav-tree::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: var(--border);
          z-index: 0;
        }
        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          padding: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
          position: relative;
          z-index: 1;
          text-align: left;
        }
        .sidebar-nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-strong);
          transition: var(--transition-fast);
        }
        .sidebar-nav-item:hover {
          color: var(--text-primary);
        }
        .sidebar-nav-item:hover .sidebar-nav-dot {
          border-color: var(--accent);
        }
        .sidebar-nav-item.active {
          color: var(--accent);
          font-weight: 700;
        }
        .sidebar-nav-item.active .sidebar-nav-dot {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 8px rgba(0, 102, 255, 0.4);
        }
        .showcase-main-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .project-number-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.35rem;
        }
        .project-title {
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 0.6rem;
        }
        .project-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 3px 8px;
          border-radius: var(--radius-xs);
          font-size: 0.75rem;
          font-weight: 600;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }
        .company-badge {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--badge-bg);
        }
        .project-dynamic-section {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
        }
        .project-desc-paragraph {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .group-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.5rem;
        }
        .tech-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .tech-chip {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          padding: 3px 8px;
          border-radius: var(--radius-xs);
        }
        .features-checklist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem 1rem;
        }
        @media (min-width: 500px) {
          .features-checklist-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .feature-check-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .feature-check-icon {
          color: var(--accent);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .feature-check-text {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .project-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .showcase-visual-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .viewport-window {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .viewport-topbar {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          padding: 0.5rem 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .window-dots {
          display: flex;
          gap: 5px;
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .dot.close { background: #EF4444; }
        .dot.min { background: #F59E0B; }
        .dot.max { background: #10B981; }
        .window-title {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .zoom-btn {
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .zoom-btn:hover {
          color: var(--accent);
        }
        .viewport-screen {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-primary);
          overflow: hidden;
          cursor: zoom-in;
          position: relative;
        }
        .main-screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .viewport-screen:hover .main-screen-img {
          transform: scale(1.02);
        }
        .showcase-thumbnails-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.6rem;
        }
        .thumb-card {
          aspect-ratio: 16/10;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          overflow: hidden;
          padding: 0;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .thumb-card:hover {
          border-color: var(--accent);
        }
        .thumb-card.active {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px var(--accent);
        }
        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .thumb-dots-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 0.25rem;
        }
        .pagination-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--border-strong);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .pagination-dot.active {
          background: var(--accent);
          width: 18px;
          border-radius: 4px;
        }
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
        }
        .lightbox-image {
          max-width: 92vw;
          max-height: 88vh;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: default;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
