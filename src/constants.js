// =============================================================================
//  constants.js — single source of truth for all site content
//  Edit this file to update projects, skills, archive entries, and lab models.
//  Nothing else needs to change when you add or edit content here.
// =============================================================================

// -----------------------------------------------------------------------------
//  PROJECTS — shown on Home (limit 2) and Work (all 4)
//  image: drop your file into /public/images/projects/ and reference it here
// -----------------------------------------------------------------------------
export const PROJECTS = [
  {
    id: '01',
    title: 'Spoken to Seen',
    description:
      'An immersive 3D animation created for the Wits Digital Dome — a full-dome projection environment. The piece translates spoken language into spatial visual narrative, exploring how sound becomes form across a 360° canvas.',
    tags: ['3D Animation', 'Blender', 'After Effects', 'Digital Dome'],
    discipline: '3D / Animation',
    image: '/images/projects/Spoken_to_seen snapshot.png',
    link: '#',
    year: '2025',
  },
  {
    id: '02',
    title: 'Aether Studio — Blob Font',
    description:
      'An experimental typography study pushing letterform boundaries through organic, liquid geometries. Each glyph was constructed in Adobe Illustrator as a standalone sculptural object, bridging type design and UI aesthetics.',
    tags: ['Typography', 'Graphic Design', 'Adobe Illustrator', 'UI/UX'],
    discipline: 'Graphic Design',
    image: '/images/projects/Aether_Blob_Font.png',
    link: '#',
    year: '2025',
  },
  {
    id: '03',
    title: 'Roses',
    description:
      'A piece from an ongoing series of audio-reactive generative artworks. Built in TouchDesigner, the visuals respond in real time to audio frequency data — translating sound amplitude and pitch into blooming, recursive motion graphics.',
    tags: ['Generative Art', 'TouchDesigner', 'Audio-Reactive', 'Creative Coding'],
    discipline: 'Creative Coding',
    image: '/images/projects/Roses.png',
    link: '#',
    year: '2024',
  },
  {
    id: '04',
    title: 'SESB Poster',
    description:
      'A poster created in collaboration with an independent fashion brand. The design fuses TouchDesigner-generated visual texture with photographic composition to produce a high-impact campaign asset that sits at the intersection of fashion and generative media.',
    tags: ['Poster Design', 'TouchDesigner', 'Photoshop', 'Fashion'],
    discipline: 'Graphic Design',
    image: '/images/projects/SESB_1.png',
    link: '#',
    year: '2024',
  },
];

// -----------------------------------------------------------------------------
//  SKILLS — shown on the About page capability grid
// -----------------------------------------------------------------------------
export const SKILLS = [
  { name: 'Blender',            category: '3D / Animation' },
  { name: 'After Effects',      category: '3D / Animation' },
  { name: 'TouchDesigner',      category: 'Creative Coding' },
  { name: 'p5.js',              category: 'Creative Coding' },
  { name: 'Adobe Illustrator',  category: 'Graphic Design' },
  { name: 'Photoshop',          category: 'Graphic Design' },
  { name: 'Figma',              category: 'UI / UX' },
  { name: 'Three.js',           category: 'Creative Coding' },
  { name: 'HTML / CSS / JS',    category: 'Web Development' },
  { name: 'CAD / 3D Modelling', category: '3D / Animation' },
];

// -----------------------------------------------------------------------------
//  ARCHIVE_PROJECTS — historical table on the Work page
// -----------------------------------------------------------------------------
export const ARCHIVE_PROJECTS = [
  { year: '2026', title: 'Spoken to Seen',        agency: 'Wits Digital Dome', role: 'Director / 3D' },
  { year: '2025', title: 'Aether Blob Font',       agency: 'Self-initiated',    role: 'Type Designer' },
  { year: '2025', title: 'DIGA3008A Portfolio',    agency: 'Academic',          role: 'Design + Dev' },
  { year: '2025', title: 'Roses',                  agency: 'Self-initiated',    role: 'Creative Coder' },
  { year: '2025', title: 'SESB Campaign Poster',   agency: 'SESB (Fashion)',    role: 'Art Director' },
];

// -----------------------------------------------------------------------------
//  LAB_MODELS — 3D models loaded in the Experimental Lab viewer
//  Add your own .glb files to /public/models/ and register them here
// -----------------------------------------------------------------------------
export const LAB_MODELS = [
  {
    id: 'm1',
    name: 'Head_Model_v1',
    url: '/models/Head v1.glb',
    description:
      'Primary reactive head model — rendered with a custom Bayer 4×4 dither shader and mouse-tracked rotation on the home canvas.',
  },
  {
    id: 'm2',
    name: 'Expressive_Robot',
    url: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
    description:
      'Expressive bipedal rig used for joint-constraint experimentation and animation timing studies.',
  },
  {
    id: 'm3',
    name: 'Nefertiti_Scan',
    url: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/Nefertiti/Nefertiti.glb',
    description:
      'High-fidelity photogrammetry scan — reference for digital preservation workflows and surface topology study.',
  },
];
