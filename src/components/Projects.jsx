// ── View: Projects ──
import React from 'react';
import { projectsData } from '../data';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="section-inner container">
        <div className="s-header">
          <div>
            <p className="s-num">05 — Projects</p>
            <h2 className="s-title">Work focused<br/>on <em>impact</em></h2>
          </div>
          <p className="s-right reveal delay-1">
            Evaluated not by the tools used, but by the outcomes they produced.
          </p>
        </div>

        <div className="proj__grid reveal">
          {projectsData.map((p, i) => (
            <div key={i} className="proj__card">
              <p className="proj__impact">{p.impact}</p>
              <p className="proj__type">{p.type}</p>
              <p className="proj__title">{p.title}</p>
              <p className="proj__desc">{p.desc}</p>
              <div className="proj__footer">
                <div className="proj__tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="proj__link">
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
