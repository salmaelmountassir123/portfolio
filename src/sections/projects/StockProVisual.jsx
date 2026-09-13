import React, { useState } from 'react';
import { Network, Shield, Package, Truck, ArrowUpDown, BarChart3, Radio, RefreshCw, Maximize2, X } from 'lucide-react';

const screenshots = [
  { id: 'dashboard', label: 'Dashboard', image: '/assets/Stockpro/dashboard.png', caption: 'Overview of stock value, low-stock alerts, and recent product movements.' },
  { id: 'products', label: 'Gestion des produits', image: '/assets/Stockpro/products.png', caption: 'Product catalog with search, filters, pricing, and supplier assignment.' },
  { id: 'reports', label: 'Rapports', image: '/assets/Stockpro/reports.png', caption: 'Stock value by category, status breakdown, and inbound/outbound movement trends.' }
];

export default function StockProVisual() {
  const [selectedService, setSelectedService] = useState('gateway');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeShotId, setActiveShotId] = useState(screenshots[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeShot = screenshots.find((s) => s.id === activeShotId);

  const services = [
    {
      id: 'auth',
      name: 'AUTH SERVICE',
      port: ':8001',
      icon: Shield,
      payload: '{ "token": "JWT.ey...", "role": "WAREHOUSE_ADMIN", "status": "VERIFIED" }',
      latency: '14ms'
    },
    {
      id: 'products',
      name: 'PRODUCTS SERVICE',
      port: ':8002',
      icon: Package,
      payload: '{ "sku_count": 1420, "low_stock_alerts": 8, "sync": "ACTIVE" }',
      latency: '19ms'
    },
    {
      id: 'suppliers',
      name: 'SUPPLIERS SERVICE',
      port: ':8003',
      icon: Truck,
      payload: '{ "active_vendors": 34, "pending_orders": 5, "rating": "A+" }',
      latency: '12ms'
    },
    {
      id: 'movements',
      name: 'MOVEMENTS AUDIT',
      port: ':8004',
      icon: ArrowUpDown,
      payload: '{ "tx_id": "TX-9402", "delta": "+250 units", "integrity": "ACID_OK" }',
      latency: '22ms'
    },
    {
      id: 'dashboard',
      name: 'ANALYTICS ENGINE',
      port: ':8005',
      icon: BarChart3,
      payload: '{ "turnover_rate": "94.2%", "replenishment_eta": "48h" }',
      latency: '28ms'
    }
  ];

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 800);
  };

  const activeData = services.find((s) => s.id === selectedService) || {
    id: 'gateway',
    name: 'API GATEWAY CLUSTER',
    port: ':8000',
    payload: '{ "upstream": "Client App", "protocol": "HTTP/2", "auth_check": true, "routed_services": 5 }',
    latency: '8ms'
  };

  return (
    <div className="stockpro-showcase-stack">
    <div className="stockpro-visual-box">
      {/* Top Bar */}
      <div className="box-topbar">
        <div className="box-title font-mono">
          <Network size={14} className="text-highlight" />
          <span>MICROSERVICES TOPOLOGY // 6 SERVICES</span>
        </div>
        <button
          onClick={triggerSimulation}
          className={`btn-sync font-mono ${isSimulating ? 'syncing' : ''}`}
          title="Simulate Route Request"
        >
          <RefreshCw size={12} />
          <span>{isSimulating ? 'ROUTING...' : 'DISPATCH REQUEST'}</span>
        </button>
      </div>

      {/* Interactive Topology Container */}
      <div className="topology-interactive">
        {/* Central Gateway */}
        <div
          className={`gateway-node ${selectedService === 'gateway' ? 'active' : ''}`}
          onClick={() => setSelectedService('gateway')}
        >
          <div className="gw-indicator">
            <Radio size={14} className="animate-signal text-highlight" />
            <span className="font-mono text-xs">CENTRAL INGRESS</span>
          </div>
          <div className="gw-title font-display">API GATEWAY</div>
          <div className="gw-meta font-mono">:8000 · JWT & RATE LIMITER</div>
        </div>

        {/* Microservices Matrix */}
        <div className="microservices-grid">
          {services.map((srv) => {
            const Icon = srv.icon;
            const isSelected = selectedService === srv.id;
            return (
              <div
                key={srv.id}
                className={`srv-node ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedService(srv.id)}
              >
                <div className="srv-header">
                  <div className="srv-icon">
                    <Icon size={14} />
                  </div>
                  <span className="srv-status-dot"></span>
                </div>
                <div className="srv-name font-mono">{srv.name}</div>
                <div className="srv-port font-mono">{srv.port} · {srv.latency}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal Payload Inspector */}
      <div className="payload-inspector font-mono">
        <div className="inspector-line">
          <span className="text-highlight">UPSTREAM:</span> API_GATEWAY:8000 ➔ <span className="text-white">{activeData.name}</span> ({activeData.port})
        </div>
        <div className="inspector-response">
          <span className="text-muted">// Response Payload:</span>
          <pre className="json-code">{activeData.payload}</pre>
        </div>
      </div>
    </div>

    {/* Real Application Screenshots */}
    <div className="stockpro-gallery">
      <div className="stockpro-gallery-tabs font-mono">
        {screenshots.map((shot) => (
          <button
            key={shot.id}
            onClick={() => setActiveShotId(shot.id)}
            className={`stockpro-tab ${activeShotId === shot.id ? 'active' : ''}`}
          >
            {shot.label}
          </button>
        ))}
      </div>

      <button
        className="stockpro-image-button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Enlarge ${activeShot.label} screenshot`}
      >
        <img src={activeShot.image} alt={`${activeShot.label} — StockPro app`} loading="lazy" />
        <span className="stockpro-zoom-hint">
          <Maximize2 size={13} />
          <span>Enlarge</span>
        </span>
      </button>
      <p className="stockpro-caption">{activeShot.caption}</p>

      {lightboxOpen && (
        <div className="stockpro-lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="stockpro-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
          <img
            src={activeShot.image}
            alt={`${activeShot.label} — enlarged`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>

      <style>{`
        .stockpro-showcase-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .stockpro-visual-box {
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }
        .box-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1rem;
        }
        .box-title {
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }
        .btn-sync {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 3px 8px;
          background: var(--accent-soft);
          border: 1px solid var(--border-accent);
          color: var(--text-highlight);
          border-radius: var(--radius-xs);
          font-size: 0.68rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-sync:hover {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .syncing svg {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .topology-interactive {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .gateway-node {
          background: var(--bg-surface);
          border: 1px solid var(--border-accent-strong);
          border-radius: var(--radius-xs);
          padding: 0.75rem 1rem;
          text-align: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .gateway-node:hover,
        .gateway-node.active {
          background: var(--bg-surface-elevated);
          box-shadow: 0 0 16px var(--accent-glow);
          border-color: var(--accent-light);
        }
        .gw-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          color: var(--text-highlight);
        }
        .gw-title {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin: 0.25rem 0;
          color: var(--text-primary);
        }
        .gw-meta {
          font-size: 0.68rem;
          color: var(--text-secondary);
        }
        .microservices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }
        @media (min-width: 500px) {
          .microservices-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .srv-node {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.6rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .srv-node:hover,
        .srv-node.active {
          background: var(--bg-surface-elevated);
          border-color: var(--accent-light);
          transform: translateY(-2px);
        }
        .srv-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.35rem;
        }
        .srv-icon {
          color: var(--text-highlight);
        }
        .srv-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #27C93F;
        }
        .srv-name {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .srv-port {
          font-size: 0.6rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .payload-inspector {
          background: var(--terminal-body);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.75rem 1rem;
          font-size: 0.72rem;
        }
        .inspector-line {
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
          padding-bottom: 0.3rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .text-white { color: var(--text-primary); font-weight: 600; }
        .json-code {
          color: var(--code-token-green);
          font-size: 0.68rem;
          margin-top: 0.2rem;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .stockpro-gallery {
          background: var(--terminal-body, var(--bg-card));
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .stockpro-gallery-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .stockpro-tab {
          padding: 4px 10px;
          font-size: 0.65rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-xs);
          cursor: pointer;
          white-space: nowrap;
        }
        .stockpro-tab.active {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent);
        }
        .stockpro-image-button {
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
        .stockpro-image-button img {
          display: block;
          width: 100%;
          height: auto;
        }
        .stockpro-zoom-hint {
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
        .stockpro-caption {
          margin-top: 0.65rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .stockpro-lightbox {
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
        .stockpro-lightbox img {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          cursor: default;
        }
        .stockpro-lightbox-close {
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
