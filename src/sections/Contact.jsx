import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

// TODO: replace with the real LinkedIn profile URL before final deployment.
const LINKEDIN_URL = "";

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
      {/* Background Wine Glow */}
      <div className="contact-ambient-glow"></div>

      <div className="container">
        <div className="contact-editorial-card">
          <div className="contact-eyebrow font-mono">
            <Sparkles size={14} className="text-highlight" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="contact-headline font-display">
            LET'S BUILD <br />
            <span className="text-gradient-wine">SOMETHING</span> <br />
            <span className="font-serif italic font-normal">USEFUL.</span>
          </h2>

          <p className="contact-subtitle">
            Have an idea, a project or an opportunity? I am currently open to full-time roles, internships, and ambitious engineering collaborations.
          </p>

          {/* Interactive Direct Email Card */}
          <div className="contact-email-box">
            <div className="email-meta font-mono">
              <Mail size={16} className="text-highlight" />
              <span className="email-address">{email}</span>
            </div>

            <div className="email-actions">
              <button
                onClick={copyEmail}
                className="btn btn-secondary btn-sm"
                id="copy-email-btn"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${email}`}
                className="btn btn-primary btn-sm"
                id="mailto-btn"
              >
                <Send size={14} />
                <span>LET'S TALK</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials-row font-mono">
            <a
              href={LINKEDIN_URL || "#"}
              target={LINKEDIN_URL ? "_blank" : undefined}
              rel={LINKEDIN_URL ? "noopener noreferrer" : undefined}
              className="social-btn"
              id="contact-linkedin"
              title={LINKEDIN_URL ? undefined : "LinkedIn URL not set yet"}
              aria-disabled={!LINKEDIN_URL}
              onClick={(e) => { if (!LINKEDIN_URL) e.preventDefault(); }}
            >
              <LinkedinIcon size={15} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={13} className="social-arrow" />
            </a>

            <a
              href="https://github.com/elmountassirsalma12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              id="contact-github"
            >
              <GithubIcon size={15} />
              <span>GITHUB</span>
              <ArrowUpRight size={13} className="social-arrow" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
          padding-bottom: 8rem;
        }
        .contact-ambient-glow {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
          filter: blur(50px);
        }
        .contact-editorial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-sm);
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-lg);
          position: relative;
          z-index: 1;
        }
        @media (min-width: 768px) {
          .contact-editorial-card {
            padding: 5rem 4rem;
          }
        }
        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          color: var(--text-highlight);
          margin-bottom: 1.5rem;
        }
        .contact-headline {
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }
        .contact-subtitle {
          font-size: clamp(1rem, 1.4vw, 1.2rem);
          color: var(--text-secondary);
          max-width: 580px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }
        .contact-email-box {
          background: var(--terminal-body);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          margin-bottom: 2.5rem;
          width: 100%;
          max-width: 580px;
        }
        @media (min-width: 600px) {
          .contact-email-box {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        .email-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-primary);
        }
        .email-address {
          word-break: break-all;
        }
        .email-actions {
          display: flex;
          gap: 0.5rem;
        }
        .text-green {
          color: #27C93F;
        }
        .contact-socials-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-size: 0.78rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .social-btn:hover {
          background: var(--burgundy);
          border-color: var(--accent);
          color: #F2E9E4;
          transform: translateY(-2px);
        }
        .social-arrow {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .social-btn:hover .social-arrow {
          color: #F2E9E4;
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}
