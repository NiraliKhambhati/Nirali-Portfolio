// ── View: Story ──
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { heroData } from '../data';
import './Story.css';

const TYPE_SPEED_MS = 8;
const SENTENCE_DELAY_MS = 150;

export default function Story() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  const sentences = useMemo(
    () =>
      heroData.story
        .split('.')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => s + '.'),
    []
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (sentenceIdx >= sentences.length) return;

    const current = sentences[sentenceIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setSentenceIdx((i) => i + 1);
      setCharIdx(0);
    }, SENTENCE_DELAY_MS);
    return () => clearTimeout(t);
  }, [started, sentenceIdx, charIdx, sentences]);

  const allDone = sentenceIdx >= sentences.length;

  return (
    <section className="section story" id="story" ref={ref}>
      <div className="section-inner container">
        <div className="s-header">
          <div>
            <p className="s-num">01 — Story</p>
            <h2 className="s-title reveal">{heroData.storyTitle}</h2>
          </div>
        </div>

        <div className="story__body">
          {sentences.map((sentence, i) => {
            if (i < sentenceIdx) {
              return (
                <p key={i} className="story__sentence story__sentence--done">
                  {sentence}
                </p>
              );
            }
            if (i === sentenceIdx && !allDone) {
              return (
                <p key={i} className="story__sentence story__sentence--active">
                  {sentence.slice(0, charIdx)}
                  <span className="story__cursor" aria-hidden="true">|</span>
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
