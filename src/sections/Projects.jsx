import React, { useState } from 'react';
import { ArrowUpRight, Plus, ExternalLink, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { projectsData } from '../data/projectsData';
import ProjectDetailShowcase from './ProjectDetailShowcase';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState('cema');

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    const showcaseEl = document.getElementById('project-showcase');
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrapper projects-section" id="projects">
      <div className="container">
        {/* Section Header with "View All Projects ->" link on the right */}
        <SectionHeader
          eyebrow="FEATURED PROJECTS"
          title="My Projects"
          subtitle="Real-world applications built with modern technologies. Each project helped me grow and improve my skills."
          rightElement={
            <a href="#project-showcase" className="view-all-link">
              <span>View All Projects</span>
              <ArrowUpRight size={16} />
            </a>
          }
        />

        {/* 5 Project Preview Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card ${selectedProjectId === project.id ? 'active' : ''}`}
              onClick={() => handleSelectProject(project.id)}
            >
              {/* Image Preview Frame */}
              <div className="project-card-image-wrap">
                <img
                  src={project.previewImage}
                  alt={`${project.name} preview`}
                  className="project-card-img"
                  loading="lazy"
                />
                <div className="project-card-num-badge font-mono">
                  {project.number}
                </div>
              </div>

              {/* Card Meta Body */}
              <div className="project-card-body">
                <div className="project-card-info">
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-category">{project.company || project.category}</p>
                </div>

                {/* Tech Badges */}
                <div className="project-card-tags">
                  {project.techBadges.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="project-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Circular Action Button */}
                <button
                  className="project-action-circle"
                  aria-label={`Inspect ${project.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectProject(project.id);
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Interactive Project Case-Study Showcase */}
        <div className="project-showcase-container" id="project-showcase">
          <ProjectDetailShowcase
            activeProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
          />
        </div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-primary);
          position: relative;
        }
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent);
          transition: var(--transition-fast);
        }
        .view-all-link:hover {
          color: var(--accent-hover);
          transform: translateX(2px);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4.5rem;
        }
        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1.25rem;
          }
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .project-card.active {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px var(--accent-soft), var(--shadow-md);
        }
        .project-card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-secondary);
          overflow: hidden;
        }
        .project-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .project-card:hover .project-card-img {
          transform: scale(1.04);
        }
        .project-card-num-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: var(--bg-glass);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-primary);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .project-card-body {
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          position: relative;
        }
        .project-card-info {
          margin-bottom: 0.85rem;
        }
        .project-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }
        .project-card-category {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .project-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          padding-right: 2.2rem;
        }
        .project-tag-pill {
          font-size: 0.68rem;
          color: var(--accent);
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          padding: 2px 6px;
          border-radius: var(--radius-xs);
          font-weight: 500;
        }
        .project-action-circle {
          position: absolute;
          bottom: 1.1rem;
          right: 1.1rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          box-shadow: 0 2px 6px rgba(0, 102, 255, 0.3);
        }
        .project-card:hover .project-action-circle {
          background: var(--accent-hover);
          transform: scale(1.1);
        }
        .project-showcase-container {
          padding-top: 1rem;
        }
      `}</style>
    </section>
  );
}
