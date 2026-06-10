import './index.css';
import { render } from './utils.js';
import { Navbar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import { HomePage } from './pages/home.js';
import { WorkPage } from './pages/work.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';
import { LabPage } from './pages/lab.js';
import { createReactiveHead } from './components/face.js';
import { createLabViewer } from './components/labviewer.js';
import { LAB_MODELS } from './constants.js';

const routes = {
  '/': HomePage,
  '/work': WorkPage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/lab': LabPage,
};

function navigate(path) {
  window.history.pushState({}, '', path);
  handleRoute();
}

function initLayout() {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = `
    <main class="relative selection:bg-brand-accent selection:text-black bg-brand-bg min-h-screen flicker">
      <div class="fixed top-0 left-0 right-0 h-[3px] bg-brand-accent z-[60] origin-left" id="progress-bar" style="transform: scaleX(0)"></div>
      
      <div class="crt-overlay"></div>
      <div id="home-3d-head" class="fixed inset-0 pointer-events-none z-0 bg-transparent"></div>
      <div class="scanline"></div>

      <!-- Tech HUD Overlay (Global) -->
      <div class="fixed inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 lg:p-12 mix-blend-screen opacity-20">
        <div class="flex justify-between items-start pt-20">
          <div class="font-mono text-[9px] uppercase tracking-widest text-brand-accent">
            System: Active<br/>
            Uplink: Stable 0.94ms
          </div>
          <div class="font-mono text-[9px] uppercase tracking-widest text-white text-right">
            Coord: 34.0522 N<br/>
            ID: [TITUS_RECURSIVE]
          </div>
        </div>
        
        <div class="flex justify-between items-end pb-12">
          <div class="font-mono text-[9px] uppercase tracking-widest text-white">
            // Neural_Link_Established<br/>
            // Matrix_Live
          </div>
          <div class="font-mono text-[9px] uppercase tracking-widest text-brand-accent text-right">
            BPM: 120<br/>
            EST: 2026.04.21
          </div>
        </div>
      </div>

      ${Navbar()}
      
      <div id="page-container" class="transition-opacity duration-300 relative z-10 opacity-0"></div>

      ${Footer()}
      
      <div class="fixed inset-0 pointer-events-none z-[101] border-[20px] md:border-[40px] border-black/10 mix-blend-overlay"></div>
    </main>
  `;

  // Initialize 3D Backdrop once
  const faceContainer = document.getElementById('home-3d-head');
  if (faceContainer) {
    createReactiveHead(faceContainer);
  }

  // Progress bar logic
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height);
      progressBar.style.transform = `scaleX(${scrolled})`;
    });
  }

  initCursor();
}

function handleRoute() {
  const path = window.location.pathname;
  const page = routes[path] || HomePage;
  const pageContainer = document.getElementById('page-container');
  
  if (pageContainer) {
    // Cleanup previous page effects
    if (window._cleanupEffect) {
      window._cleanupEffect();
      window._cleanupEffect = null;
    }

    // Fade out
    pageContainer.classList.add('opacity-0');
    
    setTimeout(() => {
      render(pageContainer, page());
      
      // Re-initialize any page-specific logic here
      initPageLogic();
      
      // Fade in
      pageContainer.classList.remove('opacity-0');
    }, 150);

    window.scrollTo(0, 0);
  }
}

function initPageLogic() {

  // ── Router links ─────────────────────────────────────────────────────────
  document.querySelectorAll('.router-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href) navigate(href);
    });
  });

  // ── Lab viewer ───────────────────────────────────────────────────────────
  const labContainer = document.getElementById('lab-viewer-container');
  if (labContainer) {
    const activeNameEl = document.getElementById('active-model-name');
    const firstModel   = LAB_MODELS[0];

    const viewer = createLabViewer(labContainer, firstModel.url);
    if (activeNameEl) activeNameEl.innerText = firstModel.name;
    window._cleanupEffect = viewer.cleanup;

    // Wireframe toggle
    const toggleBtn = document.getElementById('toggle-wireframe-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isActive = !viewer.isWireframe();
        viewer.setWireframe(isActive);
        toggleBtn.setAttribute('aria-pressed', String(isActive));

        const statusText = document.getElementById('wireframe-status-text');
        const statusDot  = document.getElementById('wireframe-status-dot');
        if (statusText) statusText.innerText = isActive ? 'ON' : 'OFF';
        if (statusDot) {
          statusDot.classList.toggle('bg-brand-accent', isActive);
          statusDot.classList.toggle('animate-pulse', isActive);
          statusDot.classList.toggle('bg-white/20', !isActive);
        }
      });
    }

    // Model selector rail
    document.querySelectorAll('.lab-model-select').forEach(btn => {
      btn.addEventListener('click', () => {
        const url  = btn.dataset.url;
        const name = btn.dataset.name;
        viewer.updateModel(url);
        if (activeNameEl) activeNameEl.innerText = name;

        document.querySelectorAll('.lab-model-select').forEach(b => {
          b.classList.remove('border-brand-accent');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('border-brand-accent');
        btn.setAttribute('aria-pressed', 'true');
      });
    });

    // Activate first model button
    const firstBtn = document.querySelector('.lab-model-select');
    if (firstBtn) {
      firstBtn.classList.add('border-brand-accent');
      firstBtn.setAttribute('aria-pressed', 'true');
    }
  }

  // ── Work page: discipline filter bar ─────────────────────────────────────
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      const filter = btn.dataset.filter;

      // Update button states
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('filter-btn-active');
        b.classList.add('filter-btn-inactive');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('filter-btn-active');
      btn.classList.remove('filter-btn-inactive');
      btn.setAttribute('aria-pressed', 'true');

      // Show / hide project cards
      document.querySelectorAll('.project-card[data-discipline]').forEach(card => {
        const match = filter === 'All' || card.dataset.discipline === filter;
        card.style.opacity       = match ? '1' : '0.15';
        card.style.pointerEvents = match ? 'auto' : 'none';
        card.style.transition    = 'opacity 0.25s ease';
      });
    });
  }

  // ── Contact form — validation + feedback ──────────────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    const feedback     = document.getElementById('form-feedback');
    const feedbackText = document.getElementById('form-feedback-text');
    const submitBtn    = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = form.name?.value.trim();
      const email   = form.email?.value.trim();
      const message = form.message?.value.trim();

      // Validate required fields
      if (!name || !email || !message) {
        if (feedback)     feedback.classList.remove('hidden');
        if (feedbackText) feedbackText.textContent = '// ERROR: Name, email, and message are required.';
        return;
      }

      // Validate email format
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        if (feedback)     feedback.classList.remove('hidden');
        if (feedbackText) feedbackText.textContent = '// ERROR: Enter a valid email address.';
        return;
      }

      // Success state
      if (submitBtn)    submitBtn.disabled = true;
      if (feedback)     feedback.classList.remove('hidden');
      if (feedbackText) feedbackText.textContent = "// TRANSMISSION RECEIVED — I'll respond within 48 hours.";
      form.reset();
      setTimeout(() => { if (submitBtn) submitBtn.disabled = false; }, 4000);
    });
  }
}

// Initial setup
initLayout();
handleRoute();

// Listen for back/forward
window.onpopstate = handleRoute;

// Custom Cursor Logic
function initCursor() {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 12}px`;
    cursor.style.top  = `${e.clientY - 12}px`;
  });

  // Handle hover on interactive elements
  const interactiveSelector = 'a, button, input, textarea, select, .router-link';

  const addHoverEffect = () => {
    document.querySelectorAll(interactiveSelector).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
      el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });
  };

  addHoverEffect();

  // Re-bind on route change
  const observer = new MutationObserver(addHoverEffect);
  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
  window.addEventListener('mouseup',   () => cursor.style.transform = 'scale(1)');
}
