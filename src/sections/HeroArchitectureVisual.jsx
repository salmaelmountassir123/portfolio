import React, { useState } from 'react';
import { Code, Cpu, Database, Server, ShieldCheck, Activity, Terminal, Layers } from 'lucide-react';

export default function HeroArchitectureVisual() {
  const [activeNode, setActiveNode] = useState(1);

  const nodes = [
    {
      id: 0,
      label: "CODE",
      tech: "React · ES6+ · UI",
      desc: "Component hierarchies & client state",
      icon: Code,
      metric: "60 FPS Render",
      color: "#9B3B52"
    },
    {
      id: 1,
      label: "API",
      tech: "REST · JWT · Sanctum",
      desc: "Stateless contracts & routing gateways",
      icon: Layers,
      metric: "18ms Latency",
      color: "#6E2435"
    },
    {
      id: 2,
      label: "DATABASE",
      tech: "MySQL · MongoDB",
      desc: "Relational integrity & document stores",
      icon: Database,
      metric: "ACID / Schema",
      color: "#4A1824"
    },
    {
      id: 3,
      label: "SERVER",
      tech: "Node.js · Django",
      desc: "Microservices & asynchronous runtimes",
      icon: Server,
      metric: "99.98% Uptime",
      color: "#6E2435"
    },
    {
      id: 4,
      label: "IT ASSETS",
      tech: "GLPI (basics) · Asset Tracking",
      desc: "Equipment inventory & employee assignments",
      icon: ShieldCheck,
      metric: "IT Asset Platform",
      color: "#9B3B52"
    }
  ];

  return (
    <div className="hero-visual-card">
      {/* Top Header Bar */}
      <div className="hero-visual-topbar">
        <div className="visual-indicator">
          <span className="live-dot"></span>
          <span className="font-mono text-xs text-highlight">SYSTEM TOPOLOGY // LIVE PIPELINE</span>
        </div>
        <div className="font-mono text-xs text-muted">
          STATUS: <span className="text-active">ONLINE</span>
        </div>
      </div>

      {/* Interactive Node Flow Grid */}
      <div className="hero-nodes-track">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = activeNode === index;
          return (
            <React.Fragment key={node.id}>
              <div
                className={`hero-node-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveNode(index)}
                onMouseEnter={() => setActiveNode(index)}
                title={`Inspect ${node.label} layer`}
              >
                <div className="node-icon-wrap">
                  <Icon size={18} />
                </div>
                <div className="node-content">
                  <div className="node-header">
                    <span className="node-num font-mono">0{index + 1}</span>
                    <span className="node-label">{node.label}</span>
                  </div>
                  <span className="node-tech font-mono">{node.tech}</span>
                </div>
                <div className="node-status-bar"></div>
              </div>

              {index < nodes.length - 1 && (
                <div className="node-connector">
                  <div className="connector-line"></div>
                  <span className="connector-arrow font-mono">→</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Detailed Diagnostic Panel for Selected Node */}
      <div className="hero-diagnostic-panel">
        <div className="diag-header">
          <div className="diag-title font-mono">
            <Terminal size={14} className="text-highlight" />
            <span>LAYER DIAGNOSTICS: {nodes[activeNode].label}</span>
          </div>
          <span className="diag-metric font-mono">{nodes[activeNode].metric}</span>
        </div>
        <div className="diag-body">
          <p className="diag-desc">{nodes[activeNode].desc}</p>
          <div className="diag-tags font-mono">
            <span className="diag-tag">FLOW: CODE → API → DB → SERVER → IT</span>
            <span className="diag-tag">TECH: {nodes[activeNode].tech}</span>
          </div>
        </div>
      </div>

      {/* Code Snippet / Architectural Wireframe Accent */}
      <div className="hero-code-strip font-mono text-xs">
        <span className="code-accent">sys.connect(</span>
        <span className="code-param">"React"</span>, 
        <span className="code-param">"Django/Laravel"</span>, 
        <span className="code-param">"MySQL/Mongo"</span>, 
        <span className="code-param">"GLPI/Assets"</span>
        <span className="code-accent">)</span>
        <span className="code-cursor">_</span>
      </div>

      <style>{`
        .hero-visual-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
          position: relative;
          overflow: hidden;
        }
        .hero-visual-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-light), transparent);
        }
        .hero-visual-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1.25rem;
        }
        .visual-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          background: #27C93F;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(39, 201, 63, 0.6);
          animation: signalPulse 2s infinite ease-in-out;
        }
        .text-active {
          color: #27C93F;
          font-weight: 600;
        }
        .hero-nodes-track {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 640px) {
          .hero-nodes-track {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.25rem;
          }
        }
        .hero-node-item {
          flex: 1;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.75rem 0.6rem;
          cursor: pointer;
          transition: var(--transition-fast);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .hero-node-item:hover,
        .hero-node-item.active {
          background: var(--bg-surface-elevated);
          border-color: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px var(--accent-glow);
        }
        .hero-node-item.active .node-icon-wrap {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .hero-node-item.active .node-status-bar {
          background: var(--accent-light);
        }
        .node-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: var(--bg-card);
          color: var(--text-highlight);
          border: 1px solid var(--border);
          transition: var(--transition-fast);
        }
        .node-content {
          display: flex;
          flex-direction: column;
        }
        .node-header {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }
        .node-num {
          font-size: 0.65rem;
          color: var(--text-muted);
        }
        .node-label {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }
        .node-tech {
          font-size: 0.62rem;
          color: var(--text-secondary);
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .node-status-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: transparent;
          transition: var(--transition-fast);
        }
        .node-connector {
          display: none;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 0.85rem;
          padding: 0 2px;
        }
        @media (min-width: 640px) {
          .node-connector {
            display: flex;
          }
        }
        .hero-diagnostic-panel {
          background: var(--terminal-body);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1rem 1.2rem;
          margin-bottom: 1rem;
        }
        .diag-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .diag-title {
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }
        .diag-metric {
          font-size: 0.72rem;
          color: #27C93F;
          background: rgba(39, 201, 63, 0.1);
          padding: 2px 6px;
          border-radius: 2px;
        }
        .diag-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
        }
        .diag-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .diag-tag {
          font-size: 0.68rem;
          padding: 3px 8px;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--badge-text);
          border-radius: 2px;
        }
        .hero-code-strip {
          background: var(--terminal-header);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.6rem 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-secondary);
        }
        .code-accent {
          color: var(--accent-light);
          font-weight: 600;
        }
        .code-param {
          color: var(--code-token-green);
        }
        .code-cursor {
          animation: cursorBlink 1s infinite;
          color: var(--text-highlight);
          font-weight: 700;
        }
        .text-xs { font-size: 0.75rem; }
        .text-muted { color: var(--text-muted); }
      `}</style>
    </div>
  );
}
