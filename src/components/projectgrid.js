import { PROJECTS } from '../constants.js';

export function ProjectGrid({ limit } = {}) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return `
    <section class="section-container" id="work">
      <div class="max-w-7xl mx-auto">
        <div class="section-header">
          <div>
            <span class="label-micro text-brand-accent mb-4 block">PORTFOLIO // DATASET_01</span>
            <h2 class="text-5xl md:text-7xl lg:text-4xl xl:text-5xl font-display font-black text-white transition-all">RECORDS.</h2>
          </div>
          <div class="text-right hidden md:block">
            <span class="label-micro opacity-40 block mb-2">FILTER_STATUS</span>
            <span class="text-[10px] font-bold text-brand-accent p-1 border border-brand-accent rounded" style="font-family: 'Roboto', sans-serif;">ALL_ARCHIVES</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 xl:gap-32">
          ${displayedProjects.map((project, index) => `
            <div class="project-card group" style="animation-delay: ${index * 0.1}s">
              <div class="project-image-container">
                <img 
                  src="${project.image}" 
                  alt="${project.title}"
                  class="project-image"
                  referrerpolicy="no-referrer"
                />
                <div class="absolute inset-0 bg-brand-bg/60 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                
                <div class="absolute top-6 left-6 pointer-events-none z-10">
                   <div class="flex items-center gap-3">
                     <span class="font-mono text-[40px] font-black text-white/5 group-hover:text-brand-accent/20 transition-colors">0${index + 1}</span>
                     <div>
                       <span class="label-micro opacity-40 block">RECORD_ID</span>
                       <span class="text-[10px] font-bold text-white/40">${project.id}</span>
                     </div>
                   </div>
                </div>

                <div class="absolute bottom-6 right-6 text-brand-accent opacity-0 hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10">
                    <div class="bg-brand-accent text-black p-3">
                      <i data-lucide="arrow-up-right"></i>
                    </div>
                </div>
              </div>

              <div class="mt-8 flex flex-col gap-3">
                <div class="flex flex-wrap gap-2">
                  ${project.tags.map(tag => `
                    <span class="text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-ui-border group-hover:border-brand-accent/30 transition-colors">
                      ${tag}
                    </span>
                  `).join('')}
                </div>
                <h3 class="text-3xl font-display font-black text-white group-hover:text-brand-accent transition-colors duration-300">${project.title}</h3>
                <p class="text-sm opacity-40 font-medium leading-relaxed max-w-lg">${project.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-24 text-center">
          <a href="/work" class="router-link inline-block label-micro text-brand-ink/40 border-b border-brand-ink/10 pb-2 hover:text-brand-accent hover:border-brand-accent transition-all">
            OPEN COMPLETE REPOSITORY →
          </a>
        </div>
      </div>
    </section>
  `;
}
