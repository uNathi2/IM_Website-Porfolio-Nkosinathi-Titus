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
        <svg width="48" height="34" viewBox="0 0 86 61" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="group-hover:drop-shadow-[0_0_15px_rgba(255,85,0,0.7)] transition-all duration-300">
          <rect width="86" height="61" fill="url(#pattern0_14175_41)"/>
          <defs>
            <pattern id="pattern0_14175_41" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_14175_41"
                transform="matrix(0.00281469 0 0 0.00396825 -0.00382983 0)"/>
            </pattern>
            <image id="image0_14175_41" width="358" height="252"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAAD8CAYAAAEzqz4RAAAACXBIWXMAAAsSAAALEgHS3X78AAAUJklEQVR4nO3dQYhl5ZXA8X+VjS1equipF1inJRnAY7c3IENESBYOLSQ9umjEwdi/bxZjd6CZmMygi4wjJMt2BmHXGLKKIdAsOTVy1wkCEiI5uBAN2j8JoU+2bxe1XXVX97n3v3rr33O+e+v+gwK5X797PU+ec+t77vnsus9mMJV+r+vWS47ze4liNY1qbzWY0aHxwgbWIY623PFBXW30eLGrQvXLQUZpeiG1fODvHHPhYHFly0KZqsMgs4Fhr6/T8yo4wyZx20FHm1aPPF0/tuXo61tq8etQdsGup6uNYx4DLix7oe8LUp9EnTL1y0FEmPehZzddTVC+IVb+atDnOGvBqzZhYm81mW8D5hhO1EVKnJ50ekzLJQU9y7jGP9BsNT2zztWwQBz3WWeh/7lE3yXkG+LeWxwqbeyeclQEX+zzJ1F6IM5jWoOepOpvSoHdMadV0/vzf9DnoZXW4t2M1pUfbyDT9fJ/HmtQLcYeDjuKggTMLvvdqz+dgbVZf8/4b+JuWxwuZ4jZFuu2A+/RQ04PmdJRDP+hFlWNuo+Wx6tZhgOZZ3hPAb1uerE+1FWeIzxH74vr06Bx0lHUa1oHpb226cL..."/>
          </defs>
        </svg>
        <span class="label-micro text-brand-accent hidden lg:block">NT</span>
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
          <i data-lucide="github" size="18"></i>
        </a>
        <a href="https://instagram.com/TODO_INSTAGRAM" target="_blank" rel="noopener"
           class="text-brand-ink/60 hover:text-brand-ink transition-colors" aria-label="Instagram">
          <i data-lucide="instagram" size="18"></i>
        </a>
        <a href="mailto:TODO_EMAIL"
           class="text-brand-ink/60 hover:text-brand-ink transition-colors" aria-label="Email">
          <i data-lucide="mail" size="18"></i>
        </a>
      </div>

    </nav>
  `;
}
