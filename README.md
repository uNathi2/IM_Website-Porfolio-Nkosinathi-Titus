# Nkosinathi Titus — Portfolio

A custom-built, immersive portfolio website targeting the **ABSA GenA Graduate Programme**.
Built with vanilla JavaScript ES Modules, Tailwind CSS v4, Three.js, and Vite.

**Live site:** _add your deployed URL here_
**Course:** DIGA3008A — Interactive Media IIIA | Student no. 2582515

---

## Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 (utility-first, `@theme` variables) |
| 3D rendering | Three.js 0.184 — GLTFLoader, OrbitControls, EffectComposer |
| Icons | Lucide |
| Animation | Motion |
| Language | Vanilla JS (ES Modules) — no React, no Vue |

---

## Getting started

**Prerequisites:** Node.js 18 or higher

```bash
# 1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site runs at **http://localhost:3000** with hot-module reload enabled.

---

## Project structure

```
src/
├── main.js               # Client-side router + layout init + cursor
├── index.css             # @theme variables + global utilities + CRT effects
├── constants.js          # All data: PROJECTS, SKILLS, ARCHIVE_PROJECTS, LAB_MODELS
├── utils.js              # render() helper + Lucide icon init
├── components/
│   ├── navbar.js         # Global nav — injected once on layout init
│   ├── footer.js         # Global footer
│   ├── hero.js           # Home hero: marquee, HUD status label, mission card
│   ├── projectgrid.js    # Project card grid (reads from PROJECTS[])
│   ├── skills.js         # Skills bento grid (reads from SKILLS[])
│   ├── contact.js        # Contact form template
│   ├── face.js           # Three.js reactive head: GLTFLoader + Bayer dither shader
│   └── labviewer.js      # Three.js lab viewer: OrbitControls + wireframe toggle
├── pages/
│   ├── home.js           # / — Command Dashboard
│   ├── work.js           # /work — Project Manual + Archives table
│   ├── about.js          # /about — Profile Intel + skills
│   ├── contact.js        # /contact — Direct Uplink form
│   └── lab.js            # /lab — Experimental 3D viewport
└── styles/pages/
    ├── home.css
    ├── about.css
    ├── work.css
    ├── contact.css
    └── lab.css

public/
├── models/               # Place .glb / .gltf files here
└── images/projects/      # Project thumbnails (4:3, PNG, under 200 KB)
```

---

## Common edits

### Add or update a project

Open `src/constants.js` and add an object to the `PROJECTS` array:

```js
{
  id:          '5',
  title:       'Your Project Title',
  description: 'One sentence describing what you made and why it matters.',
  tags:        ['Tool 1', 'Tool 2'],
  image:       '/images/projects/your-image.png',
  link:        'https://github.com/you/repo',
}
```

Drop the image in `public/images/projects/` — 4:3 aspect ratio, PNG, under 200 KB.

### Change the accent colour

Open `src/index.css` and edit the `@theme` block:

```css
@theme {
  --color-brand-accent: #FF5500; /* ← change this hex */
  --color-brand-bg:     #050505;
}
```

Every border, glow, focus ring, and progress bar updates automatically.

### Swap the 3D head model

Open `src/components/face.js` and update the path at the top:

```js
const USER_MODEL_PATH = '/models/YourHead.glb';
```

Drop your `.glb` file into `public/models/`. The auto-scale logic fits any model size.

### Add a lab model

Drop your `.glb` into `public/models/`, then add an entry to `LAB_MODELS` in `src/constants.js`:

```js
{ id: 'm4', name: 'MODEL_NAME', url: '/models/yourmodel.glb', description: '...' }
```

The selector rail and viewer wire up automatically.

---

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy the contents of `dist/` to Netlify, Vercel, or GitHub Pages.

---

## Design system

The aesthetic is a **Luxury Brutalist Command Center** — high-contrast dark theme, International Orange accents, CRT scanline overlays, and a dithered Three.js reactive head.

| Token | Value | Role |
|---|---|---|
| `--color-brand-bg` | `#050505` | Page canvas |
| `--color-brand-accent` | `#FF5500` | International Orange — active states, glows |
| `--color-brand-ink` | `#f0f0f0` | Body text |
| `--color-ui-border` | `#1a1a1a` | Grid lines and card borders |
| `--font-display` | Dirtyline 36daysoftype | Headings |
| `--font-mono` | Roboto Mono | System labels, nav, HUD |

---

## Submission

**Deadline:** 10 June 2026 — 23:59 SAST
**Deliverables:** GitHub repo URL + deployed site URL
**Course:** DIGA3008A Interactive Media IIIA
