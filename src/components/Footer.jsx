// ── View: Footer ──
import React from 'react';
import { siteConfig } from '../data';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Row 1 — name + journey trail */}
        <div className="footer__row">
          <span className="footer__name">{siteConfig.name}</span>
          <span className="footer__trail">
            🇮🇳 India <span className="footer__sep">→</span>
            🇨🇦 Canada <span className="footer__sep">→</span>
            <span className="footer__current">🇺🇸 Boston</span>
            <span className="footer__year">· {year}</span>
          </span>
        </div>

        {/* Row 2 — live site + tech credit */}
        <div className="footer__row">
          <a
            href="https://nirali-khambhati.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="footer__live"
          >
            🌐 Live Site: nirali-khambhati.netlify.app
          </a>
          <span className="footer__credit">
            Built with React · Deployed on Netlify ·{' '}
            <a
              href="https://github.com/NiraliKhambhati/nirali-portfolio"
              target="_blank"
              rel="noreferrer"
              className="footer__gh"
            >
              View on GitHub ↗
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
