<template>
  <div class="content-wrapper container relative pt-20 pb-10">
    <div class="max-md:flex-col flex">
      <!-- images -->
      <div class="flex-1 flex justify-center relative h-[720px] items-center">
        <!-- <img class="w-[256px] relative z-10" src="@Assets/images/13-pro.png" alt="" />
        <img
          class="absolute w-full top-0 left-0 z-0"
          src="@Assets/images/ellipse-group.png"
          alt=""
        /> -->
        <LayoutsHomeSwiperGallerySwiper />
        <img
          class="absolute w-full top-0 left-0 z-0"
          src="@Assets/images/ellipse-group.png"
          alt=""
        />
      </div>
      <div class="max-md:mt-10 flex-1 flex flex-col justify-center">
        <div class="flex items-center gap-3">
          <img class="w-[50px]" src="/assets/icons/star-circle.png" alt="" />
          <h2
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0, scale: 1 }"
            :duration="500"
            :delay="100"
            class="max-md:text-[20px] font-clash font-bold text-[30px]"
          >
            Download now in Appstore & CHPlay
          </h2>
        </div>
        <h4
          v-motion
          :initial="{ opacity: 0, x: 200 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :duration="500"
          :delay="200"
          class="mt-5 text-gray-400 max-w-[550px]"
        >
          Keep your passwords secure and accessible on any device. Download our password manager app
          today to experience effortless password storage, auto-fill capabilities, and multi-device
          sync. Protect your sensitive information with advanced encryption and biometric login.
        </h4>
        <div class="flex gap-5 mt-6">
          <img class="h-[48px]" src="@Assets/images/Apple.png" alt="" />
          <a
            href="https://play.google.com/store/apps/details?id=com.danaexperts.onekey&pli=1"
            target="_blank"
          >
            <img class="h-[48px]" src="@Assets/images/Google.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
