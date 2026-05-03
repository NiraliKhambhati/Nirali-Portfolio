# Nirali Khambhati — Portfolio Website

A React portfolio built with clean MVC architecture, a single config file for all content, and EmailJS for real contact form delivery.

---

## Project Structure

```
nirali-portfolio/
├── public/
│   └── index.html              # HTML shell
├── src/
│   ├── data.js                 # ✏️  EDIT YOUR CONTENT HERE
│   ├── index.js                # App entry point
│   ├── App.jsx                 # Root component (assembles views)
│   │
│   ├── styles/
│   │   └── global.css          # Global variables, reset, utilities
│   │
│   ├── hooks/                  # CONTROLLERS — logic, no UI
│   │   ├── useReveal.js        # Scroll animation observer
│   │   ├── useContact.js       # Form state + EmailJS submission
│   │   └── useNavbar.js        # Scroll detection + mobile menu
│   │
│   └── components/             # VIEWS — UI only
│       ├── Navbar.jsx / .css
│       ├── Hero.jsx   / .css
│       ├── Journey.jsx/ .css
│       ├── Skills.jsx / .css
│       ├── Experience.jsx / .css
│       ├── Projects.jsx / .css
│       ├── Contact.jsx  / .css
│       └── Footer.jsx   / .css
└── package.json
```

### Architecture (MVC)
| Layer | Folder | Role |
|-------|--------|------|
| **Model** | `src/data.js` | All content data — the single source of truth |
| **View** | `src/components/` | React components — UI only, no business logic |
| **Controller** | `src/hooks/` | Custom hooks — logic, state, API calls |

---

## Step 1 — Prerequisites

Make sure you have these installed:

```bash
node --version   # needs v16 or higher
npm --version    # needs v8 or higher
```

If not installed, download from: https://nodejs.org

---

## Step 2 — Install dependencies

Open your terminal, navigate to the project folder, and run:

```bash
cd nirali-portfolio
npm install
```

This downloads React and all packages. Takes about 1–2 minutes.

---

## Step 3 — Set up EmailJS (for real contact form emails)

1. Go to https://www.emailjs.com and create a **free account**
2. Click **Add New Service** → choose Gmail (or any email provider) → connect your email
3. Click **Email Templates** → **Create New Template**
   - Use these variables in the template body:
     ```
     From: {{name}} ({{email}})
     Subject: {{subject}}
     Message: {{message}}
     ```
4. Go to **Account** → copy your **Public Key**
5. Note your **Service ID** and **Template ID**
6. Open `src/data.js` and fill in:

```js
emailjs: {
  serviceId:  "service_xxxxxxx",   // from EmailJS dashboard
  templateId: "template_xxxxxxx",  // from EmailJS dashboard
  publicKey:  "xxxxxxxxxxxx",       // from Account → Public Key
},
```

---

## Step 4 — Edit your content

Open `src/data.js` — this is the only file you need to edit:

```js
// Update your LinkedIn and GitHub
linkedin: "https://linkedin.com/in/YOUR_HANDLE",
github:   "https://github.com/YOUR_HANDLE",

// Edit jobs, projects, skills, journey stops — all in one place
```

Every piece of text, every bullet point, every stat is in this file.

---

## Step 5 — Run the development server

```bash
npm start
```

Your browser will open automatically at **http://localhost:3000**

The page hot-reloads whenever you save a file.

---

## Step 6 — Build for production

When ready to deploy:

```bash
npm run build
```

This creates a `build/` folder with optimised files ready to deploy.

---

## Deploy options (pick one)

### Option A — Netlify (easiest, free)
1. Go to https://netlify.com → sign up free
2. Drag and drop the `build/` folder onto the Netlify dashboard
3. Done — live URL in seconds

### Option B — Vercel (free)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects React.

### Option C — GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/nirali-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then: `npm run deploy`

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm install` fails | Run `npm install --legacy-peer-deps` |
| Port 3000 busy | Run `PORT=3001 npm start` |
| Contact form not sending | Double-check EmailJS keys in `data.js` |
| Fonts not loading | Check internet connection (fonts load from Google) |

---

## Customisation cheatsheet

| What to change | Where |
|----------------|-------|
| Name, title, bio | `src/data.js` → `siteConfig` + `heroData` |
| Stats (28%, 30% etc.) | `src/data.js` → `statsData` |
| Career timeline | `src/data.js` → `journeyData` |
| Skills | `src/data.js` → `skillsData` |
| Jobs | `src/data.js` → `experienceData` |
| Projects | `src/data.js` → `projectsData` |
| Colors | `src/styles/global.css` → `:root` variables |
| Fonts | `src/styles/global.css` + `src/index.js` |
