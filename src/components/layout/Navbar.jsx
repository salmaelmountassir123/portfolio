import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['work', 'about', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand */}
          <a href="#" className="nav-brand" id="nav-brand-logo">
            <span className="brand-symbol">SM</span>
            <span className="brand-name">SALMA EL MOUNTASSIR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="nav-actions">
            <button
              onClick={onOpenCV}
              className="btn btn-secondary btn-sm nav-cv-btn"
              id="navbar-cv-btn"
            >
              <FileDown size={14} />
              <span>DOWNLOAD CV</span>
            </button>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="brand-name">SALMA EL MOUNTASSIR</span>
            <span className="mobile-eyebrow font-mono">JUNIOR FULL-STACK DEVELOPER</span>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                <span className="mobile-nav-num font-mono">0{navLinks.indexOf(link) + 1}</span>
                <span className="mobile-nav-text">{link.label}</span>
                <ArrowUpRight size={16} className="mobile-nav-arrow" />
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="btn btn-primary w-full"
            >
              <FileDown size={15} />
              <span>DOWNLOAD CV</span>
            </button>
            <p className="mobile-footer-tag font-mono">
              React · Django · Laravel · Node · Python · GLPI
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 72px;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
          background: transparent;
        }
        .navbar-header.scrolled {
          background: var(--bg-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          height: 64px;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .brand-symbol {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: var(--burgundy);
          color: #F2E9E4;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: var(--radius-xs);
          border: 1px solid var(--accent);
        }
        .brand-name {
          letter-spacing: 0.06em;
        }
        .nav-desktop-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        @media (min-width: 860px) {
          .nav-desktop-links {
            display: flex;
          }
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          position: relative;
          padding: 4px 0;
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active {
          color: var(--text-primary);
          font-weight: 600;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav-cv-btn {
          display: none;
        }
        @media (min-width: 640px) {
          .nav-cv-btn {
            display: inline-flex;
          }
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          color: var(--text-primary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }
        @media (min-width: 860px) {
          .mobile-menu-btn {
            display: none;
          }
        }
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary);
          z-index: 99;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          padding-top: 80px;
        }
        .mobile-menu-drawer.open {
          transform: translateY(0);
        }
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 2rem 1.5rem;
        }
        .mobile-menu-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 1.5rem;
        }
        .mobile-eyebrow {
          display: block;
          font-size: 0.72rem;
          color: var(--text-highlight);
          margin-top: 0.35rem;
          letter-spacing: 0.1em;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin: 2rem 0;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: var(--text-primary);
        }
        .mobile-nav-num {
          font-size: 0.8rem;
          color: var(--text-highlight);
        }
        .mobile-nav-arrow {
          margin-left: auto;
          color: var(--text-muted);
        }
        .mobile-menu-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .w-full {
          width: 100%;
        }
        .mobile-footer-tag {
          font-size: 0.7rem;
          text-align: center;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
}
