# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at localhost:3000
npm run build    # production build → /build
npm test         # run tests in watch mode
```

No linter is configured. No test files currently exist.

## Architecture

This is a Create React App (React 18) portfolio site. It has no router — the entire site is a single scrollable page.

**The single source of truth is `src/data.js`.** All visible content (copy, timeline entries, skills, experience, projects, stats, social links, EmailJS config) lives there as exported `const` arrays/objects. Components never hardcode content — they import from `data.js` and render it. When updating content, only `data.js` needs to change.

**Component layout** (rendered in order in `App.jsx`):
`Navbar` → `Hero` → `Journey` → `Skills` → `Experience` → `Projects` → `Contact` → `Footer`

Each component has a co-located CSS file (`ComponentName.css`) imported directly in the component file.

**Hooks:**
- `useReveal` — attaches an `IntersectionObserver` to a section `ref`, adding the `visible` class to all `.reveal` children when they scroll into view. Used by most section components. Fires once per element.
- `useNavbar` — tracks scroll position (`scrolled` state for background styling) and mobile menu open/close state. Used only by `Navbar`.

**Styling conventions:**
- CSS custom properties are defined in `src/styles/global.css` (`:root`). Always use these tokens (`--teal`, `--ink`, `--border`, `--radius-md`, etc.) rather than raw values.
- Fonts: `--font-serif` (Playfair Display, loaded dynamically in `index.js`) for headings/accents, `--font-sans` (Epilogue) for body.
- Section scroll animations: add `className="reveal"` to any element inside a component that uses `useReveal()` — it starts at `opacity: 0` and transitions to `visible` on scroll. Stagger with `delay-1` / `delay-2` / `delay-3` classes.
- Shared section layout classes: `.section`, `.section-inner`, `.container`, `.s-header`, `.s-num`, `.s-title`, `.s-right`.

**Journey section specifics:**
- `heroData.transitionSteps` in `data.js` drives the three filter buttons. The phase values (`"dentist"`, `"healthadmin"`, `"analyst"`) must match the `phase` field on each `journeyData` entry.
- `journeyData` is ordered newest-first; this order is preserved in all filtered and unfiltered views.
- In `Journey.jsx`, buttons are rendered with `[...heroData.transitionSteps].reverse()` so the display order (Data Analyst → Health Admin → Dentist) differs from the data order without mutating the shared array.
- Row fade-in animation re-triggers on filter change because the key includes `activePhase`.

**EmailJS** (contact form) is configured via `siteConfig.emailjs` in `data.js`. It requires a free account at emailjs.com; until configured the contact form will not send.
