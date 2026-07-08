<script setup lang="ts">
const { scrollY } = useScrollY()

const bgStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.35}px)`,
}))
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-forest-900">

    <!-- Parallax background layer -->
    <div class="absolute inset-0 will-change-transform" :style="bgStyle">
      <div class="absolute inset-0 bg-hero-gradient" />
      <div class="absolute inset-0 bg-noise opacity-100" />
    </div>

    <!-- Drifting blobs -->
    <div class="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <!-- Blob 1: large primary glow, upper-left -->
      <div
        class="absolute -top-20 -left-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full
               bg-forest-600/20 blur-3xl animate-blob-1"
        style="animation-delay: 0s;"
      />
      <!-- Blob 2: secondary glow, upper-right -->
      <div
        class="absolute -top-10 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full
               bg-forest-700/15 blur-3xl animate-blob-2"
        style="animation-delay: 3s;"
      />
      <!-- Blob 3: gold accent, lower-center -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full
               bg-gold-500/8 blur-3xl animate-blob-3"
        style="animation-delay: 6s;"
      />
      <!-- Blob 4: mid-right fill -->
      <div
        class="absolute top-1/2 right-10 w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full
               bg-forest-500/10 blur-3xl animate-blob-4"
        style="animation-delay: 1.5s;"
      />
    </div>

    <!-- Decorative grid lines (subtle) -->
    <div class="absolute inset-0 z-10 pointer-events-none hidden md:block">
      <div class="absolute top-0 left-1/4 w-px h-full bg-white/4" />
      <div class="absolute top-0 right-1/4 w-px h-full bg-white/4" />
      <div class="absolute top-1/3 left-0 w-full h-px bg-white/4" />
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-24 sm:pb-32 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: text content -->
        <div>
          <!-- Pre-heading label -->
          <div
            class="flex items-center gap-3 mb-6 sm:mb-8 animate-fade-in"
            style="animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards;"
          >
            <div class="w-8 sm:w-10 h-px bg-gold-500" />
            <span class="text-gold-400 text-[10px] sm:text-xs font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase font-sans">
              Financial Systems for SMBs
            </span>
          </div>

          <!-- Main heading -->
          <h1
            class="font-serif text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-6 sm:mb-8 animate-slide-up"
            style="animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards;"
          >
            Find the<br />
            <em class="not-italic text-forest-400">Leak.</em><br />
            Fix the<br />
            System. Protect<br />
            the Profit.
          </h1>

          <!-- Subtitle -->
          <p
            class="text-white/60 text-base sm:text-lg font-sans font-light max-w-xl leading-relaxed mb-10 sm:mb-12 animate-slide-up"
            style="animation-delay: 0.65s; opacity: 0; animation-fill-mode: forwards;"
          >
            We help SMB owners find the hidden profit drains in their financial statements, build the systems that plug them, and deliver the financial leadership to grow without the guesswork.
          </p>

          <!-- CTA buttons -->
          <div
            class="flex flex-col xs:flex-row gap-3 sm:gap-4 animate-slide-up"
            style="animation-delay: 0.85s; opacity: 0; animation-fill-mode: forwards;"
          >
            <a
              href="#contact"
              class="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 active:bg-gold-600
                     text-forest-950 font-semibold px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 group text-sm tracking-wide"
            >
              Book Your Free Financial Health Audit
              <Icon name="mdi:arrow-right" size="18" class="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              class="inline-flex items-center justify-center gap-3 border border-white/25 hover:border-white/60
                     text-white/80 hover:text-white px-7 sm:px-8 py-3.5 sm:py-4 font-medium transition-all duration-300 text-sm tracking-wide"
            >
              <Icon name="mdi:compass" size="18" class="text-forest-400" />
              See How The System Works
            </a>
          </div>

          <!-- Stats teaser -->
          <div
            class="mt-14 sm:mt-20 flex flex-wrap gap-8 sm:gap-10 animate-fade-in"
            style="animation-delay: 1.1s; opacity: 0; animation-fill-mode: forwards;"
          >
            <div
              v-for="stat in [
                { value: '40\u201350%', label: 'Gross Margin Target' },
                { value: '6\u201310%',  label: 'Profit Improvement' },
                { value: 'P&L',    label: 'P&L to Cash Flow' },
              ]"
              :key="stat.label"
              class="flex flex-col gap-1"
            >
              <span class="text-2xl sm:text-3xl font-serif font-bold text-white">{{ stat.value }}</span>
              <span class="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] uppercase font-sans">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: hero image (desktop only) -->
        <div
          class="hidden lg:block relative animate-fade-in"
          style="animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards;"
        >
          <!-- Image frame -->
          <div class="relative overflow-hidden">
            <img
              src="/hero.jpeg"
              alt="SMB financial optimization"
              class="w-full h-[540px] object-cover object-center"
            />
            <!-- Subtle dark overlay to blend with dark theme -->
            <div class="absolute inset-0 bg-forest-950/25" />
            <!-- Bottom gradient fade -->
            <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest-900/60 to-transparent" />
          </div>

          <!-- Floating stat card bottom-left -->
          <div class="absolute -bottom-5 -left-5 bg-gold-500 px-6 py-4 shadow-2xl">
            <div class="font-serif text-2xl font-bold text-forest-950">40-50%</div>
            <div class="text-forest-900/70 text-[10px] tracking-[0.2em] uppercase font-sans mt-0.5">Gross Margin Target</div>
          </div>

          <!-- Decorative border offset -->
          <div class="absolute -top-3 -right-3 w-full h-full border border-forest-600/30 -z-10 pointer-events-none" />
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
      <span class="text-white/30 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
      <div class="w-px h-12 sm:h-14 bg-gradient-to-b from-white/30 to-transparent" />
    </div>
  </section>
</template>
