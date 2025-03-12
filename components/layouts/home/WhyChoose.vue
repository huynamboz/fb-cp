<template>
  <div class="content-wrapper container relative pt-20 pb-10">
    <div class="max-md:flex-col flex">
      <!-- images -->
      <div class="flex-1 flex justify-center relative h-[720px] items-center">
        <div class="relative">
          <img class="w-[256px] relative z-10" src="@Assets/images/13-pro.png" alt="" />
          <img
            v-motion
            :initial="{
              y: 0,
            }"
            :enter="{
              y: [0, -30, 0],
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
              },
            }"
            :duration="2000"
            class="absolute top-[33%] -right-10 h-[63px] z-10 shadow-lg rounded-lg"
            src="@Assets/images/password-item.png"
            alt=""
          />
        </div>
        <svg
          class="absolute left-0"
          width="48"
          height="47"
          viewBox="0 0 48 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.7093 4.81298L27.2044 21.9595L47.249 33.4755L26.1505 24.028L21.3922 46.6502L23.8575 23.6648L0.872119 26.1301L23.4943 21.3718L14.0468 0.273282L25.5628 20.3179L42.7093 4.81298Z"
            fill="black"
          />
        </svg>

        <img
          class="absolute w-full top-0 left-0 z-0"
          src="@Assets/images/ellipse-group.png"
          alt=""
        />
      </div>
      <div class="max-md:mt-10 flex-1 flex flex-col justify-center">
        <h3 class="text-secondary">WHY 1KEY</h3>
        <h2
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :duration="500"
          :delay="100"
          class="max-md:text-[40px] font-clash font-bold text-[50px]"
        >
          why choose 1Key?
        </h2>
        <h4
          v-motion
          :initial="{ opacity: 0, x: 200 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :duration="500"
          :delay="200"
          class="text-gray-400 max-w-[550px]"
        >
          At 1Key, our vision is to make online security effortless. We provide a secure environment
          for users to manage their passwords without hassle, ensuring safety and simplicity.
        </h4>
        <a
          href="#key-features"
          class="mt-8 gap-2 transition-all duration-150 bg-white rounded-full text-primary cursor-pointer"
        >
          Explore key feature
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
    </div>
  </div>
</template>
