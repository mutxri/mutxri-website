<script setup lang="ts">
useHead({
  title: 'MUTXRI | Financial Systems for SMBs: Find Profit Leaks, Build Systems, Scale Smarter',
  meta: [
    {
      name: 'description',
      content:
        'MUTXRI helps SMB owners fix profit leaks, improve cash flow, and build financial systems that work. Financial health review. We show you exactly where money is going.',
    },
    {
      name: 'keywords',
      content:
        'profit optimization, SMB financial systems, profit leak detection, cash flow systems, pricing strategy, financial consulting for SMBs, MUTXRI',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'MUTXRI | Financial Systems for SMBs' },
    {
      property: 'og:description',
      content:
        'Financial profit optimization for SMBs. Fix profit leaks, build cash flow systems, improve pricing and margins. Financial health review.',
    },
    { property: 'og:site_name', content: 'MUTXRI' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'MUTXRI | Financial Profit Optimization' },
    {
      name: 'twitter:description',
      content:
        'Financial systems for SMBs. Fix profit leaks, improve cash flow. Financial health review.',
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
          'MUTXRI helps SMBs fix profit leaks, improve cash flow, and build financial systems that turn revenue into real profit.',
        telephone: '+155****0720',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Financial Profit Optimization Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Systems Audit' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Optimization' } },
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
