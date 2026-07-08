<template>
  <div class="bg-gold-500 py-3 overflow-hidden relative">
    <div class="flex gap-0 whitespace-nowrap animate-ticker">
      <span
        v-for="i in 4"
        :key="i"
        class="inline-flex items-center gap-8 text-forest-950 text-xs font-semibold tracking-[0.25em] uppercase font-sans mr-16"
      >
        <template v-for="item in items" :key="item.text">
          <span class="inline-flex items-center gap-2">
            <Icon :name="item.icon" size="14" />
            {{ item.text }}
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-forest-950/30 inline-block" />
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { icon: 'mdi:chart-line',       text: 'Profit Leak Detection' },
  { icon: 'mdi:cash-check',       text: 'Cash Flow Systems' },
  { icon: 'mdi:calculator',       text: 'Pricing Strategy' },
  { icon: 'mdi:shield-check',     text: 'Financial Audit' },
  { icon: 'mdi:trending-up',      text: 'Revenue Optimization' },
  { icon: 'mdi:clipboard-check',  text: 'Growth Systems' },
]
</script>

<style>
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-ticker {
  animation: ticker 30s linear infinite;
  width: max-content;
}
</style>
