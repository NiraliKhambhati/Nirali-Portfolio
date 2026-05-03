// ── View: Footer ──
import React from 'react';
import { siteConfig } from '../data';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__name">{siteConfig.name}</span>
        <span className="footer__trail">
          🇮🇳 India <span className="footer__sep">→</span>
          🇨🇦 Canada <span className="footer__sep">→</span>
          <span className="footer__current">🇺🇸 Boston</span>
          <span className="footer__year">· {year}</span>
        </span>
      </div>
    </footer>
  );
}
