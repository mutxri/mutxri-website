<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
  detail: string
  benefits: string[]
  included: string[]
  cta: string
}

const services: Service[] = [
  {
    icon: 'mdi:chart-areaspline',
    title: 'Financial Optimization',
    description:
      'We use your P&L, balance sheet, and cash flow statement to pinpoint exactly where your profit is bleeding — pricing gaps, overhead leaks, margin erosion, and cash cycle inefficiencies.',
    detail:
      'We go beyond surface-level bookkeeping. Using your financial statements, we identify pricing gaps, overhead leaks, margin erosion, and cash cycle inefficiencies. This is where the recoverable profit shows up - quantified, line by line. You can\'t fix what you haven\'t measured.',
    benefits: [
      'Pinpoint profit leaks using your actual financial statements',
      'Identify pricing gaps and margin erosion',
      'Map cash cycle inefficiencies affecting cash flow',
      'Get a prioritized roadmap of what to fix first',
    ],
    included: ['P&L Review', 'Balance Sheet Analysis', 'Cash Flow Mapping', 'Leak Identification', 'Action Plan'],
    cta: 'Request Your Financial Review',
  },
  {
    icon: 'mdi:chart-line',
    title: 'CFO Services',
    description:
      'Strategic financial leadership without the $300K salary. Forecasting, planning, board-ready reporting, and decision support.',
    detail:
      'You don\'t need a full-time CFO. You need someone who can guide your financial strategy, build forecasts that actually predict reality, produce board-ready reports, and help you make confident decisions. We provide executive-level financial guidance that pays for itself — without the overhead of a full-time hire.',
    benefits: [
      'Data-driven financial forecasting and cash flow planning',
      'Board-ready reporting and KPI dashboards',
      'Strategic guidance for growth and investment decisions',
      'Fractional cost — full executive impact',
    ],
    included: ['Financial Forecasting', 'Cash Flow Planning', 'Board Reporting', 'KPI Dashboards', 'Strategic Guidance'],
    cta: 'Get CFO-Level Support',
  },
  {
    icon: 'mdi:cog-outline',
    title: 'System Design',
    description:
      'We build your financial infrastructure from the ground up — with profit optimization wired into every layer.',
    detail:
      'Most businesses run on spreadsheets and gut feel. We change that. We design and implement custom financial reporting structures, KPI dashboards, job costing frameworks, and cash flow models tailored to your business. Every system we build has profit optimization baked in — so you\'re not just tracking numbers, you\'re protecting margin.',
    benefits: [
      'Custom P&L structures and reporting frameworks',
      'KPI dashboards that show real-time profitability',
      'Job costing frameworks to track margin per project',
      'Cash flow models that prevent surprises',
    ],
    included: ['Financial Reporting Structure', 'KPI Dashboard', 'Job Costing Framework', 'Cash Flow Model', 'Profit Optimization Layer'],
    cta: 'Design Your Financial System',
  },
  {
    icon: 'mdi:shield-check',
    title: 'CPA Support',
    description:
      'We work alongside your existing CPA firm to ensure your books are clean and CPA-ready, your classifications are tidy, and tax season is stress-free.',
    detail:
      'Tax season shouldn\'t be a fire drill. We collaborate with your existing CPA firm to make sure your books are clean, your classifications are correct, and everything is ready when they need it. No surprises. No last-minute scrambling. Your CPA will thank you.',
    benefits: [
      'Audit-ready books at any time of year',
      'Clean classifications that reduce tax-time errors',
      'Seamless collaboration with your existing CPA',
      'No last-minute fire drills or surprise adjustments',
    ],
    included: ['Book Cleanup', 'Classification Review', 'CPA Coordination', 'Audit Preparation', 'Ongoing Support'],
    cta: 'Get CPA-Ready',
  },
]

const activeService = ref<Service | null>(null)

const openModal = (service: Service) => {
  activeService.value = service
  if (import.meta.client) document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeService.value = null
  if (import.meta.client) document.body.style.overflow = ''
}

onMounted(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
  }
  window.addEventListener('keydown', handler)
  onUnmounted(() => {
    window.removeEventListener('keydown', handler)
    if (import.meta.client) document.body.style.overflow = ''
  })
})
</script>

<template>
  <section id="services" class="bg-forest-900 py-20 sm:py-28 lg:py-36">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Header -->
      <div class="max-w-2xl mb-12 sm:mb-16">
        <div class="flex items-center gap-3 mb-6" data-aos="fade-up">
          <div class="w-8 h-px bg-gold-500" />
          <span class="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase font-sans">What We Do</span>
        </div>
        <h2
          class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          What We Fix Inside<br />
          <span class="text-forest-400">Your Business</span>
        </h2>
        <p
          class="text-white/50 text-base font-sans font-light leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          From financial optimization and CFO services to custom system design and CPA collaboration. We address every lever that moves profit.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest-800/40">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="group bg-forest-900 hover:bg-forest-800 p-8 sm:p-10 transition-all duration-300 relative overflow-hidden"
          data-aos="fade-up"
          :data-aos-delay="i * 80"
        >
          <!-- Hover accent line -->
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-500" />

          <div class="w-12 h-12 rounded-full bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center mb-6 transition-colors duration-300 shrink-0">
            <Icon :name="service.icon" size="22" class="text-gold-400" />
          </div>

          <h3 class="font-serif text-lg sm:text-xl font-semibold text-white mb-3 leading-snug">
            {{ service.title }}
          </h3>
          <p class="text-white/45 text-sm font-sans font-light leading-relaxed mb-6">
            {{ service.description }}
          </p>

          <!-- Learn More button -->
          <button
            class="inline-flex items-center gap-2 text-gold-500/70 group-hover:text-gold-400 transition-colors duration-300 cursor-pointer"
            type="button"
            @click="openModal(service)"
          >
            <span class="text-xs tracking-[0.15em] uppercase font-sans font-medium">Learn More</span>
            <Icon name="mdi:arrow-right" size="14" class="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- Modal overlay (Teleport to body) -->
  <Teleport to="body">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 z-[100] transition-all duration-300"
      :class="activeService ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click.self="closeModal"
    >
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-forest-950/85 backdrop-blur-sm" @click="closeModal" />

      <!-- Modal card -->
      <div class="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div
          class="bg-forest-900 border border-forest-700/60 w-full max-w-2xl max-h-[90vh] overflow-y-auto transition-all duration-300 shadow-2xl shadow-forest-950/80"
          :class="activeService ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'"
          @click.stop
        >
          <!-- Modal header -->
          <div class="flex items-start justify-between p-7 sm:p-10 border-b border-forest-700/50">
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 rounded-full bg-forest-800 flex items-center justify-center shrink-0">
                <Icon v-if="activeService" :name="activeService.icon" size="26" class="text-gold-400" />
              </div>
              <div>
                <div class="w-8 h-0.5 bg-gold-500 mb-2" />
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {{ activeService?.title }}
                </h3>
              </div>
            </div>
            <button
              class="w-10 h-10 rounded-full bg-forest-800 hover:bg-forest-700 flex items-center justify-center shrink-0 ml-4 transition-colors duration-200"
              type="button"
              aria-label="Close"
              @click="closeModal"
            >
              <Icon name="mdi:close" size="20" class="text-white/70" />
            </button>
          </div>

          <!-- Modal body -->
          <div class="p-7 sm:p-10 space-y-8">

            <!-- Detailed description -->
            <p class="text-white/65 text-sm sm:text-base font-sans font-light leading-relaxed">
              {{ activeService?.detail }}
            </p>

            <!-- Key benefits -->
            <div>
              <h4 class="text-white font-semibold text-xs tracking-[0.25em] uppercase font-sans mb-4">
                Key Benefits
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="benefit in activeService?.benefits"
                  :key="benefit"
                  class="flex items-start gap-3"
                >
                  <Icon name="mdi:check-circle" size="18" class="text-gold-500 mt-0.5 shrink-0" />
                  <span class="text-white/60 text-sm font-sans leading-relaxed">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- What's included -->
            <div>
              <h4 class="text-white font-semibold text-xs tracking-[0.25em] uppercase font-sans mb-4">
                What&rsquo;s Included
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="item in activeService?.included"
                  :key="item"
                  class="inline-flex items-center gap-1.5 bg-forest-800 border border-forest-700/60 text-white/70 text-xs px-3 py-1.5 font-sans"
                >
                  <Icon name="mdi:check" size="12" class="text-gold-500" />
                  {{ item }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <div class="pt-2 border-t border-forest-700/40">
              <a
                href="#contact"
                class="w-full inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold text-sm px-8 py-4 transition-all duration-300 group tracking-wide"
                @click="closeModal"
              >
                {{ activeService?.cta }}
                <Icon name="mdi:arrow-right" size="16" class="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                class="w-full mt-3 text-white/35 hover:text-white/60 text-xs font-sans text-center py-2 transition-colors duration-200"
                @click="closeModal"
              >
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Teleport>
</template>
