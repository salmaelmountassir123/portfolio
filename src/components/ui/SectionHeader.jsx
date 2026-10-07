import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  rightElement,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`section-header-block ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <div className="section-header-top">
        <div>
          {eyebrow && (
            <div className="section-badge-eyebrow">
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="section-title">
            {title}
          </h2>
          {subtitle && (
            <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>
        {rightElement && (
          <div className="section-header-right">
            {rightElement}
          </div>
        )}
      </div>

      <style>{`
        .section-header-block {
          position: relative;
          margin-bottom: 3rem;
        }
        .section-header-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .section-badge-eyebrow {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.4rem;
          display: inline-block;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.8vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .section-header-right {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
