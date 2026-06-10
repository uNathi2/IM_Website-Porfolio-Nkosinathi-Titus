// =============================================================================
//  pages/work.js — Project Manual
//  Sections: header → discipline filter → full project grid → archives table
// =============================================================================
import { ProjectGrid } from '../components/projectgrid.js';
import { ARCHIVE_PROJECTS } from '../constants.js';

export function WorkPage() {
  const disciplines = ['All', '3D / Animation', 'Graphic Design', 'Creative Coding', 'UI/UX'];

  return `
    <div class="work-page-container page-content">
      <div class="max-w-7xl mx-auto">

        <!-- ── Page header ──────────────────────────────────────────── -->
        <div class="mb-16 animate-reveal lg:mb-24">
          <span class="label-micro text-brand-accent mb-6 block">01 // PROJECT_MANUAL</span>
          <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black
                     text-white leading-[0.85] mb-6 transition-all">
            SYSTEMS &amp;<br/>SOLUTIONS.
          </h1>
          <p class="text-sm text-brand-ink/40 max-w-lg leading-relaxed">
            Four projects across 3D animation, generative art, graphic design, and typography —
            each built from a different starting point, each landed in a different medium.
          </p>
        </div>

        <!-- ── Discipline filter bar ────────────────────────────────── -->
        <div class="mb-12 flex gap-2 flex-wrap" id="filter-bar" role="group" aria-label="Filter projects by discipline">
          ${disciplines.map((d, i) => `
            <button
              class="filter-btn ${i === 0 ? 'filter-btn-active' : 'filter-btn-inactive'}"
              data-filter="${d}"
              aria-pressed="${i === 0 ? 'true' : 'false'}"
            >
              ${d}
            </button>
          `).join('')}
        </div>

        <!-- ── Project grid ─────────────────────────────────────────── -->
        ${ProjectGrid()}

        <!-- ── Archives ─────────────────────────────────────────────── -->
        <div class="mt-32 animate-reveal" style="animation-delay: 0.4s">
          <div class="work-archive-header">
            <div class="h-px bg-ui-border flex-grow"></div>
            <h2 class="text-xl font-display font-medium text-brand-accent px-4">THE_ARCHIVES</h2>
            <div class="h-px bg-ui-border w-12"></div>
          </div>

          <div class="work-table-wrapper">
            <table class="work-table">
              <thead>
                <tr class="work-table-head-row">
                  <th class="work-table-th" scope="col">Year</th>
                  <th class="work-table-th" scope="col">Project</th>
                  <th class="work-table-th" scope="col">Context</th>
                  <th class="work-table-th" scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                ${ARCHIVE_PROJECTS.map(p => `
                  <tr class="work-table-tr">
                    <td class="work-table-td-year">${p.year}</td>
                    <td class="work-table-td-title">${p.title}</td>
                    <td class="work-table-td-agency">${p.agency}</td>
                    <td class="work-table-td-role">
                      <span class="work-role-tag">${p.role}</span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="mt-8 flex justify-end">
            <span class="label-micro opacity-10 uppercase italic">// EOD_SEQUENCE_REACHED</span>
          </div>
        </div>

      </div>
    </div>
  `;
}
