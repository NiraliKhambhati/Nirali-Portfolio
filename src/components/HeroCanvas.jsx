import React, { useEffect, useRef } from 'react';

const TEAL = '#12A8AD';
const INDIA = '#E8820C';
const CANADA = '#e53935';

const STOPS = [
  { pct: 0.08, flag: '🇮🇳', label: 'India',  color: INDIA  },
  { pct: 0.36, flag: '🇨🇦', label: 'Canada', color: CANADA },
  { pct: 0.62, flag: '🇺🇸', label: 'USA',    color: TEAL   },
];

const DRAW_MS  = 6000;
const HOLD_MS  = 1200;
const ARROW_MS = 2600;
const FADE_MS  = 600;
const TOTAL_MS = DRAW_MS + HOLD_MS + ARROW_MS + FADE_MS;

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let pathPoints = [];
    let cumLengths = [];
    let totalLength = 0;
    let rafId = 0;
    const startTime = performance.now();

    function buildPath() {
      pathPoints = [];
      const midY = height * 0.607;
      const step = 2;
      const beatSpacing = Math.max(200, Math.min(360, width / 5));
      const spike = Math.min(60, Math.max(34, height * 0.08));

      for (let x = 0; x <= width; x += step) {
        const t = (x % beatSpacing) / beatSpacing;
        let y = midY;
        if (t > 0.05 && t < 0.15) {
          y -= spike * 0.12 * Math.sin(((t - 0.05) / 0.10) * Math.PI);
        } else if (t >= 0.18 && t < 0.22) {
          y += spike * 0.18 * Math.sin(((t - 0.18) / 0.04) * Math.PI);
        } else if (t >= 0.22 && t < 0.26) {
          y -= spike * Math.sin(((t - 0.22) / 0.04) * Math.PI);
        } else if (t >= 0.26 && t < 0.30) {
          y += spike * 0.36 * Math.sin(((t - 0.26) / 0.04) * Math.PI);
        } else if (t >= 0.40 && t < 0.55) {
          y -= spike * 0.22 * Math.sin(((t - 0.40) / 0.15) * Math.PI);
        }
        pathPoints.push({ x, y });
      }

      cumLengths = [0];
      totalLength = 0;
      for (let i = 1; i < pathPoints.length; i++) {
        const dx = pathPoints[i].x - pathPoints[i - 1].x;
        const dy = pathPoints[i].y - pathPoints[i - 1].y;
        totalLength += Math.hypot(dx, dy);
        cumLengths.push(totalLength);
      }
    }

    function pointAtPct(pct) {
      const target = Math.max(0, Math.min(1, pct)) * totalLength;
      let lo = 0;
      let hi = cumLengths.length - 1;
      while (lo < hi - 1) {
        const mid = (lo + hi) >> 1;
        if (cumLengths[mid] < target) lo = mid;
        else hi = mid;
      }
      const segLen = cumLengths[hi] - cumLengths[lo];
      const t = segLen > 0 ? (target - cumLengths[lo]) / segLen : 0;
      return {
        x: pathPoints[lo].x + (pathPoints[hi].x - pathPoints[lo].x) * t,
        y: pathPoints[lo].y + (pathPoints[hi].y - pathPoints[lo].y) * t,
      };
    }

    function resize() {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildPath();
    }

    resize();
    window.addEventListener('resize', resize);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    if (ro && canvas.parentElement) ro.observe(canvas.parentElement);

    function drawGhostPath() {
      ctx.lineWidth = 1.4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(18, 168, 173, 0.20)';
      ctx.beginPath();
      for (let i = 0; i < pathPoints.length; i++) {
        const p = pathPoints[i];
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }

    function drawTealLineUpTo(progress) {
      const drawnLength = progress * totalLength;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = TEAL;
      ctx.shadowColor = TEAL;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
      let drawn = 0;
      for (let i = 1; i < pathPoints.length; i++) {
        const prev = pathPoints[i - 1];
        const cur = pathPoints[i];
        const seg = Math.hypot(cur.x - prev.x, cur.y - prev.y);
        if (drawn + seg <= drawnLength) {
          ctx.lineTo(cur.x, cur.y);
          drawn += seg;
        } else {
          const remain = drawnLength - drawn;
          const t = seg > 0 ? remain / seg : 0;
          ctx.lineTo(prev.x + (cur.x - prev.x) * t, prev.y + (cur.y - prev.y) * t);
          break;
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function drawTip(progress) {
      const tip = pointAtPct(progress);
      ctx.fillStyle = TEAL;
      ctx.shadowColor = TEAL;
      ctx.shadowBlur = 22;
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function drawStop(stop, now, activatedAt) {
      const p = pointAtPct(stop.pct);
      const age = Math.max(0, now - activatedAt);
      const pulse = (Math.sin(age / 320) + 1) / 2;

      ctx.strokeStyle = stop.color;
      ctx.globalAlpha = 0.25 + 0.45 * (1 - pulse);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 14 + pulse * 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.fillStyle = stop.color;
      ctx.shadowColor = stop.color;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.textAlign = 'center';
      ctx.font = '26px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",serif';
      ctx.fillText(stop.flag, p.x, p.y - 30);

      ctx.font = '700 16px system-ui, -apple-system, "Segoe UI", sans-serif';
      ctx.fillStyle = stop.color;
      ctx.fillText(stop.label, p.x, p.y + 32);
    }

    function drawNextStop(now, arrowProgress) {
      const usa = pointAtPct(STOPS[STOPS.length - 1].pct);
      const baseY = usa.y;
      const maxX = width * 0.85;
      const startX = usa.x + 30;
      const fullLen = Math.max(60, maxX - startX - 50);
      const arrowLen = fullLen * Math.min(1, arrowProgress * 1.4);
      const arrowEndX = Math.min(startX + arrowLen, maxX - 50);

      ctx.save();
      ctx.setLineDash([7, 6]);
      ctx.lineDashOffset = -now / 55;
      ctx.strokeStyle = CANADA;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.moveTo(startX, baseY);
      ctx.lineTo(arrowEndX, baseY);
      ctx.stroke();
      ctx.restore();

      if (arrowProgress > 0.35) {
        ctx.fillStyle = CANADA;
        ctx.beginPath();
        ctx.moveTo(arrowEndX + 8, baseY);
        ctx.lineTo(arrowEndX - 4, baseY - 6);
        ctx.lineTo(arrowEndX - 4, baseY + 6);
        ctx.closePath();
        ctx.fill();
      }

      if (arrowProgress > 0.55) {
        const pulse = (Math.sin(now / 260) + 1) / 2;
        const dotX = Math.min(arrowEndX + 26, maxX - 20);
        const dotY = baseY;

        ctx.strokeStyle = CANADA;
        ctx.globalAlpha = 0.35 + 0.55 * (1 - pulse);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 10 + pulse * 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.fillStyle = CANADA;
        ctx.shadowColor = CANADA;
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.textAlign = 'center';
        ctx.font = '20px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",serif';
        ctx.fillText('🇨🇦', dotX, dotY - 24);

        ctx.font = '700 10px system-ui, -apple-system, "Segoe UI", sans-serif';
        ctx.fillStyle = CANADA;
        ctx.fillText('NEXT STOP', dotX, dotY + 26);
      }
    }

    function frame(now) {
      const elapsed = (now - startTime) % TOTAL_MS;
      const drawProgress = Math.min(1, elapsed / DRAW_MS);
      const arrowElapsed = Math.max(0, elapsed - DRAW_MS - HOLD_MS);
      const arrowProgress = Math.min(1, arrowElapsed / ARROW_MS);
      const fadeElapsed = Math.max(0, elapsed - DRAW_MS - HOLD_MS - ARROW_MS);
      const fadeAlpha = 1 - Math.min(1, fadeElapsed / FADE_MS);

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = fadeAlpha;

      drawGhostPath();
      drawTealLineUpTo(drawProgress);

      if (drawProgress < 1) {
        drawTip(drawProgress);
      }

      for (const stop of STOPS) {
        if (drawProgress >= stop.pct) {
          drawStop(stop, now, startTime + stop.pct * DRAW_MS);
        }
      }

      if (drawProgress >= 1 && arrowProgress > 0) {
        drawNextStop(now, arrowProgress);
      }

      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.45,
        pointerEvents: 'none',
      }}
    />
  );
}
