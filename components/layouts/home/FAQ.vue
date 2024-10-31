<template>
  <div class="content-wrapper container relative pt-20 pb-10 overflow-hidden">
    <h2 class="text-3xl font-clash font-bold mb-4">FAQ</h2>
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="mb-6 w-full border-b pb-8 border-gray-100"
    >
      <div class="flex cursor-pointer text-lg font-semibold mb-2" @click="toggleFaq(index)">
        <p :class="{ 'text-secondary': faq.isOpen }" class="flex items-center">
          {{ faq.question }}
        </p>
        <span
          :class="{ 'rotate-90': faq.isOpen, 'rotate-0': !faq.isOpen }"
          class="ml-auto block transition-transform cursor-pointer"
          >➕</span
        >
      </div>
      <p
        v-if="faq.isOpen"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        class="text-gray-600"
      >
        {{ faq.answer }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  {
    question: 'What is 1Key and why is it the best password manager?',
    answer:
      '1Key simplifies password management with strong encryption and an intuitive interface, ensuring your passwords are safe and accessible anytime, anywhere.',
    isOpen: false,
  },
  {
    question: 'What is your favorite feature in 1Key?',
    answer:
      'Our favorite feature is the seamless syncing across devices, allowing you to access your passwords anywhere.',
    isOpen: false,
  },
  {
    question: 'How do I import passwords from other services?',
    answer:
      'You can easily import passwords by following our step-by-step guide available in the app settings.',
    isOpen: false,
  },
  {
    question: 'Why is 1Key the most secure password manager?',
    answer:
      '1Key uses cutting-edge encryption to protect your data, ensuring that only you have access to your passwords.',
    isOpen: false,
  },
  {
    question: 'When was 1Key officially launched?',
    answer: '1Key was officially launched in 2024.',
    isOpen: false,
  },
  {
    question: 'How do you integrate 1Key with other apps?',
    answer:
      '1Key offers easy integration with many apps through our secure API and browser extensions.',
    isOpen: false,
  },
])

const toggleFaq = (index) => {
  faqs[index].isOpen = !faqs[index].isOpen
}
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-0 {
  transform: rotate(0deg);
}
</style>
