import { ProjectGrid } from '../components/projectgrid.js';
import { ARCHIVE_PROJECTS } from '../constants.js';

export function WorkPage() {
  return `
    <div class="work-page-container page-content">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 animate-reveal lg:mb-32">
          <span class="label-micro text-brand-accent mb-6 block">01 // PROJECT_MANUAL</span>
          <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
            SYSTEMS &<br />SOLUTIONS.
          </h1>
        </div>
        
        ${ProjectGrid()}

        <!-- Archives Section -->
        <div class="mt-48 animate-reveal" style="animation-delay: 0.4s">
          <div class="work-archive-header">
             <div class="h-px bg-ui-border flex-grow"></div>
             <h2 class="text-xl font-display font-medium text-brand-accent">THE_ARCHIVES</h2>
             <div class="h-px bg-ui-border w-12"></div>
          </div>

          <div class="work-table-wrapper">
            <table class="work-table">
              <thead>
                <tr class="work-table-head-row">
                  <th class="work-table-th">Year</th>
                  <th class="work-table-th">Project</th>
                  <th class="work-table-th">Agency / Lead</th>
                  <th class="work-table-th">Internal Role</th>
                </tr>
              </thead>
              <tbody>
                ${ARCHIVE_PROJECTS.map(p => `
                  <tr class="work-table-tr">
                    <td class="work-table-td-year">${p.year}</td>
                    <td class="work-table-td-title">${p.title}</td>
                    <td class="work-table-td-agency">${p.agency}</td>
                    <td class="work-table-td-role">
                      <span class="work-role-tag">
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
