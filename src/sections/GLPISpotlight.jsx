import React, { useState } from 'react';
import { ShieldCheck, Boxes, Ticket, CheckCircle2, Maximize2, X } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const glpiScreenshots = [
  { id: 'dashboard', label: 'Dashboard', image: '/assets/projects/glpi/dashboard.png', caption: 'GLPI central dashboard: assets, tickets, and inventory counters.' },
  { id: 'inventory', label: 'Inventory Configuration', image: '/assets/projects/glpi/inventory-configuration.png', caption: 'Inventory module configuration for hardware and software discovery.' },
  { id: 'tickets', label: 'Tickets', image: '/assets/projects/glpi/tickets.png', caption: 'Ticket list view used to log and follow up IT support requests.' }
];

const capabilities = [
  {
    title: "GLPI Installation & Configuration",
    desc: "Installed and configured a GLPI instance to explore IT asset inventory and ticket tracking as a reference IT service management tool.",
    tag: "GLPI SETUP"
  },
  {
    title: "Asset Inventory Concepts",
    desc: "Used GLPI's inventory module (computers, software, network devices) to structure the same asset-tracking logic later applied to the custom CEMA platform.",
    tag: "ASSET INVENTORY"
  },
  {
    title: "Basic Ticket Handling",
    desc: "Configured GLPI's ticket module to log and track IT support requests at a basic level, without a formal SLA workflow.",
    tag: "TICKETS"
  }
];

export default function GLPISpotlight() {
  const [activeId, setActiveId] = useState(glpiScreenshots[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const active = glpiScreenshots.find((s) => s.id === activeId);

  return (
    <section className="section-wrapper glpi-spotlight-section" id="it-systems">
      <div className="container">
        <SectionHeader
          eyebrow="IT TOOLING EXPOSURE"
          number="GLPI"
          title="GLPI & IT ASSET INVENTORY"
          subtitle="Alongside building the custom CEMA IT asset platform, hands-on installation and configuration of GLPI to explore how a dedicated IT asset management tool handles inventory and tickets."
        />

        <div className="glpi-main-grid">
          {/* Left: real screenshots */}
          <div className="glpi-console-card">
            <div className="console-header">
              <div className="console-title font-mono">
                <ShieldCheck size={16} className="text-highlight" />
                <span>GLPI — LOCAL SETUP SCREENSHOTS</span>
              </div>
              <div className="console-actions font-mono">
                {glpiScreenshots.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`console-tab ${activeId === s.id ? 'active' : ''}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="glpi-image-button" onClick={() => setLightboxOpen(true)} aria-label={`Enlarge ${active.label} screenshot`}>
              <img src={active.image} alt={`GLPI — ${active.label}`} loading="lazy" />
              <span className="glpi-zoom-hint">
                <Maximize2 size={13} />
                <span>Enlarge</span>
              </span>
            </button>
            <p className="glpi-caption">{active.caption}</p>
          </div>

          {/* Right: honest context */}
          <div className="ecosystem-box">
            <h4 className="ecosystem-heading font-display">WHY GLPI, ALONGSIDE A CUSTOM APP</h4>
            <p className="ecosystem-desc">
              GLPI is a widely used open-source IT asset management tool. Setting it up and testing its inventory and
              ticketing modules helped shape the data model and workflows later implemented in the custom CEMA parc
              informatique application — without replacing the need to build a tailored solution.
            </p>

            <div className="ecosystem-nodes-list">
              <div className="eco-node-card">
                <div className="eco-icon-box"><Boxes size={16} /></div>
                <div className="eco-meta">
                  <span className="eco-label font-mono font-semibold">Inventory Module</span>
                  <span className="eco-role font-mono">Hardware & software discovery reference</span>
                </div>
                <CheckCircle2 size={13} className="eco-check text-highlight" />
              </div>
              <div className="eco-node-card">
                <div className="eco-icon-box"><Ticket size={16} /></div>
                <div className="eco-meta">
                  <span className="eco-label font-mono font-semibold">Ticketing Module</span>
                  <span className="eco-role font-mono">Basic IT support request logging</span>
                </div>
                <CheckCircle2 size={13} className="eco-check text-highlight" />
              </div>
            </div>
          </div>
        </div>

        <div className="glpi-capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="glpi-cap-card">
              <div className="cap-top">
                <span className="cap-tag font-mono">{cap.tag}</span>
                <CheckCircle2 size={14} className="text-highlight" />
              </div>
              <h4 className="cap-title font-display">{cap.title}</h4>
              <p className="cap-desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="glpi-lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="glpi-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
          <img src={active.image} alt={`GLPI — ${active.label} enlarged`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .glpi-spotlight-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .glpi-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 1024px) {
          .glpi-main-grid {
            grid-template-columns: 1.3fr 1fr;
            gap: 2.5rem;
          }
        }
        .glpi-console-card {
          background: var(--terminal-body, var(--bg-card));
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }
        .console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .console-title {
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }
        .console-actions {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .console-tab {
          padding: 3px 8px;
          font-size: 0.65rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          cursor: pointer;
        }
        .console-tab.active {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent);
        }
        .glpi-image-button {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--bg-surface);
          cursor: zoom-in;
        }
        .glpi-image-button img {
          display: block;
          width: 100%;
          height: auto;
        }
        .glpi-zoom-hint {
          position: absolute;
          bottom: 0.6rem;
          right: 0.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(13, 11, 12, 0.72);
          color: #F2E9E4;
          font-size: 0.65rem;
          padding: 4px 8px;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
        }
        .glpi-caption {
          margin-top: 0.65rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .glpi-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(13, 11, 12, 0.9);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
        }
        .glpi-lightbox img {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          cursor: default;
        }
        .glpi-lightbox-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          cursor: pointer;
        }
        .ecosystem-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .ecosystem-heading {
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .ecosystem-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        .ecosystem-nodes-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .eco-node-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.6rem 0.85rem;
          transition: var(--transition-fast);
        }
        .eco-node-card:hover {
          border-color: var(--accent-light);
          background: var(--bg-surface-elevated);
        }
        .eco-icon-box {
          color: var(--text-highlight);
          display: flex;
          align-items: center;
        }
        .eco-meta {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-left: 0.75rem;
        }
        .eco-label {
          font-size: 0.75rem;
          color: var(--text-primary);
        }
        .eco-role {
          font-size: 0.65rem;
          color: var(--text-muted);
        }
        .glpi-capabilities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .glpi-capabilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .glpi-capabilities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .glpi-cap-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1.5rem;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }
        .glpi-cap-card:hover {
          border-color: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .cap-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .cap-tag {
          font-size: 0.65rem;
          color: var(--text-highlight);
          background: var(--badge-bg);
          padding: 2px 6px;
          border-radius: 2px;
          letter-spacing: 0.08em;
        }
        .cap-title {
          font-size: 1.05rem;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .cap-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
