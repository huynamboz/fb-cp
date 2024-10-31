<script setup lang="ts">
const items = ref([
  {
    label: 'Password Encryption',
    icon: 'lock-icon.png',
    color: '#377DFF',
  },
  {
    label: 'Multi sync',
    icon: 'device-icon.png',
    color: '#FF2D2D',
  },
  {
    label: 'Secure Storage',
    icon: 'database-icon.png',
    color: '#7CE761',
  },
  {
    label: 'Biometric Login',
    icon: 'faceid-icon.png',
    color: '#FFA800',
  },
])
</script>
<template>
  <div class="content-wrapper container relative pt-20 pb-16">
    <div class="max-[900px]:flex-col max-md:flex-col flex">
      <div class="">
        <h3 class="text-secondary">KEY FEATURES</h3>
        <h2
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="100"
          class="max-md:text-[40px] font-clash font-bold text-[50px]"
        >
          Secure and Convenient Password Management
        </h2>
        <h4
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="200"
          class="text-gray-400 mt-8 max-w-[550px]"
        >
          At 1Key, our vision is to make online security effortless. We provide a secure environment
          for users to manage their passwords without hassle, ensuring safety and simplicity.
        </h4>
        <a
          href="https://danaexperts.com/"
          target="_blank"
          class="mt-8 flex items-center justify-center gap-2 border transition-all duration-150 bg-white border-primary h-[48px] w-[185px] rounded-full text-primary hover:bg-primary hover:text-white cursor-pointer"
        >
          Explore more
          <Icon
            v-motion
            :initial="{ opacity: 0, x: 10 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
              },
            }"
            :duration="700"
            name="material-symbols-light:arrow-right-alt-rounded"
            size="24"
          />
        </a>
      </div>
      <div
        class="max-[900px]:mt-5 max-md:gap-4 max-[900px]:grid-cols-2 flex-auto grid grid-cols-[236px_236px] grid-rows-2 gap-[38px]"
      >
        <div
          v-for="(item, index) in items"
          :key="item.label"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0, scale: 1 }"
          :delay="index * 100"
          :duration="500"
          class="max-[900px]:w-full px-3 w-[236px] h-[236px] border border-gray-200 rounded-[27px] hover:bg-white hover:shadow-2xl transition-all duration-300"
        >
          <div
            :style="{ 'background-color': item.color }"
            class="w-[90px] h-[90px] rounded-full ml-[50%] -translate-x-1/2 my-8 flex justify-center items-center"
          >
            <img class="w-[36px]" :src="`/assets/icons/${item.icon}`" alt="" />
          </div>
          <p class="text-center block font-semibold">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
