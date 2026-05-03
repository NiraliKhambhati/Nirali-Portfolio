// ── View: Skills ──
import React from 'react';
import { skillsData } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="section-inner container">
        <div className="s-header">
          <div>
            <p className="s-num">02 — Skills</p>
            <h2 className="s-title">Three pillars<br/>of <em>expertise</em></h2>
          </div>
          <p className="s-right reveal delay-1">
            Clinical knowledge meets technical depth — healthcare domain fluency combined with analytics capability, the combination that makes every project more impactful.
          </p>
        </div>

        <div className="skills__grid reveal">
          {skillsData.map((col, i) => (
            <div key={i} className="skills__col">
              <div className="skills__col-top">
                <div className={`skills__col-icon skills__col-icon--${col.category}`}>
                  {col.icon}
                </div>
                <p className="skills__col-title">{col.title}</p>
              </div>
              <div className="skills__tags">
                {col.tags.map(tag => (
                  <span key={tag} className={`tag tag-${col.category}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
