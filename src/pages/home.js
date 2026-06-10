// =============================================================================
//  pages/home.js — Unified Command Dashboard
//  Sections: Hero → Discipline overview → Recursive Selection (2 projects) → CTA
// =============================================================================
import { Hero } from '../components/hero.js';
import { ProjectGrid } from '../components/projectgrid.js';

export function HomePage() {
  return `
    <div class="home-page-container page-content">
      <div class="home-hero-glow"></div>

      <div class="relative z-10">

        <!-- ── Hero ────────────────────────────────────────────────── -->
        ${Hero()}

        <!-- ── Discipline strip ─────────────────────────────────────── -->
        <section class="px-6 lg:px-24 py-16 border-t border-ui-border">
          <div class="max-w-7xl mx-auto">
            <span class="label-micro opacity-40 mb-8 block">Areas of Practice</span>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              ${[
                { label: '3D & Animation', icon: 'box' },
                { label: 'Graphic Design', icon: 'pen-tool' },
                { label: 'Creative Coding', icon: 'code-2' },
                { label: 'UI / UX Design', icon: 'layout' },
                { label: 'Generative Art', icon: 'sparkles' },
              ].map(({ label, icon }) => `
                <div class="discipline-chip group border border-ui-border p-4
                            hover:border-brand-accent transition-all duration-200
                            bg-card-bg/30 flex items-center gap-3">
                  <i data-lucide="${icon}" class="w-4 h-4 text-brand-accent opacity-60
                                               group-hover:opacity-100 transition-opacity"></i>
                  <span class="text-[11px] font-mono uppercase tracking-wider
                               text-brand-ink/50 group-hover:text-brand-ink transition-colors">
                    ${label}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- ── Featured work ────────────────────────────────────────── -->
        <section class="section-container">
          <div class="max-w-7xl mx-auto">
            <div class="home-section-header">
              <div>
                <span class="label-micro text-brand-accent mb-2 block">Featured Work</span>
                <h2 class="text-3xl font-display font-black text-white">RECURSIVE SELECTION</h2>
              </div>
              <a href="/work" class="router-link home-view-all-btn">
                View All // 04
              </a>
            </div>
            ${ProjectGrid({ limit: 2 })}
          </div>
        </section>

        <!-- ── About strip ──────────────────────────────────────────── -->
        <section class="px-6 lg:px-24 py-20 border-t border-ui-border bg-card-bg/20">
          <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="label-micro text-brand-accent mb-4 block">Who I Am</span>
              <h2 class="text-3xl md:text-4xl font-display font-black text-white leading-tight mb-6">
                THIRD-YEAR.<br/>WITS UNIVERSITY.<br/>INTERACTIVE MEDIA.
              </h2>
              <p class="text-sm text-brand-ink/50 leading-relaxed max-w-md">
                I work at the boundary where design thinking meets technical execution —
                building immersive 3D experiences, generative visual systems, and
                interfaces that do more than look good. Currently applying to the
                ABSA GenA Graduate Programme.
              </p>
              <a href="/about" class="router-link inline-block mt-8 label-micro
                                      text-brand-ink/40 border-b border-brand-ink/10 pb-2
                                      hover:text-brand-accent hover:border-brand-accent transition-all">
                Read full profile →
              </a>
            </div>
            <div class="grid grid-cols-2 gap-4">
              ${[
                { stat: '5', label: 'Disciplines' },
                { stat: '4+', label: 'Projects shipped' },
                { stat: '4th', label: 'Year of study' },
                { stat: 'JHB', label: 'Based in' },
              ].map(({ stat, label }) => `
                <div class="data-cell tech-border">
                  <span class="text-3xl font-display font-black text-brand-accent block mb-1">
                    ${stat}
                  </span>
                  <span class="label-micro opacity-40">${label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

      </div>
    </div>
  `;
}
