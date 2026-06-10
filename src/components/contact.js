// =============================================================================
//  contact.js — contact form component
//  Used by src/pages/contact.js
//  TODO: replace TODO_EMAIL in the form action or wire up a Formspree endpoint
// =============================================================================

export function ContactSection() {
  return `
    <section class="px-6 py-24 lg:px-24 bg-brand-bg border-t border-white/5" id="contact">
      <div class="max-w-4xl mx-auto">

        <div class="animate-reveal">

          <form
            class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left"
            id="contact-form"
            novalidate
          >

            <div class="flex flex-col gap-3 group">
              <label class="contact-form-label group-focus-within:text-brand-accent" for="name">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                required
                class="contact-form-input"
                autocomplete="name"
              />
            </div>

            <div class="flex flex-col gap-3 group">
              <label class="contact-form-label group-focus-within:text-brand-accent" for="email">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                class="contact-form-input"
                autocomplete="email"
              />
            </div>

            <div class="flex flex-col gap-3 group">
              <label class="contact-form-label group-focus-within:text-brand-accent" for="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Collaboration / Opportunity / General"
                class="contact-form-input"
              />
            </div>

            <div class="flex flex-col gap-3 group">
              <label class="contact-form-label group-focus-within:text-brand-accent" for="budget">
                Type of Enquiry
              </label>
              <select id="budget" name="enquiry" class="contact-form-input bg-transparent">
                <option value="" disabled selected>Select one</option>
                <option value="graduate">Graduate Programme</option>
                <option value="freelance">Freelance Project</option>
                <option value="collab">Creative Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="flex flex-col gap-3 md:col-span-2 group">
              <label class="contact-form-label group-focus-within:text-brand-accent" for="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, opportunity, or idea — the more detail the better."
                rows="4"
                required
                class="contact-form-input resize-none"
              ></textarea>
            </div>

            <!-- Error / success message slot -->
            <div id="form-feedback" class="md:col-span-2 hidden">
              <p id="form-feedback-text" class="text-sm font-mono text-brand-accent"></p>
            </div>

            <div class="md:col-span-2 mt-4">
              <button type="submit" id="submit-btn" class="contact-submit-btn">
                SEND TRANSMISSION
              </button>
            </div>

          </form>

          <!-- Direct contact alternative -->
          <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-6 md:gap-16">
            <div>
              <span class="label-micro opacity-40 block mb-2">Direct Email</span>
              <a href="mailto:TODO_EMAIL" class="text-sm text-brand-ink/60 hover:text-brand-accent transition-colors">
                TODO_EMAIL
              </a>
            </div>
            <div>
              <span class="label-micro opacity-40 block mb-2">Instagram</span>
              <a href="https://instagram.com/TODO_INSTAGRAM" target="_blank" rel="noopener"
                 class="text-sm text-brand-ink/60 hover:text-brand-accent transition-colors">
                @TODO_INSTAGRAM
              </a>
            </div>
            <div>
              <span class="label-micro opacity-40 block mb-2">Location</span>
              <span class="text-sm text-brand-ink/60">Johannesburg, ZA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
