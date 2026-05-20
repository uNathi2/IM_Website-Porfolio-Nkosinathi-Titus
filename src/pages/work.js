import { ProjectGrid } from '../components/projectgrid.js';
import { ARCHIVE_PROJECTS } from '../constants.js';

export function WorkPage() {
  return `
    <div class="page-content pt-32 pb-24 px-6 lg:px-24 lg:pt-48 lg:pb-32">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 animate-reveal lg:mb-32">
          <span class="label-micro text-brand-accent mb-6 block">01 // PROJECT_MANUAL</span>
          <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
            SYSTEMS &<br />SOLUTIONS.
          </h1>
          <div class="accent-line max-w-md"></div>
        </div>
        
        ${ProjectGrid()}

        <!-- Archives Section -->
        <div class="mt-48 animate-reveal" style="animation-delay: 0.4s">
          <div class="flex items-center gap-4 mb-12">
             <div class="h-px bg-ui-border flex-grow"></div>
             <h2 class="text-xl font-display font-medium text-brand-accent">THE_ARCHIVES</h2>
             <div class="h-px bg-ui-border w-12"></div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left font-sans" style="font-family: 'Roboto', sans-serif;">
              <thead>
                <tr class="border-b border-ui-border/50 text-brand-ink/30 uppercase text-[10px] tracking-widest font-bold">
                  <th class="py-6 px-4">Year</th>
                  <th class="py-6 px-4">Project</th>
                  <th class="py-6 px-4">Agency / Lead</th>
                  <th class="py-6 px-4">Internal Role</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-ui-border/20">
                ${ARCHIVE_PROJECTS.map(p => `
                  <tr class="group hover:bg-white/5 transition-colors cursor-crosshair">
                    <td class="py-6 px-4 opacity-30 font-mono text-xs">${p.year}</td>
                    <td class="py-6 px-4 text-white font-medium">${p.title}</td>
                    <td class="py-6 px-4 opacity-60 text-sm italic">${p.agency}</td>
                    <td class="py-6 px-4">
                      <span class="text-[9px] uppercase tracking-widest text-brand-accent font-bold px-2 py-1 border border-brand-accent/20 rounded">
                        ${p.role}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          
          <div class="mt-12 flex justify-end">
             <span class="label-micro opacity-10 uppercase italic">// EOD_SEQUENCE_REACHED</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
