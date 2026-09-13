import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      id="theme-toggle-button"
    >
      <div className="theme-toggle-track">
        <span className={`theme-icon ${theme === 'dark' ? 'active' : ''}`}>
          <Moon size={14} strokeWidth={2.2} />
        </span>
        <span className={`theme-icon ${theme === 'light' ? 'active' : ''}`}>
          <Sun size={14} strokeWidth={2.2} />
        </span>
      </div>
      <style>{`
        .theme-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 5px 8px;
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-pill);
          color: var(--text-primary);
          transition: var(--transition-fast);
          cursor: pointer;
        }
        .theme-toggle-btn:hover {
          border-color: var(--accent);
          background: var(--accent-soft);
          transform: translateY(-1px);
        }
        .theme-toggle-track {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .theme-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
          border-radius: 50%;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .theme-icon.active {
          color: var(--text-primary);
          background: var(--burgundy);
          color: #F2E9E4;
          box-shadow: 0 0 8px var(--accent-glow);
        }
      `}</style>
    </button>
  );
}
