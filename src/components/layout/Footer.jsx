import React from 'react';
import { ArrowUp } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Brand & Role */}
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <span className="logo-text">SALMA</span>
          </a>
          <span className="footer-role">Junior Full-Stack Developer</span>
        </div>

        {/* Center Nav Links */}
        <nav className="footer-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls & Scroll to Top */}
        <div className="footer-actions">
          <ThemeToggle />
          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top" aria-label="Back to top">
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <div className="container footer-sub">
        <p className="copyright-text">
          © {new Date().getFullYear()} Salma El Mountassir · All rights reserved.
        </p>
      </div>

      <style>{`
        .portfolio-footer {
          background: var(--bg-surface);
          border-top: 1px solid var(--border);
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
          position: relative;
          z-index: 1;
        }
        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .footer-brand {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .footer-logo .logo-text {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .footer-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .footer-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--accent);
        }
        .footer-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .scroll-top-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .scroll-top-btn:hover {
          background: var(--accent);
          color: #FFFFFF;
          border-color: var(--accent);
        }
        .footer-sub {
          padding-top: 1.25rem;
          display: flex;
          justify-content: center;
        }
        .copyright-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
}
