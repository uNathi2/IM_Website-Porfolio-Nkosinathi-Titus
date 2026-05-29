import { SkillsSection } from '../components/skills.js';

export function AboutPage() {
  return `
    <div class="about-page-container page-content">
      <div class="px-6 lg:px-24 max-w-7xl mx-auto">
        <div class="about-hero-grid animate-reveal">
          <div class="about-title-block">
            <span class="label-micro text-brand-accent mb-6 block">02 // PROFILE_INTEL</span>
            <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
              CRAFTED<br />WITH GRID.
            </h1>
          </div>
          <div class="about-description-block">
            <p class="text-lg text-brand-ink/80 leading-relaxed mb-8 font-medium">
              Digital design is more than just aesthetics; it's about creating an emotional connection through precision and meticulous data transparency.
            </p>
            <p class="about-principle-quote">
              // Core Principle: Accessibility serves as the foundation. Every interaction is evaluated against the needs of recruiters and tech leads, ensuring technical complexity never overrides clarity of purpose.
            </p>
          </div>
        </div>
      </div>

      ${SkillsSection()}

      <section class="about-card-section">
        <div class="max-w-7xl mx-auto dashboard-grid">
           <div class="col-span-12 lg:col-span-6 about-differentiator animate-reveal">
              <span class="label-micro opacity-40 mb-4 block">COMPETITIVE_DIFFERENTIATION</span>
              <p class="text-sm text-brand-ink/60 leading-relaxed">
                Unlike generic portfolios, this platform uses a "Command Center" paradigm that prioritises transparency. 
                By integrating Three.js spatial elements with a strict 12-column grid, we project technical rigour without sacrificing impact.
              </p>
           </div>
           <div class="col-span-12 lg:col-span-6 about-differentiator animate-reveal" style="animation-delay: 0.1s">
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
