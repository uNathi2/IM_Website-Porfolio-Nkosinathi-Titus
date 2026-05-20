import { createIcons, icons } from 'lucide';

export function initIcons() {
  createIcons({
    icons
  });
}

export function render(container, html) {
  container.innerHTML = html;
  initIcons();
}
