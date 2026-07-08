<script setup lang="ts">
useHead({
  title: 'Privacy Policy | MUTXRI',
  meta: [
    {
      name: 'description',
      content: 'Privacy Policy for MUTXRI. How we collect, use, and protect your information.',
    },
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<template>
  <div class="font-sans antialiased text-forest-900">
    <AppNavbar />
    <main class="bg-forest-950 min-h-screen py-28 sm:py-36">
      <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">

        <!-- Back link -->
        <a
          href="/"
          class="inline-flex items-center gap-2 text-forest-400 hover:text-gold-400 text-sm font-sans transition-colors duration-200 mb-10"
        >
          <Icon name="mdi:arrow-left" size="16" />
          Back to Home
        </a>

        <!-- Page heading -->
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-px bg-gold-500" />
            <span class="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase font-sans">Legal</span>
          </div>
          <h1 class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Privacy Policy
          </h1>
          <p class="text-white/50 text-base font-sans font-light leading-relaxed">
            This Privacy Policy describes how Mutxri Ltd (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and protects your information when you visit our website or interact with our services.
          </p>
        </div>

        <!-- Sections -->
        <div class="space-y-10">

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">1. Information We Collect</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you: fill out a contact form, request a consultation or audit, subscribe to our communications, or communicate with us directly. This information may include your name, email address, phone number, company name, and any information you choose to provide.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">2. Automatically Collected Information</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              When you visit our website, certain information may be automatically collected such as: IP address, browser type, pages visited, time spent on pages, and device information. This data helps us understand how visitors use our website so we can improve our services.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">3. How We Use Your Information</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              We use the information we collect to: respond to inquiries and provide consultations, improve our website and services, communicate with potential clients, send relevant updates or business information, and analyze website usage and marketing effectiveness.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">4. Sharing Your Information</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who help us operate our website, run marketing campaigns, or deliver services, provided they keep the information confidential.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">5. Data Security</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">6. Cookies</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              Our website may use cookies to improve user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">7. Third-Party Links</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external websites.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">8. Your Rights</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">9. Changes to This Policy</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 class="font-serif text-xl font-semibold text-gold-400 mb-3">10. Contact Us</h2>
            <p class="text-white/55 text-sm font-sans font-light leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, you may contact us at:
            </p>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <Icon name="mdi:email-outline" size="16" class="text-gold-500/70 shrink-0" />
                <a href="mailto:jimmy@mutxri.com" class="text-white/60 hover:text-gold-400 text-sm font-sans transition-colors duration-200">jimmy@mutxri.com</a>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:office-building-outline" size="16" class="text-gold-500/70 shrink-0" />
                <span class="text-white/55 text-sm font-sans">Mutxri Ltd</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Divider -->
        <div class="mt-16 pt-8 border-t border-forest-800/60">
          <p class="text-white/25 text-xs font-sans">
            Last updated: March 2026
          </p>
        </div>

      </div>
    </main>
    <AppFooter />
  </div>
</template>
