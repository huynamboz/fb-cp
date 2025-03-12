<script setup lang="ts">
onBeforeMount(async () => {
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
