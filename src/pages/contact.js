import { ContactSection } from '../components/contact.js';

export function ContactPage() {
  return `
    <div class="page-content pt-32 lg:pt-48">
      <div class="px-6 lg:px-24 max-w-7xl mx-auto mb-24 lg:mb-32 animate-reveal">
        <span class="label-micro text-brand-accent mb-6 block">03 // DIRECT_UPLINK</span>
        <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
          GET IN<br />TOUCH.
        </h1>
        <div class="accent-line max-w-md"></div>
      </div>
      ${ContactSection()}
    </div>
  `;
}
