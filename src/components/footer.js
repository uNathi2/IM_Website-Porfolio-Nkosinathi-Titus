export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="px-6 py-16 bg-brand-bg md:px-12 lg:px-24 border-t border-white/5">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div class="flex gap-24">
          <div class="flex flex-col gap-2">
            <span class="text-[9px] uppercase tracking-widest font-bold opacity-30 text-white">Expertise</span>
            <span class="text-xs opacity-60 font-light">UI/UX Design, Creative Direction</span>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-[9px] uppercase tracking-widest font-bold opacity-30 text-white">Socials</span>
            <div class="flex gap-4">
              <a href="#" class="text-xs opacity-60 hover:opacity-100 transition-opacity">Instagram</a>
              <a href="#" class="text-xs opacity-60 hover:opacity-100 transition-opacity">Read.cv</a>
            </div>
          </div>
        </div>

        <div class="text-right flex flex-col gap-1">
           <span class="text-[9px] uppercase tracking-widest-xl opacity-30 block text-white font-bold">Based in</span>
           <span class="text-xs opacity-60">Copenhagen, Denmark</span>
           <span class="text-[8px] opacity-10 uppercase tracking-widest mt-4">© ${currentYear} Marcus Vane Studio</span>
        </div>
      </div>
    </footer>
  `;
}
