// ── Controller: useReveal ──
// Handles scroll-triggered reveal animations via IntersectionObserver

import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    // observe all .reveal children
    const targets = el.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
