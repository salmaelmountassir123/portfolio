import React, { useState } from 'react';
import { ShoppingBag, Database, Check, Plus, Minus, Lock, Server } from 'lucide-react';

export default function ECommerceVisual() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Architectural Technical Watch', price: 280, qty: 1, stock: 12 },
    { id: 2, name: 'Minimalist Titanium Pen', price: 95, qty: 2, stock: 24 }
  ]);
  const [apiActive, setApiActive] = useState(false);

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, Math.min(item.stock, item.qty + delta));
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
    setApiActive(true);
    setTimeout(() => setApiActive(false), 500);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="ecom-visual-card">
      {/* Top Header */}
      <div className="ecom-topbar">
        <div className="font-mono text-xs text-highlight flex-items-center gap-2">
          <ShoppingBag size={14} />
          <span>E-COMMERCE // LARAVEL REST API & MYSQL</span>
        </div>
        <div className="font-mono text-xs flex-items-center gap-2">
          <span className={`status-pill ${apiActive ? 'active' : ''}`}>
            {apiActive ? 'POST /api/cart/sync' : 'REST API IDLE'}
          </span>
        </div>
      </div>

      {/* Main Grid: Catalog Cart & Backend API Inspector */}
      <div className="ecom-grid">
        {/* Cart items */}
        <div className="ecom-cart-box">
          <div className="ecom-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-row">
                <div className="item-meta">
                  <span className="item-name font-mono">{item.name}</span>
                  <span className="item-price font-mono">${item.price} · In Stock: {item.stock}</span>
                </div>
                <div className="qty-controls font-mono">
                  <button onClick={() => updateQty(item.id, -1)} className="qty-btn"><Minus size={11} /></button>
                  <span className="qty-val">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="qty-btn"><Plus size={11} /></button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total-row font-mono">
              <span>SUBTOTAL:</span>
              <strong className="text-highlight">${total}.00 USD</strong>
            </div>
            <div className="security-tag font-mono">
              <Lock size={11} className="text-highlight" />
              <span>Laravel Sanctum Auth & CSRF Protected</span>
            </div>
          </div>
        </div>

        {/* Laravel API & MySQL Console */}
        <div className="ecom-api-box font-mono">
          <div className="api-route-header">
            <Server size={12} className="text-highlight" />
            <span>LARAVEL REST CONTROLLER</span>
          </div>

          <pre className="api-code-block">
{`// App\\Http\\Controllers\\CartController.php
public function syncCart(Request $request) {
  $validated = $request->validate([
    'items' => 'required|array',
    'total' => 'required|numeric'
  ]);
  
  // MySQL Transaction
  DB::transaction(function() use ($validated) {
    Order::recordAudit($validated);
  });
  
  return response()->json([
    'status' => 200,
    'total_sync' => ${total}
  ]);
}`}
          </pre>

          <div className="db-badge-row">
            <span className="db-badge">
              <Database size={10} /> MySQL Relational Integrity
            </span>
            <span className="db-badge">
              <Check size={10} /> ACID Safe
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .ecom-visual-card {
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }
        .ecom-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1rem;
        }
        .flex-items-center {
          display: flex;
          align-items: center;
        }
        .status-pill {
          padding: 2px 7px;
          border-radius: var(--radius-xs);
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.65rem;
          transition: var(--transition-fast);
        }
        .status-pill.active {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent);
        }
        .ecom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .ecom-grid {
            grid-template-columns: 1.15fr 1fr;
          }
        }
        .ecom-cart-box {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .ecom-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .cart-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .item-meta {
          display: flex;
          flex-direction: column;
        }
        .item-name {
          font-size: 0.72rem;
          color: var(--text-primary);
        }
        .item-price {
          font-size: 0.65rem;
          color: var(--text-muted);
        }
        .qty-controls {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .qty-btn {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          color: var(--text-primary);
          border-radius: 2px;
          cursor: pointer;
        }
        .qty-btn:hover {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .qty-val {
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 14px;
          text-align: center;
        }
        .cart-footer {
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.4rem;
        }
        .security-tag {
          font-size: 0.62rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .ecom-api-box {
          background: var(--terminal-body);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .api-route-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.68rem;
          color: var(--text-highlight);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.4rem;
          margin-bottom: 0.5rem;
        }
        .api-code-block {
          font-size: 0.63rem;
          color: var(--code-token-blue);
          line-height: 1.35;
          overflow-x: auto;
        }
        .db-badge-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.6rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border-subtle);
        }
        .db-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.62rem;
          color: var(--text-secondary);
          background: var(--badge-bg);
          padding: 2px 6px;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
