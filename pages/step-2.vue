<template>
  <div class="max-md:min-h-lvh flex flex-col items-center justify-center h-screen bg-gray-50">
    <div
      class="max-w-md max-md:pb-1 gap-6 flex flex-col max-md:justify-between max-md:h-full p-6 bg-white shadow-lg max-md:shadow-none rounded-lg"
    >
      <div class="w-full h-full flex flex-col">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div class="rounded-full p-2">
              <img class="w-[30px]" src="@Assets/images/fb-logo.webp" alt="" />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#6B7280"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <img src="@Assets/images/protect.png" alt="" />
        <h2 class="mt-4 text-xl font-semibold text-gray-900">Welcome to Facebook Protect</h2>
        <p class="mt-2 text-gray-700">
          Your account has the potential to reach a lot of people, so we require stronger security.
          We built this security program to help defend accounts like yours.
        </p>
        <a href="#" class="text-[#266cdc] font-medium">Learn more</a>

        <div class="flex flex-col -ml-3 mt-4">
          <div class="flex">
            <div class="mt-1 flex flex-col items-center w-[40px] min-w-[40px]">
              <Icon name="material-symbols-light:check-circle" class="text-[#007ce4] text-xl" />
              <div class="w-[1px] h-[30px] bg-[#dee0e2]"></div>
            </div>
            <p>We've already turned on advanced security protections for you at login.</p>
          </div>

          <div class="flex">
            <div class="flex flex-col items-center w-[40px] min-w-[40px]">
              <div
                class="w-[26px] h-[26px] bg-[#007ce4] rounded-full border-[6px] border-[#e7f2fb]"
              ></div>
            </div>
            <p>
              Next, we’ll walk you through the program details and help you fully enable Facebook
              Protect.
            </p>
          </div>
        </div>
      </div>

      <div>
        <NuxtLink
          to="/next_one"
          class="w-full block bg-blue-600 text-white text-center py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Next
        </NuxtLink>
        <p class="text-xs text-gray-500 mt-4 font-medium">
          You must turn on Facebook Protect by <strong>24 Mar 2024</strong>.
        </p>
      </div>
    </div>
  </div>
</template>
