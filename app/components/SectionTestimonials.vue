<template>
  <section id="testimonials" class="bg-forest-800 py-20 sm:py-28 lg:py-36 relative overflow-hidden">

    <!-- Background grain -->
    <div class="absolute inset-0 bg-noise opacity-60 pointer-events-none" />

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="flex items-center justify-center gap-3 mb-6" data-aos="fade-up">
          <div class="w-8 h-px bg-gold-500" />
          <span class="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase font-sans">Client Stories</span>
          <div class="w-8 h-px bg-gold-500" />
        </div>
        <h2
          class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          What Our Clients Say
        </h2>
      </div>

      <!-- Testimonial cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="bg-forest-900/80 backdrop-blur-sm p-10 border border-forest-700/50 hover:border-gold-500/40 transition-all duration-400 group flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <!-- Quote icon -->
          <Icon name="mdi:format-quote-open" size="36" class="text-gold-500/40 mb-6 group-hover:text-gold-500/70 transition-colors duration-300" />

          <!-- Stars -->
          <div class="flex gap-1 mb-6">
            <Icon
              v-for="s in 5"
              :key="s"
              name="mdi:star"
              size="16"
              class="text-gold-500"
            />
          </div>

          <!-- Quote -->
          <blockquote class="font-serif text-base font-medium text-white/80 leading-relaxed flex-1 mb-6 italic">
            &ldquo;{{ t.quote }}&rdquo;
          </blockquote>

          <!-- Result badge -->
          <div class="mb-6">
            <span class="inline-flex items-center gap-2 bg-forest-800 border border-gold-500/30 text-gold-400 text-xs px-3 py-1.5 font-sans tracking-wide">
              <Icon name="mdi:trending-up" size="14" />
              {{ t.result }}
            </span>
          </div>

          <!-- Author -->
          <div class="flex items-center gap-4 border-t border-forest-700/50 pt-6">
            <div class="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center shrink-0">
              <Icon name="mdi:account" size="20" class="text-forest-400" />
            </div>
            <div>
              <div class="text-white font-semibold text-sm font-sans">{{ t.name }}</div>
              <div class="text-forest-400 text-xs font-sans">{{ t.role }}, {{ t.company }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social proof strip -->
      <div class="mt-16 pt-12 border-t border-forest-700/50 flex flex-col md:flex-row items-center justify-center gap-8 text-center" data-aos="fade-up">
        <div class="flex items-center gap-3">
          <div class="flex -space-x-3">
            <div
              v-for="j in 4"
              :key="j"
              class="w-9 h-9 rounded-full bg-forest-700 border-2 border-forest-800 flex items-center justify-center"
            >
              <Icon name="mdi:account" size="16" class="text-forest-400" />
            </div>
          </div>
          <span class="text-white/50 text-sm font-sans">Joined by 500+ satisfied clients</span>
        </div>

        <div class="hidden md:block w-px h-8 bg-forest-700/60" />

        <div class="flex items-center gap-2">
          <div class="flex gap-0.5">
            <Icon v-for="s in 5" :key="s" name="mdi:star" size="16" class="text-gold-500" />
          </div>
          <span class="text-white/50 text-sm font-sans">4.9 / 5.0 average rating</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote:
      'We weren\'t sure an external team could understand the complexity of a 14-floor mixed-use tower. MUTXRI spent the first week shadowing our facilities team and auditing every zone. By month two, energy costs had dropped 28%. When we had a chiller failure at 11 p.m., their on-call engineer was on-site within 90 minutes with the part already sourced.',
    name: 'James Omondi',
    role: 'Facilities Director',
    company: 'Apex Properties Ltd.',
    result: '28% energy cost reduction, Q1',
  },
  {
    quote:
      'Before MUTXRI: I was spending six hours a week chasing callbacks and contractor disputes. After: zero touch on day-to-day issues, a monthly performance dashboard, and a team that knows our systems better than the original installers. They identified the root cause of two years of recurring faults on the first visit.',
    name: 'Sarah Wanjiku',
    role: 'Property Manager',
    company: 'Meridian Estates',
    result: '6 hrs/week saved for PM team',
  },
  {
    quote:
      'The free diagnostic audit surfaced $180k in operational waste I didn\'t know existed. The action plan was prioritised, the projected savings were conservative, and we beat every number. When we eventually hired a full-time facilities lead, MUTXRI documented everything and trained them over 30 days. Exactly what a serious partner does.',
    name: 'David Kamau',
    role: 'General Manager',
    company: 'CoolComfort HVAC Co.',
    result: '$180k in waste identified, audit day',
  },
]
</script>
