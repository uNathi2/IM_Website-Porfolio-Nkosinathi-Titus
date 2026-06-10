// =============================================================================
//  pages/lab.js — Experimental Lab / 3D Interactive Viewport
// =============================================================================
import { LAB_MODELS } from '../constants.js';

export function LabPage() {
  return `
    <div class="lab-page-container page-content">
      <div class="max-w-7xl mx-auto">

        <!-- ── Page header ──────────────────────────────────────────── -->
        <div class="mb-16 animate-reveal lg:mb-24">
          <span class="label-micro text-brand-accent mb-6 block">04 // EXPERIMENTAL_LAB</span>
          <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black
                     text-white leading-[0.85] mb-6 transition-all">
            RESEARCH &amp;<br/>EXPERIMENTS.
          </h1>
          <p class="text-sm text-brand-ink/40 max-w-lg leading-relaxed">
            A live testing ground for 3D systems, shader experiments, and generative
            techniques that don't fit neatly into a project brief. Load a model,
            inspect its geometry, and see how the pieces connect.
          </p>
        </div>

        <!-- ── 3D Viewer ────────────────────────────────────────────── -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 animate-reveal">

          <!-- Viewport -->
          <div class="lg:col-span-8">
            <div class="lab-viewport-frame group">
              <div id="lab-viewer-container" class="w-full h-full cursor-grab active:cursor-grabbing"></div>

              <!-- Model name overlay -->
              <div class="absolute top-6 left-6 pointer-events-none">
                <span class="label-micro opacity-40 block mb-1">VIEWPORT: 01</span>
                <span id="active-model-name"
                      class="text-xs font-bold text-white tracking-widest uppercase">
                  Loading...
                </span>
              </div>

              <!-- Wireframe toggle -->
              <div class="absolute top-6 right-6 z-30">
                <button id="toggle-wireframe-btn"
                        class="px-3 py-1.5 border border-ui-border hover:border-brand-accent
                               hover:text-brand-accent bg-card-bg/90 text-[10px] font-mono
                               transition-all uppercase tracking-wider flex items-center gap-1.5
                               text-white/90"
                        aria-pressed="false">
                  <span class="w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300"
                        id="wireframe-status-dot"></span>
                  Wireframe: <span id="wireframe-status-text">OFF</span>
                </button>
              </div>

              <!-- Status readout -->
              <div class="absolute bottom-6 right-6 font-mono text-[9px] text-brand-accent
                          opacity-40 uppercase pointer-events-none text-right">
                // Interaction: Enabled<br/>
                // Orbit_Mode: Active
              </div>
            </div>
          </div>

          <!-- Model selector rail -->
          <div class="lg:col-span-4 flex flex-col gap-4">
            <span class="label-micro opacity-40 mb-2 block underline">AVAILABLE_MODULES</span>
            ${LAB_MODELS.map(model => `
              <button
                class="lab-model-select lab-model-btn group text-left"
                data-url="${model.url}"
                data-name="${model.name}"
                aria-label="Load model: ${model.name}"
              >
                <div class="flex justify-between items-start mb-2">
                  <span class="label-micro text-brand-accent group-hover:tracking-widest transition-all">
                    ${model.id.toUpperCase()}
                  </span>
                  <i data-lucide="box"
                     class="w-3 h-3 opacity-20 group-hover:opacity-100
                            group-hover:text-brand-accent transition-all"></i>
                </div>
                <h3 class="text-base font-bold text-white mb-1 leading-tight">${model.name}</h3>
                <p class="text-[10px] text-brand-ink/40 leading-relaxed line-clamp-2">
                  ${model.description}
                </p>
              </button>
            `).join('')}
          </div>

        </div>

        <!-- ── Experiment cards ──────────────────────────────────────── -->
        <div class="mb-16">
          <span class="label-micro opacity-40 mb-6 block">ACTIVE EXPERIMENTS</span>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="lab-experiment-item" style="animation-delay: 0.1s">
              <span class="label-micro opacity-40 mb-2 block">E-01 // GENERATIVE</span>
              <h3 class="text-lg font-bold text-white mb-3">AUDIO_REACTIVE_SYS</h3>
              <p class="text-xs text-brand-ink/60 mb-6 leading-relaxed">
                TouchDesigner pipeline mapping audio frequency bands to visual parameters —
                amplitude drives scale, pitch drives colour temperature, transients
                trigger particle bursts. Basis for the Roses project.
              </p>
              <div class="flex justify-between items-center pt-4 border-t border-ui-border">
                <span class="font-mono text-[9px] text-brand-accent">STATUS: DEPLOYED</span>
                <span class="text-[9px] text-white opacity-20 italic">TouchDesigner</span>
              </div>
            </div>

            <div class="lab-experiment-item" style="animation-delay: 0.2s">
              <span class="label-micro opacity-40 mb-2 block">E-02 // SHADER</span>
              <h3 class="text-lg font-bold text-white mb-3">NEURAL_DITHER_VS1</h3>
              <p class="text-xs text-brand-ink/60 mb-6 leading-relaxed">
                Custom Bayer 4×4 dithering shader implemented in Three.js via
                EffectComposer. Reduces a full-colour render to a three-value palette:
                deep shadow, orange midtone, highlight — the visual signature of this site.
              </p>
              <div class="flex justify-between items-center pt-4 border-t border-ui-border">
                <span class="font-mono text-[9px] text-brand-accent">STATUS: STABLE</span>
                <span class="text-[9px] text-white opacity-20 italic">Three.js / GLSL</span>
              </div>
            </div>

            <div class="lab-experiment-item" style="animation-delay: 0.3s">
              <span class="label-micro opacity-40 mb-2 block">E-03 // TYPOGRAPHY</span>
              <h3 class="text-lg font-bold text-white mb-3">BLOB_FORM_STUDY</h3>
              <p class="text-xs text-brand-ink/60 mb-6 leading-relaxed">
                Ongoing investigation into organic letterform construction — using
                boolean operations and envelope distortion in Illustrator to
                push glyphs toward sculptural objects. Direct precursor to the
                Aether Studio Blob Font.
              </p>
              <div class="flex justify-between items-center pt-4 border-t border-ui-border">
                <span class="font-mono text-[9px] text-brand-accent">STATUS: IN_PROGRESS</span>
                <span class="text-[9px] text-white opacity-20 italic">Illustrator</span>
              </div>
            </div>

          </div>
        </div>

        <!-- ── Offline / locked section ─────────────────────────────── -->
        <div class="lab-offline-alert">
          <span class="label-micro opacity-20 block mb-4 uppercase tracking-[0.5em]">
            Additional Research // Access Restricted
          </span>
          <p class="text-xs font-mono text-brand-ink/20 italic">
            Full experiment documentation and source files available on request.
          </p>
        </div>

      </div>
    </div>
  `;
}
