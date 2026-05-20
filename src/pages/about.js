import { SkillsSection } from '../components/skills.js';

export function AboutPage() {
  return `
    <div class="page-content pt-32 pb-24 lg:pt-48">
      <div class="px-6 lg:px-24 max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start mb-40 animate-reveal lg:mb-56">
          <div class="lg:w-1/2">
            <span class="label-micro text-brand-accent mb-6 block">02 // PROFILE_INTEL</span>
            <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
              CRAFTED<br />WITH GRID.
            </h1>
            <div class="accent-line max-w-md"></div>
          </div>
          <div class="lg:w-1/2 pt-4">
            <p class="text-lg text-brand-ink/80 leading-relaxed mb-8 font-medium">
              Digital design is more than just aesthetics; it's about creating an emotional connection through precision and meticulous data transparency.
            </p>
            <p class="text-lg text-brand-ink/40 leading-relaxed font-mono text-xs italic border-l-2 border-ui-border pl-6">
              // Core Principle: Accessibility serves as the foundation. Every interaction is evaluated against the needs of recruiters and tech leads, ensuring technical complexity never overrides clarity of purpose.
            </p>
          </div>
        </div>
      </div>

      ${SkillsSection()}

      <section class="px-6 py-24 bg-card-bg border-y border-ui-border lg:px-12">
        <div class="max-w-7xl mx-auto dashboard-grid">
           <div class="col-span-12 lg:col-span-6 animate-reveal">
              <span class="label-micro opacity-40 mb-4 block">COMPETITIVE_DIFFERENTIATION</span>
              <p class="text-sm text-brand-ink/60 leading-relaxed">
                Unlike generic portfolios, this platform uses a "Command Center" paradigm that prioritises transparency. 
                By integrating Three.js spatial elements with a strict 12-column grid, we project technical rigour without sacrificing impact.
              </p>
           </div>
           <div class="col-span-12 lg:col-span-6 animate-reveal">
              <span class="label-micro opacity-40 mb-4 block">ACCESSIBILITY_AUDIT</span>
              <p class="text-sm text-brand-ink/60 leading-relaxed">
                Semantic HTML, keyboard navigation, and ARIA labels are implemented as core requirements, 
                ensuring the site is usable by all archetypes described in our research.
              </p>
           </div>
        </div>
      </section>
    </div>
  `;
}
