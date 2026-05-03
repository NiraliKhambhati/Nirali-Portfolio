// ── View: Navbar ──
import React from 'react';
import { siteConfig } from '../data';
import { useNavbar } from '../hooks/useNavbar';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar();

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-text">Nirali Khambhati</span>
          {siteConfig.openToWork && (
            <span className="navbar__badge">Open to work</span>
          )}
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__link">{label}</a>
            </li>
          ))}
        </ul>

        <a
          href="/Nirali_Khambhati_Resume.pdf"
          download
          className="navbar__resume-btn"
        >
          Download Resume 📄
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className="navbar__drawer-link" onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          href="/Nirali_Khambhati_Resume.pdf"
          download
          className="navbar__drawer-link navbar__drawer-resume"
          onClick={closeMenu}
        >
          📄 Download Resume
        </a>
      </div>
    </nav>
  );
}
