import React from 'react';
import { Layout, Server, Database, Network, ShieldCheck, Globe, Check, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

export default function About() {
  const pillars = [
    {
      num: "01",
      title: "FRONTEND",
      icon: Layout,
      summary: "Crafting performant, accessible and elegant user interfaces with React.js, Redux, and modern CSS architectures.",
      highlights: ["React.js & State Slices", "Responsive & Fluid Design", "Modern UI/UX Systems"]
    },
    {
      num: "02",
      title: "BACKEND",
      icon: Server,
      summary: "Engineering secure REST APIs, microservices, token authentication, and data validation using Django, Laravel & Node.js.",
      highlights: ["RESTful API Architecture", "JWT & Sanctum Auth", "Python & PHP Ecosystems"]
    },
    {
      num: "03",
      title: "DATABASES",
      icon: Database,
      summary: "Structuring normalized relational schemas and scalable document collections with high transactional integrity.",
      highlights: ["MySQL Schema Design", "MongoDB & Mongoose", "Query Optimization"]
    },
    {
      num: "04",
      title: "ARCHITECTURE",
      icon: Network,
      summary: "Designing modular API Gateways, decoupled service domains, UML documentation, and agile development pipelines.",
      highlights: ["Microservices & Gateways", "UML Modeling & Specs", "Agile & Scrum Cycles"]
    },
    {
      num: "05",
      title: "IT & SYSTEMS",
      icon: ShieldCheck,
      summary: "Building internal IT asset management tools that track equipment, employee assignments, and renewal alerts, with hands-on exposure to GLPI.",
      highlights: ["Equipment & Assignment Tracking", "GLPI Asset Inventory Basics", "Renewal Alerts & Lifecycle Logs"],
      featured: true
    },
    {
      num: "06",
      title: "WEB / CMS",
      icon: Globe,
      summary: "Integrating flexible content management workflows with WordPress and modular CMS environments.",
      highlights: ["WordPress CMS Solutions", "Template Customization", "Content Architecture"]
    }
  ];

  return (
    <section className="section-wrapper about-section" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="PROFESSIONAL PHILOSOPHY"
          number="ABOUT"
          title="MORE THAN JUST CODE."
          subtitle="A complete perspective bridging software engineering with real internal IT tooling."
        />

        {/* Editorial Main Statement Box */}
        <div className="about-editorial-statement">
          <div className="quote-mark font-serif">“</div>
          <p className="statement-text">
            I work across the stack — from interfaces and APIs to databases, architecture and IT systems.
          </p>
          <div className="statement-author font-mono">
            <span>SALMA EL MOUNTASSIR</span>
            <span className="author-separator">—</span>
            <span className="text-highlight">JUNIOR FULL-STACK DEVELOPER</span>
          </div>
        </div>

        {/* Professional Narrative Breakdown */}
        <div className="about-narrative-grid">
          <div className="narrative-card">
            <h3 className="narrative-heading font-display">Technical Depth & Ambition</h3>
            <p className="narrative-paragraph">
              While early in my professional trajectory, my engineering mindset is defined by a rigorous exploration of technical depth. Rather than treating development as isolated frontend components or isolated backend scripts, I design applications with complete system lifecycle awareness.
            </p>
          </div>
          <div className="narrative-card">
            <h3 className="narrative-heading font-display">Engineering Meets IT Asset Management</h3>
            <p className="narrative-paragraph">
              My technical experience extends from full-stack web applications into internal IT asset management. Building a platform that tracks <strong>equipment</strong>, <strong>employee assignments</strong>, and <strong>renewal alerts</strong> for CEMA Bois de l'Atlas — alongside hands-on exposure to <strong>GLPI</strong> — showed me that code needs to fit real operational workflows, not just run in local development.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Matrix */}
        <div className="pillars-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className={`pillar-card ${pillar.featured ? 'pillar-card-featured' : ''}`}
              >
                <div className="pillar-header">
                  <span className="pillar-num font-mono">{pillar.num}</span>
                  <div className="pillar-icon-box">
                    <Icon size={18} />
                  </div>
                </div>

                <h4 className="pillar-title font-display">{pillar.title}</h4>
                <p className="pillar-summary">{pillar.summary}</p>

                <div className="pillar-highlights font-mono">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="pillar-highlight-item">
                      <Check size={12} className="text-highlight" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .about-editorial-statement {
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          border-left: 4px solid var(--accent);
          padding: 2.5rem;
          margin-bottom: 3.5rem;
          position: relative;
          border-radius: var(--radius-xs);
        }
        .quote-mark {
          position: absolute;
          top: -15px;
          left: 20px;
          font-size: 5rem;
          color: var(--border-accent);
          line-height: 1;
          pointer-events: none;
        }
        .statement-text {
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 2.5vw, 2.1rem);
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        .statement-author {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
        }
        .author-separator {
          color: var(--accent);
        }
        .about-narrative-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 768px) {
          .about-narrative-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        .narrative-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          padding: 1.75rem;
          border-radius: var(--radius-xs);
        }
        .narrative-heading {
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }
        .narrative-paragraph {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .narrative-paragraph strong {
          color: var(--text-primary);
          font-weight: 600;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .pillar-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 1.75rem;
          border-radius: var(--radius-xs);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }
        .pillar-card:hover {
          border-color: var(--accent-light);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .pillar-card-featured {
          border-color: var(--border-accent);
          background: var(--bg-surface-elevated);
        }
        .pillar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .pillar-num {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }
        .pillar-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-highlight);
        }
        .pillar-card:hover .pillar-icon-box {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent);
        }
        .pillar-title {
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }
        .pillar-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .pillar-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }
        .pillar-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.74rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
