import { SKILLS } from '../constants.js';

export function SkillsSection() {
  return `
    <section class="px-6 py-24 bg-brand-bg md:px-12 lg:px-24 border-t border-ui-border" id="skills">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row gap-24 items-start">
          <div class="md:w-1/3">
             <span class="label-micro text-brand-accent mb-4 block">02 // CAPABILITIES</span>
             <h2 class="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-8">
               CURATED TOOLSET.
             </h2>
             <p class="text-brand-ink/40 leading-relaxed mb-8 font-mono text-xs italic">
               // A blend of modern engineering and digital architecture principles.
             </p>
             <div class="p-8 border border-ui-border bg-card-bg">
                <span class="label-micro opacity-40 mb-2 block">Current Focus</span>
                <p class="font-display font-bold text-xl text-white">GENA GRADUATE PROGRAMME APPLICATION</p>
             </div>
          </div>

          <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            ${SKILLS.map((skill, index) => `
              <div
                class="group border-l border-ui-border pl-6 py-4 hover:border-brand-accent transition-colors bg-card-bg/30 animate-reveal"
                style="animation-delay: ${index * 0.05}s"
              >
                <span class="label-micro opacity-20 block mb-1">${skill.category}</span>
                <span class="text-xl font-display font-bold text-brand-ink/60 group-hover:text-white transition-colors">
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
