// =============================================================================
//  hero.js — Home page hero section
//  Marquee heading + mission card + role/availability metadata
// =============================================================================

export function Hero() {
  // Live clock label — rendered once on mount; updates via setInterval if needed
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-ZA', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });

  return `
    <section class="hero-section" id="hero">
      <div class="max-w-7xl mx-auto w-full animate-reveal">

        <div class="mb-10">
          <span class="label-micro text-brand-accent mb-6 block">
            SYSTEM STATUS: OPERATIONAL // [JHB, ZA_${timeString}]
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">

          <!-- Mission statement card -->
          <div class="hero-description-card">
            <span class="label-micro opacity-40 mb-3 block">Mission Statement</span>
            <p class="hero-description-text">
              Third-year Interactive Media student at Wits — working across 3D animation,
              generative art, graphic design, and UI/UX. I build things that live at the
              intersection of code and visual craft.
            </p>
          </div>

          <!-- Role / availability metadata -->
          <div class="flex flex-col gap-5 justify-center">
            <div class="accent-line"></div>
            <div class="flex justify-between items-center px-2">
              <span class="label-micro opacity-40">Discipline</span>
              <span class="text-[10px] font-bold uppercase text-white tracking-widest">
                Creative Technologist
              </span>
            </div>
            <div class="flex justify-between items-center px-2">
              <span class="label-micro opacity-40">Institution</span>
              <span class="text-[10px] font-bold uppercase text-white tracking-widest">
                Wits University
              </span>
            </div>
            <div class="flex justify-between items-center px-2">
              <span class="label-micro opacity-40">Status</span>
              <span class="text-[10px] font-bold uppercase text-brand-accent tracking-widest">
                Open to Opportunities
              </span>
            </div>
          </div>

        </div>
      </div>

      <!-- Oversized marquee heading -->
      <div class="marquee-container mt-8 select-none pointer-events-none">
        <div class="marquee-content">
          <h1 class="text-[22vh] lg:text-[36vh] font-brand font-black leading-none tracking-tighter text-white/5 whitespace-nowrap outline-text drop-shadow-2xl">
            NKOSINATHI TITUS.&nbsp;&nbsp;NKOSINATHI TITUS.&nbsp;&nbsp;NKOSINATHI TITUS.
          </h1>
        </div>
      </div>

      <div class="absolute bottom-0 right-12 w-[1px] bg-brand-ink/10 hidden lg:block h-[150px]"></div>
    </section>
  `;
}
