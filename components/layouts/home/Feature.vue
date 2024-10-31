<template>
  <div class="content-wrapper container relative pt-0 pb-10">
    <div class="max-md:flex-col flex">
      <!-- images -->
      <div class="flex-1 flex justify-center relative h-[720px] items-center">
        <div class="relative">
          <img
            class="w-[270px] relative z-10"
            src="/assets//images/iphone-mockup-home.png"
            alt=""
          />
          <img
            v-motion
            :initial="{
              y: 0,
            }"
            :enter="{
              y: [0, -20, 0],
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
              },
            }"
            :duration="2000"
            class="absolute top-[68%] -left-10 h-[63px] z-10 shadow-lg rounded-lg"
            src="@Assets/images/password-item.png"
            alt=""
          />
          <img
            v-motion
            :initial="{
              y: 0,
            }"
            :enter="{
              y: [0, -20, 0],
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
              },
            }"
            :delay="500"
            :duration="2000"
            class="absolute top-[46%] -right-6 h-[80px] z-10 shadow-lg rounded-lg"
            src="@Assets/images/category-item.png"
            alt=""
          />
        </div>
        <svg
          class="absolute left-0 bottom-0"
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
      <div class="flex-1 flex flex-col justify-center">
        <h3 class="text-secondary">FEATURE</h3>
        <h2 class="max-md:text-[40px] font-clash font-bold text-[50px]">1Pass features</h2>
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :duration="500"
          class="mt-8"
        >
          <div class="flex gap-2">
            <img src="/assets/icons/star-4.png" alt="" />
            <p class="font-semibold font-clash">Secure Password Vault</p>
          </div>
          <p class="text-gray-400">
            Store your passwords safely in an encrypted vault that only you can access.
          </p>
        </div>

        <div
          v-motion
          class="mt-8"
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :duration="500"
          :delay="100"
        >
          <div class="flex gap-2">
            <img src="/assets/icons/star-6.png" alt="" />
            <p class="font-semibold font-clash">Auto-fill & Password Generator</p>
          </div>
          <p class="text-gray-400">
            Easily auto-fill your login details and generate strong, unique passwords.
          </p>
        </div>

        <div
          v-motion
          class="mt-8"
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :duration="500"
          :delay="200"
        >
          <div class="flex gap-2">
            <img src="/assets/icons/square.png" alt="" />
            <p class="font-semibold font-clash">Secure Backup</p>
          </div>
          <p class="text-gray-400">
            Backup your passwords securely to the cloud with advanced encryption.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
