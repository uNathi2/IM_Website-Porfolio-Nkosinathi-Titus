import { Hero } from '../components/hero.js';
import { ProjectGrid } from '../components/projectgrid.js';

export function HomePage() {
  return `
    <div class="home-page-container page-content">
      <div class="home-hero-glow"></div>
      <div class="relative z-10">
        ${Hero()}
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
      </div>
    </div>
  `;
}
