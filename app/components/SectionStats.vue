<template>
  <section class="bg-forest-950 py-14 sm:py-16 border-t border-b border-forest-800/60">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-forest-800/60">

        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="flex flex-col items-center text-center px-3 sm:px-6 py-4 group"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-forest-800 mb-4 group-hover:bg-forest-700 transition-colors duration-300">
            <Icon :name="stat.icon" size="22" class="text-gold-500" />
          </div>
          <div class="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">{{ stat.value }}</div>
          <div class="text-forest-400 text-xs tracking-[0.2em] uppercase font-sans mt-1">{{ stat.label }}</div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '40–50%', label: 'Gross Margin Target',  icon: 'mdi:chart-areaspline' },
  { value: '6–10%',  label: 'Net Profit Improvement', icon: 'mdi:trending-up' },
  { value: 'P&L',    label: 'Financial Statement Focus',   icon: 'mdi:file-chart' },
  { value: 'Free',   label: 'Financial Health Audit',     icon: 'mdi:clipboard-search' },
]
</script>
