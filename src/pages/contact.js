import { ContactSection } from '../components/contact.js';

export function ContactPage() {
  return `
    <div class="contact-page-container page-content">
      <div class="contact-header-block">
        <span class="label-micro text-brand-accent mb-6 block">03 // DIRECT_UPLINK</span>
        <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[0.85] mb-8 transition-all">
          GET IN<br />TOUCH.
        </h1>
      </div>
      ${ContactSection()}
    </div>
  `;
}
