<script setup lang="ts">
const { scrollY } = useScrollY()
const menuOpen = ref(false)

const isScrolled = computed(() => scrollY.value > 60)

const navLinks = [
  { label: 'The Problem', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
]

const scrollTo = (href: string) => {
  menuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-forest-900/95 backdrop-blur-sm shadow-2xl shadow-forest-950/60'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a
          href="#"
          class="font-serif text-2xl font-bold text-white tracking-wider hover:text-gold-400 transition-colors duration-300"
          @click.prevent="scrollTo('#')"
        >
          MUTXRI<span class="text-gold-500">.</span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-white/70 hover:text-white tracking-wide transition-colors duration-200 relative group"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300"
            />
          </a>
        </div>

        <!-- Desktop CTA -->
        <a
          href="#contact"
          class="hidden lg:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold text-sm px-6 py-3 transition-all duration-300 tracking-wide"
          @click.prevent="scrollTo('#contact')"
        >
          Contact Us
          <Icon name="mdi:arrow-right" size="16" />
        </a>

        <!-- Mobile hamburger -->
        <button
          class="lg:hidden text-white p-2"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <Icon :name="menuOpen ? 'mdi:close' : 'mdi:menu'" size="28" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="lg:hidden overflow-hidden transition-all duration-300 bg-forest-900/98 backdrop-blur-sm"
      :class="menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"
    >
      <div class="px-6 pb-8 pt-2 flex flex-col gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-white/80 hover:text-white font-medium py-3 border-b border-white/10 flex items-center justify-between group"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
          <Icon name="mdi:chevron-right" size="18" class="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a
          href="#contact"
          class="mt-4 inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold px-6 py-3 transition-all duration-300"
          @click.prevent="scrollTo('#contact')"
        >
          Contact Us
          <Icon name="mdi:arrow-right" size="16" />
        </a>
      </div>
    </div>
  </nav>
</template>
