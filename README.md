# Nkosinathi Titus — Portfolio

A custom-built, immersive portfolio website targeting the **ABSA GenA Graduate Programme**.
Built with vanilla JavaScript ES Modules, Tailwind CSS v4, Three.js, and Vite.

**Live site:** *add your deployed URL here*
**Course:** DIGA3008A — Interactive Media IIIA | Student no. 2582515

\---

## Stack

|Layer|Technology|
|-|-|
|Build tool|Vite 6|
|Styling|Tailwind CSS v4 (utility-first, `@theme` variables)|
|3D rendering|Three.js 0.184 — GLTFLoader, OrbitControls, EffectComposer|
|Icons|Lucide|
|Animation|Motion|
|Language|Vanilla JS (ES Modules) — no React, no Vue|

\---

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

\---

## Project structure

```
src/
├── main.js               # Client-side router + layout init + cursor
├── index.css             # @theme variables + global utilities + CRT effects
├── constants.js          # All data: PROJECTS, SKILLS, ARCHIVE\_PROJECTS, LAB\_MODELS
├── utils.js              # render() helper + Lucide icon init
├── components/
│   ├── navbar.js         # Global nav — injected once on layout init
│   ├── footer.js         # Global footer
│   ├── hero.js           # Home hero: marquee, HUD status label, mission card
│   ├── projectgrid.js    # Project card grid (reads from PROJECTS\[])
│   ├── skills.js         # Skills bento grid (reads from SKILLS\[])
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

\---

## Design system

The aesthetic is a **Luxury Brutalist Command Center** — high-contrast dark theme, International Orange accents, CRT scanline overlays, and a dithered Three.js reactive head.

|Token|Value|Role|
|-|-|-|
|`--color-brand-bg`|`#050505`|Page canvas|
|`--color-brand-accent`|`#FF5500`|International Orange — active states, glows|
|`--color-brand-ink`|`#f0f0f0`|Body text|
|`--color-ui-border`|`#1a1a1a`|Grid lines and card borders|
|`--font-display`|Dirtyline 36daysoftype|Headings|
|`--font-mono`|Roboto Mono|System labels, nav, HUD|

\---

## Submission

**Deadline:** 10 June 2026 — 23:59 SAST
**Deliverables:** GitHub repo URL + deployed site URL
**Course:** DIGA3008A Interactive Media IIIA

