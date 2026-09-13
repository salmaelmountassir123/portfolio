import React, { useState } from 'react';
import { Maximize2, X, ImageOff, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export default function CemaGallery() {
  const project = projectsData.find((p) => p.id === 'cema');
  const categories = project.screenshotCategories;
  const architectureFlow = project.architectureFlow;
  const [activeId, setActiveId] = useState(categories[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = categories.find((c) => c.id === activeId);

  return (
    <div className="cema-gallery">
      {architectureFlow && (
        <div className="cema-architecture-flow font-mono">
          <span className="cema-architecture-label">ARCHITECTURE:</span>
          <div className="cema-architecture-steps">
            {architectureFlow.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="cema-architecture-step">{step}</span>
                {idx < architectureFlow.length - 1 && (
                  <ArrowRight size={12} className="cema-architecture-arrow" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="cema-gallery-tabs font-mono">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveId(cat.id)}
            className={`cema-tab ${activeId === cat.id ? 'active' : ''} ${!cat.image ? 'pending' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="cema-gallery-frame">
        {active.image ? (
          <>
            <button
              className="cema-image-button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Enlarge ${active.label} screenshot`}
            >
              <img src={active.image} alt={`${active.label} — CEMA IT asset management app`} loading="lazy" />
              <span className="cema-zoom-hint">
                <Maximize2 size={13} />
                <span>Enlarge</span>
              </span>
            </button>
            <p className="cema-caption">{active.caption}</p>
          </>
        ) : (
          <div className="cema-placeholder">
            <ImageOff size={22} />
            <span>Screenshot coming soon</span>
            <p>Real capture for “{active.label}” will be added here.</p>
          </div>
        )}
      </div>

      {lightboxOpen && active.image && (
        <div className="cema-lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="cema-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
          <img
            src={active.image}
            alt={`${active.label} — enlarged`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .cema-gallery {
          background: var(--terminal-body, var(--bg-card));
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .cema-architecture-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.6rem 0.85rem;
          margin-bottom: 1rem;
        }
        .cema-architecture-label {
          font-size: 0.62rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }
        .cema-architecture-steps {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
        }
        .cema-architecture-step {
          font-size: 0.68rem;
          color: var(--text-primary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 2px 8px;
          border-radius: var(--radius-xs);
        }
        .cema-architecture-arrow {
          color: var(--text-highlight);
          flex-shrink: 0;
        }
        .cema-gallery-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .cema-tab {
          padding: 4px 10px;
          font-size: 0.65rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          cursor: pointer;
          white-space: nowrap;
        }
        .cema-tab.active {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent);
        }
        .cema-tab.pending {
          opacity: 0.55;
          border-style: dashed;
        }
        .cema-tab.pending.active {
          opacity: 1;
        }
        .cema-gallery-frame {
          display: flex;
          flex-direction: column;
        }
        .cema-image-button {
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
        .cema-image-button img {
          display: block;
          width: 100%;
          height: auto;
        }
        .cema-zoom-hint {
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
        .cema-caption {
          margin-top: 0.65rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .cema-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 220px;
          border: 1px dashed var(--border-strong);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          padding: 2rem;
          text-align: center;
        }
        .cema-placeholder span {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .cema-placeholder p {
          font-size: 0.72rem;
          margin: 0;
          color: var(--text-muted);
        }
        .cema-lightbox {
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
        .cema-lightbox img {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          cursor: default;
        }
        .cema-lightbox-close {
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
      `}</style>
    </div>
  );
}
