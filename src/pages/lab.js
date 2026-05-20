import { LAB_MODELS } from '../constants.js';

export function LabPage() {
  return `
    <div class="page-content pt-32 pb-24 px-6 lg:px-24 lg:pt-48 lg:pb-32">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 animate-reveal lg:mb-32">
          <span class="label-micro text-brand-accent mb-6 block">04 // EXPERIMENTAL_LAB</span>
          <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
            RESEARCH &<br />EXPERIMENTS.
          </h1>
          <div class="accent-line max-w-md"></div>
        </div>

        <!-- 3D Viewer Section -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 animate-reveal">
           <div class="lg:col-span-8">
              <div class="relative bg-card-bg border border-ui-border aspect-video lg:aspect-square max-h-[600px] overflow-hidden group">
                 <div id="lab-viewer-container" class="w-full h-full cursor-grab active:cursor-grabbing"></div>
                 
                 <!-- Overlay Controls -->
                 <div class="absolute top-6 left-6 pointer-events-none">
                    <span class="label-micro opacity-40 block mb-1">VIEWPORT: 01</span>
                    <span id="active-model-name" class="text-xs font-bold text-white tracking-widest uppercase">Select a module...</span>
                 </div>

                 <div class="absolute bottom-6 right-6 font-mono text-[9px] text-brand-accent opacity-40 uppercase">
                    // Interaction: Enabled<br/>
                    // Orbit_Mode: Active
                 </div>
              </div>
           </div>

           <div class="lg:col-span-4 flex flex-col gap-4">
              <span class="label-micro opacity-40 mb-4 block underline">AVAILABLE_MODULES</span>
              ${LAB_MODELS.map(model => `
                <button 
                  class="lab-model-select text-left p-6 border border-ui-border hover:border-brand-accent transition-all group bg-card-bg/20"
                  data-url="${model.url}"
                  data-name="${model.name}"
                  data-desc="${model.description}"
                >
                  <div class="flex justify-between items-start mb-2">
                    <span class="label-micro text-brand-accent group-hover:tracking-widest transition-all">PROJECT_${model.id}</span>
                    <i data-lucide="box" class="w-3 h-3 opacity-20 group-hover:opacity-100 group-hover:text-brand-accent transition-all"></i>
                  </div>
                  <h3 class="text-lg font-bold text-white mb-2 leading-tight">${model.name}</h3>
                  <p class="text-[10px] text-brand-ink/40 line-clamp-2">${model.description}</p>
                </button>
              `).join('')}
           </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Experiment 1 -->
          <div class="tech-border p-4 animate-reveal" style="animation-delay: 0.1s">
            <span class="label-micro opacity-40 mb-2 block">PROJECT_ID: E-01</span>
            <h3 class="text-xl font-bold text-white mb-4">NEURAL_DITHER_VS1</h3>
            <p class="text-xs text-brand-ink/60 mb-6 font-sans leading-relaxed">
              Real-time post-processing shader stack combining Bayer dithering with edge detection for lo-fi technical aesthetic.
            </p>
            <div class="flex justify-between items-center mt-4 pt-4 border-t border-ui-border">
              <span class="font-mono text-[9px] text-brand-accent">STATUS: STABLE</span>
              <span class="text-[9px] text-white opacity-20 italic">0.4.21.2026</span>
            </div>
          </div>

          <!-- Experiment 2 -->
          <div class="tech-border p-4 animate-reveal" style="animation-delay: 0.2s">
            <span class="label-micro opacity-40 mb-2 block">PROJECT_ID: E-02</span>
            <h3 class="text-xl font-bold text-white mb-4">GHOST_GDR_GRID</h3>
            <p class="text-xs text-brand-ink/60 mb-6 font-sans leading-relaxed">
              Adaptive 12-column layout engine that dynamically shifts gutter spacing based on mouse proximity and viewport density.
            </p>
            <div class="flex justify-between items-center mt-4 pt-4 border-t border-ui-border">
              <span class="font-mono text-[9px] text-brand-accent">STATUS: IN_TEST</span>
              <span class="text-[9px] text-white opacity-20 italic">0.4.15.2026</span>
            </div>
          </div>

          <!-- Experiment 3 -->
          <div class="tech-border p-4 animate-reveal" style="animation-delay: 0.3s">
            <span class="label-micro opacity-40 mb-2 block">PROJECT_ID: E-03</span>
            <h3 class="text-xl font-bold text-white mb-4">SCANLINE_MAPPER</h3>
            <p class="text-xs text-brand-ink/60 mb-6 font-sans leading-relaxed">
              SVG-based animation generator mapping user scroll position to rhythmic visual interference patterns.
            </p>
            <div class="flex justify-between items-center mt-4 pt-4 border-t border-ui-border">
              <span class="font-mono text-[9px] text-brand-accent">STATUS: DEPLOYED</span>
              <span class="text-[9px] text-white opacity-20 italic">02.12.2025</span>
            </div>
          </div>
        </div>

        <div class="mt-32 p-12 border-2 border-dashed border-ui-border text-center">
            <span class="label-micro opacity-20 block mb-4 uppercase tracking-[0.5em]">System Offline // Secure Uplink Required</span>
            <p class="text-xs font-mono text-brand-ink/20 italic">Additional research documentation is encrypted. Please provide credentials to proceed.</p>
        </div>
      </div>
    </div>
  `;
}
