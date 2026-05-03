// ── View: Journey ──
// Clicking a transition step filters the timeline to that phase
import React, { useState } from 'react';
import { journeyData, heroData } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Journey.css';

const PHASE_COLORS = {
  dentist:     { color: '#7C6A52', bg: '#FFF3E0', border: '#D4B896' },
  healthadmin: { color: '#1A7A52', bg: '#E4F4EC', border: '#8ECFB0' },
  analyst:     { color: '#0A7A7E', bg: '#E2F4F5', border: '#7ACDD0' },
};

export default function Journey() {
  const ref = useReveal();
  const [activePhase, setActivePhase] = useState(null);

  const handleStepClick = (phase) => {
    setActivePhase(prev => prev === phase ? null : phase);
  };

  const visibleItems = activePhase
    ? journeyData.filter(item => item.phase === activePhase)
    : journeyData;

  return (
    <section className="section" id="journey" ref={ref}>
      <div className="section-inner container">
        <div className="s-header">
          <div>
            <p className="s-num">01 — Career journey</p>
            <h2 className="s-title">From clinic<br/>to <em>analytics</em></h2>
          </div>
          <p className="s-right reveal delay-1">
            Click a chapter to explore that part of the journey. A non-linear path that turned into a superpower.
          </p>
        </div>

        {/* ── Phase selector ── */}
        <div className="journey__selector reveal">
          <div className="journey__steps">
            {[...heroData.transitionSteps].reverse().map((step, i, arr) => {
              const isSelected = activePhase === step.phase;
              const c = PHASE_COLORS[step.phase];
              return (
                <React.Fragment key={step.phase}>
                  <button
                    className={`journey__step ${isSelected ? 'journey__step--selected' : ''}`}
                    onClick={() => handleStepClick(step.phase)}
                    style={isSelected ? { background: c.bg, borderColor: c.border } : {}}
                  >
                    <span className="journey__step-icon">{step.icon}</span>
                    <span
                      className="journey__step-label"
                      style={isSelected ? { color: c.color } : {}}
                    >{step.label}</span>
                    <span className="journey__step-date">{step.date}</span>
                    {isSelected && (
                      <span className="journey__step-pill" style={{ background: c.color }}>
                        viewing
                      </span>
                    )}
                  </button>
                  {i < arr.length - 1 && (
                    <span className="journey__arrow">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          {activePhase && (
            <button className="journey__clear" onClick={() => setActivePhase(null)}>
              Show all ✕
            </button>
          )}
        </div>

        {/* ── Timeline ── */}
        <div className="journey__timeline reveal">
          {visibleItems.map((item, i) => (
            <div
              key={`${activePhase ?? 'all'}-${item.phase}-${i}`}
              className={`journey__row ${item.active ? 'journey__row--active' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="journey__left">
                <p className="journey__year">{item.year}</p>
                <p className="journey__country">{item.country}</p>
              </div>
              <div className="journey__line">
                <div className={`journey__pin ${item.active ? 'journey__pin--active' : ''}`} />
              </div>
              <div className="journey__content">
                <p className="journey__role">
                  {item.role}
                  {item.badge && (
                    <span className="badge badge-teal journey__badge">{item.badge}</span>
                  )}
                </p>
                <p className="journey__org">{item.org}</p>
                <p className="journey__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
