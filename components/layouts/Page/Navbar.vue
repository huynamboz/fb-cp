<script setup lang="ts">
const navbar = ref<HTMLElement | null>(null)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (): void => {
  if (!navbar.value) return
  const navbarOffsetBottomWithPadding = navbar.value.offsetHeight + 20
  if (!navbar.value) return
  const scrollY = window.scrollY
  if (scrollY > navbarOffsetBottomWithPadding) {
    navbar.value.classList.add(
      'bg-white/70',
      'border-b-[1px]',
      'dark:bg-slate-900/80',
      'backdrop-blur',
    )
  } else {
    navbar.value.classList.remove(
      'bg-white/70',
      'border-b-[1px]',
      'dark:bg-slate-900/80',
      'backdrop-blur',
    )
  }
}
</script>

<template>
  <header
    ref="navbar"
    class="fixed transition-all duration-300 top-0 z-[90] flex justify-between items-center w-full px-10 py-4"
  >
    <!-- logo -->
    <NuxtLink to="/" class="flex gap-2 items-center">
      <img src="/images/logo.png" class="w-20 h-20" alt="" />
    </NuxtLink>

    <!-- navigation -->
    <ul class="max-md:hidden flex gap-10">
      <li>
        <NuxtLink to="#hero" class="text-base text-gray-800 dark:text-gray-200">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#key-feature" class="text-base text-gray-800 dark:text-gray-200"
          >Key feature</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="#feature" class="text-base text-gray-800 dark:text-gray-200"
          >Feature</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="#download" class="text-base text-gray-800 dark:text-gray-200"
          >Download</NuxtLink
        >
      </li>
    </ul>

    <!-- button -->
    <NuxtLink
      to="#footer"
      class="flex justify-center items-center max-md:hidden border bg-white border-primary h-[48px] w-[185px] rounded-full text-primary hover:bg-primary hover:text-white cursor-pointer"
    >
      Contact us
    </NuxtLink>

    <!-- mobile menu -->
    <LayoutsPageNavBarMobile class="md:hidden" />
  </header>
</template>

<style scoped>
/* Add styles for hover effect */
ul li {
  position: relative;
  overflow: hidden;
}

ul li a {
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  transition: color 0.3s ease;
}

ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #000; /* Adjust the color of the underline */
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

ul li a:hover::after {
  transform: scaleX(1);
}
</style>
