import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentLang, setCurrentLang] = useState('FR');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'projects', 'project-showcase', 'experience', 'skills', 'education', 'contact'];
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
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const toggleLang = () => {
    setCurrentLang(prev => (prev === 'FR' ? 'EN' : 'FR'));
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#hero" className="nav-brand" id="nav-brand-logo">
            <span className="brand-logo-text">SALMA</span>
          </a>

          {/* Desktop Navigation Links */}
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

          {/* Right Action Controls: Theme & Language */}
          <div className="nav-actions">
            {/* Theme Toggle Pill */}
            <ThemeToggle />

            {/* Language Selector Pill */}
            <button
              onClick={toggleLang}
              className="lang-toggle-btn"
              title="Toggle Language (FR / EN)"
              aria-label="Toggle Language"
            >
              <span className="lang-text">{currentLang}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="brand-logo-text">SALMA</span>
            <span className="mobile-role-text">Junior Full-Stack Developer</span>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className="mobile-nav-arrow" />
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-controls-row">
              <ThemeToggle />
              <button onClick={toggleLang} className="lang-toggle-btn">
                <span>{currentLang}</span>
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="btn btn-primary w-full"
            >
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          display: flex;
          align-items: center;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }
        .navbar-header.scrolled {
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
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
          gap: 0.5rem;
          color: var(--text-primary);
        }
        .brand-logo-text {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
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
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 6px 0;
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link.active {
          color: var(--accent);
          font-weight: 600;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .lang-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-strong);
          color: var(--text-primary);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .lang-toggle-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          color: var(--text-primary);
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          cursor: pointer;
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
          z-index: 999;
          transform: translateY(-100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          padding-top: 72px;
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
          padding-bottom: 1.25rem;
        }
        .mobile-role-text {
          display: block;
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.6rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: var(--accent);
        }
        .mobile-nav-arrow {
          color: var(--text-muted);
        }
        .mobile-menu-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .mobile-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .w-full {
          width: 100%;
        }
      `}</style>
    </>
  );
}
