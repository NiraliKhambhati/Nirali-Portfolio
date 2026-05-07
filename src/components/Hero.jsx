// ── View: Hero ──
import React from 'react';
import { heroData, statsData, siteConfig } from '../data';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <HeroCanvas />
      <div className="hero__inner container" style={{ position: 'relative', zIndex: 1 }}>
        {/* LEFT TOP — items 1-4 */}
        <div className="hero__left">
          <p className="hero__greeting">Hey! Nirali here, welcome to my little corner of the internet! 👋✨</p>
          <p className="hero__kicker">{heroData.kicker}</p>

          <h1 className="hero__headline">
            <span className="hero__headline-1">{heroData.headline1}</span>
            <em className="hero__headline-2">{heroData.headline2}</em>
          </h1>

          <p className="hero__lead">{heroData.lead}</p>
        </div>

        {/* RIGHT — items 5-6 (order:0 overrides the CSS order:-1 that fires at ≤900px) */}
        <div className="hero__right" style={{ order: 0 }}>
          <div className="hero__stats">
            {statsData.map((s, i) => (
              <div key={i} className="hero__stat">
                <p className="hero__stat-n">{s.number}</p>
                <p className="hero__stat-l">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT BOTTOM — items 7-8, sits under left column on desktop */}
        <div className="hero__left">
          {/* Transition steps */}
          <div className="hero__transition">
            {heroData.transitionSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className={`hero__t-step ${step.active ? 'hero__t-step--active' : ''}`}>
                  <div className="hero__t-icon">{step.icon}</div>
                  <div className="hero__t-label">{step.label}</div>
                  <div className="hero__t-date">{step.date}</div>
                </div>
                {i < heroData.transitionSteps.length - 1 && (
                  <span className="hero__t-arrow">
                    <span className="hero__t-arrow--h">→</span>
                    <span className="hero__t-arrow--v">↓</span>
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="hero__ctas">
            <a href="#journey" className="btn btn-teal">See full journey</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
            <a href="/Nirali_Khambhati_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="hero__divider container" />
    </section>
  );
}
