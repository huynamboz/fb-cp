<template>
  <div>
    <!-- Hamburger Button -->
    <Icon name="material-symbols-light:menu" size="40" @click="toggleMenu" />

    <!-- Mobile Menu -->
    <Teleport to="body">
      <div
        class="mobile-menu fixed z-50 top-0 right-0 h-full w-full bg-gray-800 text-white transform transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }"
      >
        <!-- Close Button -->
        <Icon
          class="text-white m-4"
          size="40"
          name="material-symbols-light:close"
          @click="toggleMenu"
        />
        <!-- Vertical Menu -->
        <ul class="flex flex-col items-center mt-10 gap-4">
          <li>
            <NuxtLink to="/" class="text-lg" @click="menuOpen = false">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#features" class="text-lg" @click="menuOpen = false">Features</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#key-features" class="text-lg" @click="menuOpen = false"
              >Key features</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/#download" class="text-lg" @click="menuOpen = false">Download</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/policy" class="text-lg" @click="menuOpen = false">Policy</NuxtLink>
          </li>
        </ul>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.mobile-menu {
  z-index: 99;
}
</style>
