// =============================================================================
//  footer.js — global footer injected once on layout init
//  TODO: replace TODO_INSTAGRAM and TODO_EMAIL with your real handles
// =============================================================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="footer-section">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">

        <!-- Left: disciplines + socials -->
        <div class="flex gap-16 md:gap-24">

          <div class="flex flex-col gap-2">
            <span class="text-[9px] uppercase tracking-widest font-bold opacity-30 text-white">
              Disciplines
            </span>
            <span class="text-xs opacity-60 font-light">3D · Animation · Graphic Design</span>
            <span class="text-xs opacity-60 font-light">Creative Coding · UI/UX</span>
          </div>

          <div class="flex flex-col gap-2">
            <span class="text-[9px] uppercase tracking-widest font-bold opacity-30 text-white">
              Links
            </span>
            <div class="flex flex-col gap-1">
              <a href="mailto:TODO_EMAIL" class="footer-link">Email</a>
              <a href="https://instagram.com/TODO_INSTAGRAM" target="_blank" rel="noopener" class="footer-link">Instagram</a>
              <a href="https://github.com/TODO_GITHUB" target="_blank" rel="noopener" class="footer-link">GitHub</a>
            </div>
          </div>

        </div>

        <!-- Right: location + copyright -->
        <div class="text-right flex flex-col gap-1">
          <span class="text-[9px] uppercase tracking-widest-xl opacity-30 block text-white font-bold">
            Based in
          </span>
          <span class="text-xs opacity-60">Johannesburg, ZA</span>
          <span class="text-[8px] opacity-10 uppercase tracking-widest mt-4">
            © ${currentYear} Nkosinathi Titus
          </span>
        </div>

      </div>
    </footer>
  `;
}
