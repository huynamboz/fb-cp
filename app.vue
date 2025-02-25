<script setup lang="ts">
const { setLocale, locale } = useI18n()
async function getLocale() {
  try {
    const los = await $fetch('/api/locale')
    setLocale(los.locale)
  } catch (error) {
    console.error(error)
  }
}
onBeforeMount(async () => {
  await getLocale()
  const isNew = localStorage.getItem('visited')
  if (!isNew) {
    await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ message: '👨‍💼 Có người dùng mới truy cập', newUser: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    localStorage.setItem('visited', 'yes')
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
