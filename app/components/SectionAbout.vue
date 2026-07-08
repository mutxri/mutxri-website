<template>
  <section id="about" class="bg-cream py-20 sm:py-28 lg:py-36">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: text -->
        <div>
          <div class="flex items-center gap-3 mb-6" data-aos="fade-right">
            <div class="w-8 h-px bg-gold-500" />
            <span class="text-gold-600 text-xs font-medium tracking-[0.3em] uppercase font-sans">The Problem</span>
          </div>

          <h2
            class="font-serif text-4xl md:text-5xl font-bold text-forest-900 leading-tight mb-8"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            Most Service Businesses Are<br />Busy… But Not<br />
            <em class="not-italic text-forest-700">Profitable</em>
          </h2>

          <!-- Key points -->
          <ul class="space-y-4" data-aos="fade-right" data-aos-delay="240">
            <li
              v-for="point in points"
              :key="point"
              class="flex items-start gap-3"
            >
              <Icon name="mdi:check-circle" size="20" class="text-gold-500 mt-0.5 shrink-0" />
              <span class="text-forest-900 text-sm font-sans leading-relaxed font-medium">{{ point.title }}<span class="font-normal"> : {{ point.body }}</span></span>
            </li>
          </ul>

          <a
            href="#contact"
            class="mt-10 inline-flex items-center gap-3 bg-forest-800 hover:bg-forest-700 text-white font-semibold text-sm px-8 py-4 transition-all duration-300 group"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Book a Free Profit Leak Audit →
            <Icon name="mdi:arrow-right" size="16" class="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <!-- Right: image + stats panel -->
        <div class="relative" data-aos="fade-left" data-aos-delay="100">

          <!-- Hero image -->
          <div class="relative overflow-hidden">
            <img
              src="/profit-gross-margins.jpeg"
              alt="Profit and gross margin analysis for service businesses"
              class="w-full h-64 sm:h-72 object-cover object-center"
            />
            <!-- Dark overlay -->
            <div class="absolute inset-0 bg-forest-900/30" />
            <!-- Image label badge -->
            <div class="absolute bottom-4 left-4 flex items-center gap-2 bg-forest-950/70 backdrop-blur-sm px-3 py-1.5">
              <div class="w-2 h-2 bg-gold-500 rounded-full" />
              <span class="text-white/80 text-[10px] tracking-[0.2em] uppercase font-sans">Gross Margin Analysis</span>
            </div>
          </div>

          <!-- Stats card -->
          <div class="relative bg-forest-800 p-8 lg:p-10">

            <!-- Accent bar -->
            <div class="w-10 h-1 bg-gold-500 mb-8" />

            <blockquote class="font-serif text-xl md:text-2xl font-medium italic text-white leading-relaxed mb-8">
              &ldquo;Revenue doesn&rsquo;t build a business.
              Profit does.&rdquo;
            </blockquote>

            <div class="flex items-center gap-4 border-t border-white/15 pt-6">
              <div class="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center">
                <Icon name="mdi:account" size="20" class="text-forest-300" />
              </div>
              <div>
                <div class="text-white font-semibold text-sm font-sans">The MUTXRI Team</div>
                <div class="text-forest-400 text-xs tracking-wide">Financial Profit Optimization</div>
              </div>
            </div>

            <!-- Bottom stat strip -->
            <div class="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
              <div
                v-for="s in sideStats"
                :key="s.label"
              >
                <div class="font-serif text-2xl md:text-3xl font-bold text-gold-400">{{ s.value }}</div>
                <div class="text-forest-400 text-xs tracking-wide mt-1 font-sans">{{ s.label }}</div>
              </div>
            </div>
          </div>

          <!-- Decorative offset square -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500/30 -z-10" />
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-gold-500/10 -z-10" />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  { title: 'Too Many Callbacks Destroying Margins', body: 'Every callback is a free service call you pay for. Untracked callbacks can silently erase 5–8% of your gross margin every month.' },
  { title: 'Technicians Not Producing Enough Revenue', body: 'Low revenue per technician is the #1 hidden drag on profitability. Most owners don\'t know their number, and it\'s costing them.' },
  { title: 'Pricing Mistakes Killing Profit', body: 'Most service companies price on gut feeling, not math. Jobs that look profitable on paper bleed cash in reality.' },
  { title: 'Cash Flow Problems Even With High Revenue', body: 'Revenue is vanity. Cash is oxygen. High-revenue businesses collapse because nobody managed the actual cash cycle.' },
  { title: 'No Clear Financial Systems', body: 'No job costing, no P&L review, no KPI dashboard. Flying blind is only viable until it isn\'t.' },
  { title: 'Inconsistent Flow of Service Calls', body: 'Feast-or-famine cycles make it impossible to plan, hire, or invest.' },
]

const sideStats = [
  { value: '40–50%', label: 'Gross margin achieved after systems are fixed' },
  { value: '6–10%',  label: 'Net profit increase once financial systems are in place' },
]
</script>
