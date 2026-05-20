import { Hero } from '../components/hero.js';
import { ProjectGrid } from '../components/projectgrid.js';

export function HomePage() {
  return `
    <div class="page-content relative">
      <div class="relative z-10">
        ${Hero()}
      <section class="px-6 py-24 lg:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-end mb-12 border-b border-ui-border pb-6">
            <div>
              <span class="label-micro text-brand-accent mb-2 block">Featured Work</span>
              <h2 class="text-3xl font-display font-black text-white">RECURSIVE SELECTION</h2>
            </div>
            <a href="/work" class="router-link label-micro hover:text-brand-accent transition-colors underline decoration-brand-accent/30 underline-offset-8">
              View All // 04
            </a>
          </div>
          ${ProjectGrid({ limit: 2 })}
        </div>
      </section>
      </div>
    </div>
  `;
}
