import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-switch-pill"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      id="theme-toggle-button"
    >
      <div className={`theme-switch-track ${isDark ? 'dark' : 'light'}`}>
        <span className="theme-switch-sun" aria-hidden="true">
          <Sun size={13} strokeWidth={2.5} />
        </span>
        <span className="theme-switch-thumb">
          {isDark ? <Moon size={11} strokeWidth={2.5} /> : <Sun size={11} strokeWidth={2.5} />}
        </span>
        <span className="theme-switch-moon" aria-hidden="true">
          <Moon size={13} strokeWidth={2.5} />
        </span>
      </div>

      <style>{`
        .theme-switch-pill {
          display: inline-flex;
          align-items: center;
          background: transparent;
          border: none;
          padding: 2px;
          cursor: pointer;
        }
        .theme-switch-track {
          position: relative;
          width: 52px;
          height: 28px;
          border-radius: 9999px;
          background: var(--bg-surface);
          border: 1px solid var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .theme-switch-track:hover {
          border-color: var(--accent);
        }
        .theme-switch-sun {
          color: #F59E0B;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .theme-switch-moon {
          color: #94A3B8;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .theme-switch-thumb {
          position: absolute;
          top: 2px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }
        .theme-switch-track.dark .theme-switch-thumb {
          transform: translateX(24px);
          background: #3B82F6;
        }
      `}</style>
    </button>
  );
}
