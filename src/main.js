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
  // Lab Viewer Initialization
  const labContainer = document.getElementById('lab-viewer-container');
  if (labContainer) {
    const activeNameEl = document.getElementById('active-model-name');
    const firstModel = LAB_MODELS[0];
    
    const viewer = createLabViewer(labContainer, firstModel.url);
    if (activeNameEl) activeNameEl.innerText = firstModel.name;

    window._cleanupEffect = viewer.cleanup;

    document.querySelectorAll('.lab-model-select').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url;
        const name = btn.dataset.name;
        viewer.updateModel(url);
        if (activeNameEl) activeNameEl.innerText = name;
        
        document.querySelectorAll('.lab-model-select').forEach(b => b.classList.remove('border-brand-accent'));
        btn.classList.add('border-brand-accent');
      });
    });
    
    const firstBtn = document.querySelector('.lab-model-select');
    if (firstBtn) firstBtn.classList.add('border-brand-accent');
  }

  // Intercept links
  document.querySelectorAll('.router-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href) navigate(href);
    });
  });

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Transmission Received. We will uplink shortly.');
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
    cursor.style.top = `${e.clientY - 12}px`;
  });

  // Handle hover on interactive elements
  const interactiveSelector = 'a, button, input, textarea, .router-link';
  
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

  window.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
  });
  window.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });
}
