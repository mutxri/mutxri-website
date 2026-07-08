<template>
  <section id="process" class="bg-forest-950 py-20 sm:py-28 lg:py-36 relative overflow-hidden">

    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Header -->
      <div class="max-w-2xl mb-20">
        <div class="flex items-center gap-3 mb-6" data-aos="fade-up">
          <div class="w-8 h-px bg-gold-500" />
          <span class="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase font-sans">The System</span>
        </div>
        <h2
          class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Our 4-Step<br />
          <span class="text-forest-400">Financial System</span>
        </h2>
        <p
          class="text-white/45 text-base font-sans font-light leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          A clear, repeatable process for finding profit leaks, building financial systems, and delivering the CFO-level guidance your business needs.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

        <!-- Connector line (desktop) -->
        <div class="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-forest-700 to-transparent z-0" />

        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="relative z-10"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <!-- Step number -->
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-14 h-14 rounded-full bg-forest-800 border-2 border-forest-700 flex items-center justify-center shrink-0 relative"
            >
              <span class="font-serif text-xl font-bold text-gold-400">{{ String(i + 1).padStart(2, '0') }}</span>
              <!-- Active pulse on last step -->
              <div
                v-if="i === steps.length - 1"
                class="absolute inset-0 rounded-full border border-gold-500/30 animate-ping opacity-60"
              />
            </div>
            <div class="flex-1 h-px bg-forest-800" />
          </div>

          <div class="mb-4">
            <Icon :name="step.icon" size="24" class="text-gold-500/80" />
          </div>

          <h3 class="font-serif text-xl font-semibold text-white mb-3 leading-snug">
            {{ step.title }}
          </h3>
          <p class="text-white/40 text-sm font-sans font-light leading-relaxed">
            {{ step.description }}
          </p>

          <div class="mt-6 text-gold-500/60 text-xs tracking-[0.2em] uppercase font-sans">
            {{ step.duration }}
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 pt-14 border-t border-forest-800/60 flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up">
        <div>
          <h3 class="font-serif text-2xl font-semibold text-white mb-2">Ready to find your profit leaks?</h3>
          <p class="text-white/45 text-sm font-sans">Your free financial health audit takes about 15 minutes and carries zero obligation. We review your P&amp;L, balance sheet, and cash flow - identify the leaks, and show you the highest-priority fixes.</p>

        </div>
        <a
          href="#contact"
          class="shrink-0 inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold text-sm px-8 py-4 transition-all duration-300 group tracking-wide"
        >
         Book Your Free Financial Health Audit →
          <Icon name="mdi:clipboard-search" size="18" class="transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: 'mdi:file-chart-outline',
    title: 'Financial Audit',
    description:
      'We dive deep into your P&L, balance sheet, and cash flow statement to establish exactly where you stand. No assumptions. No fluff. Just a clear, honest picture.',
    duration: 'Step 01',
  },
  {
    icon: 'mdi:magnify',
    title: 'Profit Leak Detection',
    description:
      'We identify the specific holes - pricing gaps, overhead inefficiencies, cash cycle problems, margin erosion. Most clients discover significant recoverable profit at this stage.',
    duration: 'Step 02',
  },
  {
    icon: 'mdi:cog-outline',
    title: 'System Design & Implementation',
    description:
      'We build your financial infrastructure: custom reporting structures, KPI dashboards, job costing frameworks, and cash flow models - all with profit optimization baked in.',
    duration: 'Step 03',
  },
  {
    icon: 'mdi:chart-line',
    title: 'Ongoing CFO Support',
    description:
      'You get ongoing fractional CFO guidance - strategic planning, forecasting, board-ready reporting, and decision support. We\'re your financial partner, not just a monthly report.',
    duration: 'Step 04',
  },
]
</script>
