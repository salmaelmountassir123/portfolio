import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "elmountassirsalma12@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="container">
        {/* Editorial Dark Navy Contact Banner Card */}
        <div className="contact-banner-card">
          {/* Decorative Right Wave SVG & Accent */}
          <div className="contact-wave-bg" aria-hidden="true">
            <svg
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="wave-svg"
            >
              <path
                d="M300 400C320 300 450 220 500 120C540 40 580 20 600 0V400H300Z"
                fill="url(#wave-grad-1)"
                opacity="0.15"
              />
              <path
                d="M350 400C370 280 480 200 520 90C550 20 590 10 600 0"
                stroke="url(#wave-grad-2)"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <path
                d="M400 400C410 320 490 260 540 160C570 90 590 40 600 0"
                stroke="url(#wave-grad-2)"
                strokeWidth="1"
                opacity="0.3"
              />
              <path
                d="M250 400C300 310 430 240 480 140C520 60 570 30 600 10"
                stroke="url(#wave-grad-2)"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="wave-grad-1" x1="600" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0066FF" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#0066FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wave-grad-2" x1="600" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38BDF8" />
                  <stop offset="1" stopColor="#0066FF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="wave-text-accent">
              <span>Better</span>
              <span className="indent-1">Things</span>
              <span className="indent-2">Ahead ✨</span>
            </div>
          </div>

          {/* Left / Main Contact Content */}
          <div className="contact-card-content">
            <span className="contact-tag font-mono">CONTACT</span>

            <h2 className="contact-title font-display">
              Let's Work Together
            </h2>

            <p className="contact-subtitle">
              Have a project in mind or just want to connect? I'd love to hear from you.
            </p>

            {/* Email Box */}
            <div className="contact-info-boxes">
              <div className="contact-info-pill">
                <div className="info-icon-wrap">
                  <Mail size={16} />
                </div>
                <div className="info-text-wrap">
                  <span className="info-label font-mono">Email</span>
                  <a href={`mailto:${email}`} className="info-val font-mono">
                    {email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Box */}
              <div className="contact-info-pill">
                <div className="info-icon-wrap">
                  <MapPin size={16} />
                </div>
                <div className="info-text-wrap">
                  <span className="info-label font-mono">Location</span>
                  <span className="info-val">Fès, Morocco</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Socials & Get In Touch CTA */}
            <div className="contact-actions-row">
              <div className="contact-social-icons">
                <a
                  href="https://github.com/elmountassirsalma12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>

              <a
                href={`mailto:${email}`}
                className="btn btn-primary contact-cta-btn"
                id="contact-get-in-touch-btn"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-primary);
          position: relative;
        }
        .contact-banner-card {
          background: #0B1120;
          color: #F8FAFC;
          border-radius: var(--radius-xl);
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        @media (min-width: 768px) {
          .contact-banner-card {
            padding: 3.5rem 3.5rem;
          }
        }
        .contact-wave-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 50%;
          pointer-events: none;
          display: none;
        }
        @media (min-width: 768px) {
          .contact-wave-bg {
            display: block;
          }
        }
        .wave-svg {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .wave-text-accent {
          position: absolute;
          top: 40%;
          right: 8%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.25;
          text-shadow: 0 0 20px rgba(0, 102, 255, 0.5);
        }
        .indent-1 {
          margin-left: 1.5rem;
          color: #38BDF8;
        }
        .indent-2 {
          margin-left: 3rem;
          color: #60A5FA;
        }
        .contact-card-content {
          position: relative;
          z-index: 1;
          max-width: 540px;
        }
        .contact-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: #60A5FA;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }
        .contact-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }
        .contact-subtitle {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .contact-info-boxes {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }
        .contact-info-pill {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1.1rem;
          gap: 0.85rem;
          transition: var(--transition-fast);
        }
        .contact-info-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(59, 130, 246, 0.4);
        }
        .info-icon-wrap {
          color: #60A5FA;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-text-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .info-label {
          font-size: 0.65rem;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .info-val {
          font-size: 0.85rem;
          color: #F8FAFC;
          font-weight: 500;
        }
        .copy-btn {
          color: #94A3B8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 4px;
          transition: var(--transition-fast);
        }
        .copy-btn:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.1);
        }
        .text-green {
          color: #10B981;
        }
        .contact-actions-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }
        .contact-social-icons {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .social-icon-btn:hover {
          color: #FFFFFF;
          background: #0066FF;
          border-color: #0066FF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.4);
        }
        .contact-cta-btn {
          background-color: #0066FF;
          border-color: #0066FF;
          color: #FFFFFF;
          padding: 0.75rem 1.6rem;
          border-radius: var(--radius-sm);
        }
        .contact-cta-btn:hover {
          background-color: #0052CC;
          border-color: #0052CC;
        }
      `}</style>
    </section>
  );
}
