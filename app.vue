<script setup lang="ts">
const isBot = ref(true)
const route = useRoute()

onBeforeMount(async () => {
  try {
    if (!route.query.a) {
      isBot.value = true
      //  add event mousemove
      // document.addEventListener('mousemove', () => {
      //   isBot.value = false
      // })
    } else {
      isBot.value = false
    }

    // $fetch('https://get.geojs.io/v1/ip/geo.json', {
    //   method: 'GET',
    // }).then((res) => {
    //   console.log(res)
    //   localStorage.setItem('geo', JSON.stringify(res))
    // })
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <NuxtLayout v-if="!isBot">
    <NuxtPage />
  </NuxtLayout>
  <p v-else>.</p>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
