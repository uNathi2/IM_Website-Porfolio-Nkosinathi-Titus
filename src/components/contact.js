export function ContactSection() {
  return `
    <section class="px-6 py-32 bg-brand-bg border-t border-white/5" id="contact">
      <div class="max-w-4xl mx-auto text-center">
        <div class="animate-reveal">
          <span class="text-[10px] font-bold uppercase tracking-widest-xl mb-6 block text-brand-accent">03 // INQUIRIES</span>
          <h2 class="text-6xl md:text-8xl font-serif italic text-white mb-10 tracking-tighter leading-none">CONNECT.</h2>
          <p class="text-lg text-brand-ink/40 mb-16 max-w-xl mx-auto leading-relaxed serif italic font-light">
            Elevating digital luxury through minimalist aesthetics and meaningful interactions.
          </p>

          <form class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left" id="contact-form">
            <div class="flex flex-col gap-3 group">
              <label class="text-[9px] uppercase font-bold tracking-widest text-brand-ink/30 group-focus-within:text-brand-accent transition-colors">Your Name</label>
              <input 
                type="text" 
                placeholder="Marcus Aurelius"
                class="py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-20 serif italic text-lg"
              />
            </div>
            <div class="flex flex-col gap-3 group">
              <label class="text-[9px] uppercase font-bold tracking-widest text-brand-ink/30 group-focus-within:text-brand-accent transition-colors">Your Email</label>
              <input 
                type="email" 
                placeholder="marcus@vane.studio"
                class="py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-20 serif italic text-lg"
              />
            </div>
            <div class="flex flex-col gap-3 md:col-span-2 group">
              <label class="text-[9px] uppercase font-bold tracking-widest text-brand-ink/30 group-focus-within:text-brand-accent transition-colors">The Brief</label>
              <textarea 
                placeholder="How can we elevate your vision?"
                rows="1"
                class="py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:opacity-20 serif italic text-lg"
              ></textarea>
            </div>
            <div class="md:col-span-2 mt-8">
              <button type="submit" class="group w-full md:w-auto px-16 py-6 border border-brand-accent text-brand-accent font-serif italic text-xl hover:bg-brand-accent hover:text-black transition-all duration-500">
                INITIATE CONVERSATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}
