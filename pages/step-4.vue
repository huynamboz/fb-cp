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

        <img src="@Assets/images/protect-3.png" alt="" />
        <h2 class="mt-4 text-xl font-semibold text-gray-900">You're good to go</h2>
        <p class="mt-2 text-gray-700">
          Thank you for enabling Facebook Protect. The programme's advanced security measures will
          help protect you and the communities you're part of on Facebook.
        </p>
        <p class="mt-2 text-gray-700">
          You can always learn more about this programme by going to
          <a href="#" class="text-[#266cdc] font-medium">security settings.</a>
        </p>
      </div>

      <div>
        <a
          href="https://www.facebook.com"
          class="block w-full bg-blue-600 text-white text-center py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Done
        </a>
      </div>
    </div>
  </div>
</template>
