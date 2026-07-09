<template>
  <footer class="bg-forest-950 border-t border-forest-800/60">

    <!-- Main footer -->
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        <!-- Brand column -->
        <div class="lg:col-span-2">
          <div class="font-serif text-3xl font-bold text-white mb-4 tracking-wider">
            MUTXRI<span class="text-gold-500">.</span>
          </div>
          <p class="text-white/40 text-sm font-sans font-light leading-relaxed max-w-sm mb-8">
            We help SMBs find profit leaks, build financial systems, and grow with confidence.
          </p>

          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/17SkKhTWrf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-forest-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors duration-300 group"
              aria-label="Facebook"
            >
              <Icon name="mdi:facebook" size="18" class="text-white/60 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/mutxri?igsh=ODB5YjM0N2V0ZTZz"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-forest-800 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] flex items-center justify-center transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" size="18" class="text-white/60 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="tel:+15515500720"
              class="w-10 h-10 rounded-full bg-forest-800 hover:bg-gold-500 flex items-center justify-center transition-colors duration-300 group"
              aria-label="Phone"
            >
              <Icon name="mdi:phone" size="18" class="text-white/60 group-hover:text-forest-950 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <!-- Services column -->
        <div>
          <h4 class="text-white font-semibold text-sm tracking-[0.2em] uppercase font-sans mb-6">Services</h4>
          <ul class="space-y-3">
            <li
              v-for="item in serviceLinks"
              :key="item"
            >
              <a
                href="#services"
                class="text-white/40 hover:text-white text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
              >
                <Icon name="mdi:chevron-right" size="14" class="text-gold-500/50 group-hover:text-gold-400 transition-colors duration-200 shrink-0" />
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h4 class="text-white font-semibold text-sm tracking-[0.2em] uppercase font-sans mb-6">Contact</h4>
          <ul class="space-y-4">
            <li>
              <a
                href="tel:+15515500720"
                class="flex items-start gap-3 group"
              >
                <Icon name="mdi:phone-outline" size="16" class="text-gold-500/70 mt-0.5 shrink-0" />
                <span class="text-white/40 group-hover:text-white text-sm font-sans transition-colors duration-200">
                  +1 (551) 550-0720
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@mutxri.com"
                class="flex items-start gap-3 group"
              >
                <Icon name="mdi:email-outline" size="16" class="text-gold-500/70 mt-0.5 shrink-0" />
                <span class="text-white/40 group-hover:text-white text-sm font-sans transition-colors duration-200">
                  jimmy@mutxri.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/17SkKhTWrf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-start gap-3 group"
              >
                <Icon name="mdi:facebook" size="16" class="text-gold-500/70 mt-0.5 shrink-0" />
                <span class="text-white/40 group-hover:text-white text-sm font-sans transition-colors duration-200">
                  Facebook
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mutxri?igsh=ODB5YjM0N2V0ZTZz"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-start gap-3 group"
              >
                <Icon name="mdi:instagram" size="16" class="text-gold-500/70 mt-0.5 shrink-0" />
                <span class="text-white/40 group-hover:text-white text-sm font-sans transition-colors duration-200">
                  @mutxri
                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

  <!-- Bottom bar -->
<div class="border-t border-forest-800/60">

  <!-- Top row -->
  <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
    
    <p class="text-white/25 text-xs font-sans text-center md:text-left">
      &copy; {{ currentYear }} MUTXRI. All rights reserved. Financial Systems for SMBs.
    </p>

    <div class="flex items-center gap-6">
      <a
        href="/privacy-policy"
        class="text-white/25 hover:text-white/50 text-xs font-sans transition-colors duration-200"
      >
        Privacy Policy
      </a>

      <a
        href="#"
        class="text-white/25 hover:text-white/50 text-xs font-sans transition-colors duration-200"
      >
        Terms of Service
      </a>
    </div>

  </div>

  <!-- Centered credit -->


</div>

  </footer>
</template>

<script setup lang="ts">
const serviceLinks = [
  'Financial Optimization',
  'CFO Services',
  'System Design',
  'CPA Support',
  'Contact Us',
]
const currentYear = new Date().getFullYear()
</script>
