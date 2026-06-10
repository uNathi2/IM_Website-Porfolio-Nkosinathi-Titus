// =============================================================================
//  pages/contact.js — Direct Uplink console
// =============================================================================
import { ContactSection } from '../components/contact.js';

export function ContactPage() {
  return `
    <div class="contact-page-container page-content">

      <!-- ── Page header ──────────────────────────────────────────── -->
      <div class="contact-header-block">
        <span class="label-micro text-brand-accent mb-6 block">03 // DIRECT_UPLINK</span>
        <h1 class="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-black
                   text-white leading-[0.85] mb-6 transition-all">
          LET'S<br/>CONNECT.
        </h1>
        <p class="text-sm text-brand-ink/40 max-w-md leading-relaxed">
          Whether you're looking to collaborate, commission work, or talk about the
          ABSA GenA programme — I'm available. Fill in the form or reach out directly.
        </p>
      </div>

      ${ContactSection()}

    </div>
  `;
}
