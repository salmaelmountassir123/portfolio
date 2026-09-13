import React, { useState } from 'react';
import {
  Users,
  Layout,
  Network,
  Server,
  Database,
  Terminal,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  Activity,
  Zap,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

export default function BeyondTheStack() {
  const [selectedStep, setSelectedStep] = useState(2); // Default to API

  const flowSteps = [
    {
      id: 'user',
      label: 'USER',
      subtitle: 'Client Interaction',
      tech: 'Browser / Mobile Client',
      icon: Users,
      action: 'Triggers HTTP action or UI state change',
      detail: 'Initiates user interaction, form input, or data request from modern web interface.',
      protocol: 'HTTPS / TLS 1.3',
      color: '#A89B9F'
    },
    {
      id: 'frontend',
      label: 'FRONTEND',
      subtitle: 'Reactive Interface',
      tech: 'React.js · Redux Toolkit · Vite',
      icon: Layout,
      action: 'State dispatch & optimistic UI update',
      detail: 'Validates inputs, manages component lifecycle, handles client-side caching, and formats payload.',
      protocol: 'DOM Events / Axios Interceptor',
      color: '#E8A598'
    },
    {
      id: 'api',
      label: 'API GATEWAY',
      subtitle: 'Traffic & Security',
      tech: 'REST API · JWT · Sanctum',
      icon: Network,
      action: 'Bearer token validation & routing',
      detail: 'Authenticates authorization headers, applies rate limits, and routes payload to target microservice or controller.',
      protocol: 'RESTful JSON / CORS Policy',
      color: '#9B3B52'
    },
    {
      id: 'backend',
      label: 'BACKEND',
      subtitle: 'Business Engine',
      tech: 'Django · Laravel · Node.js · Python',
      icon: Server,
      action: 'Business rules & query execution',
      detail: 'Executes domain logic, verifies permissions with role-based middleware, and coordinates transactions.',
      protocol: 'Async Worker / MVC Controllers',
      color: '#6E2435'
    },
    {
      id: 'database',
      label: 'DATABASE',
      subtitle: 'Persistence Layer',
      tech: 'MySQL · MongoDB · Mongoose',
      icon: Database,
      action: 'Atomic storage & index queries',
      detail: 'Guarantees ACID transactional compliance in MySQL or fast flexible document retrieval in MongoDB.',
      protocol: 'TCP / Connection Pooling',
      color: '#4A1824'
    },
    {
      id: 'server',
      label: 'SERVER',
      subtitle: 'Runtime Environment',
      tech: 'Node.js · Django (Dev & Deployment)',
      icon: Terminal,
      action: 'Process runtime & API serving',
      detail: 'Runs the application backend process and serves API requests during development and deployment testing.',
      protocol: 'HTTP / Process Runtime',
      color: '#6E2435'
    },
    {
      id: 'it',
      label: 'IT ASSET LAYER',
      subtitle: 'Equipment & Assignments',
      tech: 'Custom Asset Tracking · GLPI (basics)',
      icon: ShieldCheck,
      action: 'Equipment tracking & assignment history',
      detail: 'Tracks corporate hardware inventory and employee-equipment assignments, with basic hands-on exposure to GLPI\'s inventory and ticketing modules.',
      protocol: 'REST API / Manual & GLPI Inventory',
      color: '#9B3B52'
    }
  ];

  const current = flowSteps[selectedStep];

  return (
    <section className="section-wrapper beyond-section" id="beyond-the-stack">
      <div className="container">
        <SectionHeader
          eyebrow="SYSTEMS THINKING"
          number="DIFFERENTIATOR"
          title="I don't only build applications. I understand the systems behind them."
          subtitle="A holistic understanding from the client-side pixel to the database and internal IT asset management tooling."
        />

        {/* Interactive Architecture Pipeline Ribbon */}
        <div className="pipeline-card">
          <div className="pipeline-header">
            <div className="pipeline-title font-mono">
              <Activity size={16} className="text-highlight" />
              <span>END-TO-END SYSTEM PIPELINE (INTERACTIVE INSPECTOR)</span>
            </div>
            <span className="font-mono text-xs text-muted">CLICK TO TRACE DATAFLOW</span>
          </div>

          {/* Desktop & Mobile Scrollable Flow Track */}
          <div className="flow-track-wrapper">
            <div className="flow-track">
              {flowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = selectedStep === idx;
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setSelectedStep(idx)}
                      className={`flow-node-btn ${isSelected ? 'active' : ''}`}
                      id={`pipeline-node-${step.id}`}
                    >
                      <div className="flow-node-icon">
                        <Icon size={16} />
                      </div>
                      <div className="flow-node-meta">
                        <span className="flow-node-num font-mono">0{idx + 1}</span>
                        <span className="flow-node-label font-display">{step.label}</span>
                        <span className="flow-node-tech font-mono">{step.tech.split('·')[0]}</span>
                      </div>
                      {isSelected && <span className="active-pip"></span>}
                    </button>

                    {idx < flowSteps.length - 1 && (
                      <div className="flow-arrow font-mono">
                        <ArrowRight size={14} className="arrow-icon-desktop" />
                        <ArrowDown size={14} className="arrow-icon-mobile" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Detailed Inspector Box for Selected Step */}
          <div className="step-inspector-box">
            <div className="inspector-topbar">
              <div className="inspector-title">
                <span className="stage-badge font-mono">STAGE 0{selectedStep + 1} OF 07</span>
                <h4 className="font-display stage-heading">{current.label} — {current.subtitle}</h4>
              </div>
              <div className="protocol-badge font-mono">
                <Zap size={12} className="text-highlight" />
                <span>{current.protocol}</span>
              </div>
            </div>

            <div className="inspector-content-grid">
              <div className="inspector-main">
                <div className="inspector-action-bar font-mono">
                  <span className="text-highlight">OPERATION:</span> {current.action}
                </div>
                <p className="inspector-desc">{current.detail}</p>
              </div>

              <div className="inspector-tech-box">
                <span className="inspector-box-label font-mono">CONNECTED TECHNOLOGIES:</span>
                <div className="tech-pills-row">
                  {current.tech.split('·').map((t, i) => (
                    <span key={i} className="tech-badge tech-badge-glpi">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Connectivity Bar */}
          <div className="pipeline-footer-bar font-mono">
            <div className="pipe-foot-item">
              <CheckCircle2 size={13} className="text-highlight" />
              <span>Full-Stack Development (React · Django · Laravel · Node · Python)</span>
            </div>
            <div className="pipe-foot-item">
              <CheckCircle2 size={13} className="text-highlight" />
              <span>Data Persistence (MySQL · MongoDB)</span>
            </div>
            <div className="pipe-foot-item">
              <CheckCircle2 size={13} className="text-highlight" />
              <span>IT Asset Management (Custom Platform · GLPI Basics)</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .beyond-section {
          background: var(--bg-primary);
          position: relative;
        }
        .pipeline-card {
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          box-shadow: var(--shadow-md);
        }
        .pipeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pipeline-title {
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          letter-spacing: 0.08em;
        }
        .flow-track-wrapper {
          overflow-x: auto;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .flow-track {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 100%;
        }
        @media (min-width: 860px) {
          .flow-track {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            min-width: 780px;
          }
        }
        .flow-node-btn {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.75rem 0.6rem;
          cursor: pointer;
          transition: var(--transition-fast);
          text-align: left;
          position: relative;
        }
        @media (min-width: 860px) {
          .flow-node-btn {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
            padding: 0.85rem 0.65rem;
          }
        }
        .flow-node-btn:hover {
          background: var(--bg-surface-elevated);
          border-color: var(--border-accent);
          transform: translateY(-2px);
        }
        .flow-node-btn.active {
          background: var(--bg-surface-elevated);
          border-color: var(--accent-light);
          box-shadow: 0 4px 16px var(--accent-glow);
        }
        .flow-node-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-xs);
          background: var(--bg-card);
          color: var(--text-highlight);
          border: 1px solid var(--border);
        }
        .flow-node-btn.active .flow-node-icon {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .flow-node-meta {
          display: flex;
          flex-direction: column;
        }
        .flow-node-num {
          font-size: 0.62rem;
          color: var(--text-muted);
        }
        .flow-node-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }
        .flow-node-tech {
          font-size: 0.65rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .active-pip {
          position: absolute;
          bottom: -1px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: var(--accent-light);
        }
        .flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--border-accent);
        }
        .arrow-icon-desktop {
          display: none;
        }
        .arrow-icon-mobile {
          display: block;
        }
        @media (min-width: 860px) {
          .arrow-icon-desktop {
            display: block;
          }
          .arrow-icon-mobile {
            display: none;
          }
        }
        .step-inspector-box {
          background: var(--terminal-body);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .inspector-topbar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .stage-badge {
          font-size: 0.65rem;
          color: var(--text-highlight);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.2rem;
        }
        .stage-heading {
          font-size: 1.15rem;
          color: var(--text-primary);
        }
        .protocol-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          background: var(--bg-surface);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }
        .inspector-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .inspector-content-grid {
            grid-template-columns: 1.4fr 1fr;
          }
        }
        .inspector-action-bar {
          font-size: 0.75rem;
          background: var(--terminal-header);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-xs);
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .inspector-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .inspector-tech-box {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1rem;
        }
        .inspector-box-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.6rem;
          letter-spacing: 0.08em;
        }
        .tech-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pipeline-footer-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }
        .pipe-foot-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
      `}</style>
    </section>
  );
}
