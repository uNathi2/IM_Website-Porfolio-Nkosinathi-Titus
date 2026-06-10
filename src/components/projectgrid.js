// =============================================================================
//  projectgrid.js — reusable project card grid
//  Accepts optional { limit } to show a subset (used on Home page)
//  Each card gets data-discipline so the Work page filter bar can target it
// =============================================================================
import { PROJECTS } from '../constants.js';

export function ProjectGrid({ limit } = {}) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return `
    <section class="section-container" id="work">
      <div class="max-w-7xl mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          ${displayedProjects.map((project, index) => `
            <div
              class="project-card group animate-reveal"
              data-discipline="${project.discipline}"
              style="animation-delay: ${index * 0.1}s"
            >
              <!-- Image frame -->
              <div class="project-image-container">

                <img
                  src="${project.image}"
                  alt="${project.title}"
                  class="project-image"
                  loading="lazy"
                  onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
                />

                <!-- Fallback when image is missing -->
                <div style="display:none"
                     class="absolute inset-0 flex items-center justify-center
                            flex-col gap-2 bg-card-bg border border-ui-border">
                  <i data-lucide="image-off" class="w-8 h-8 text-brand-ink/20"></i>
                  <span class="label-micro opacity-30">Add image to /public/images/projects/</span>
                </div>

                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-brand-bg/60 group-hover:bg-transparent
                            transition-colors duration-700 pointer-events-none"></div>

                <!-- Project number -->
                <div class="absolute top-5 left-5 pointer-events-none z-10">
                  <span class="font-mono text-[36px] font-black text-white/5
                               group-hover:text-brand-accent/20 transition-colors">
                    ${project.id}
                  </span>
                </div>

                <!-- Arrow CTA -->
                <div class="absolute bottom-5 right-5 opacity-0
                            group-hover:opacity-100 transition-all duration-500
                            translate-y-4 group-hover:translate-y-0 z-10">
                  <div class="bg-brand-accent text-black p-3">
                    <i data-lucide="arrow-up-right"></i>
                  </div>
                </div>

              </div>

              <!-- Card metadata -->
              <div class="mt-6 flex flex-col gap-3">
                <div class="flex flex-wrap gap-2">
                  ${project.tags.map(tag => `
                    <span class="text-[9px] font-bold uppercase tracking-widest
                                 px-2 py-1 border border-ui-border
                                 group-hover:border-brand-accent/30 transition-colors">
                      ${tag}
                    </span>
                  `).join('')}
                </div>

                <h3 class="text-2xl font-display font-black text-white
                           group-hover:text-brand-accent transition-colors duration-300">
                  ${project.title}
                </h3>

                <p class="text-sm opacity-40 font-medium leading-relaxed max-w-lg">
                  ${project.description}
                </p>

                <div class="flex items-center gap-4 mt-1">
                  <span class="label-micro opacity-30">${project.year}</span>
                  <span class="label-micro opacity-20">·</span>
                  <span class="label-micro opacity-30">${project.discipline}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
