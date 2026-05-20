export function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Lab', href: '/lab' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentPath = window.location.pathname;

  return `
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:py-4 xl:py-5 glass" id="navbar">
      <a href="/" class="flex items-center group router-link">
        <svg width="48" height="34" viewBox="0 0 86 61" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="group-hover:drop-shadow-[0_0_15px_rgba(255,85,0,0.7)] transition-all duration-300">
          <rect width="86" height="61" fill="url(#pattern0_14175_41)"/>
          <defs>
            <pattern id="pattern0_14175_41" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_14175_41" transform="matrix(0.00281469 0 0 0.00396825 -0.00382983 0)"/>
            </pattern>
            <image id="image0_14175_41" width="358" height="252" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>
      </a>

      <div class="hidden md:flex items-center gap-12">
        ${navItems.map((item) => `
          <a 
            href="${item.href}"
            class="label-micro transition-colors router-link ${currentPath === item.href ? 'text-brand-accent' : 'hover:text-brand-accent'}"
          >
            ${item.name}
          </a>
        `).join('')}
      </div>

      <div class="flex items-center gap-4">
        <a href="https://github.com" class="text-brand-ink/60 hover:text-brand-ink transition-colors">
          <i data-lucide="github" size="20"></i>
        </a>
        <a href="https://linkedin.com" class="text-brand-ink/60 hover:text-brand-ink transition-colors">
          <i data-lucide="linkedin" size="20"></i>
        </a>
        <a href="mailto:contact@example.com" class="text-brand-ink/60 hover:text-brand-ink transition-colors">
          <i data-lucide="mail" size="20"></i>
        </a>
      </div>
    </nav>
  `;
}
