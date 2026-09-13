import React from 'react';

export default function SectionHeader({
  eyebrow,
  number,
  title,
  subtitle,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`section-header-block mb-12 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <div className="section-eyebrow">
        {number && <span className="text-highlight font-mono">{number} — </span>}
        {eyebrow}
      </div>
      <h2 className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <style>{`
        .section-header-block {
          position: relative;
        }
        .mb-12 {
          margin-bottom: 3.5rem;
        }
        .text-center {
          text-align: center;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
}
