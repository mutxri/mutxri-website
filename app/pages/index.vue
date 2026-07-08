<script setup lang="ts">
useHead({
  title: 'MUTXRI | Financial Systems for Service Businesses: Fix Profit Leaks and Cash Flow',
  meta: [
    {
      name: 'description',
      content:
        'MUTXRI helps service business owners fix profit leaks, improve cash flow, and build financial systems that work. Free profit audit. We show you exactly where money is going.',
    },
    {
      name: 'keywords',
      content:
        'profit optimization, service business financial systems, profit leak detection, cash flow systems, pricing strategy, revenue per technician, financial consulting service business, MUTXRI',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'MUTXRI | Financial Systems for Service Businesses' },
    {
      property: 'og:description',
      content:
        'Financial profit optimization for service businesses. Fix profit leaks, build cash flow systems, improve pricing and margins. Free audit.',
    },
    { property: 'og:site_name', content: 'MUTXRI' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'MUTXRI | Financial Profit Optimization' },
    {
      name: 'twitter:description',
      content:
        'Financial systems for service businesses. Fix profit leaks, improve cash flow. Free profit audit.',
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:url', content: 'https://www.mutxri.com/' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.mutxri.com/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'MUTXRI',
        description:
          'MUTXRI helps service businesses fix profit leaks, improve cash flow, and build financial systems that turn revenue into real profit.',
        telephone: '+15515500720',
        sameAs: [
          'https://www.facebook.com/share/17SkKhTWrf/?mibextid=wwXIfr',
          'https://www.instagram.com/mutxri',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Financial Profit Optimization Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Systems Audit' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Profit Leak Detection' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cash Flow Optimization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pricing Strategy' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revenue Optimization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Growth Systems' } },
          ],
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="font-sans antialiased text-forest-900">
    <AppNavbar />
    <main>
      <SectionHero />
      <SectionTicker />
      <SectionStats />
      <SectionAbout />
      <SectionServices />
      <SectionWhyUs />
      <SectionProcess />
      <SectionCta />
    </main>
    <AppFooter />
  </div>
</template>
