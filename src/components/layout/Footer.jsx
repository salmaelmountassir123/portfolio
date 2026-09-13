import React from 'react';
import { ArrowUp, Terminal, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container footer-container">
        {/* Top Branding Line */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-symbol font-display">SM</span>
            <div>
              <h3 className="footer-name font-display">SALMA EL MOUNTASSIR</h3>
              <p className="footer-title font-mono text-highlight">JUNIOR FULL-STACK DEVELOPER</p>
            </div>
          </div>

          <button onClick={scrollToTop} className="btn-scroll-top font-mono" title="Scroll to top">
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <hr className="footer-divider" />

        {/* Middle Tech Stack Strip */}
        <div className="footer-tech-strip font-mono">
          <span className="footer-strip-label">VERIFIED STACK:</span>
          <p className="footer-tech-list">
            React · Django · Laravel · Node.js · Python · WordPress · GLPI · MySQL · MongoDB
          </p>
        </div>

        {/* Bottom Copyright & Positioning */}
        <div className="footer-bottom font-mono">
          <div className="footer-tagline">
            "Junior by experience, ambitious by technical depth."
          </div>
          <div className="footer-copy">
            © 2026 Salma El Mountassir · All Rights Reserved.
          </div>
        </div>
      </div>

      <style>{`
        .editorial-footer {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
          padding-top: 4rem;
          padding-bottom: 3rem;
          position: relative;
          z-index: 1;
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .footer-symbol {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: var(--burgundy);
          color: #F2E9E4;
          font-weight: 800;
          font-size: 0.9rem;
          border-radius: var(--radius-xs);
          border: 1px solid var(--accent);
        }
        .footer-name {
          font-size: 1.15rem;
          letter-spacing: 0.06em;
          color: var(--text-primary);
        }
        .footer-title {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }
        .btn-scroll-top {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 6px 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          font-size: 0.72rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-scroll-top:hover {
          background: var(--burgundy);
          border-color: var(--accent);
          color: #F2E9E4;
        }
        .footer-divider {
          border: none;
          height: 1px;
          background: var(--border);
        }
        .footer-tech-strip {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        @media (min-width: 640px) {
          .footer-tech-strip {
            flex-direction: row;
            align-items: baseline;
            gap: 0.75rem;
          }
        }
        .footer-strip-label {
          color: var(--text-highlight);
          white-space: nowrap;
          font-weight: 600;
          font-size: 0.72rem;
        }
        .footer-tech-list {
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.72rem;
          color: var(--text-muted);
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }
        .footer-tagline {
          color: var(--text-secondary);
          font-style: italic;
        }
      `}</style>
    </footer>
  );
}
