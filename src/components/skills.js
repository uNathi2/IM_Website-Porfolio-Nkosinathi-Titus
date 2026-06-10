// =============================================================================
//  skills.js — capabilities grid section (used on About page)
// =============================================================================
import { SKILLS } from '../constants.js';

export function SkillsSection() {
  return `
    <section class="px-6 py-24 bg-brand-bg md:px-12 lg:px-24 border-t border-ui-border" id="skills">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row gap-24 items-start">

          <!-- Left: intro text -->
          <div class="md:w-1/3">
            <span class="label-micro text-brand-accent mb-4 block">CAPABILITIES</span>
            <h2 class="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-8">
              TOOLS &amp; CRAFT.
            </h2>
            <p class="text-brand-ink/40 leading-relaxed mb-8 font-mono text-xs italic">
              // Built across five disciplines — each tool chosen deliberately for what it unlocks.
            </p>
            <div class="p-6 border border-ui-border bg-card-bg">
              <span class="label-micro opacity-40 mb-2 block">Current Target</span>
              <p class="font-display font-bold text-lg text-white leading-snug">
                ABSA GENA GRADUATE PROGRAMME
              </p>
            </div>
          </div>

          <!-- Right: skill grid -->
          <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            ${SKILLS.map((skill, index) => `
              <div
                class="group border-l-2 border-ui-border pl-5 py-3
                       hover:border-brand-accent transition-colors duration-200
                       bg-card-bg/20 animate-reveal"
                style="animation-delay: ${index * 0.04}s"
              >
                <span class="label-micro opacity-30 block mb-1">${skill.category}</span>
                <span class="text-lg font-display font-bold text-brand-ink/60
                             group-hover:text-white transition-colors">
                  ${skill.name}
                </span>
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    </section>
  `;
}
