export function Hero() {
  return `
    <section class="relative min-height-[90vh] flex flex-col justify-center px-6 pt-32 pb-12 lg:pt-40 lg:pb-32 overflow-hidden" id="hero">
      <div class="max-w-7xl mx-auto w-full animate-reveal">
        <div class="mb-12">
          <span class="label-micro text-brand-accent mb-6 block">
            SYSTEM STATUS: OPERATIONAL // [JHB, ZA_15:52:07]
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div class="p-6 border border-ui-border bg-card-bg/80 backdrop-blur-sm lg:p-6 max-w-sm">
             <span class="label-micro opacity-40 mb-2 block">Mission Statement</span>
             <p class="text-[11px] md:text-xs text-brand-ink/60 leading-relaxed font-medium uppercase tracking-wider">
               Multidisciplinary creative technologist focused on elevating luxury brands through minimalist visual storytelling and precise interaction.
             </p>
          </div>

          <div class="flex flex-col gap-6 justify-center">
             <div class="accent-line"></div>
             <div class="flex justify-between items-center px-2">
                <span class="label-micro opacity-40">Role</span>
                <span class="text-xs font-bold uppercase text-white tracking-widest">Digital Architect</span>
             </div>
             <div class="flex justify-between items-center px-2">
                <span class="label-micro opacity-40">Availability</span>
                <span class="text-xs font-bold uppercase text-brand-accent tracking-widest">Q2 — 2026</span>
             </div>
          </div>
        </div>
      </div>

      <!-- Oversized Marquee Heading -->
      <div class="marquee-container mt-12 select-none pointer-events-none">
        <div class="marquee-content">
          <h1 class="text-[25vh] lg:text-[40vh] font-brand font-black leading-none tracking-tighter text-white/5 whitespace-nowrap outline-text drop-shadow-2xl">
            NKOSINATHI TITUS. NKOSINATHI TITUS. NKOSINATHI TITUS. NKOSINATHI TITUS.
          </h1>
        </div>
      </div>
      
      <div class="absolute bottom-0 right-12 w-[1px] bg-brand-ink/10 hidden lg:block h-[150px]"></div>
    </section>
  `;
}
