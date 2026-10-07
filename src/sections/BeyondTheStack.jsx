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
  const [selectedStep, setSelectedStep] = useState(2); // Default to API Gateway

  const flowSteps = [
    {
      id: 'user',
      label: 'USER',
      subtitle: 'Client Interaction',
      tech: 'Browser / Mobile Client',
      icon: Users,
      action: 'Triggers HTTP action or UI state change',
      detail: 'Initiates user interaction, form input, or data request from modern web interface.',
      protocol: 'HTTPS / TLS 1.3'
    },
    {
      id: 'frontend',
      label: 'FRONTEND',
      subtitle: 'Reactive Interface',
      tech: 'React.js · Redux Toolkit · Vite',
      icon: Layout,
      action: 'State dispatch & optimistic UI update',
      detail: 'Validates inputs, manages component lifecycle, handles client-side caching, and formats payload.',
      protocol: 'DOM Events / Axios Interceptor'
    },
    {
      id: 'api',
      label: 'API GATEWAY',
      subtitle: 'Traffic & Security',
      tech: 'REST API · JWT · Sanctum',
      icon: Network,
      action: 'Bearer token validation & routing',
      detail: 'Authenticates authorization headers, applies rate limits, and routes payload to target microservice or controller.',
      protocol: 'RESTful JSON / CORS Policy'
    },
    {
      id: 'backend',
      label: 'BACKEND',
      subtitle: 'Business Engine',
      tech: 'Django · Laravel · Node.js · Python',
      icon: Server,
      action: 'Business rules & query execution',
      detail: 'Executes domain logic, verifies permissions with role-based middleware, and coordinates transactions.',
      protocol: 'Async Worker / MVC Controllers'
    },
    {
      id: 'database',
      label: 'DATABASE',
      subtitle: 'Persistence Layer',
      tech: 'MySQL · MongoDB · Mongoose',
      icon: Database,
      action: 'Atomic storage & index queries',
      detail: 'Guarantees ACID transactional compliance in MySQL or fast flexible document retrieval in MongoDB.',
      protocol: 'TCP / Connection Pooling'
    },
    {
      id: 'server',
      label: 'SERVER',
      subtitle: 'Runtime Environment',
      tech: 'Node.js · Django (Dev & Deployment)',
      icon: Terminal,
      action: 'Process runtime & API serving',
      detail: 'Runs the application backend process and serves API requests during development and deployment testing.',
      protocol: 'HTTP / Process Runtime'
    },
    {
      id: 'it',
      label: 'IT ASSET LAYER',
      subtitle: 'Equipment & Assignments',
      tech: 'Custom Asset Tracking · GLPI (basics)',
      icon: ShieldCheck,
      action: 'Equipment tracking & assignment history',
      detail: 'Tracks corporate hardware inventory and employee-equipment assignments, with basic hands-on exposure to GLPI\'s inventory and ticketing modules.',
      protocol: 'REST API / GLPI Inventory'
    }
  ];

  const current = flowSteps[selectedStep];

  return (
    <section className="section-wrapper beyond-section" id="systems-architecture">
      <div className="container">
        <SectionHeader
          eyebrow="SYSTEMS ARCHITECTURE"
          title="End-to-End Systems Thinking"
          subtitle="A holistic understanding from the client-side pixel to the database and internal IT asset management tooling."
        />

        {/* Interactive Architecture Pipeline Card */}
        <div className="pipeline-card">
          <div className="pipeline-header">
            <div className="pipeline-title font-mono">
              <Activity size={16} className="text-accent" />
              <span>DATAFLOW PIPELINE INSPECTOR</span>
            </div>
            <span className="font-mono text-xs text-muted">CLICK ANY STAGE TO INSPECT</span>
          </div>

          {/* Flow Track */}
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
                        <span className="flow-node-label">{step.label}</span>
                        <span className="flow-node-tech font-mono">{step.tech.split('·')[0]}</span>
                      </div>
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
                <h4 className="stage-heading font-display">{current.label} — {current.subtitle}</h4>
              </div>
              <div className="protocol-badge font-mono">
                <Zap size={12} className="text-accent" />
                <span>{current.protocol}</span>
              </div>
            </div>

            <div className="inspector-content-grid">
              <div className="inspector-main">
                <div className="inspector-action-bar font-mono">
                  <span className="text-accent font-semibold">OPERATION:</span> {current.action}
                </div>
                <p className="inspector-desc">{current.detail}</p>
              </div>

              <div className="inspector-tech-box">
                <span className="inspector-box-label font-mono">CONNECTED TECHNOLOGIES</span>
                <div className="tech-pills-row">
                  {current.tech.split('·').map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Connectivity Highlights */}
          <div className="pipeline-footer-bar">
            <div className="pipe-foot-item">
              <CheckCircle2 size={14} className="text-accent" />
              <span>Full-Stack Development (React · Django · Laravel · Node · Python)</span>
            </div>
            <div className="pipe-foot-item">
              <CheckCircle2 size={14} className="text-accent" />
              <span>Data Persistence (MySQL · MongoDB)</span>
            </div>
            <div className="pipe-foot-item">
              <CheckCircle2 size={14} className="text-accent" />
              <span>IT Asset Management (Custom Platform · GLPI Exposure)</span>
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
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
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
          font-weight: 700;
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
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.6rem;
          cursor: pointer;
          transition: var(--transition-fast);
          text-align: left;
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
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .flow-node-btn.active {
          background: var(--bg-surface);
          border-color: var(--accent);
          box-shadow: 0 4px 14px rgba(0, 102, 255, 0.2);
        }
        .flow-node-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-xs);
          background: var(--badge-bg);
          color: var(--accent);
        }
        .flow-node-btn.active .flow-node-icon {
          background: var(--accent);
          color: #FFFFFF;
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
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .flow-node-tech {
          font-size: 0.65rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
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
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .inspector-topbar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .stage-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.2rem;
        }
        .stage-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .protocol-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
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
          font-size: 0.78rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-xs);
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .inspector-desc {
          font-size: 0.9rem;
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
          font-weight: 700;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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
          font-size: 0.8rem;
          color: var(--text-secondary);
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .pipe-foot-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .text-xs { font-size: 0.75rem; }
        .text-muted { color: var(--text-muted); }
      `}</style>
    </section>
  );
}
