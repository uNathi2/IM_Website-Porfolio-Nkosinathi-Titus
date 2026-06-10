// =============================================================================
//  navbar.js — global navigation bar
//  Injected once in initLayout(); never duplicated per page.
//  Active state is set by comparing window.location.pathname to each href.
// =============================================================================

export function Navbar() {
    const navItems = [
        { name: 'Home',    href: '/' },
        { name: 'Work',    href: '/work' },
        { name: 'Lab',     href: '/lab' },
        { name: 'About',   href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const currentPath = window.location.pathname;

    return `
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:py-5 glass" id="navbar">

      <!-- Logo / wordmark -->
      <a href="/" class="router-link flex items-center gap-3 group">
        <span class="font-display font-black text-2xl text-brand-accent
                     group-hover:drop-shadow-[0_0_15px_rgba(255,85,0,0.7)]
                     transition-all duration-300 tracking-tighter">NT</span>
      </a>

      <!-- Desktop nav links -->
      <div class="hidden md:flex items-center gap-10">
        ${navItems.map((item) => `
          <a
            href="${item.href}"
            class="nav-link router-link ${currentPath === item.href ? 'nav-link-active' : 'nav-link-inactive'}"
          >
            ${item.name}
          </a>
        `).join('')}
      </div>

      <!-- Icon links -->
      <div class="flex items-center gap-4">
        <a href="https://github.com/TODO_GITHUB" target="_blank" rel="noopener"
           class="text-brand-ink/60 hover:text-brand-ink transition-colors" aria-label="GitHub">
          <i data-lucide="Github" style="width:18px;height:18px;"></i>
        </a>
        <a href="https://instagram.com/TODO_INSTAGRAM" target="_blank" rel="noopener"
           class="text-brand-ink/60 hover:text-brand-ink transition-colors" aria-label="Instagram">
          <i data-lucide="Instagram" style="width:18px;height:18px;"></i>
        </a>
        <a href="mailto:TODO_EMAIL"
           class="text-brand-ink/60 hover:text-brand-ink transition-colors" aria-label="Email">
          <i data-lucide="Mail" style="width:18px;height:18px;"></i>
        </a>
      </div>

    </nav>
  `;
}