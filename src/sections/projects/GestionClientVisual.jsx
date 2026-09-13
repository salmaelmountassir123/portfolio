import React, { useState } from 'react';
import { Hammer, Maximize2, X, ImageOff } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export default function GestionClientVisual() {
  const project = projectsData.find((p) => p.id === 'gestion-client');
  const shot = project.screenshotCategories[0];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="gc-visual-box">
      <div className="gc-status-banner font-mono">
        <Hammer size={13} />
        <span>{project.statusLabel}</span>
      </div>

      {!imageFailed ? (
        <>
          <button
            className="gc-image-button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Enlarge ${shot.label} screenshot`}
          >
            <img
              src={shot.image}
              alt={`${shot.label} — Gestion Client (work in progress)`}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
            <span className="gc-zoom-hint">
              <Maximize2 size={13} />
              <span>Enlarge</span>
            </span>
          </button>
          <p className="gc-caption">{shot.caption}</p>
        </>
      ) : (
        <div className="gc-placeholder">
          <ImageOff size={22} />
          <span>Screenshot coming soon</span>
          <p>The real capture for “{shot.label}” will be added here.</p>
        </div>
      )}

      <style>{`
        .gc-visual-box {
          background: var(--terminal-body, var(--bg-card));
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .gc-status-banner {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(180, 83, 9, 0.12);
          color: #B45309;
          border: 1px solid rgba(180, 83, 9, 0.35);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          font-size: 0.65rem;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
        }
        .gc-image-button {
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
        .gc-image-button img {
          display: block;
          width: 100%;
          height: auto;
        }
        .gc-zoom-hint {
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
        .gc-caption {
          margin-top: 0.65rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .gc-placeholder {
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
        .gc-placeholder span {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .gc-placeholder p {
          font-size: 0.72rem;
          margin: 0;
          color: var(--text-muted);
        }
      `}</style>

      {lightboxOpen && !imageFailed && (
        <div className="gc-lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="gc-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
          <img src={shot.image} alt={`${shot.label} — enlarged`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .gc-lightbox {
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
        .gc-lightbox img {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          cursor: default;
        }
        .gc-lightbox-close {
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
