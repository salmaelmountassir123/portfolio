import React from 'react';
import { Sparkles, Quote, Check, Code2, Server, Database, ShieldCheck, Globe, Wrench } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

export default function About() {
  return (
    <section className="section-wrapper about-section" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="ABOUT ME"
          title="More Than Just Code."
          subtitle="Combining full-stack software development with real IT systems administration."
        />

        {/* Main 2-Column Editorial Grid matching Reference */}
        <div className="about-editorial-grid">
          {/* Left Column: Narrative, Quote, Signature */}
          <div className="about-text-col">
            <p className="about-lead-text">
              I'm a junior full-stack developer with a passion for building modern web applications and working with IT systems. My journey combines development skills with practical experience in IT support and network environments.
            </p>

            {/* Featured Quote Card */}
            <div className="about-quote-box">
              <div className="quote-icon-wrap">
                <Quote size={20} className="text-accent" />
              </div>
              <blockquote className="quote-body">
                "I work across the stack — from interfaces and APIs to databases, architecture and IT systems."
              </blockquote>
            </div>

            {/* Signature & Role */}
            <div className="about-signature-block">
              <h4 className="sig-name font-display">Salma El Mountassir</h4>
              <p className="sig-role font-mono">Junior Full-Stack Developer</p>
            </div>
          </div>

          {/* Right Column: Developer Photo Card */}
          <div className="about-photo-col">
            <div className="photo-card-wrapper">
              {/* Photo Frame */}
              <div className="photo-frame">
                <img
                  src="/assets/about-portrait.jpg"
                  alt="Salma El Mountassir — Junior Full-Stack Developer"
                  className="about-portrait-img"
                  loading="lazy"
                />

                {/* Floating Handwritten Badge */}
                <div className="photo-badge-sticker">
                  <span>Keep building ✨</span>
                </div>
              </div>

              {/* Background ambient decorative card */}
              <div className="photo-backdrop-decor"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 860px) {
          .about-editorial-grid {
            grid-template-columns: 1.25fr 1fr;
            gap: 4rem;
          }
        }
        .about-text-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .about-lead-text {
          font-size: clamp(1.05rem, 1.4vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .about-quote-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          border-radius: var(--radius-sm);
          padding: 1.5rem 1.75rem;
          position: relative;
        }
        .quote-icon-wrap {
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        .quote-body {
          font-size: clamp(1.1rem, 1.6vw, 1.35rem);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.45;
          font-style: italic;
        }
        .about-signature-block {
          padding-top: 0.5rem;
        }
        .sig-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .sig-role {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .about-photo-col {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .photo-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
        }
        .photo-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          z-index: 1;
        }
        .about-portrait-img {
          width: 100%;
          height: auto;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .photo-frame:hover .about-portrait-img {
          transform: scale(1.03);
        }
        .photo-badge-sticker {
          position: absolute;
          top: 18px;
          right: 18px;
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
        }
        .photo-backdrop-decor {
          position: absolute;
          inset: -12px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          border-radius: var(--radius-xl);
          filter: blur(25px);
          z-index: 0;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}
