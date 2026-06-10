// =============================================================================
//  pages/about.js — Profile Intel
//  Sections: hero → personal statement → philosophy → skills → differentiator cards
// =============================================================================
import { SkillsSection } from '../components/skills.js';

export function AboutPage() {
  return `
    <div class="about-page-container page-content">

      <!-- ── Hero grid ──────────────────────────────────────────────── -->
      <div class="px-6 lg:px-24 max-w-7xl mx-auto">
        <div class="about-hero-grid animate-reveal">

          <div class="about-title-block">
            <span class="label-micro text-brand-accent mb-6 block">02 // PROFILE_INTEL</span>
            <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black
                       text-white leading-[0.85] mb-8 transition-all">
              BUILT AT THE<br/>INTERSECTION.
            </h1>
          </div>

          <div class="about-description-block">

            <p class="text-base text-brand-ink/80 leading-relaxed mb-6 font-medium">
              I'm Nkosinathi Titus — a third-year Interactive Media student at Wits University,
              Johannesburg. My practice spans 3D animation, generative art, graphic design, and
              UI/UX, with an instinct for finding where these disciplines collide.
            </p>

            <p class="text-base text-brand-ink/60 leading-relaxed mb-8">
              I'm drawn to work that has both visual impact and conceptual rigour —
              whether that's a full-dome animation for the Wits Digital Dome, an
              audio-reactive piece built in TouchDesigner, or a typeface study that
              challenges what a letterform can be.
            </p>

            <p class="about-principle-quote">
              // Core principle: the most interesting problems live between disciplines.
              Code is a design tool. Design is a thinking tool. I use both.
            </p>

            <!-- Quick-facts grid -->
            <div class="grid grid-cols-2 gap-4 mt-10">
              ${[
                { label: 'Institution', value: 'Wits University' },
                { label: 'Year', value: '4th Year — BA Digital Arts' },
                { label: 'Based', value: 'Johannesburg, ZA' },
                { label: 'Status', value: 'Currently An Intern at Bupila and Music in Africa' },
              ].map(({ label, value }) => `
                <div class="border border-ui-border p-4 bg-card-bg/30">
                  <span class="label-micro opacity-30 block mb-1">${label}</span>
                  <span class="text-sm font-medium text-white">${value}</span>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      </div>

      <!-- ── Philosophy section ───────────────────────────────────── -->
      <section class="px-6 lg:px-24 py-20 border-t border-ui-border bg-card-bg/10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div>
            <span class="label-micro text-brand-accent mb-4 block">How I Work</span>
            <h2 class="text-2xl font-display font-black text-white mb-4">PROCESS.</h2>
          </div>

          <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            ${[
              {
                num: '01',
                heading: 'Concept first',
                body: 'Every project starts with a clear question. What is this actually trying to do or say? The medium follows the idea, not the other way around.',
              },
              {
                num: '02',
                heading: 'Tool as language',
                body: 'Blender, TouchDesigner, Figma, code — each is a different vocabulary. I choose the one that fits the problem, then push it past its defaults.',
              },
              {
                num: '03',
                heading: 'Ship, then refine',
                body: 'Finished and imperfect beats perfect and unshipped. I put work in front of people early, absorb feedback, and iterate fast.',
              },
            ].map(({ num, heading, body }) => `
              <div class="border-t border-ui-border pt-6">
                <span class="label-micro text-brand-accent block mb-3">${num}</span>
                <h3 class="text-base font-bold text-white mb-3">${heading}</h3>
                <p class="text-xs text-brand-ink/50 leading-relaxed">${body}</p>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- ── Skills grid ──────────────────────────────────────────── -->
      ${SkillsSection()}

      <!-- ── Context cards ────────────────────────────────────────── -->
      <section class="about-card-section">
        <div class="max-w-7xl mx-auto dashboard-grid">

          <div class="col-span-12 lg:col-span-6 about-differentiator animate-reveal">
            <span class="label-micro opacity-40 mb-4 block">WHY GENA</span>
            <p class="text-sm text-brand-ink/60 leading-relaxed">
              The ABSA GenA Graduate Programme sits at the intersection of technology,
              design, and financial systems — exactly where I want to operate. I'm not
              looking to pick a lane; I'm looking for an environment where
              cross-disciplinary thinking is an asset, not a liability.
            </p>
          </div>

          <div class="col-span-12 lg:col-span-6 about-differentiator animate-reveal"
               style="animation-delay: 0.1s">
            <span class="label-micro opacity-40 mb-4 block">ACCESSIBILITY COMMITMENT</span>
            <p class="text-sm text-brand-ink/60 leading-relaxed">
              Every project I build is tested for keyboard navigation, screen reader
              compatibility, and colour contrast. Accessibility is a design constraint
              I welcome — it makes the work better, not just more compliant.
            </p>
          </div>

        </div>
      </section>

    </div>
  `;
}
