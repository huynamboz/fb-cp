<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  title: '1Key - A impressive password manager app',
  meta: [{ name: 'description', content: 'An impressive password manager app' }],
})

useSeoMeta({
  charset: 'utf-8',
  author: '1Key',
  title: '1Key - A impressive password manager app',
  ogTitle: '1Key - A impressive password manager app',
  description: 'An impressive password manager app',
  ogDescription: 'An impressive password manager app',
  ogImage: '/public/images/thumbnail.png',
})

definePageMeta({ layout: 'page' })
</script>
<template>
  <div class="flex flex-col w-full items-center pb-20 z-0 bg-white">
    <section id="hero" class="w-full flex justify-center pt-20">
      <LayoutsHomeHero />
    </section>
    <section id="why-choose" class="flex w-full justify-center">
      <LayoutsHomeWhyChoose />
    </section>
    <section id="key-feature" class="flex w-full justify-center">
      <LayoutsHomeKeyFeature />
    </section>
    <section id="feature" class="flex w-full justify-center">
      <LayoutsHomeFeature />
    </section>
    <section id="faq" class="flex w-full justify-center">
      <LayoutsHomeFAQ />
    </section>
    <section id="download" class="flex w-full justify-center">
      <LayoutsHomeDownload />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
