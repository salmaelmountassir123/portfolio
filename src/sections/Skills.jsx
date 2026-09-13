import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Globe,
  Network,
  ShieldCheck,
  Wrench,
  Sparkles,
  Check
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { skillsCategories } from '../data/skillsData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categoryIcons = {
    'FRONTEND': Code2,
    'BACKEND': Server,
    'DATABASES': Database,
    'WEB / CMS': Globe,
    'ARCHITECTURE': Network,
    'IT ASSET MANAGEMENT': ShieldCheck,
    'DEVELOPMENT TOOLS': Wrench
  };

  const categories = ['ALL', ...skillsCategories.map(c => c.category)];

  const filteredCategories = activeCategory === 'ALL'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === activeCategory);

  return (
    <section className="section-wrapper skills-section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="TECHNICAL MASTERY"
          number="SKILLS"
          title="CATEGORIZED EXPERTISE"
          subtitle="Structured domain capabilities across modern frontend development, backend APIs, relational & document databases, and IT systems administration."
        />

        {/* Filter Navigation Tabs */}
        <div className="skills-filter-nav font-mono">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`skill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Matrix Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            const isITorBackend = group.category === 'IT ASSET MANAGEMENT' || group.category === 'BACKEND';

            return (
              <div
                key={group.category}
                className={`skill-group-card ${isITorBackend ? 'skill-card-highlight' : ''}`}
              >
                <div className="group-topbar">
                  <div className="group-title-box">
                    <span className="group-num font-mono">{group.number}</span>
                    <h3 className="group-title font-display">{group.category}</h3>
                  </div>
                  <div className="group-icon-wrap">
                    <Icon size={18} />
                  </div>
                </div>

                <p className="group-desc">{group.description}</p>

                {/* Skills Badges Grid */}
                <div className="group-skills-flex">
                  {group.skills.map((skill, sIdx) => {
                    const isPythonOrWordPress = skill.name === 'Python' || skill.name === 'WordPress';
                    const isGLPI = skill.name === 'GLPI';

                    return (
                      <div
                        key={sIdx}
                        className={`skill-item-pill font-mono ${isGLPI ? 'pill-glpi' : ''} ${isPythonOrWordPress ? 'pill-special' : ''} ${skill.core ? 'pill-core' : ''}`}
                      >
                        <div className="pill-dot"></div>
                        <span className="pill-name">{skill.name}</span>
                        {skill.level && (
                          <span className="pill-level">{skill.level}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="skills-editorial-footer font-mono">
          <div className="footer-pill">
            <Sparkles size={14} className="text-highlight" />
            <span>Python, WordPress & GLPI fundamentals applied alongside the core React/Django/Laravel stack.</span>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .skills-filter-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 3rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .skill-filter-btn {
          padding: 6px 14px;
          font-size: 0.72rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .skill-filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent);
        }
        .skill-filter-btn.active {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent-light);
          box-shadow: 0 2px 10px var(--accent-glow);
        }
        .skills-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .skills-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1200px) {
          .skills-categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .skill-group-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }
        .skill-group-card:hover {
          border-color: var(--accent-light);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .skill-card-highlight {
          border-color: var(--border-accent);
          background: var(--bg-surface-elevated);
        }
        .group-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .group-title-box {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .group-num {
          font-size: 0.75rem;
          color: var(--text-highlight);
        }
        .group-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          letter-spacing: 0.05em;
        }
        .group-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-highlight);
        }
        .skill-group-card:hover .group-icon-wrap {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .group-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .group-skills-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }
        .skill-item-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 4px 10px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-size: 0.72rem;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .skill-item-pill:hover {
          border-color: var(--accent-light);
          transform: translateY(-1px);
        }
        .pill-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
        }
        .pill-name {
          font-weight: 500;
        }
        .pill-level {
          font-size: 0.6rem;
          color: var(--text-muted);
          margin-left: 2px;
        }
        .pill-glpi {
          background: rgba(110, 36, 53, 0.3);
          border-color: var(--accent);
          color: #E8A598;
          font-weight: 600;
        }
        .pill-glpi .pill-dot {
          background: #E8A598;
        }
        .pill-special {
          border-color: var(--border-accent);
          color: var(--text-primary);
          background: var(--bg-card);
        }
        .skills-editorial-footer {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }
        .footer-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          padding: 8px 16px;
          border-radius: var(--radius-xs);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
