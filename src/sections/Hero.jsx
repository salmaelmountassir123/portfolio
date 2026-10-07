import React from 'react';
import { ArrowRight, Download, Code, Layers, Server, Database, Shield, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenCV }) {
  const techStack = [
    { name: 'React', icon: '⚛️', color: '#00D8FF' },
    { name: 'Django', icon: 'dp', color: '#092E20', isCustom: true },
    { name: 'Laravel', icon: '🔺', color: '#FF2D20' },
    { name: 'Node.js', icon: '🟩', color: '#5FA04E' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'MySQL', icon: '🐬', color: '#00758F' },
    { name: 'GLPI', icon: '🛡️', color: '#0066FF' }
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Soft Ambient Light Glow */}
      <div className="hero-ambient-glow"></div>

      <div className="container hero-container">
        {/* Left Column: Narrative Content */}
        <div className="hero-content">
          <span className="hero-greeting font-mono">Hi, I'm</span>

          <h1 className="hero-name font-display">
            Salma <span className="text-accent">El Mountassir</span>
          </h1>

          <h2 className="hero-role font-heading">
            Junior Full-Stack Developer
          </h2>

          <p className="hero-intro">
            Building practical web applications and solving real-world IT problems.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
              <span>View My Projects</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
              <span>Contact Me</span>
            </a>

            <button onClick={onOpenCV} className="btn btn-secondary" id="hero-download-cv-btn">
              <Download size={15} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Core Tech Stack Strip */}
          <div className="hero-tech-strip">
            <div className="tech-strip-items">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-strip-item">
                  <span className="tech-item-icon">{tech.icon}</span>
                  <span className="tech-item-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Developer Scene Visual */}
        <div className="hero-visual-col">
          <div className="hero-visual-card">
            {/* Ambient Back Glow */}
            <div className="visual-card-glow"></div>

            {/* Laptop Scene Frame */}
            <div className="laptop-scene-frame">
              <img
                src="/assets/hero-laptop.jpg"
                alt="Developer workspace with coding laptop and tools"
                className="hero-laptop-img"
              />

              {/* Floating Code Badge */}
              <div className="floating-badge badge-code animate-float">
                <Code size={16} className="text-accent" />
              </div>

              {/* Floating Pipeline Badge */}
              <div className="floating-badge badge-pipeline animate-float-delayed">
                <div className="pipeline-dot-row">
                  <span className="step-dot blue"></span>
                  <span className="step-text">Build</span>
                </div>
                <div className="pipeline-dot-row">
                  <span className="step-dot blue"></span>
                  <span className="step-text">Deploy</span>
                </div>
                <div className="pipeline-dot-row">
                  <span className="step-dot blue"></span>
                  <span className="step-text">Monitor</span>
                </div>
              </div>

              {/* Floating Accent Tag */}
              <div className="floating-tag-impact font-mono">
                <span>Ideas</span>
                <span className="arrow-sep">→</span>
                <span>Code</span>
                <span className="arrow-sep">→</span>
                <span className="text-accent font-semibold">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: calc(100vh - 72px);
          padding-top: 110px;
          padding-bottom: 70px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-ambient-glow {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
          filter: blur(50px);
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
            grid-template-columns: 1.1fr 1fr;
            gap: 4rem;
          }
        }
        .hero-content {
          display: flex;
          flex-direction: column;
        }
        .hero-greeting {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .hero-name {
          font-size: clamp(2.6rem, 5.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }
        .hero-role {
          font-size: clamp(1.25rem, 2.2vw, 1.65rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.1rem;
        }
        .hero-intro {
          font-size: clamp(1.05rem, 1.4vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 2rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 3rem;
        }
        .hero-tech-strip {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .tech-strip-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.25rem;
        }
        .tech-strip-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .tech-strip-item:hover {
          color: var(--accent);
          transform: translateY(-1px);
        }
        .tech-item-icon {
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-visual-col {
          width: 100%;
          position: relative;
        }
        .hero-visual-card {
          position: relative;
          border-radius: var(--radius-lg);
          padding: 0.5rem;
        }
        .visual-card-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          border-radius: var(--radius-xl);
          filter: blur(20px);
          z-index: 0;
          opacity: 0.7;
        }
        .laptop-scene-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          z-index: 1;
        }
        .hero-laptop-img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 4/3;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .hero-laptop-img:hover {
          transform: scale(1.02);
        }
        .floating-badge {
          position: absolute;
          background: var(--bg-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--border-accent);
          box-shadow: var(--shadow-md);
          border-radius: var(--radius-md);
          z-index: 2;
        }
        .badge-code {
          top: 15px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }
        .badge-pipeline {
          bottom: 25px;
          left: 20px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pipeline-dot-row {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .step-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
        }
        .step-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .floating-tag-impact {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          font-size: 0.72rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-sm);
          z-index: 2;
        }
        .arrow-sep {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
