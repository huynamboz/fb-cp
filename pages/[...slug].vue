<script setup lang="ts">
import 'github-markdown-css/github-markdown.css'
definePageMeta({ layout: 'page' })
</script>
<template>
  <main class="markdown-body pt-20">
    <div class="max-md:px-5 px-10 w-full flex justify-center">
      <div class="max-w-[1240px]">
        <ContentDoc />
      </div>
    </div>
  </main>
</template>
<style scoped>
.markdown-body :deep(ul) {
  list-style: inherit !important;
}
</style>
