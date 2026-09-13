import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, User, Users, ShieldCheck, Sparkles } from 'lucide-react';

export default function HajzVisual() {
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedSlot, setSelectedSlot] = useState('14:30');
  const [guestsCount, setGuestsCount] = useState(2);
  const [booked, setBooked] = useState(false);

  const slots = [
    { time: '10:00', available: true },
    { time: '11:30', available: false },
    { time: '13:00', available: true },
    { time: '14:30', available: true },
    { time: '16:00', available: false },
    { time: '17:30', available: true }
  ];

  const handleBooking = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 3500);
  };

  return (
    <div className="hajz-visual-card">
      {/* Booking Platform Preview Header */}
      <div className="hajz-topbar">
        <div className="font-mono text-xs text-highlight flex-center gap-2">
          <Calendar size={14} />
          <span>HAJZ // RESERVATION ENGINE & REDUX STATE</span>
        </div>
        <span className="font-mono text-xs text-muted">STATE: REDUX_SYNCED</span>
      </div>

      {/* Interactive Booking Module */}
      <div className="hajz-interactive-grid">
        {/* Left: Slot & Booking Controls */}
        <div className="hajz-form-panel">
          <div className="form-group">
            <label className="form-label font-mono">
              <Calendar size={12} /> SELECT RESERVATION DATE
            </label>
            <div className="date-pill-row font-mono">
              {['14 SEP', '15 SEP (TODAY)', '16 SEP'].map((d, i) => (
                <button
                  key={i}
                  className={`date-pill ${i === 1 ? 'active' : ''}`}
                  onClick={() => {}}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label font-mono">
              <Clock size={12} /> TIME SLOTS (DYNAMIC AVAILABILITY)
            </label>
            <div className="slots-grid">
              {slots.map((s, i) => (
                <button
                  key={i}
                  disabled={!s.available}
                  onClick={() => setSelectedSlot(s.time)}
                  className={`slot-btn font-mono ${selectedSlot === s.time ? 'selected' : ''} ${!s.available ? 'disabled' : ''}`}
                >
                  <span>{s.time}</span>
                  <span className="slot-badge">{s.available ? 'FREE' : 'BOOKED'}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <div className="guests-row font-mono">
              <label className="form-label">
                <Users size={12} /> GUESTS: <strong className="text-highlight">{guestsCount}</strong>
              </label>
              <div className="counter-btns">
                <button
                  onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                  className="count-btn"
                >
                  -
                </button>
                <button
                  onClick={() => setGuestsCount(Math.min(8, guestsCount + 1))}
                  className="count-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleBooking}
            className={`btn-reserve font-mono ${booked ? 'booked' : ''}`}
          >
            {booked ? (
              <>
                <CheckCircle2 size={14} />
                <span>CONFIRMED IN REDUX STORE</span>
              </>
            ) : (
              <>
                <Sparkles size={14} />
                <span>SIMULATE DISPATCH RESERVATION</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Redux Store State Inspector */}
        <div className="redux-inspector-panel font-mono">
          <div className="redux-header">
            <span>REDUX TOOLKIT STORE // bookingSlice.js</span>
          </div>
          <pre className="redux-state-tree">
{`{
  "booking": {
    "slot": "${selectedSlot}",
    "date": "2026-09-15",
    "guests": ${guestsCount},
    "status": "${booked ? 'CONFIRMED' : 'DRAFT'}",
    "collisionSafe": true,
    "lastAction": "${booked ? 'booking/createReservation/fulfilled' : 'booking/setSlot'}"
  }
}`}
          </pre>
          <div className="redux-features">
            <div className="redux-feat-item">
              <CheckCircle2 size={11} className="text-highlight" />
              <span>Optimistic State Updates</span>
            </div>
            <div className="redux-feat-item">
              <CheckCircle2 size={11} className="text-highlight" />
              <span>Zero Re-render Overheads</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hajz-visual-card {
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }
        .hajz-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1rem;
        }
        .flex-center {
          display: flex;
          align-items: center;
        }
        .gap-2 { gap: 0.5rem; }
        .hajz-interactive-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .hajz-interactive-grid {
            grid-template-columns: 1.3fr 1fr;
          }
        }
        .hajz-form-panel {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          letter-spacing: 0.05em;
        }
        .date-pill-row {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .date-pill {
          padding: 4px 8px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-secondary);
          font-size: 0.65rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .date-pill.active {
          background: var(--burgundy);
          color: #F2E9E4;
          border-color: var(--accent);
        }
        .slots-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }
        .slot-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px 4px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          font-size: 0.72rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .slot-btn:hover:not(.disabled) {
          border-color: var(--accent-light);
          background: var(--bg-surface-elevated);
        }
        .slot-btn.selected {
          background: var(--burgundy);
          border-color: var(--accent);
          color: #F2E9E4;
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .slot-btn.disabled {
          opacity: 0.35;
          cursor: not-allowed;
          background: transparent;
        }
        .slot-badge {
          font-size: 0.55rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .slot-btn.selected .slot-badge {
          color: #E8A598;
        }
        .guests-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
          padding: 6px 10px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border);
        }
        .counter-btns {
          display: flex;
          gap: 4px;
        }
        .count-btn {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          color: var(--text-primary);
          border-radius: 2px;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .count-btn:hover {
          background: var(--burgundy);
          color: #F2E9E4;
        }
        .btn-reserve {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 8px 12px;
          background: var(--burgundy);
          color: #F2E9E4;
          border: 1px solid var(--accent);
          border-radius: var(--radius-xs);
          font-size: 0.72rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-reserve:hover {
          background: var(--accent);
        }
        .btn-reserve.booked {
          background: #1E6B3E;
          border-color: #27C93F;
        }
        .redux-inspector-panel {
          background: var(--terminal-body);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .redux-header {
          font-size: 0.65rem;
          color: var(--text-highlight);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.4rem;
          margin-bottom: 0.5rem;
        }
        .redux-state-tree {
          font-size: 0.68rem;
          color: var(--code-token-green);
          white-space: pre-wrap;
          line-height: 1.4;
        }
        .redux-features {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border-subtle);
          margin-top: 0.6rem;
        }
        .redux-feat-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
