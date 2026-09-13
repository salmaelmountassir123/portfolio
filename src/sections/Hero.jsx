import React from 'react';
import { ArrowDown, FileDown, Terminal, Sparkles, Layers, Shield } from 'lucide-react';
import HeroArchitectureVisual from './HeroArchitectureVisual';

export default function Hero({ onOpenCV }) {
  const techStack = [
    'React.js',
    'Django',
    'Laravel',
    'Node.js',
    'Python',
    'WordPress',
    'GLPI'
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Background ambient lighting */}
      <div className="hero-ambient-glow"></div>

      <div className="container hero-container">
        {/* Left / Editorial Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="font-mono text-highlight">FULL-STACK DEVELOPER · IT & WEB</span>
          </div>

          <h1 className="hero-title">
            I build digital solutions <br />
            with <span className="text-gradient-wine">code</span>, <span className="font-serif italic font-normal">architecture</span> <br />
            and <span className="text-wine">purpose</span>.
          </h1>

          <p className="hero-description">
            Junior Full-Stack Developer passionate about modern web applications, APIs, scalable architectures and IT systems. Junior by experience, ambitious by technical depth.
          </p>

          {/* Technology Line */}
          <div className="hero-tech-strip">
            <span className="font-mono tech-strip-label">CORE STACK:</span>
            <div className="tech-strip-pills">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`tech-pill font-mono ${tech === 'GLPI' ? 'tech-pill-glpi' : ''} ${tech === 'Python' || tech === 'WordPress' ? 'tech-pill-highlight' : ''}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary" id="hero-explore-btn">
              <span>EXPLORE MY WORK</span>
              <ArrowDown size={15} />
            </a>
            <button onClick={onOpenCV} className="btn btn-secondary" id="hero-cv-btn">
              <FileDown size={15} />
              <span>DOWNLOAD CV</span>
            </button>
          </div>

          {/* Quick Stats / Credibility Line */}
          <div className="hero-credibility-bar font-mono">
            <div className="credibility-item">
              <span className="credibility-dot"></span>
              <span>Full-Stack Development</span>
            </div>
            <div className="credibility-divider">/</div>
            <div className="credibility-item">
              <span className="credibility-dot"></span>
              <span>Backend & Microservices</span>
            </div>
            <div className="credibility-divider">/</div>
            <div className="credibility-item">
              <span className="credibility-dot"></span>
              <span>GLPI & IT Administration</span>
            </div>
          </div>
        </div>

        {/* Right / Visual Architectural Engine */}
        <div className="hero-visual-wrapper">
          <HeroArchitectureVisual />
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 60px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-ambient-glow {
          position: absolute;
          top: 15%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
          filter: blur(40px);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.95fr;
            gap: 4rem;
          }
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .eyebrow-line {
          display: inline-block;
          width: 24px;
          height: 1px;
          background-color: var(--accent);
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.2vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .font-normal {
          font-weight: 400;
        }
        .italic {
          font-style: italic;
        }
        .hero-description {
          font-size: clamp(1rem, 1.3vw, 1.15rem);
          color: var(--text-secondary);
          max-width: 580px;
          line-height: 1.65;
        }
        .hero-tech-strip {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        @media (min-width: 640px) {
          .hero-tech-strip {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }
        }
        .tech-strip-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          white-space: nowrap;
        }
        .tech-strip-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .tech-pill {
          font-size: 0.72rem;
          padding: 3px 8px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          transition: var(--transition-fast);
        }
        .tech-pill:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          background: var(--accent-soft);
        }
        .tech-pill-glpi {
          background: rgba(110, 36, 53, 0.25);
          border-color: var(--accent);
          color: var(--text-highlight);
          font-weight: 600;
        }
        .tech-pill-highlight {
          border-color: var(--border-accent);
          color: var(--text-primary);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .hero-credibility-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 1.5rem;
        }
        .credibility-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .credibility-dot {
          width: 5px;
          height: 5px;
          background: var(--accent);
          border-radius: 50%;
        }
        .credibility-divider {
          color: var(--border-strong);
        }
        .hero-visual-wrapper {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
