// ── View: Experience ──
import React from 'react';
import { experienceData } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

export default function Experience() {
  const ref = useReveal();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="section-inner container">
        <div className="s-header">
          <div>
            <p className="s-num">04 — Experience</p>
            <h2 className="s-title">Where I've<br/><em>worked</em></h2>
          </div>
          <p className="s-right reveal delay-1">
            Roles across payer, behavioral health, and population health — always at the intersection of clinical context and data.
          </p>
        </div>

        <div className="exp__list">
          {experienceData.map((item, i) => (
            <div key={i} className="exp__item reveal">
              <div className="exp__left">
                <p className="exp__period">{item.period}</p>
                <p className="exp__loc">📍 {item.location}</p>
                {item.current && <span className="badge badge-green">Current</span>}
              </div>
              <div className="exp__right">
                <p className="exp__role">{item.role}</p>
                <p className="exp__company">{item.company}</p>
                <ul className="exp__bullets">
                  {item.bullets.map((b, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
