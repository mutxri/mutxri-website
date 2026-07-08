<template>
  <section class="bg-white py-20 sm:py-28 lg:py-36">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="flex items-center justify-center gap-3 mb-6" data-aos="fade-up">
          <div class="w-8 h-px bg-gold-500" />
          <span class="text-gold-600 text-xs font-medium tracking-[0.3em] uppercase font-sans">Real Outcomes</span>
          <div class="w-8 h-px bg-gold-500" />
        </div>
        <h2
          class="font-serif text-4xl md:text-5xl font-bold text-forest-900 leading-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          What Happens When The System Is Fixed
        </h2>
        <p
          class="text-forest-800/60 text-lg font-sans font-light leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          These are the measurable outcomes clients see once financial systems, pricing discipline, and productivity accountability are in place.
        </p>
      </div>

      <!-- Feature rows -->
      <div class="space-y-6">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="group grid lg:grid-cols-12 gap-0 border border-forest-100 hover:border-forest-200 hover:shadow-xl hover:shadow-forest-100/60 transition-all duration-500 overflow-hidden"
          :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="i * 80"
        >
          <!-- Icon block -->
          <div class="lg:col-span-1 bg-forest-50 group-hover:bg-forest-800 flex items-center justify-center p-6 lg:p-8 transition-colors duration-500">
            <Icon
              :name="feature.icon"
              size="28"
              class="text-forest-700 group-hover:text-gold-400 transition-colors duration-500"
            />
          </div>

          <!-- Content block -->
          <div class="lg:col-span-8 p-6 sm:p-8 lg:p-10 lg:border-x border-forest-100 group-hover:border-forest-200 transition-colors duration-500">
            <h3 class="font-serif text-lg sm:text-xl font-semibold text-forest-900 mb-3">{{ feature.title }}</h3>
            <p class="text-forest-700/60 text-sm font-sans font-light leading-relaxed">{{ feature.description }}</p>
          </div>

          <!-- Stat block -->
          <div class="lg:col-span-3 bg-cream group-hover:bg-forest-900 flex flex-row lg:flex-col items-center lg:justify-center gap-4 lg:gap-0 p-6 lg:p-8 lg:text-center transition-all duration-500 border-t lg:border-t-0 border-forest-100">
            <div class="font-serif text-2xl sm:text-3xl font-bold text-forest-800 group-hover:text-gold-400 transition-colors duration-500">
              {{ feature.stat }}
            </div>
            <div class="text-forest-600/70 group-hover:text-white/50 text-xs tracking-[0.15em] uppercase font-sans lg:mt-1 transition-colors duration-500">
              {{ feature.statLabel }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'mdi:chart-areaspline',
    title: '40–50% Gross Margin Achieved',
    description:
      'Once pricing models are corrected and cost structure is properly mapped, most service businesses see gross margin improve significantly. This is the single biggest lever in profitability.',
    stat: '40–50%',
    statLabel: 'Gross Margin Target',
  },
  {
    icon: 'mdi:trending-up',
    title: '6–10% Net Profit Improvement',
    description:
      'Net profit increases once financial systems are in place: job costing, P&L review, overhead allocation, and cash flow management all working together.',
    stat: '6–10%',
    statLabel: 'Net Profit Increase',
  },
  {
    icon: 'mdi:account-hard-hat',
    title: 'Measurable Revenue Per Technician Growth',
    description:
      'Improved dispatch efficiency, reduced callbacks, and clearer productivity targets drive measurable output increase from the team you already have, without adding new hires.',
    stat: '↑ Rev/Tech',
    statLabel: 'Output Without New Hires',
  },
  {
    icon: 'mdi:phone-incoming',
    title: 'Consistent, Predictable Service Call Volume',
    description:
      'Lead systems eliminate feast-or-famine cycles and give you a pipeline you can actually plan around. Hire, invest, and grow with confidence.',
    stat: '↑ Pipeline',
    statLabel: 'Predictable Revenue',
  },
  {
    icon: 'mdi:cash-check',
    title: 'Callback Rate Reduced',
    description:
      'Productivity systems and accountability tracking reduce costly callbacks, protecting gross margin and freeing up technician time for revenue-generating work.',
    stat: '↓ Callbacks',
    statLabel: 'Margin Protected',
  },
]
</script>
